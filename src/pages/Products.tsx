import { useState, type ReactElement } from "react";
import TableHOC from "../components/TableHOC";
import type { ColumnDef } from "@tanstack/react-table";
import { Link } from "react-router";
import { FaPlay, FaPlus } from "react-icons/fa";

interface DataType {
  photo: ReactElement;
  name: string;
  price: number;
  stock: number;
  action: ReactElement;
}

const arr: DataType[] = [
  {
    photo: <img src="https://picsum.photos/id/1/80/80" alt="Product" />,
    name: "MacBook Pro M3",
    price: 232223,
    stock: 213,
    action: <Link to="/admin/product/1">Manage</Link>,
  },
  {
    photo: <img src="https://picsum.photos/id/10/80/80" alt="Product" />,
    name: "iPhone 15 Pro",
    price: 129999,
    stock: 87,
    action: <Link to="/admin/product/2">Manage</Link>,
  },
  {
    photo: <img src="https://picsum.photos/id/20/80/80" alt="Product" />,
    name: "Samsung Galaxy S24",
    price: 99999,
    stock: 154,
    action: <Link to="/admin/product/3">Manage</Link>,
  },
  {
    photo: <img src="https://picsum.photos/id/30/80/80" alt="Product" />,
    name: "Sony WH-1000XM5",
    price: 34999,
    stock: 62,
    action: <Link to="/admin/product/4">Manage</Link>,
  },
  {
    photo: <img src="https://picsum.photos/id/40/80/80" alt="Product" />,
    name: "iPad Air",
    price: 59999,
    stock: 91,
    action: <Link to="/admin/product/5">Manage</Link>,
  },
  {
    photo: <img src="https://picsum.photos/id/50/80/80" alt="Product" />,
    name: "Dell XPS 15",
    price: 189999,
    stock: 43,
    action: <Link to="/admin/product/6">Manage</Link>,
  },
  {
    photo: <img src="https://picsum.photos/id/60/80/80" alt="Product" />,
    name: "Apple Watch Ultra",
    price: 79999,
    stock: 118,
    action: <Link to="/admin/product/7">Manage</Link>,
  },
  {
    photo: <img src="https://picsum.photos/id/70/80/80" alt="Product" />,
    name: "AirPods Pro",
    price: 24999,
    stock: 276,
    action: <Link to="/admin/product/8">Manage</Link>,
  },
  {
    photo: <img src="https://picsum.photos/id/80/80/80" alt="Product" />,
    name: "Logitech MX Master 3S",
    price: 9999,
    stock: 142,
    action: <Link to="/admin/product/9">Manage</Link>,
  },
  {
    photo: <img src="https://picsum.photos/id/90/80/80" alt="Product" />,
    name: "Mechanical Keyboard",
    price: 7499,
    stock: 195,
    action: <Link to="/admin/product/10">Manage</Link>,
  },
];

const columns: ColumnDef<DataType>[] = [
  {
    header: "Photo",
    accessorKey: "photo",
    cell: (info) => info.getValue(),
  },
  {
    header: "Name",
    accessorKey: "name",
  },
  {
    header: "Price",
    accessorKey: "price",
  },
  {
    header: "Stock",
    accessorKey: "stock",
  },
  {
    header: "Action",
    accessorKey: "action",
    cell: (info) => info.getValue(),
  },
];

function Products() {
  const [data] = useState<DataType[]>(arr);

  const Table = TableHOC<DataType>(
    columns,
    data,
    "dashboard-product-box",
    "Products",
  );

  return (
    <div>
      <main>{Table()}</main>
      <Link to={"/admin/product/new"} className="create-product-btn">
        <FaPlus />
      </Link>
    </div>
  );
}

export default Products;
