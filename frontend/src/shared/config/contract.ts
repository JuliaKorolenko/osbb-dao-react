import OSBB_DAO from "@/blockchain/abi/OSBB_DAO.json";
import type { Abi } from "abitype";

export const NETWORK_CONFIG = {
  RPC_URL: import.meta.env.VITE_RPC_URL || "http://127.0.0.1:8545",
};

export const DAO_CONTRACT = {
  address: (import.meta.env.VITE_DAO_ADDRESS || "") as `0x${string}`,
  abi: OSBB_DAO.abi as Abi,
};
