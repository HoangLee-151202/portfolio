import { MAIN_MENU_TYPE } from "@/app/config/menu";
import BottomSideBar from "./BottomSideBar";
import LogoSideBar from "./LogoSideBar";
import MenuSideBar from "./MenuSideBar";


export default function Sidebar() {

  return (
    <aside
      className="bg-background h-screen fixed px-16 py-20 w-[var(--sidebar-width)]"
      id="sidebar"
    >
      <LogoSideBar/>
      <MenuSideBar/>
      <BottomSideBar/>
    </aside>
  );
}
