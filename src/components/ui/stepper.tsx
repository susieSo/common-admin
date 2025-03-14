import { Icon } from "../Common/Icon";
import { Button } from "./button";
import { cn } from "@/lib/utils";
interface StepperProps {
  className?: string;
  required?: boolean;
  value: number;
  onChange: (value: number) => void;
}

const Stepper = ({ className, value, onChange }: StepperProps) => (
  <div className={cn("flex items-center space-x-4", className)}>
    <Button variant="outline" onClick={() => onChange(value + 1)}>
      <Icon iconType="plus" size="s" />
    </Button>
    <span className="text-sm font-medium">{value}</span>
    <Button variant="outline" onClick={() => onChange(value - 1)}>
      <Icon iconType="minus" size="s" />
    </Button>
  </div>
);

export { Stepper };
