"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/Common/Icon";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // 에러 로깅
    console.error("Splash screen error:", error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] gap-4">
      <h2 className="text-2xl font-bold text-red-600">
        데이터를 불러오는데 실패했습니다
      </h2>
      <p className="text-gray-600">잠시 후 다시 시도해주세요</p>
      <Button onClick={reset} variant="outline" className="mt-4">
        <Icon iconType="refresh" size="sm" className="mr-2" />
        다시 시도
      </Button>
    </div>
  );
}
