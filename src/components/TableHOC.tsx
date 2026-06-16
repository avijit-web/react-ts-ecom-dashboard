import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  getSortedRowModel,
  type ColumnDef,
  type TableOptions,
  type SortingState,
} from "@tanstack/react-table";
import { useState } from "react";

function TableHOC<T extends object>(
  columns: ColumnDef<T>[],
  data: T[],
  containerClassname: string,
  heading: string,
) {
  return function HOC() {
    const [sorting, setSorting] = useState<SortingState>([]);

    const options: TableOptions<T> = {
      columns,
      data,
      state: {
        sorting,
      },
      onSortingChange: setSorting,
      getCoreRowModel: getCoreRowModel(),
      getSortedRowModel: getSortedRowModel(),
    };

    const table = useReactTable(options);

    return (
      <div className={containerClassname}>
        <h2 className="heading">{heading}</h2>
        <table className="table">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    onClick={header.column.getToggleSortingHandler()}
                    style={{ cursor: "pointer" }}
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    )}

                    {{
                      asc: " 🔼",
                      desc: " 🔽",
                    }[header.column.getIsSorted() as string] ?? null}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id}>
                    {cell.column.columnDef.cell
                      ? flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext(),
                        )
                      : (cell.getValue() as React.ReactNode)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
}

export default TableHOC;
