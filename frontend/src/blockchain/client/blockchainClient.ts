import { createPublicClient, http } from "viem";
import { hardhat } from "viem/chains";
import { NETWORK_CONFIG } from "@/shared/config/contract";

export const publicClient = createPublicClient({
  chain: hardhat,
  transport: http(NETWORK_CONFIG.RPC_URL),
});
