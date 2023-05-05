import { create } from "zustand";
import { getInfoQuery } from "../api/getSongInfoApi";
import { configurePersist } from "zustand-persist";
import { immer } from "zustand/middleware/immer";
import { devtools } from "zustand/middleware";

const { persist } = configurePersist({
  storage: localStorage,
});

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

const useSongInfoStore = create(
  devtools(
    immer(
      persist({ key: "songInfo" }, (set) => {
        return {
          songInfo: null,
          isLoading: false,
          isError: null,

          getSongInfo: async (id) => {
            const getSongInfo = async () => {
              console.log("where");
              const { data } = await getInfoQuery(id);
              set((state) => {
                state.songInfo = data;
              });
            };
            queryHandler(set, getSongInfo);
          },
        };
      })
    )
  )
);

export { useSongInfoStore };
