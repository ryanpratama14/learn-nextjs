import { create } from "zustand";

type StateItems = {
  token: string;
  setToken: (payload: string) => void;
};

export const useStore = create<StateItems>((set, get) => ({
  token: "",
  setToken: (payload) => set(() => ({ token: payload })),
}));
