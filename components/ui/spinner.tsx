import { LoaderIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { motion } from "motion/react"

const Spinner = motion.create(({ className, ...props }: React.ComponentProps<"svg">) => {
    return (
      <LoaderIcon
        role="status"
        aria-label="Loading"
        className={cn("size-4 animate-spin", className)}
        {...props}
      />
    )
  })

export { Spinner }