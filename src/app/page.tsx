"use client";

import { Icon } from "@/components/Common/Icon";
import { H2 } from "@/components/Common/Typography";
import { FormInput } from "@/components/Form/form-input";
import { FormSelect } from "@/components/Form/form-select";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import MultipleSelector from "@/components/ui/multi-select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
interface DummyDataProps {
  options: { value: string; label: string }[];
  multipleOptions: { label: string; value: string; disable: boolean }[];
  checkboxItems: { id: string; label: string }[];
}

const multipleOptionsSchema = z.object({
  label: z.string(),
  value: z.string(),
  disable: z.boolean().optional(),
});

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  options: z
    .string({
      required_error: "Please select an email to display.",
    })
    .email(),
  multipleOptions: z.array(multipleOptionsSchema).min(1),
  checkboxItems: z
    .array(z.string())
    .refine((value) => value.some((item) => item), {
      message: "You have to select at least one item.",
    }),
  type: z.enum(["all", "mentions", "none"], {
    required_error: "You need to select a notification type.",
  }),
});

export default function Home() {
  const [dummyData, setDummyData] = useState<DummyDataProps>({
    options: [],
    multipleOptions: [],
    checkboxItems: [],
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      options: "",
      multipleOptions: [],
      checkboxItems: [],
      type: "all",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  useEffect(() => {
    fetch("api/dummy")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data);
        setDummyData(data.data);
      })
      .catch((error) => {
        console.error("Failed to fetch dummy data:", error);
      });
  }, []);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <H2>Buttons</H2>
        <div className="flex gap-4 items-end">
          <Button variant="gradient" size="xl">
            <Icon iconType="setting" size="m" fill="white" />
            Xl / CTA / Icon + Text
            <Icon iconType="setting" size="m" fill="white" />
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
        <H2>Form</H2>
        <Form {...form}>
          <form
            onChange={form.handleSubmit(onSubmit)}
            className="flex gap-4 flex-wrap flex-col"
          >
            <FormInput
              label="Input"
              form={form}
              name="username"
              type="text"
              leftIcon="search"
              actionButton={{
                icon: "search",
                type: "submit",
                // onClick: () => handleSearch()
              }}
              className="w-1/4"
            />
            <FormSelect
              label="options"
              form={form}
              name="options"
              options={dummyData?.options || []}
              placeholder="select an email"
              className="w-1/4"
            />
            <FormField
              control={form.control}
              name="multipleOptions"
              render={({ field, fieldState: { error } }) => (
                <FormItem>
                  <FormLabel>multiple select</FormLabel>
                  <FormControl>
                    <MultipleSelector
                      {...field}
                      options={dummyData?.multipleOptions || []}
                      placeholder="Select options you like..."
                      emptyIndicator={
                        <p className="text-center text-lg leading-10 text-gray-600 dark:text-gray-400">
                          no results found.
                        </p>
                      }
                      className="w-1/2"
                      error={!!error}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="checkboxItems"
              render={({ field, fieldState: { error } }) => (
                <FormItem>
                  <FormLabel>Checkbox</FormLabel>
                  <div className="flex flex-col">
                    {(dummyData?.checkboxItems || []).map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center space-x-1.5"
                      >
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(item.id)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...field.value, item.id])
                                : field.onChange(
                                    field.value?.filter(
                                      (value) => value !== item.id
                                    )
                                  );
                            }}
                            error={!!error}
                          />
                        </FormControl>
                        <FormLabel className="text-sm text-black-700">
                          {item.label}
                        </FormLabel>
                      </div>
                    ))}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Radio</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <RadioGroupItem value="all">All</RadioGroupItem>
                      <RadioGroupItem value="mentions">Mentions</RadioGroupItem>
                      <RadioGroupItem value="none">None</RadioGroupItem>
                    </RadioGroup>
                  </FormControl>
                </FormItem>
              )}
            />
          </form>
        </Form>
      </div>
    </div>
  );
}
