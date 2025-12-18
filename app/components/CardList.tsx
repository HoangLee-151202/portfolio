import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { MotionProps } from "motion/react";

export interface CardListData {
  name: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

interface CardListProps extends MotionProps {
  name: String;
  data: CardListData[];
  className?: string;
}

export const CardList: React.FC<CardListProps> = ({
  name,
  data,
  className,
  ...props
}) => {
  return (
    <Card className={cn("flex-row gap-8", className)} {...props}>
      <h4 className="text-nowrap flex items-center after:content-['\00BB'] after:ml-2">{name}</h4>
      {data.map((item, index) => {
        return (
          <Tooltip key={`${name}-${index}`}>
            <TooltipTrigger asChild>
              <div className="cursor-pointer">
                <item.icon height={40} width={40} />
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
