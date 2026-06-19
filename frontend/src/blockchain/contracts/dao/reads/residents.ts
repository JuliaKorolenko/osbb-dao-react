import type { Address } from "abitype";
import { publicClient } from "@/blockchain/client/blockchainClient";
import { DAO_CONTRACT } from "../config";
import { isAdmin } from "./governance";
import { mapResidentInfo } from "../mappers/mapResidentInfo";

type ResidentInfo = {
  votingPower: number;
  area: number;
  isActive: boolean;
  isAdmin?: boolean;
};

type ResidentsResponse = ResidentInfo[];

export const getResidentInfo = async (address: Address) => {
  const isAdminUser = await isAdmin(address);
  const residentInfo = (await publicClient.readContract({
    ...DAO_CONTRACT,
    functionName: "getResidentInfo",
    args: [address],
  })) as [bigint, bigint, boolean];

  return {
    ...mapResidentInfo(residentInfo),
    isAdmin: isAdminUser,
  } as ResidentInfo;
};

export const getResidentCount = async () => {
  const residents = await publicClient.readContract({
    ...DAO_CONTRACT,
    functionName: "getResidentCount",
  });
  return residents;
};

export const getResidentList = async (index: number) => {
  const residents = await publicClient.readContract({
    ...DAO_CONTRACT,
    functionName: "residentList",
    args: [index],
  });
  return residents;
};

export const getAllResidentsInfo = async (): Promise<ResidentsResponse> => {
  const residentCount = await getResidentCount();

  const addresses = await Promise.all(
    Array.from({ length: Number(residentCount) }, (_, i) => getResidentList(i)),
  );
  const infos = await Promise.all(
    addresses.map(async (addr) => {
      const info = await getResidentInfo(addr as Address);
      // return { address: addr as Address, ...info };
      return info;
    }),
  );
  return infos;
};
