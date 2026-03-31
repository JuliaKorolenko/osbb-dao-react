import { useEffect } from "react";
import { getDAOStats } from "@/blockchain/contracts/daoContract";
import { useDaoStore } from "@/store/dao/daoStore";
import { formatEther } from "viem";

export const useDAOStats = () => {
  const setStats = useDaoStore((store) => store.setStats);
  // const address = useWalletStore((state) => state.address);

  useEffect(() => {
    const fetchDAOStats = async () => {
      try {
        const stats = await getDAOStats();
        // const residentInfo = address
        //   ? await getResidentInfo(address as Address)
        //   : null;

        // console.log(">>> Resident Info:", residentInfo);

        setStats({
          balance: formatEther(stats.balance as bigint),
          residents: Number(stats.residents),
          totalArea: Number(stats.totalArea),
          proposals: Number(stats.proposals),
        });
      } catch (error) {
        console.error(">>> Error fetching DAO stats:", error);
      }
    };

    fetchDAOStats();
  }, [setStats]);
};
