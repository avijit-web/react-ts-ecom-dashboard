import React, { useState } from "react";
import type { OrderItemType, OrderType } from "../../types";
import { Link } from "react-router";

const img =
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=804";

const orderItems: OrderItemType[] = [
  {
    name: "Puma Shoes",
    photo: img,
    _id: "asdspaasdas",
    quantity: 4,
    price: 2000,
  },
];

function TransactionManagement() {
  const [order, setOrder] = useState<OrderType>({
    name: "Avijit Chakraborty",
    address: "Durgapur",
    city: "Neyword",
    state: "West Bengal",
    pinCode: 713216,
    country: "India",
    status: "Processing",
    subtotal: 4000,
    discount: 1200,
    shippingCharges: 0,
    tax: 200,
    total: 4200 + 200 + 0 - 1200,
    orderItems,
    _id: "ADSDDASDASAS",
  });

  const updateHandler = () => {
    setOrder((prev) => ({
      ...prev,
      status: prev.status === "Processing" ? "Shipped" : "Delivered",
    }));
  };

  return (
    <main className="product-management">
      <section>
        <h2>Order Items</h2>

        {order.orderItems.map((i) => (
          <ProductCard
            name={i.name}
            _id={i._id}
            photo={i.photo}
            price={i.price}
            quantity={i.quantity}
            key={i._id}
          />
        ))}
      </section>
      <article className="shipping-info-card">
        <h1>Order Info</h1>
        <h5>User Info</h5>
        <p>Name: {order.name}</p>
        <p>
          Address :{" "}
          {`${order.address},${order.city},${order.state},${order.country} ${order.pinCode}`}
        </p>

        <h5>Amount Info</h5>
        <p>Subtotal : {order.subtotal}</p>

        <p>Shipping charges : {order.shippingCharges}</p>
        <p>Tax : {order.tax}</p>

        <p>Discount : {order.discount}</p>

        <p>Total : {order.total}</p>

        <h5>Status Info</h5>
        <p>
          Status:
          <span
            className={
              order.status === "Delivered"
                ? "purple"
                : order.status === "Shipped"
                  ? "green"
                  : "red"
            }
          >
            {order.status}
          </span>
        </p>
        <button onClick={updateHandler}>Process Status</button>
      </article>
    </main>
  );
}

const ProductCard = ({ name, photo, price, quantity, _id }: OrderItemType) => (
  <div className="transaction-product-card">
    <img src={photo} alt={name} />
    <Link to={`/product/${_id}`}>{name}</Link>
    <span>
      ${price} x ${quantity} = ${price * quantity}
    </span>
  </div>
);

export default TransactionManagement;
