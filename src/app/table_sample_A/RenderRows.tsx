import { TableCell, TableHead, TableRow } from "@/components/ui/table";
import React from "react";
import { RowType } from "./page";

const RenderRows = ({ row }: { row: RowType[] }) => {
  return (
    <TableRow>
      {row.map((col) => (
        <>
          <TableHead className={`bg-slate-100 border`}>{col.title}</TableHead>
          <TableCell colSpan={row.length === 1 ? 3 : 1}>{col.model}</TableCell>
        </>
      ))}
    </TableRow>
  );
};

export default RenderRows;
