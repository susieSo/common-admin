"use client";

import { Icon } from "@/components/Common/Icon";
import { H2 } from "@/components/Common/Typography";
import { FormInput } from "@/components/Form/form-input";
import { FormSelect } from "@/components/Form/form-select";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ko } from "date-fns/locale";
import { Stepper } from "@/components/ui/stepper";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface DummyDataProps {
  options: { value: string; label: string }[];
  multipleOptions: { label: string; value: string; disable?: boolean }[];
  checkboxItems: { id: string; label: string; disable?: boolean }[];
  radioItems: { id: string; label: string; disable?: boolean }[];
}

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  options: z
    .string({
      required_error: "Please select an email to display.",
    })
    .email(),
  multipleOptions: z
    .array(
      z.object({
        label: z.string(),
        value: z.string(),
        disable: z.boolean().optional(),
      })
    )
    .min(1),
  checkboxItems: z
    .array(z.string())
    .refine((value) => value.some((item) => item), {
      message: "You have to select at least one item.",
    }),
  radioItems: z.enum(["all", "mentions", "none"], {
    required_error: "You need to select a notification type.",
  }),
  toggleItems: z.boolean().refine((value) => value, {
    message: "You have to select at least one item.",
  }),
  datepicker: z.date({
    required_error: "A date of birth is required.",
  }),
  datepickerRange: z.object(
    {
      from: z.date(),
      to: z.date(),
    },
    {
      required_error: "A date of birth is required.",
    }
  ),
  stepper: z.number().min(1, {
    message: "Stepper must be at least 0.",
  }),
});

export default function Home() {
  const [dummyData, setDummyData] = useState<DummyDataProps>({
    options: [],
    multipleOptions: [],
    checkboxItems: [],
    radioItems: [],
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      options: "",
      multipleOptions: [],
      checkboxItems: [],
      radioItems: "all",
      toggleItems: false,
      // datepicker: new Date(),
      // datepickerRange: { from: new Date(), to: new Date() },
      datepickerRange: { from: undefined, to: undefined },
      stepper: 0,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  useEffect(() => {
    fetch("api/dummy")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.data);
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
                            disabled={item.disable}
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
              name="radioItems"
              render={({ field, fieldState: { error } }) => (
                <FormItem>
                  <FormLabel>Radio</FormLabel>
                  <div className="flex flex-col">
                    {(dummyData?.radioItems || []).map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center space-x-2"
                      >
                        <FormControl>
                          <RadioGroup onValueChange={field.onChange}>
                            <RadioGroupItem
                              value={item.label}
                              disabled={item.disable}
                              error={!!error}
                            >
                              {item.label}
                            </RadioGroupItem>
                          </RadioGroup>
                        </FormControl>
                        <FormLabel size="md">{item.label}</FormLabel>
                      </div>
                    ))}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="toggleItems"
              render={({ field, fieldState: { error } }) => {
                return (
                  <FormItem>
                    <FormLabel>Toggle Switch</FormLabel>
                    <div className="flex flex-row items-center gap-2">
                      <FormControl>
                        <Switch
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          error={!!error}
                        />
                      </FormControl>
                      <FormLabel>Marketing emails</FormLabel>
                    </div>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
            <FormField
              control={form.control}
              name="datepicker"
              render={({ field, fieldState: { error } }) => {
                return (
                  <FormItem>
                    <FormLabel>Datepicker</FormLabel>
                    <div className="flex flex-row items-center gap-2">
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant="outline"
                              className={cn(
                                "w-80 px-4 py-3 flex items-center justify-between border-primary-cyan text-black-900 data-[state=open]:border-primary-cyan",
                                !field.value &&
                                  "border-black-200 text-black-400",
                                error && "border-states-red"
                              )}
                            >
                              {field.value ? (
                                format(field.value, "yyyy.MM.dd", {
                                  locale: ko,
                                })
                              ) : (
                                <span>YYYY.MM.DD</span>
                              )}
                              <Icon iconType="calendar" size="m" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            locale={ko}
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) =>
                              date > new Date() || date < new Date("1900-01-01")
                            }
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
            <FormField
              control={form.control}
              name="datepickerRange"
              render={({ field, fieldState: { error } }) => {
                return (
                  <FormItem>
                    <FormLabel>Datepicker Range</FormLabel>
                    <div className="flex flex-row items-center gap-2">
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant="outline"
                              className={cn(
                                "w-80 px-4 py-3 flex items-center justify-between border-primary-cyan text-black-900 data-[state=open]:border-primary-cyan",
                                !field.value.from &&
                                  !field.value.to &&
                                  "border-black-200 text-black-400",
                                error && "border-states-red"
                              )}
                            >
                              {field.value.from ? (
                                field.value.to ? (
                                  <>
                                    {format(field.value.from, "y.LL.dd", {
                                      locale: ko,
                                    })}{" "}
                                    -{" "}
                                    {format(field.value.to, "y.LL.dd", {
                                      locale: ko,
                                    })}
                                  </>
                                ) : (
                                  format(field.value.from, "y.LL.dd", {
                                    locale: ko,
                                  })
                                )
                              ) : (
                                <span>YYYY.MM.DD - YYYY.MM.DD</span>
                              )}
                              <Icon iconType="calendar" size="m" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            locale={ko}
                            mode="range"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) =>
                              date > new Date() || date < new Date("1900-01-01")
                            }
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
            <FormField
              control={form.control}
              name="stepper"
              render={({ field, fieldState: { error } }) => {
                return (
                  <FormItem>
                    <FormLabel>Stepper</FormLabel>
                    <FormControl>
                      <Stepper
                        value={field.value}
                        onChange={field.onChange}
                        error={!!error}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
          </form>
        </Form>
      </div>

      <div className="flex flex-col gap-4">
        <H2>Tabs</H2>
      </div>
      <div className="flex gap-4 items-end">
        <Tabs defaultValue="tab1" size="box">
          <TabsList>
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
            <TabsTrigger value="tab2">Tab 2</TabsTrigger>
            <TabsTrigger value="tab3">Tab 3</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">Tab 1</TabsContent>
          <TabsContent value="tab2">Tab 2</TabsContent>
          <TabsContent value="tab3">Tab 3</TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
