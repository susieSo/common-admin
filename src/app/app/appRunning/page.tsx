import { Title } from "@/components/Layout/title";
import { Button } from "@/components/ui/button";
import { CustomIcon } from "@/components/Common/CustomIcon";

export default function LoginScreen() {
  return (
    <>
      <div className="py-8 flex justify-between items-center">
        <Title />
        <Button size="md" variant="gradient">
          신규등록 <CustomIcon iconType="plus" size="sm" fill="white" />
        </Button>
      </div>
    </>
  );
}
