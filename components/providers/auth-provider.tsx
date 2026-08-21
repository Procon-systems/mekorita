"use client";

import React, { createContext, useEffect, useState } from "react";
import { User } from "@/types";
import { authService } from "@/lib/services/auth-service";

interface AuthContextType {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
  updateUser: (updates: Partial<User>) => void;
  isLoading: boolean;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Rehydrate session securely
    const sessionUser = authService.getUser();
    if (sessionUser) {
      setUser(sessionUser);
    }
    setIsLoading(false);
  }, []);

  const login = (newUser: User) => {
    // Normally we'd call authService.login() here, but the login form handles it
    // and passes the user object here to update React state.
    setUser(newUser);
  };

  const logout = () => {
    authService.logout();
    setUser(null);
  };
  const updateUser = (updates: Partial<User>) => {
  if (!user) return;

  const updatedUser = {
    ...user,
    ...updates,
  };

  setUser(updatedUser);
};

  return (
    <AuthContext.Provider
  value={{
    user,
    login,
    logout,
    updateUser,
    isLoading,
  }}
>
      {children}
    </AuthContext.Provider>
  );
}
