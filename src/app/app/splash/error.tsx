"use client";

import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col gap-6 w-full h-[calc(100vh-var(--header-height))] justify-center items-center bg-white rounded-xl box-border">
      <h2 className="text-2xl font-bold">데이터를 불러오는데 실패했습니다.</h2>
      <p className="text-base text-gray-500">error: {error.message}</p>
      <Button onClick={() => reset()}>다시 시도</Button>
    </div>
  );
}
