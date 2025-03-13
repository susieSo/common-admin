"use client";

import { Icon } from "@/components/Common/Icon";
import { H2 } from "@/components/Common/Typography";
import { FormInput } from "@/components/Form/form-input";
import { FormSelect } from "@/components/Form/form-select";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import MultipleSelector, { Option } from "@/components/ui/multi-select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const OPTIONS: Option[] = [
  {
    value: "1",
    label: "Option 1",
  },
  {
    value: "2",
    label: "Option 2",
  },
  {
    value: "3",
    label: "Option 3",
    disable: true,
  },
  {
    value: "4",
    label: "Option 4",
  },
  {
    value: "5",
    label: "Option 5",
  },
  {
    value: "6",
    label: "Option 6",
  },
  {
    value: "7",
    label: "Option 7",
  },
  {
    value: "8",
    label: "Option 8",
  },
];

const optionSchema = z.object({
  label: z.string(),
  value: z.string(),
  disable: z.boolean().optional(),
});

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z
    .string({
      required_error: "Please select an email to display.",
    })
    .email(),
  options: z.array(optionSchema).min(1),
});

export default function Home() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

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
          <form onChange={form.handleSubmit(onSubmit)}>
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
              label="select"
              form={form}
              name="email"
              placeholder="select an email"
              className="w-1/4"
            />
            <FormField
              control={form.control}
              name="options"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>multiple select</FormLabel>
                  <FormControl>
                    <MultipleSelector
                      {...field}
                      defaultOptions={OPTIONS}
                      placeholder="Select options you like..."
                      emptyIndicator={
                        <p className="text-center text-lg leading-10 text-gray-600 dark:text-gray-400">
                          no results found.
                        </p>
                      }
                      className="w-1/2"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
      </div>
    </div>
  );
}
