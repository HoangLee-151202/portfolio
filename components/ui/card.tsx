import * as React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const Card = motion.create(
  ({ className, ...props }: React.ComponentProps<"div">) => {
    return (
      <div
        data-slot="card"
        ref={props.ref}
        className={cn(
          "bg-card text-card-foreground flex flex-col gap-4 rounded-xl shadow-sm",
          // "rounded-lg px-6 py-8 border-0 max-h-container",
          "rounded-lg px-6 py-8 border-0",
          className
        )}
        {...props}
      />
    );
  }
);

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className
      )}
      {...props}
    />
  );
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <h4
      data-slot="card-title"
      className={cn("leading-none font-semibold", className)}
      {...props}
    />
  );
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  );
}

const CardAction = motion.create(({ className, ...props }: React.ComponentProps<"div">) => {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props}
    />
  );
})

const CardContent = motion.create(
  ({ className, ...props }: React.ComponentProps<"div">) => {
    return (
      <div
        data-slot="card-content"
        ref={props.ref}
        className={cn(
          // "overflow-y-auto overflow-x-hidden pr-3 scrollbar",
          className
        )}
        {...props}
      />
    );
  }
);

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center [.border-t]:pt-6", className)}
      {...props}
    />
  );
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
};
