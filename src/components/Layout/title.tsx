import { useMenuLabel } from "@/hooks/use-menuLabel";
import { H1 } from "../Common/Typography";

type TitleProps = {
  pathname: string;
};

export function Title({ pathname }: TitleProps) {
  const menuLabel = useMenuLabel(pathname);

  return <H1>{menuLabel.currentLabel}</H1>;
}
