import { Briefcase } from "@/public/assets/icons/Briefcase";
import { DarkMode } from "@/public/assets/icons/DarkMode";
import { Fullscreen } from "@/public/assets/icons/Fullscreen";
import { FullscreenExit } from "@/public/assets/icons/FullscreenExit";
import { Home } from "@/public/assets/icons/Home";
import { LightMode } from "@/public/assets/icons/LightMode";
import { Sparkles } from "@/public/assets/icons/Sparkles";
import { User } from "@/public/assets/icons/User";

export type MAIN_MENU_TYPE = typeof MAIN_MENU[number]['id'];
export const MAIN_MENU = [
    { id: 'home', name: "Home", icon: Home },
    { id: 'about', name: "About", icon: User },
    { id: 'resume', name: "Resume", icon: Briefcase },
    { id: 'skills', name: "Skills", icon: Sparkles },
  ];

  export type EXTRA_ACTION_TYPE = typeof EXTRA_ACTION[number]['id'];
export const EXTRA_ACTION = [
    { id: 'zoom', icon: Fullscreen, opposite: FullscreenExit },
    { id: 'theme', icon: DarkMode, opposite: LightMode },
  ];
