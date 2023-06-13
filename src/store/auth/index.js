import { authSlice, checkingCredentials, login, logout } from "./authSlice";
import {
  checkingAuthentication,
  startGoogleSignIn,
  startLogInWithEmailAndPassword,
  startLogout
} from "./thunk";

export {
  authSlice,
  login,
  logout,
  checkingCredentials,
  checkingAuthentication,
  startGoogleSignIn,
  startLogInWithEmailAndPassword,
  startLogout
};
