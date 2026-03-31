import { createConfig, http } from "wagmi";
import { hardhat } from "wagmi/chains";
import { injected } from "wagmi/connectors";
import { NETWORK_CONFIG } from "@/shared/config/contract";

export const wagmiConfig = createConfig({
  chains: [hardhat],
  connectors: [injected()],
  transports: {
    [hardhat.id]: http(NETWORK_CONFIG.RPC_URL),
  },
});
