import { create } from "zustand";
import { searchByRecQuery, searchByTextQuery } from "../api/findMusic";
import { configurePersist } from "zustand-persist";

const { persist, purge } = configurePersist({
  storage: localStorage, // use `AsyncStorage` in react native
  rootKey: "root", // optional, default value is `root`
});

const useSearchStore = create(
  persist({ key: "results" }, (set) => ({
    results: [],
    searchByRec: async (formData) => {
      const { data } = await searchByRecQuery(formData);
      set((state) => (state.results = data));
    },
    searchByText: async (text) => {
      const { data } = await searchByTextQuery(text);
      set((state) => (state.results = data));
    },
  }))
);

export default useSearchStore;
