"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import {
  Select,
  SelectItem,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Icon } from "../Common/Icon";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

const searchFormSchema = z.object({
  searchKeyword: z.string({ required_error: "검색어 키워드를 선택해주세요" }),
  searchTerm: z
    .string()
    .min(2, { message: "검색어를 2글자 이상 입력해주세요." })
    .max(30, { message: "검색어를 30글자 이내로 입력해주세요." }),
});

type SearchFormValues = z.infer<typeof searchFormSchema>;

export function SearchBar({
  initialKeyword,
  initialTerm,
  handleSearch,
}: {
  initialKeyword: string;
  initialTerm: string;
  handleSearch: (data: { searchKeyword: string; searchTerm: string }) => void;
}) {
  const { replace } = useRouter();
  const pathname = usePathname();

  const form = useForm<SearchFormValues>({
    resolver: zodResolver(searchFormSchema),
    mode: "onChange",
    defaultValues: {
      searchKeyword: initialKeyword,
      searchTerm: initialTerm,
    },
  });

  const onSearch = (data: SearchFormValues) => {
    handleSearch({
      searchKeyword: data.searchKeyword,
      searchTerm: data.searchTerm,
    });
  };

  const onReset = () => {
    form.reset({
      searchKeyword: "name",
      searchTerm: "",
    });
    replace(`${pathname}`);
  };

  return (
    <div className="mb-4 py-6 px-10 bg-white rounded-xl">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSearch)}
          className="flex gap-4 flex-col"
        >
          <div className="flex gap-2 items-center h-[50px]">
            <div className="w-28">
              <p className="font-bold">검색어</p>
            </div>
            <FormField
              control={form.control}
              name="searchKeyword"
              render={({ field }) => (
                <FormItem>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger className="flex-1 w-40">
                        <SelectValue placeholder="이름" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="name">이름</SelectItem>
                      <SelectItem value="email">이메일</SelectItem>
                      <SelectItem value="department">부서</SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="searchTerm"
              render={({ field }) => (
                <FormItem className="flex-1 w-full">
                  <FormControl>
                    <Input
                      size="md"
                      placeholder="검색어를 입력해주세요."
                      error={!!form.formState.errors.searchTerm}
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <div className="flex gap-1 items-center">
              <Button type="submit" size="md">
                검색 <Icon iconType="search" size="s" fill="white" />
              </Button>
              <Button variant="secondary" size="md" onClick={onReset}>
                <Icon iconType="refresh" size="s" fill="white" />
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
}
