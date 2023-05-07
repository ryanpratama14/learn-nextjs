import { toast } from "react-hot-toast";
import { create } from "zustand";

export interface State {
  show: boolean;
  count: number;
  showText: () => void;
  increment: () => void;
  decrement: () => void;
}

export const useStore = create<State>((set, get) => ({
  show: false,
  count: 0,
  showText: () => set((state) => ({ show: !state.show })),
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () =>
    set((state) => {
      if (state.count === 0) {
        toast.error("It's zero");
      }
      return { count: state.count !== 0 ? state.count - 1 : state.count };
    }),
}));
