"use client";
import React, { useEffect, useState } from "react";
import { TableCell, TableHead, TableRow } from "@/components/ui/table";
import { RowType } from "./page";
import { UseFormReturn } from "react-hook-form";
import InputForm from "./InputForm";

const RenderRows = ({ row, form }: { row: RowType; form: UseFormReturn }) => {
  const [rowCounts, setRowCounts] = useState(
    row.middle ? row.middle.length + 1 : 0
  );

  useEffect(() => {
    let counts = 1;

    row.middle &&
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
        <TableHead
          colSpan={row.model ? 3 : 1}
          rowSpan={rowCounts}
          className="border bg-secondary"
        >
          {row.title}
        </TableHead>
        {row.model && <TableCell>{row.model}</TableCell>}
      </TableRow>
      {row.middle &&
        row.middle.map((middle, md_idx) => {
          return (
            <>
              <TableRow key={md_idx}>
                <TableHead
                  colSpan={middle.model ? 2 : 1}
                  rowSpan={middle.small ? middle.small.length + 1 : 1}
                  className="border bg-secondary"
                >
                  {middle.title}
                </TableHead>
                {middle.model && <TableCell>{middle.model}</TableCell>}
              </TableRow>
              {middle.small &&
                middle.small.map((small) => (
                  <TableRow key={small.key}>
                    <TableHead className="border bg-secondary">
                      {small.title}
                    </TableHead>
                    {small.model && <TableCell>{small.model}</TableCell>}
                  </TableRow>
                ))}
            </>
          );
        })}
    </>
  );
};

export default RenderRows;
