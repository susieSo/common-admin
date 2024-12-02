import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import {
  Select,
  SelectItem,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { CustomIcon } from "../CustomIcon";

const searchFormSchema = z.object({
  searchKeyword: z.string({ required_error: "검색어 키워드를 선택해주세요" }),
  searchTerm: z
    .string()
    .min(2, { message: "검색어를 2글자 이상 입력해주세요." })
    .max(30, { message: "검색어를 30글자 이내로 입력해주세요." }),
  authorityType: z.enum(["all", "top", "general"]),
});

type SearchFormValues = z.infer<typeof searchFormSchema>;

export function SearchBar() {
  const form = useForm<SearchFormValues>({
    resolver: zodResolver(searchFormSchema),
    mode: "onChange",
  });

  function onSubmit(data: SearchFormValues) {
    console.log(data);
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
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
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
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
                  <Input placeholder="검색어를 입력해주세요." {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <div className="flex gap-1 items-center">
            <Button type="submit" variant="secondary1" size="sm">
              검색 <CustomIcon iconType="search" size="s" fill="white" />
            </Button>
            <Button variant="secondary2" size="sm">
              <CustomIcon iconType="refresh" size="s" fill="white" />
            </Button>
          </div>
        </div>
        <div className="flex gap-2 items-center h-[]">
          <div className="w-28">
            <p className="font-bold">권한</p>
          </div>
          <FormField
            control={form.control}
            name="authorityType"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <RadioGroup
                    onChange={field.onChange}
                    defaultValue={field.value}
                    className="flex gap-6"
                  >
                    <FormItem className="flex items-center space-x-1.5 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="all" />
                      </FormControl>
                      <FormLabel className="text-black-700">전체</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-1.5 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="top" />
                      </FormControl>
                      <FormLabel className="text-black-700">
                        최고관리자
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-1.5 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="general" />
                      </FormControl>
                      <FormLabel className="text-black-700">
                        일반관리자
                      </FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
              </FormItem>
            )}
          />
        </div>
      </form>
    </Form>
  );
}
