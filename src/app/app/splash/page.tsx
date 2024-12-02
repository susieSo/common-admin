"use client";
import { ContentLayout } from "@/components/ContentLayout";
import { CustomIcon } from "@/components/CustomIcon";
import { SearchBar } from "@/components/SearchBar";
import { H1 } from "@/components/Typography";
import { Button } from "@/components/ui/button";

export default function SplashScreen() {
  return (
    <ContentLayout>
      <div className="py-8 flex justify-between items-center">
        <H1>계정 관리</H1>
        <Button size="lg" variant="gradient">
          신규등록 <CustomIcon iconType="plus" size="sm" fill="white" />
        </Button>
      </div>
      <div className="mb-4">
        <SearchBar />
      </div>
      <div className="mb-4"></div>
    </ContentLayout>
  );
}
