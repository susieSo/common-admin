import { CustomIcon } from "@/components/Common/CustomIcon";
import { H2 } from "@/components/Common/Typography";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <H2>Buttons</H2>
        <div className="flex gap-4 items-end">
          <Button variant="gradient" size="xl">
            <CustomIcon iconType="setting" size="m" fill="white" />
            Xl / CTA / Icon + Text
            <CustomIcon iconType="setting" size="m" fill="white" />
          </Button>
          <Button variant="default" size="xl">
            Xl / Primary
          </Button>
          <Button variant="secondary" size="lg">
            Lg / secondary
          </Button>
          <Button variant="tertiary" size="md">
            Md / tertiary
          </Button>
          <Button variant="outline" size="sm">
            Sm / outline
          </Button>
          <Button variant="ghost" size="sm">
            Sm / ghost
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <H2>Input</H2>
        <div className="flex gap-4 items-center flex-wrap">
          <Input placeholder="default" />
          <Input placeholder="default with label" label="라벨" />
          <Input placeholder="default with icon" iconType="search" />
          <Input
            placeholder="default with helper text"
            message="도움말영역-기본"
          />
          <Input
            placeholder="default with label + helper text "
            message="도움말영역-기본"
            label="라벨"
          />
          <Input placeholder="error" error message="도움말영역-오류" />
          <Input placeholder="disabled" disabled message="도움말영역-기본" />
        </div>
      </div>
    </div>
  );
}
