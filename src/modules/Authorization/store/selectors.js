const isLoggedInSelector = (state) => state.isLoggedIn;
const userDataSelector = (state) => state.userData;

const signInSelector = (state) => state.signIn;
const signOutSelector = (state) => state.signOut;

export {
  isLoggedInSelector,
  userDataSelector,
  signInSelector,
  signOutSelector,
};
