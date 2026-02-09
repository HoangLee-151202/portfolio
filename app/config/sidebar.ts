import { Briefcase } from "@/public/assets/icons/Briefcase";
import { Home } from "@/public/assets/icons/Home";
import { Sparkles } from "@/public/assets/icons/Sparkles";
import { User } from "@/public/assets/icons/User";

export const NAV_LINKS = [
  { id: 'home', name: "Home", href: '/', icon: Home },
  { id: 'about', name: "About", href: '/about', icon: User },
  { id: 'resume', name: "Resume", href: '/resume', icon: Briefcase },
  { id: 'skills', name: "Skills", href: '/skills', icon: Sparkles },
];