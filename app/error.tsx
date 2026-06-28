"use client"

import { Spinner } from "@/components/ui/spinner";

export default function Error() {

  return (
    <div className="fixed inset-0 flex items-center justify-center -z-10">
      <div className="flex flex-col items-center gap-4">
      <Spinner />
        <p className="font-medium text-sm tracking-wide animate-pulse">
          Có lỗi xảy ra...
        </p>
      </div>
    </div>
      
  );
}
