import type { Address } from "abitype";
import { keccak256, toBytes } from "viem";
import { publicClient } from "../client/blockchainClient";
import { DAO_CONTRACT } from "@/blockchain/config/contract";

export const getDAOStats = async () => {
  const [balance, residents, totalArea, proposals] = await Promise.all([
    publicClient.readContract({
      ...DAO_CONTRACT,
      functionName: "getBalance",
    }),
    publicClient.readContract({
      ...DAO_CONTRACT,
      functionName: "getResidentCount",
    }),
    publicClient.readContract({
      ...DAO_CONTRACT,
      functionName: "totalArea",
    }),
    publicClient.readContract({
      ...DAO_CONTRACT,
      functionName: "getProposalCount",
    }),
  ]);

  return {
    balance,
    residents,
    totalArea,
    proposals,
  };
};

export const getTokenAddress = async () => {
  const tokenAddress = await publicClient.readContract({
    ...DAO_CONTRACT,
    functionName: "getGovernanceToken",
  });
  return tokenAddress as Address;
};

export const getResidentInfo = async (address: Address) => {
  const residentInfo = await publicClient.readContract({
    ...DAO_CONTRACT,
    functionName: "getResidentInfo",
    args: [address],
  });
  return residentInfo;
};

export const isAdmin = async (address: Address) => {
  const ADMIN_ROLE = keccak256(toBytes("ADMIN_ROLE"));

  const result = await publicClient.readContract({
    ...DAO_CONTRACT,
    functionName: "hasRole",
    args: [ADMIN_ROLE, address],
  });
  return result as boolean;
};
