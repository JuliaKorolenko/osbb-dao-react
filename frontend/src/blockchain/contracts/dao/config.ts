import OSBB_DAO from "@/blockchain/abi/OSBB_DAO.json";
import type { Abi } from "abitype";

export const DAO_CONTRACT = {
  address: (import.meta.env.VITE_DAO_ADDRESS || "") as `0x${string}`,
  abi: OSBB_DAO.abi as Abi,
};
