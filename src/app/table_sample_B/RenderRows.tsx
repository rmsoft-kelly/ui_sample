import React from "react";
import { TableCell, TableHead, TableRow } from "@/components/ui/table";
import { RowType } from "./page";

const RenderRows = ({ row }: { row: RowType }) => {
  return (
    <>
      <TableRow>
        <TableHead
          className={`bg-slate-100 border`}
          rowSpan={row.children && row.children.length + 1}
          colSpan={row.model ? 2 : 1}
        >
          {row.title}
        </TableHead>
        {row.model && (
          <TableCell colSpan={row.model ? 3 : 1} className="w-full">
            {row.model}
          </TableCell>
        )}
      </TableRow>
      {row.children &&
        row.children.map((row2, index) => (
          <TableRow key={""}>
            {row2.map((col) => (
              <>
                <TableHead className="bg-slate-100 border">
                  {col.title}
                </TableHead>
                {col.model && (
                  <TableCell colSpan={row2.length > 1 ? 1 : 3}>
                    {col.model}
                  </TableCell>
                )}
              </>
            ))}
          </TableRow>
        ))}
    </>
  );
};

export default RenderRows;
