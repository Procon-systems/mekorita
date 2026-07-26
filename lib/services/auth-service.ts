import { User } from "@/types";
import { APP_CONFIG } from "@/constants/config";
import { login as mockLogin } from "@/lib/mock-api/auth";

/**
 * Service to handle authentication business logic and persistence.
 * Avoids leaking localStorage details into UI components.
 */
export const authService = {
  getUser(): User | null {
    if (typeof window === "undefined") return null;
    const stored = localStorage.getItem(APP_CONFIG.sessionKey);
    if (!stored) return null;
    try {
      return JSON.parse(stored) as User;
    } catch {
      return null;
    }
  },

  async login(email: string, password: string): Promise<User> {
    const user = await mockLogin(email, password);
    localStorage.setItem(APP_CONFIG.sessionKey, JSON.stringify(user));
    return user;
  },

  logout(): void {
    if (typeof window !== "undefined") {
      localStorage.removeItem(APP_CONFIG.sessionKey);
    }
  }
};
