import { useCallback, useEffect } from "react";
import { useConnections } from "wagmi";
import { getConnectors, connect, disconnect } from "wagmi/actions";
import { wagmiConfig } from "@/app/providers/wagmi-config";
import { useWalletStore } from "@/store/wallet/walletStore";

export const useConnectWallet = () => {
  const connections = useConnections();
  const connection = connections[0];
  const { setAddress, setIsConnected } = useWalletStore((state) => state);

  const address = connection?.accounts?.[0] ?? null;
  const isConnected = connections.length > 0;

  useEffect(() => {
    setAddress(address);
    setIsConnected(isConnected);
  }, [address, isConnected, setAddress, setIsConnected]);

  const connectWallet = useCallback(async () => {
    const connectors = getConnectors(wagmiConfig);
    const metamsk = connectors.find((connector) => connector.id === "injected");

    if (!metamsk) throw new Error("MetaMask not found");

    await connect(wagmiConfig, { connector: metamsk });
  }, []);

  const disconnectWallet = useCallback(async () => {
    await disconnect(wagmiConfig);
  }, []);

  return {
    address,
    isConnected,
    connect: connectWallet,
    disconnect: disconnectWallet,
  };
};
