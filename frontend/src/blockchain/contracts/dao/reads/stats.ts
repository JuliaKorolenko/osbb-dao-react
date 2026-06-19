import { publicClient } from "@/blockchain/client/blockchainClient";
import { DAO_CONTRACT } from "../config";
import { getResidentCount } from "./residents";

export const getDAOStats = async () => {
  const residentCount = await getResidentCount();

  const [balance, totalArea, proposals] = await Promise.all([
    publicClient.readContract({
      ...DAO_CONTRACT,
      functionName: "getBalance",
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
    residents: residentCount,
    totalArea,
    proposals,
  };
};
