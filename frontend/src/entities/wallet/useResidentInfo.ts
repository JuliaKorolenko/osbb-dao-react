import { useEffect, useState } from "react";
import { getResidentInfo } from "@/blockchain/contracts/daoContract";
import { useWalletStore } from "@/store/wallet/walletStore";
// import type { Address } from "abitype";

interface ResidentInfoType {
  votingPower: bigint;
  area: bigint;
  isActive: boolean;
}

export const useResidentInfo = () => {
  const address = useWalletStore((state) => state.address);
  const setResidentInfo = useWalletStore((state) => state.setResidentInfo);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!address) {
      setIsLoading(false);
      setResidentInfo(undefined);
      return;
    }
    const fetchResidentInfo = async () => {
      try {
        setIsLoading(true);
        const result = (await getResidentInfo(address)) as [
          bigint,
          bigint,
          boolean,
        ];

        const [apartmentArea, votingPower, isActive] = result;

        setResidentInfo({
          votingPower: Number(votingPower),
          area: Number(apartmentArea),
          isActive: isActive,
        });
      } catch (error) {
        console.error("Error fetching resident info:", error);
        setResidentInfo(undefined);
      } finally {
        setIsLoading(false);
      }
    };

    fetchResidentInfo();
  }, [address, setResidentInfo]);

  return { isLoading };
};
