import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";

const rows = [
  [
    {
      key: "1-1",
      title: "1-1",
    },
    {
      key: "1-2",
      title: "1-2",
    },
  ],
  [
    {
      key: "2-1",
      title: "2-1",
    },
    {
      key: "2-2",
      title: "2-2",
    },
  ],
  [
    {
      key: "3-1",
      title: "3-1",
    },
    {
      key: "3-2",
      title: "3-2",
    },
  ],
];

const TableSampleB = () => {
  return (
    <div className="p-2">
      <Table className="border">
        <colgroup>
          <col className="w-[10%]" />
          <col className="w-[40%]" />
          <col className="w-[10%]" />
          <col className="w-[40%]" />
        </colgroup>
        <TableHeader>
          <TableRow className="bg-slate-300 hover:bg-slate-300">
            <TableHead colSpan={2}>등록정보</TableHead>
            <TableHead colSpan={2} className="text-right">
              <Button className="mr-1" variant={"default_outline"}>
                임시저장
              </Button>
              <Button>다음 &gt;</Button>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableHeader>
          <TableRow className="bg-slate-200 border">
            <TableCell colSpan={4}>기본정보</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              {row.map((col) => (
                <>
                  <TableHead className="bg-slate-100 border">
                    {col.title}
                  </TableHead>
                  <TableCell>
                    <Input />
                  </TableCell>
                </>
              ))}
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={4} className="text-right bg-slate-100">
              <Button className="mr-1" variant={"default_outline"}>
                임시저장
              </Button>
              <Button>다음 &gt;</Button>
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
};

export default TableSampleB;
