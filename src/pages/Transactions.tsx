import type { ColumnDef } from "@tanstack/react-table";
import { useState, type ReactElement } from "react";
import { Link } from "react-router";
import TableHOC from "../components/TableHOC";

interface DataType {
  user: string;
  amount: number;
  discount: number;
  quantity: number;
  status: ReactElement;
  action: ReactElement;
}

const columns: ColumnDef<DataType>[] = [
  {
    header: "User",
    accessorKey: "user",
  },
  {
    header: "Amount",
    accessorKey: "amount",
  },
  {
    header: "Discount",
    accessorKey: "discount",
  },
  {
    header: "Quantity",
    accessorKey: "quantity",
  },
  {
    header: "Status",
    accessorKey: "status",
    cell: (info) => info.getValue(),
  },
  {
    header: "Action",
    accessorKey: "action",
    cell: (info) => info.getValue(),
  },
];

interface DataType {
  user: string;
  amount: number;
  discount: number;
  quantity: number;
  status: ReactElement;
  action: ReactElement;
}

const arr: DataType[] = [
  {
    user: "Charas",
    amount: 4500,
    discount: 400,
    quantity: 3,
    status: <span style={{ color: "red" }}>Processing</span>,
    action: <Link to="/admin/transaction/tx1">Manage</Link>,
  },
  {
    user: "Amit Sharma",
    amount: 8900,
    discount: 500,
    quantity: 4,
    status: <span style={{ color: "green" }}>Completed</span>,
    action: <Link to="/admin/transaction/tx2">Manage</Link>,
  },
  {
    user: "Riya Sen",
    amount: 12000,
    discount: 1200,
    quantity: 6,
    status: <span style={{ color: "orange" }}>Pending</span>,
    action: <Link to="/admin/transaction/tx3">Manage</Link>,
  },
  {
    user: "Kunal Verma",
    amount: 5600,
    discount: 300,
    quantity: 2,
    status: <span style={{ color: "red" }}>Processing</span>,
    action: <Link to="/admin/transaction/tx4">Manage</Link>,
  },
  {
    user: "Sneha Gupta",
    amount: 15000,
    discount: 1500,
    quantity: 8,
    status: <span style={{ color: "green" }}>Completed</span>,
    action: <Link to="/admin/transaction/tx5">Manage</Link>,
  },
  {
    user: "Rahul Das",
    amount: 7300,
    discount: 700,
    quantity: 5,
    status: <span style={{ color: "orange" }}>Pending</span>,
    action: <Link to="/admin/transaction/tx6">Manage</Link>,
  },
  {
    user: "Priya Nair",
    amount: 9800,
    discount: 800,
    quantity: 3,
    status: <span style={{ color: "green" }}>Completed</span>,
    action: <Link to="/admin/transaction/tx7">Manage</Link>,
  },
  {
    user: "Aditya Sen",
    amount: 6400,
    discount: 400,
    quantity: 2,
    status: <span style={{ color: "red" }}>Processing</span>,
    action: <Link to="/admin/transaction/tx8">Manage</Link>,
  },
  {
    user: "Meera Iyer",
    amount: 11000,
    discount: 1000,
    quantity: 7,
    status: <span style={{ color: "green" }}>Completed</span>,
    action: <Link to="/admin/transaction/tx9">Manage</Link>,
  },
  {
    user: "Siddharth Bose",
    amount: 5200,
    discount: 200,
    quantity: 1,
    status: <span style={{ color: "orange" }}>Pending</span>,
    action: <Link to="/admin/transaction/tx10">Manage</Link>,
  },
  {
    user: "Ananya Mukherjee",
    amount: 13400,
    discount: 1400,
    quantity: 9,
    status: <span style={{ color: "green" }}>Completed</span>,
    action: <Link to="/admin/transaction/tx11">Manage</Link>,
  },
  {
    user: "Arjun Patel",
    amount: 7700,
    discount: 600,
    quantity: 4,
    status: <span style={{ color: "red" }}>Processing</span>,
    action: <Link to="/admin/transaction/tx12">Manage</Link>,
  },
];

const Tranactions = () => {
  const [data] = useState<DataType[]>(arr);

  const Table = TableHOC<DataType>(
    columns,
    data,
    "dashboard-product-box",
    "Transactions",
    true,
  );

  return (
    <div>
      <main>{Table()}</main>
    </div>
  );
};

export default Tranactions;
