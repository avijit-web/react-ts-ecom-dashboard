import type { ColumnDef } from "@tanstack/react-table";
import { useState, type ReactElement } from "react";
import TableHOC from "../components/TableHOC";
import { MdDeleteForever } from "react-icons/md";

interface DataType {
  avatar: ReactElement;
  name: string;
  email: string;
  gender: string;
  role: string;
  action: ReactElement;
}

const columns: ColumnDef<DataType>[] = [
  {
    header: "Avatar",
    accessorKey: "avatar",
    cell: (info) => info.getValue(),
  },
  {
    header: "Name",
    accessorKey: "name",
  },
  {
    header: "Email",
    accessorKey: "email",
  },
  {
    header: "Gender",
    accessorKey: "gender",
  },
  {
    header: "Role",
    accessorKey: "role",
  },
  {
    header: "Action",
    accessorKey: "action",
    cell: (info) => info.getValue(),
  },
];

const arr: DataType[] = [
  {
    avatar: <img src="https://picsum.photos/id/1011/80/80" alt="avatar" />,
    name: "Aarav Sharma",
    email: "aarav.sharma@example.com",
    gender: "Male",
    role: "Admin",
    action: (
      <MdDeleteForever
        color="red"
        size={30}
        style={{
          cursor: "pointer",
        }}
      />
    ),
  },
  {
    avatar: <img src="https://picsum.photos/id/1027/80/80" alt="avatar" />,
    name: "Ishita Roy",
    email: "ishita.roy@example.com",
    gender: "Female",
    role: "User",
    action: (
      <MdDeleteForever
        color="red"
        size={30}
        style={{
          cursor: "pointer",
        }}
      />
    ),
  },
  {
    avatar: <img src="https://picsum.photos/id/1005/80/80" alt="avatar" />,
    name: "Rahul Das",
    email: "rahul.das@example.com",
    gender: "Male",
    role: "Editor",
    action: (
      <MdDeleteForever
        color="red"
        size={30}
        style={{
          cursor: "pointer",
        }}
      />
    ),
  },
  {
    avatar: <img src="https://picsum.photos/id/1001/80/80" alt="avatar" />,
    name: "Sneha Gupta",
    email: "sneha.gupta@example.com",
    gender: "Female",
    role: "User",
    action: (
      <MdDeleteForever
        color="red"
        size={30}
        style={{
          cursor: "pointer",
        }}
      />
    ),
  },
  {
    avatar: <img src="https://picsum.photos/id/1000/80/80" alt="avatar" />,
    name: "Kunal Verma",
    email: "kunal.verma@example.com",
    gender: "Male",
    role: "Moderator",
    action: (
      <MdDeleteForever
        color="red"
        size={30}
        style={{
          cursor: "pointer",
        }}
      />
    ),
  },
  {
    avatar: <img src="https://picsum.photos/id/1025/80/80" alt="avatar" />,
    name: "Priya Nair",
    email: "priya.nair@example.com",
    gender: "Female",
    role: "User",
    action: (
      <MdDeleteForever
        color="red"
        size={30}
        style={{
          cursor: "pointer",
        }}
      />
    ),
  },
  {
    avatar: <img src="https://picsum.photos/id/1035/80/80" alt="avatar" />,
    name: "Aditya Sen",
    email: "aditya.sen@example.com",
    gender: "Male",
    role: "Admin",
    action: (
      <MdDeleteForever
        color="red"
        size={30}
        style={{
          cursor: "pointer",
        }}
      />
    ),
  },
  {
    avatar: <img src="https://picsum.photos/id/1033/80/80" alt="avatar" />,
    name: "Meera Iyer",
    email: "meera.iyer@example.com",
    gender: "Female",
    role: "Editor",
    action: (
      <MdDeleteForever
        color="red"
        size={30}
        style={{
          cursor: "pointer",
        }}
      />
    ),
  },
  {
    avatar: <img src="https://picsum.photos/id/1020/80/80" alt="avatar" />,
    name: "Siddharth Bose",
    email: "siddharth.bose@example.com",
    gender: "Male",
    role: "User",
    action: (
      <MdDeleteForever
        color="red"
        size={30}
        style={{
          cursor: "pointer",
        }}
      />
    ),
  },
  {
    avatar: <img src="https://picsum.photos/id/1015/80/80" alt="avatar" />,
    name: "Ananya Mukherjee",
    email: "ananya.mukherjee@example.com",
    gender: "Female",
    role: "Moderator",
    action: (
      <MdDeleteForever
        color="red"
        size={30}
        style={{
          cursor: "pointer",
        }}
      />
    ),
  },
];

function Customers() {
  const [data] = useState<DataType[]>(arr);

  const Table = TableHOC<DataType>(
    columns,
    data,
    "dashboard-product-box",
    "Customers",
    true,
  );

  return (
    <div>
      <main>{Table()}</main>
    </div>
  );
}

export default Customers;
