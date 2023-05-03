const isLoggedInSelector = (state) => state.isLoggedIn;
const userDataSelector = (state) => state.userData;
const tokenSelector = (state) => state.token;

const signInSelector = (state) => state.signIn;
const signOutSelector = (state) => state.signOut;

export {
  isLoggedInSelector,
  userDataSelector,
  tokenSelector,
  signInSelector,
  signOutSelector,
};
