import { create } from "zustand";

interface DaoState {
  balance: string;
  residents: number;
  proposals: number;
  totalArea: number;
  setStats: (data: Partial<DaoState>) => void;
}

export const useDaoStore = create<DaoState>((set) => ({
  balance: "0",
  residents: 0,
  proposals: 0,
  totalArea: 0,
  setStats: (data) => set(data),
}));
