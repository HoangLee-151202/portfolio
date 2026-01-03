import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { MotionProps } from "motion/react";
import * as motion from "motion/react-client";

export interface CardListData {
  name: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

interface CardListProps extends MotionProps {
  name: String;
  data: CardListData[];
  className?: string;
  classNameIcon?: string;
  isMotion?: boolean;
}

export const CardList: React.FC<CardListProps> = ({
  name,
  data,
  className,
  classNameIcon,
  isMotion = false,
  ...props
}) => {
  const Component = isMotion ? motion.div : "div"

  return (
    <Card
      className={cn("flex-row gap-8 text-xl font-semibold", className)}
      {...props}
    >
      <p className="text-nowrap flex items-center after:content-['\00BB'] after:ml-2">
        {name}
      </p>
      {data.map((item, index) => {
        return (
          <Tooltip key={`${name}-${index}`}>
            <TooltipTrigger asChild>
              <div className="cursor-pointer">
                <Component {...(isMotion
    ? {
        initial: { opacity: 1, y: "0.5rem" },
        animate: { opacity: 1, y: 0 },
        transition: {
          duration: 0.5,
          ease: "easeOut",
          delay: index * 0.1,
        },
      }
    : {})}>
                <item.icon key={item.name} height={40} width={40} className={classNameIcon} />
                </Component>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>{item.name}</p>
            </TooltipContent>
          </Tooltip>
        );
      })}
    </Card>
  );
};
