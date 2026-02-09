import NavLinks from "@/app/components/NavLinks";
import { NAV_LINKS } from "@/app/config/sidebar";

export default function NavigationSideBar() {

  return (
    <NavLinks links={NAV_LINKS}/>
  );
}
