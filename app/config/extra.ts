import { DarkMode } from "@/public/assets/icons/DarkMode";
import { Facebook } from "@/public/assets/icons/Facebook";
import { Fullscreen } from "@/public/assets/icons/Fullscreen";
import { FullscreenExit } from "@/public/assets/icons/FullscreenExit";
import { GithubIcon } from "@/public/assets/icons/GithubIcon";
import { LightMode } from "@/public/assets/icons/LightMode";
import { Linkedin } from "@/public/assets/icons/Linkedin";
import { Mail } from "@/public/assets/icons/Mail";

export const CONTACTS_EXTRA = [
  {
    name: "Facebook",
    icon: Facebook,
    href: "https://www.facebook.com/le.huy.hoang.519427/",
  },
  {
    name: "Linkedin",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/ho%C3%A0ng-l%C3%AA-92929326a/",
  },
  {
    name: "Github",
    icon: GithubIcon,
    href: "https://github.com/HoangLee-151202",
  },
  {
    name: "Gmail",
    icon: Mail,
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=hoang151202@gmail.com",
  },
];


  export type EXTRA_ACTION_TYPE = typeof EXTRA_ACTION[number]['id'];
export const EXTRA_ACTION = [
    { id: 'zoom', icon: Fullscreen, opposite: FullscreenExit },
    { id: 'theme', icon: DarkMode, opposite: LightMode },
  ];

  