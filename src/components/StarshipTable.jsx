import { useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  flexRender,
} from "@tanstack/react-table";
import CompareModal from "./CompareModal";

const StarshipTable = ({ data }) => {
  const [selectedRows, setSelectedRows] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleSelection = (row) => {
    setSelectedRows((prev) => {
      const newSelection = { ...prev };

      if (newSelection[row.original.name]) {
        delete newSelection[row.original.name];
      } else if (Object.keys(newSelection).length < 3) {
        newSelection[row.original.name] = row.original;
      }
      return newSelection;
    });
  };

  const columns = [
    {
      accessorKey: "checkbox",
      header: "Select",
      cell: ({ row }) => {
        const isSelected = selectedRows[row.original.name];
        return (
          <div
            className={`border-2 w-[20px] h-[20px] rounded-sm flex items-center justify-center ${
              isSelected ? "bg-transparent text-white" : "bg-transparent"
            }`}
            onMouseEnter={(e) => (e.target.style.cursor = "pointer")}
            onMouseLeave={(e) => (e.target.style.cursor = "default")}
            onClick={() => {
              toggleSelection(row);
              console.log(selectedRows);
            }}
          >
            {isSelected && "✓"}
          </div>
        );
      },
    },
    { accessorKey: "name", header: "Name" },
    { accessorKey: "model", header: "Model" },
    { accessorKey: "manufacturer", header: "Manufacturer" },
    { accessorKey: "crew", header: "Crew Size" },
    { accessorKey: "hyperdrive_rating", header: "Hyperdrive Rating" },
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <>
      {isModalOpen && <CompareModal setIsModalOpen={setIsModalOpen} selectedRows={selectedRows}/>}
      <div className="h-[70%] p-4">
        {Object.keys(selectedRows).length > 0 && 
          <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setIsModalOpen(true)}
        >
          Compare
        </button>}
        <table className="min-w-full overflow-auto bg-black text-white border border-gray-700 rounded-lg">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className="border-b border-gray-600">
                {headerGroup.headers.map((header) => (
                  <th key={header.id} className="p-3 text-left">
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="border-b border-gray-700">
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="p-3 text-left">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default StarshipTable;
