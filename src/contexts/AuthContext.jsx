import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import Loading from "../components/Loading";
import { auth } from "../firebaseConfig";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();

  const createUser = async (email, password, name, photoURL) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      if (name || photoURL) {
        await updateProfile(userCredential.user, {
          displayName: name,
          photoURL,
        });
      }

      setUser({
        ...userCredential.user,
        displayName: name || userCredential.user.displayName,
        photoURL: photoURL || userCredential.user.photoURL,
      });

      return userCredential.user;
    } catch (error) {
      console.error("Sign up error:", error.message);
      throw error;
    }
  };

  const signIn = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      setUser(userCredential.user);
      return userCredential.user;
    } catch (error) {
      console.error("Sign in error:", error.message);
      throw error;
    }
  };

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      setUser(result.user);
      return result.user;
    } catch (error) {
      console.error("Google sign in error:", error.message);
      throw error;
    }
  };

  const logOut = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Logout error:", error.message);
    }
  };

  const resetPassword = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
    } catch (error) {
      console.error("Reset password error:", error.message);
      throw error;
    }
  };

  const updateUserProfile = async (profile) => {
    if (!auth.currentUser) return;
    try {
      await updateProfile(auth.currentUser, profile);
      setUser({
        ...auth.currentUser,
        displayName: profile.displayName || auth.currentUser.displayName,
        photoURL: profile.photoURL || auth.currentUser.photoURL,
      });
    } catch (error) {
      console.error("Profile update error:", error.message);
      throw error;
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setAuthLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const authInfo = {
    user,
    authLoading,
    createUser,
    signIn,
    signInWithGoogle,
    logOut,
    resetPassword,
    updateUserProfile,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {authLoading ? <Loading /> : children}
    </AuthContext.Provider>
  );
};
