import React from "react";
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  flexRender,
} from "@tanstack/react-table";

const StarshipTable = ({data}) => {
    const columns = [
      { accessorKey: "checkbox", header: "" },
      { accessorKey: "name", header: "Name" },
      { accessorKey: "model", header: "Model" },
      { accessorKey: "manufacturer", header: "Manufacturer" },
      { accessorKey: "crew-size", header: "Crew Size" },
      { accessorKey: "hyperdrive-rating", header: "Hyperdrive Rating" },
    ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <div className="p-4">
      <table className="min-w-full bg-black text-white border border-gray-700 rounded-lg">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="border-b border-gray-600">
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="p-3 text-center">
                  {flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="border-b border-gray-700">
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="p-3 text-center">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StarshipTable;
