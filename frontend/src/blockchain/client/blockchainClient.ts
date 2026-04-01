import { createPublicClient, http } from "viem";
import { hardhat } from "viem/chains";
import { ENV } from "@/shared/config/env";

export const publicClient = createPublicClient({
  chain: hardhat,
  transport: http(ENV.RPC_URL),
});
