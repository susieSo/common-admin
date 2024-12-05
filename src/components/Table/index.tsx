"use client";
import * as React from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CustomIcon } from "../Common/CustomIcon";

const data = [
  {
    name: "test",
    email: "test@gmail.com",
    department: "테스트부서",
    authority: "테스트권한",
    registDate: "2024.12.02",
    lastConnectTime: "2024.12.02",
    edit: "수정",
  },
  {
    name: "test",
    email: "test@gmail.com",
    department: "테스트부서",
    authority: "테스트권한",
    registDate: "2024.12.02",
    lastConnectTime: "2024.12.02",
    edit: "수정",
  },
  {
    name: "test",
    email: "test@gmail.com",
    department: "테스트부서",
    authority: "테스트권한",
    registDate: "2024.12.02",
    lastConnectTime: "2024.12.02",
    edit: "수정",
  },
];

const columnHelper = createColumnHelper();
const columns = [
  columnHelper.accessor("name", { header: "이름" }),
  columnHelper.accessor("email", { header: "ID(이메일)" }),
  columnHelper.accessor("department", { header: "부서" }),
  columnHelper.accessor("authority", { header: "권한" }),
  columnHelper.accessor("registDate", { header: "등록일" }),
  columnHelper.accessor("lastConnectTime", { header: "최근 접속기간" }),
  columnHelper.accessor("edit", { header: "수정" }),
];

export function DataTable() {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="mb-4 bg-white rounded-xl">
      <div className="py-5 pl-6 pr-10 flex items-center justify-between">
        <div>
          <p className="text-lg font-semibold">
            검색결과 <span className="text-states-red">{data.length}</span>건
          </p>
        </div>
        <div className="flex items-center">
          <Button variant="secondary1" size="sm" className="mr-4">
            계정권한관리 <CustomIcon iconType="setting" size="s" fill="white" />
          </Button>
          <Select>
            <SelectTrigger className="w-40 h-10 mr-1">
              <SelectValue placeholder="최근등록일순" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="descending">등록일내림차순</SelectItem>
              <SelectItem value="Ascending">등록일오름차순</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-40 h-10">
              <SelectValue placeholder="10개" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="10">10개</SelectItem>
              <SelectItem value="20">20개</SelectItem>
              <SelectItem value="50">50개</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div>
        <Table>
          <TableHeader className="text-black-600 bg-black-100">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id} className="text-center">
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className="text-center">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-full text-center"
                >
                  검색 결과가 없습니다.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
