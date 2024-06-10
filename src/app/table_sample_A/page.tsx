"use client";
import React from "react";
import { UseFormReturn, useForm } from "react-hook-form";

import InputField from "../../components/form-fields/input-field";
import TextareaField from "../../components/form-fields/textarea-field";
import SelectField from "../../components/form-fields/select-field";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Form } from "@/components/ui/form";
import RenderRows from "./RenderRows";

export interface RowType {
  title: string;
  model?: React.ReactNode;
}

const getTableRows = (form: UseFormReturn<any>) => {
  return [
    [
      {
        title: "국문",
        model: <InputField _form={form} name="nameKo" />,
      },
    ],
    [
      {
        title: "영문",
        model: <InputField _form={form} name="nameEn" />,
      },
    ],
    [
      {
        title: "내용",
        model: <TextareaField _form={form} name="description" />,
      },
    ],
    [
      { title: "분류", model: <SelectField _form={form} name="category" /> },
      {
        title: "세분류",
        model: <InputField _form={form} name="category-sm" />,
      },
    ],
  ];
};

const TableSampleA = () => {
  const form = useForm();

  const tableData = getTableRows(form);
  return (
    <Form {...form}>
      <form
        className="p-2"
        onSubmit={form.handleSubmit((data) => console.log(data))}
        onChange={() => console.log(form.watch())}
      >
        <Table className="border">
          <colgroup>
            <col className="w-[10%]" />
            <col className="w-[40%]" />
            <col className="w-[10%]" />
            <col className="w-[40%]" />
          </colgroup>
          <TableHeader>
            <TableRow className="bg-slate-300 hover:bg-slate-300">
              <TableHead>등록정보</TableHead>
              <TableHead colSpan={3} className="text-right">
                <Button
                  type="button"
                  className="mr-1"
                  variant={"default_outline"}
                >
                  임시저장
                </Button>
                <Button>다음 &gt;</Button>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableHeader>
            <TableRow className="bg-slate-200 border">
              <TableHead colSpan={5}>기본정보</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tableData.map((row, index) => (
              <RenderRows row={row} key={index} />
            ))}
          </TableBody>
        </Table>
      </form>
    </Form>
  );
};

export default TableSampleA;
