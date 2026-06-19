import type { Address } from "abitype";
import { keccak256, toBytes } from "viem";
import { publicClient } from "@/blockchain/client/blockchainClient";
import { DAO_CONTRACT } from "../config";

export const isAdmin = async (address: Address) => {
  const ADMIN_ROLE = keccak256(toBytes("ADMIN_ROLE"));

  const result = await publicClient.readContract({
    ...DAO_CONTRACT,
    functionName: "hasRole",
    args: [ADMIN_ROLE, address],
  });
  return result as boolean;
};

//=================== ??
export const getTokenAddress = async () => {
  const tokenAddress = await publicClient.readContract({
    ...DAO_CONTRACT,
    functionName: "getGovernanceToken",
  });
  return tokenAddress as Address;
};
