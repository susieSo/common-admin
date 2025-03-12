"use client";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { FieldValues, Path, UseFormReturn } from "react-hook-form";
import { Input } from "../ui/input";
import { InputHTMLAttributes } from "react";
import { CustomIcon, IconTypes } from "../Common/CustomIcon";
import { Button } from "../ui/button";

type ActionButtonProps = {
  icon: keyof typeof IconTypes;
  onClick?: () => void;
  type?: "submit" | "reset" | "button";
  variant?: "ghost" | "default" | "secondary";
};

type FormInputProps<T extends FieldValues, U> = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "form"
> & {
  form: UseFormReturn<T, U, FieldValues | undefined>;
  name: Path<T>;
  type?: string;
  label?: string;
  placeholder?: string;
  leftIcon?: keyof typeof IconTypes;
  actionButton?: ActionButtonProps;
  size?: string;
};

export const FormInput = <T extends FieldValues, U>({
  form,
  name,
  type,
  label,
  placeholder,
  size,
  leftIcon,
  actionButton,
  className,
  ...props
}: FormInputProps<T, U>) => {
  return (
    <>
      <FormField
        control={form.control}
        name={name}
        render={({ field, fieldState: { error } }) => {
          return (
            <FormItem className={className}>
              {label && <FormLabel>{label}</FormLabel>}
              <FormControl>
                <div className="relative">
                  {leftIcon && (
                    <div className="absolute left-4 top-1/2 -translate-y-1/2">
                      <CustomIcon iconType={leftIcon} size="sm" />
                    </div>
                  )}
                  <Input
                    {...field}
                    type={type || "text"}
                    placeholder={placeholder}
                    error={!!error}
                    size={size}
                    hasIcon={!!leftIcon || !!actionButton}
                    {...props}
                  />
                  {actionButton && (
                    <div className="absolute right-1 top-1/2 -translate-y-1/2">
                      <Button
                        type={actionButton.type || "button"}
                        variant={actionButton.variant || "ghost"}
                        onClick={actionButton.onClick}
                      >
                        <CustomIcon iconType={actionButton.icon} size="sm" />
                      </Button>
                    </div>
                  )}
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          );
        }}
      />
    </>
  );
};
