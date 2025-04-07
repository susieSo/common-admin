import { Icon } from "../Common/Icon";
import { Button } from "../ui/button";
import { Title } from "./title";

export function ContentTitle() {
  return (
    <div className="py-8 flex justify-between items-center">
      <Title />
      <Button size="lg" variant="gradient">
        신규등록 <Icon iconType="plus" size="sm" fill="white" />
      </Button>
    </div>
  );
}
