import { cva } from "class-variance-authority";
import { Icon } from "../Common/Icon";
import { Button } from "./button";
import { cn } from "@/lib/utils";
interface StepperProps {
  className?: string;
  required?: boolean;
  value: number;
  onChange: (value: number) => void;
  error?: boolean;
}

const stepperButtonVariants = cva("w-9 h-9 p-0 m-0 rounded-full");

const Stepper = ({ className, value, onChange, error }: StepperProps) => (
  <div className={cn("flex items-center gap-x-1", className)}>
    <Button
      className={stepperButtonVariants()}
      variant="outline"
      onClick={() => onChange(value - 1)}
      disabled={value === 0}
    >
      <Icon iconType="minus" size="s" />
    </Button>
    <div
      className={cn(
        "w-9 h-9",
        error ? "border-b-2 border-b-states-red" : "border-none"
      )}
    >
      <span
        className={cn("block w-full mt-2 text-center text-base font-medium")}
      >
        {value}
      </span>
    </div>
    <Button
      className={stepperButtonVariants()}
      variant="outline"
      onClick={() => onChange(value + 1)}
    >
      <Icon iconType="plus" size="s" />
    </Button>
  </div>
);

export { Stepper };
