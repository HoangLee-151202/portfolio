import { motion } from "motion/react";
import { Spinner } from "@/components/ui/spinner";

export default function Loading() {

  return (
    <div className="fixed inset-0 flex items-center justify-center -z-10">
      <div className="flex flex-col items-center gap-4">
      <Spinner />
        <p className="font-medium text-sm tracking-wide animate-pulse">
          Đang tải dữ liệu...
        </p>
      </div>
    </div>
      
  );
}
