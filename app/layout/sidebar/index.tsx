import LogoSideBar from "./Logo";
import NavigationSideBar from "./Navigation";



export default function Sidebar() {

  return (
    <aside id="sidebar">
      <LogoSideBar/>
      <NavigationSideBar/>
      {/* <BottomSideBar/> */}
    </aside>
  );
}
