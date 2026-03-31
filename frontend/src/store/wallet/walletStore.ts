import type { Address } from "abitype";
import { create } from "zustand";

interface ResidentInfo {
  votingPower: number;
  area: number;
  isActive: boolean;
}
interface WalletStore {
  address: Address | null;
  isConnected: boolean;
  residentInfo?: ResidentInfo;
  setAddress: (address: Address | null) => void;
  setIsConnected: (isConnected: boolean) => void;
  setResidentInfo: (info?: ResidentInfo) => void;
}

export const useWalletStore = create<WalletStore>((set) => ({
  address: null,
  isConnected: false,
  residentInfo: undefined,

  setAddress: (address) => set({ address }),
  setIsConnected: (isConnected) => set({ isConnected }),
  setResidentInfo: (info) => set({ residentInfo: info }),
}));
