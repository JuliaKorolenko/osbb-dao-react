import { useQuery } from "@tanstack/react-query";
import { getAllResidentsInfo } from "@/blockchain/contracts/dao";
export const useAllResidentsInfo = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["residents"],
    queryFn: getAllResidentsInfo,
  });

  return { data, isLoading, error };
};
