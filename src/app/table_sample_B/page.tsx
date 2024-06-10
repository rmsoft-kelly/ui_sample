"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";
import { UseFormReturn, useForm } from "react-hook-form";
import InputField from "../../components/form-fields/input-field";
import { Form } from "@/components/ui/form";
import TextareaField from "../../components/form-fields/textarea-field";
import SelectField from "../../components/form-fields/select-field";
import RenderRows from "./RenderRows";

interface RowData {
  title: string;
  model?: React.ReactNode;
}

export interface RowType extends RowData {
  children?: RowData[][];
}

const getTableRows = (form: UseFormReturn<any>): RowType[] => {
  return [
    {
      title: "메타데이터 항목명",
      model: <Input value="대한식 소총" disabled />,
    },
    {
      title: "식별정보",
      children: [
        [{ title: "접수번호", model: <InputField _form={form} name="num" /> }],
        [{ title: "접수일시", model: <InputField _form={form} name="date" /> }],
      ],
    },
    {
      title: "신청정보",
      children: [
        [
          {
            title: "개인/단체명",
            model: <InputField _form={form} name="name" />,
          },
        ],
        [
          {
            title: "개인/단체주소",
            model: <InputField _form={form} name="address" />,
          },
          { title: "연락처", model: <InputField _form={form} name="phone" /> },
        ],
        [
          {
            title: "소유자와의 관계",
            model: <InputField _form={form} name="relation" />,
          },
          { title: "지원유형", model: <InputField _form={form} name="type" /> },
        ],
      ],
    },
    { title: "내용", model: <TextareaField _form={form} name="description" /> },
    { title: "분류", model: <SelectField _form={form} name="category" /> },
  ];
};

const TableSampleB = () => {
  const form = useForm({ defaultValues: { category: undefined } });

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
            <col className="w-[10%]" />
            <col className="w-[35%]" />
            <col className="w-[10%]" />
            <col className="w-[35%]" />
          </colgroup>
          <TableHeader>
            <TableRow className="bg-slate-300 hover:bg-slate-300">
              <TableHead colSpan={2}>등록정보</TableHead>
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
              <RenderRows key={index} row={row} />
            ))}
          </TableBody>
        </Table>
      </form>
    </Form>
  );
};

export default TableSampleB;
