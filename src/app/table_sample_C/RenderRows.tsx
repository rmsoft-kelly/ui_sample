"use client";
import React, { useEffect, useState } from "react";
import { TableCell, TableHead, TableRow } from "@/components/ui/table";
import { RowType } from "./page";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";
import InputForm from "./InputForm";

const RenderRows = ({ row, form }: { row: RowType; form: UseFormReturn }) => {
  const [rowCounts, setRowCounts] = useState(row.middle.length + 1);

  useEffect(() => {
    let counts = 1;

    row.middle.forEach((middle) =>
      middle.small
        ? (counts = counts + middle.small.length + 1)
        : (counts = counts + 1)
    );

    setRowCounts(counts);
  }, [row]);
  return (
    <>
      <TableRow key={row.key}>
        <TableHead rowSpan={rowCounts} className="border bg-secondary">
          {row.title}
        </TableHead>
      </TableRow>
      {row.middle.map((middle, md_idx) => {
        return (
          <>
            <TableRow key={md_idx}>
              <TableHead
                colSpan={!middle.small || !middle.small.length ? 2 : 1}
                rowSpan={middle.small ? middle.small.length + 1 : 1}
                className="border bg-secondary"
              >
                {middle.title}
              </TableHead>
              {(!middle.small || !middle.small.length) && (
                <TableCell>
                  <InputForm
                    form={form}
                    inputProps={{ placeholder: "내용을 입력해주세요." }}
                  />
                </TableCell>
              )}
            </TableRow>
            {middle.small &&
              middle.small.map((small) => (
                <TableRow key={small.key}>
                  <TableHead className="border bg-secondary">
                    {small.title}
                  </TableHead>
                  <TableCell>
                    <InputForm
                      form={form}
                      inputProps={{ placeholder: "내용을 입력해주세요." }}
                    />
                  </TableCell>
                </TableRow>
              ))}
          </>
        );
      })}
    </>
  );
};

export default RenderRows;
