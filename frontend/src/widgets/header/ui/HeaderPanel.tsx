import { ConnectedWalletButton } from "@/features/connect-wallet";
import { ResidentStatus, WalletInfo } from "@/entities/wallet";

export const HeaderPanel = () => {
  return (
    <>
      <WalletInfo />
      <ConnectedWalletButton />
      <ResidentStatus />
    </>
  );
};
