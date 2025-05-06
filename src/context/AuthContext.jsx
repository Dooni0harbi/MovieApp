import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  updateProfile,
  sendPasswordResetEmail,
} from "firebase/auth";
import { toastSuccessNotify, toastErrorNotify } from "../helper/ToastNotify";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../auth/firebase";

// Create context
export const AuthContext = createContext();

// Provider
export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Create user with email/password
  const createUser = async (email, password, firstName, lastName) => {
    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, password);
      const fullName = `${firstName} ${lastName}`;
      await updateProfile(user, { displayName: fullName });
      setCurrentUser({ ...user, displayName: fullName });
      toastSuccessNotify("Registration successful");
      navigate("/");
    } catch (err) {
      toastErrorNotify(err.message);
      throw err;
    }
  };
  

  // Email/password sign in
  const signIn = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toastSuccessNotify("Login successful");
      navigate("/");
    } catch (err) {
      toastErrorNotify(err.message);
      throw err;
    }
  };

  // Google sign in
  const signUpProvider = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      toastSuccessNotify("Logged in with Google!");
      navigate("/");
    } catch (err) {
      toastErrorNotify(err.message);
      throw err;
    }
  };

  // Logout
  const logOut = async () => {
    try {
      await signOut(auth);
      toastSuccessNotify("Logged out successfully!");
      navigate("/");
    } catch (err) {
      toastErrorNotify(err.message);
      throw err;
    }
  };

  // Forgot password
  const forgotPassword = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
      toastSuccessNotify("Password reset email sent!");
    } catch (err) {
      toastErrorNotify(err.message);
      throw err;
    }
  };

  // Auth state observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        loading,
        createUser,
        signIn,
        logOut,
        signUpProvider,
        forgotPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook for accessing auth context
export const useAuth = () => useContext(AuthContext);
export default AuthContext;
