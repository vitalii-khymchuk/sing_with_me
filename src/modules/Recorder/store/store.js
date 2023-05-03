import { create } from "zustand";
import { searchByRecQuery, searchByTextQuery } from "../api/findMusic";
import { immer } from "zustand/middleware/immer";
import { devtools } from "zustand/middleware";

const queryHandler = async (set, callback) => {
  try {
    set((state) => {
      state.isLoading = true;
      state.isError = null;
    });
    await callback();
  } catch (error) {
    set((state) => {
      state.isError = error.message;
    });
  } finally {
    set((state) => {
      state.isLoading = false;
    });
  }
};

const useSearchStore = create(
  devtools(
    immer((set) => {
      return {
        results: null,
        isLoading: false,
        isError: null,
        resetResults: () => {
          set((state) => {
            state.results = null;
          });
        },
        searchByRec: async (formData) => {
          const searchByRec = async () => {
            const { data } = await searchByRecQuery(formData);
            set((state) => {
              state.results = data;
            });
          };
          await queryHandler(set, searchByRec);
        },
        searchByText: async (text) => {
          const searchByText = async () => {
            const { data } = await searchByTextQuery(text);
            set((state) => {
              state.results = data;
            });
          };
          await queryHandler(set, searchByText);
        },
        setResultsManually: (results) => {
          set((state) => {
            state.results = results;
          });
        },
      };
    })
  )
);

export { useSearchStore };
