import LogoSideBar from "../sidebar/Logo";
import ContactsHeaderbar from "./Contacts";
import SettingHeaderbar from "./Setting";
import { motion } from "motion/react";


export default function Headerbar() {

  return (
    <motion.div initial={{opacity: 0, y: "5rem"}}
              animate={{opacity: 1, y: 0}}
              transition={{
                duration: 0.5,
                ease: "easeOut",
              }} className="fixed top-0 w-fill sm:hidden"
              >
<div className="relative flex justify-between z-50 mt-5 mx-6 mb-10">
<LogoSideBar/>
<div className="flex gap-2  ">
  <SettingHeaderbar/>
  <ContactsHeaderbar/>
   </div>
</div>
      <div className="absolute inset-0 backdrop-blur-[1rem] bg-black"
       style={{maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 65%, rgba(0,0,0,0) 100%)"}}>
  </div>
</motion.div>
  //   <aside id="headerbar">
  //     <LogoSideBar/>
  //     <div className="flex gap-4">
  //     <SettingHeaderbar/>
  //     <ContactHeaderbar/>
  //     </div>
  //     <div className="absolute inset-0 backdrop-blur-[1rem]"
  //      style={{maskImage: "linear-gradient(to bottom, rgba(0,0,0,0) 100%, rgba(0,0,0,1) 0%)"}}>
  // </div>
  //   </aside>
  );
}
