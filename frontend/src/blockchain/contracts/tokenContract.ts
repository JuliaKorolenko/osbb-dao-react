import { publicClient } from "../client/blockchainClient";
import OSBB_Token from "@/blockchain/abi/OSBB_Token.json";
import type { Abi, Address } from "abitype";

export const getVotingPower = async (
  tokenAddress: Address,
  account: Address,
) => {
  return await publicClient.readContract({
    address: tokenAddress,
    abi: OSBB_Token.abi as Abi,
    functionName: "balanceOf",
    args: [account],
  });
};
