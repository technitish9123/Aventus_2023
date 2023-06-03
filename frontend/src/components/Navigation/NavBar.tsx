import "./navigation.css";
import ConnectWallet from "../ConnectWallet";

export default function Navigation() {
  return (
    <nav>
      <div className="flex h-16 items-center justify-between  border-primary-salmon bg-hash-dark px-12 font-poppins">
        <span className="text-2.6xl text-primary-salmon">DBlock Vault</span>
        <ConnectWallet />
      </div>
    </nav>
  );
}
