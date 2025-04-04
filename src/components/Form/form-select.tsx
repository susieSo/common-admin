import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import React, { SelectHTMLAttributes } from "react";
import { FieldValues, Path, UseFormReturn } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Option = {
  value: string;
  label: string;
};

type FormSelectProps<T extends FieldValues, U> = Omit<
  SelectHTMLAttributes<HTMLSelectElement>,
  "form"
> & {
  form: UseFormReturn<T, U, FieldValues | undefined>;
  name: Path<T>;
  label?: string;
  placeholder?: string;
  size?: string;
  options: Option[];
};

export const FormSelect = <T extends FieldValues, U>({
  form,
  name,
  label,
  placeholder,
  size,
  className,
  options,
}: FormSelectProps<T, U>) => {
  return (
    <>
      <FormField
        control={form.control}
        name={name}
        render={({ field, fieldState: { error } }) => {
          return (
            <FormItem className={className}>
              {label && <FormLabel>{label}</FormLabel>}
              <Select
                onValueChange={(value) => {
                  field.onChange(value === "__CLEAR__" ? undefined : value);
                }}
                value={field.value}
              >
                <FormControl>
                  <SelectTrigger size={size} error={!!error}>
                    <SelectValue
                      placeholder={placeholder}
                      onSelect={() => field.onChange(undefined)}
                    />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="__CLEAR__">선택 해제</SelectItem>
                  {options.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          );
        }}
      />
    </>
  );
};
