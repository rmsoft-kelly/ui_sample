"use client";
import React from "react";
import { UseFormReturn, useForm } from "react-hook-form";

import RenderRows from "./RenderRows";
import InputField from "@/components/form-fields/input-field";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";

interface RowData {
  key: string;
  title: string;
  name?: string;
  model?: React.ReactNode;
}

export interface RowType extends RowData {
  middle?: (RowData & {
    small?: RowData[];
  })[];
}

const getTableRows = (form: UseFormReturn<any>): RowType[] => {
  return [
    {
      key: "meta",
      title: "메타데이터 항목명",
      model: (
        <InputField _form={form} name="meta" value={"대한식 소총"} disabled />
      ),
    },
    {
      key: "r1",
      title: "식별정보",
      middle: [
        {
          key: "m1",
          name: "receptNum",
          title: "접수번호",
          model: <InputField _form={form} name="receptNum" />,
        },
        {
          key: "m2",
          name: "receptDate",
          title: "접수일시",
          model: <InputField _form={form} name="receptDate" />,
        },
      ],
    },
    {
      key: "r2",
      title: "등록신청",
      middle: [
        {
          key: "m3",
          name: "registName",
          title: "개인/단체명",
          model: <InputField _form={form} name="registName" />,
        },
        {
          key: "m4",
          name: "registAdress",
          title: "개인/단체주소",
          model: <InputField _form={form} name="registAdress" />,
        },
        {
          key: "m5",
          name: "registPhone",
          title: "연락처",
          model: <InputField _form={form} name="registPhone" />,
        },
        {
          key: "m6",
          name: "registRelation",
          title: "소유자와의 관계",
          model: <InputField _form={form} name="registRelation" />,
        },
      ],
    },
    {
      key: "r3",
      title: "업무담당",
      middle: [
        {
          key: "m7",
          name: "managerName",
          title: "이름",
          model: <InputField _form={form} name="managerName" />,
        },
        {
          key: "m8",
          name: "managerOrg",
          title: "소속",
          model: <InputField _form={form} name="managerOrg" />,
        },
        {
          key: "m9",
          name: "managerPhone",
          title: "연락처",
          model: <InputField _form={form} name="managerPhone" />,
        },
      ],
    },
    {
      key: "r4",
      title: "위탁관리",
      middle: [
        {
          key: "m10",
          name: "consignName",
          title: "개인/단체명",
          model: <InputField _form={form} name="consignName" />,
        },
        {
          key: "m11",
          name: "consignAdress",
          title: "주소",
          model: <InputField _form={form} name="consignAdress" />,
        },
        {
          key: "m12",
          name: "consignPhone",
          title: "연락처",
          model: <InputField _form={form} name="consignPhone" />,
        },
      ],
    },
    {
      key: "r5",
      title: "전문가평가",
      middle: [
        {
          key: "m13",
          title: "서류심사",
          small: [
            {
              key: "s1",
              name: "docJudgeDate",
              title: "심사일시",
              model: <InputField _form={form} name="docJudgeDate" />,
            },
            {
              key: "s2",
              name: "docJudgeCommission",
              title: "심사위원",
              model: <InputField _form={form} name="docJudgeCommission" />,
            },
            {
              key: "s3",
              name: "docJudgeResult",
              title: "심사결과",
              model: <InputField _form={form} name="docJudgeResult" />,
            },
          ],
        },
        {
          key: "m14",
          title: "현장심사",
          small: [
            {
              key: "s4",
              name: "siteJudgeDate",
              title: "심사일시",
              model: <InputField _form={form} name="siteJudgeDate" />,
            },
            {
              key: "s5",
              name: "siteJudgeCommission",
              title: "심사위원",
              model: <InputField _form={form} name="siteJudgeCommission" />,
            },
            {
              key: "s6",
              name: "siteJudgeResult",
              title: "심사결과",
              model: <InputField _form={form} name="siteJudgeResult" />,
            },
          ],
        },
        {
          key: "m15",
          title: "예비심사",
          small: [
            {
              key: "s7",
              name: "spareJudgeDate",
              title: "심사일시",
              model: <InputField _form={form} name="spareJudgeDate" />,
            },
            {
              key: "s8",
              name: "spareJudgeCommission",
              title: "심사위원",
              model: <InputField _form={form} name="spareJudgeCommission" />,
            },
            {
              key: "s9",
              name: "spareJudgeResult",
              title: "심사결과",
              model: <InputField _form={form} name="spareJudgeResult" />,
            },
          ],
        },
        {
          key: "m16",
          title: "종합심사",
          small: [
            {
              key: "s10",
              name: "totalJudgeDate",
              title: "심사일시",
              model: <InputField _form={form} name="consignName" />,
            },
            {
              key: "s11",
              name: "totalJudgeCommission",
              title: "심사위원",
              model: <InputField _form={form} name="consignName" />,
            },
            {
              key: "s12",
              name: "totalJudgeResult",
              title: "심사결과",
              model: <InputField _form={form} name="consignName" />,
            },
          ],
        },
      ],
    },
  ];
};

const TableSampleC = () => {
  const form = useForm();

  const tableData = getTableRows(form);
  return (
    <Form {...form}>
      <form className="p-4">
        <Table className="border">
          <colgroup>
            <col className="w-[10%]" />
            <col className="w-[5%]" />
            <col className="w-[5%]" />
            <col className="w-full" />
          </colgroup>
          <TableHeader>
            <TableRow className="bg-slate-200 hover:bg-slate-200">
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
            <TableRow>
              <TableHead colSpan={4} className="border bg-secondary">
                기본정보
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tableData.map((row) => (
              <RenderRows key={row.key} row={row} form={form} />
            ))}
          </TableBody>
        </Table>
      </form>
    </Form>
  );
};

export default TableSampleC;
