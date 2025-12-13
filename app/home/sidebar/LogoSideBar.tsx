import { useApp } from "@/app/context/AppContext";
import Link from "next/link";

export default function LogoSideBar() {
  const { activeSection, defaultActiveSection, resetActiveSection } = useApp();
  return (
    <Link
      href=""
      onClick={() =>
        activeSection != defaultActiveSection && resetActiveSection()
      }
      className="text-2xl font-bold font-pacifico text-primary drop-shadow-[0_4px_6px_rgba(251,146,60,0.6)]"
    >
      Le Huy Hoang
    </Link>
  );
}
