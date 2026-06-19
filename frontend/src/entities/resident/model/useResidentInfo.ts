import { useEffect } from "react";
import { getResidentInfo } from "@/blockchain/contracts/dao";
import { useWalletStore } from "@/store/wallet/walletStore";
import { useQuery } from "wagmi/query";

interface ResidentInfoType {
  votingPower: number;
  area: number;
  isActive: boolean;
  isAdmin?: boolean;
}

export const useResidentInfo = () => {
  const address = useWalletStore((state) => state.address);
  const setResidentInfo = useWalletStore((state) => state.setResidentInfo);

  const query = useQuery({
    queryKey: ["residentInfo", address],
    queryFn: () => getResidentInfo(address as `0x${string}`),
    enabled: !!address,
  });

  useEffect(() => {
    if (query.data) {
      setResidentInfo(query.data as ResidentInfoType);
    } else {
      setResidentInfo(undefined);
    }
  }, [query.data, setResidentInfo]);

  return query;
};
