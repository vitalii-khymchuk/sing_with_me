import { create } from "zustand";
import { signInQuery, signOutQuery, getCurrentQuery } from "../api/authAPI";
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

const useAuthStore = create(
  devtools(
    immer(
      persist({ key: "auth" }, (set) => {
        return {
          userData: null,
          isLoggedIn: false,
          token: null,
          isLoading: false,
          isError: null,

          signIn: async (credentials) => {
            const signIn = async () => {
              const { data, token } = await signInQuery(credentials);
              set((state) => {
                state.token = token;
                state.userData = data;
                state.isLoggedIn = true;
              });
            };
            queryHandler(set, signIn);
          },
          signOut: async () => {
            const signOut = async () => {
              signOutQuery();
              set((state) => {
                state.token = null;
                state.userData = null;
                state.isLoggedIn = false;
              });
            };
            queryHandler(set, signOut);
          },

          getCurrent: async () => {
            try {
              const { data } = await getCurrentQuery();
              set((state) => {
                state.userData = data;
              });
            } catch (error) {
              console.log(error);
              if (error.response.status === 401) {
                set((state) => {
                  state.token = null;
                  state.userData = null;
                  state.isLoggedIn = false;
                });
              } else {
                set((state) => {
                  state.isError = error.message;
                });
              }
            }
          },
        };
      })
    )
  )
);

export { useAuthStore };
