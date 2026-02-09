import { NAV_LINKS } from "@/app/config/sidebar";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LayoutGroup, motion } from "motion/react";
import { useLayoutEffect, useRef, useState } from "react";

export default function BottomNavigation() {

  const [selectedTab, setSelectedTab] = useState(NAV_LINKS[0]);
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });

  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // Cập nhật vị trí underline khi tab thay đổi
  useLayoutEffect(() => {
    
    const currentTab = tabRefs.current[NAV_LINKS.indexOf(selectedTab)];
    if (currentTab) {
      const rect = currentTab.getBoundingClientRect();
      const parentRect = currentTab.parentElement!.getBoundingClientRect();
      setUnderlineStyle({
        left: rect.left - parentRect.left,
        width: rect.width,
      });
    }
  }, [selectedTab]);

  return (
<motion.nav initial={{opacity: 0, y: "5rem"}}
              animate={{opacity: 1, y: 0}}
              transition={{
                duration: 0.5,
                ease: "easeOut",
              }} className="fixed bottom-0 w-fill"
              >
<LayoutGroup>
      <Tabs  value={selectedTab.id} className="sm:hidden my-1 mb-2 mt-10">
        <TabsList className="relative mb-2 mx-auto z-10">
          {NAV_LINKS.map((item, index) => (
            <TabsTrigger
              key={item.id}
              ref={(el: HTMLButtonElement | null) => {
                tabRefs.current[index] = el;
              }}
              initial={false}
              animate={{
                color:
                  item === selectedTab
                    ? "var(--primary)"
                    : "var(--secondary-foreground)",
              }}
              onClick={() => setSelectedTab(item)}
              value={item.id}
              className="flex items-center"
            >
                <item.icon className="!w-[0.8rem] !h-[0.8rem] mb-[0.25rem]"/>
              {item.name}
            </TabsTrigger>
          ))}
          <motion.div
            layoutId="underline"
            className={`absolute bg-background z-[-1] inset-0 my-1 rounded-sm`}
            style={{
              left: underlineStyle.left,
              width: underlineStyle.width,
            }}
          />
        </TabsList>
      </Tabs>
      </LayoutGroup>
      <div className="absolute inset-0 backdrop-blur-[1rem]"
       style={{maskImage: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 35%)"}}>
  </div>
</motion.nav>
  );
}
