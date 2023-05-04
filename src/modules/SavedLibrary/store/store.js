import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { devtools } from "zustand/middleware";
import {
  getSavedQuery,
  postSavedQuery,
  deleteSavedQuery,
} from "../api/savedAPI";

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

const useSavedLibStore = create(
  immer(
    devtools((set) => {
      return {
        savedSongs: [],
        isLoading: false,
        isError: null,

        fetchSaved: async () => {
          const fetchSaved = async () => {
            const { data } = await getSavedQuery();
            set((state) => {
              state.savedSongs = data;
            });
          };
          queryHandler(set, fetchSaved);
        },

        addToSaved: async (data) => {
          const addToSaved = async () => {
            await postSavedQuery(data);
            set((state) => {
              state.savedSongs.unshift(data);
            });
          };
          queryHandler(set, addToSaved);
        },

        removeFromSaved: async (id) => {
          const removeFromSaved = async () => {
            await deleteSavedQuery(id);
            set((state) => {
              state.savedSongs = state.savedSongs.filter(
                (item) => item.id !== id
              );
            });
          };
          queryHandler(set, removeFromSaved);
        },
      };
    })
  )
);

export { useSavedLibStore };
