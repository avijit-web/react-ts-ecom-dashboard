import React, { useEffect, useState } from "react";
import type { IconType } from "react-icons";
import { AiFillFileText } from "react-icons/ai";
import {
  BiBarChart,
  BiLineChart,
  BiPieChart,
  BiStopwatch,
} from "react-icons/bi";
import { FaGamepad } from "react-icons/fa";
import { HiMenuAlt4 } from "react-icons/hi";
import { IoPeople } from "react-icons/io5";
import {
  RiCoupon2Fill,
  RiDashboardFill,
  RiShoppingBagFill,
} from "react-icons/ri";
import { Link, useLocation, type Location } from "react-router";

function AdminSidebar() {
  const location = useLocation();
  const [showModal, setShowModal] = useState<boolean>(false);

  const [phoneActive, setPhoneActive] = useState<boolean>(
    window.innerWidth < 1100,
  );

  const resizeHandler = () => {
    setPhoneActive(window.innerWidth < 1100);
  };

  useEffect(() => {
    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return (
    <>
      {phoneActive && (
        <button id="hamburger" onClick={() => setShowModal(true)}>
          <HiMenuAlt4 />
        </button>
      )}
      <aside
        style={
          phoneActive
            ? {
                width: "20rem",
                height: "100vh",
                position: "fixed",
                top: 0,
                left: showModal ? 0 : "-20rem",
                transition: "all 0.5s",
              }
            : {}
        }
      >
        <h2>Logo.</h2>
        <div>
          <h5>Dashboard</h5>
          <ul>
            <Li
              url="/admin/dashboard"
              text="Dashboard"
              Icon={RiDashboardFill}
              location={location}
            />
            <Li
              url="/admin/products"
              text="Product"
              Icon={RiShoppingBagFill}
              location={location}
            />
            <Li
              url="/admin/customers"
              text="Customer"
              Icon={IoPeople}
              location={location}
            />
            <Li
              url="/admin/transactions"
              text="Transaction"
              location={location}
              Icon={AiFillFileText}
            />
          </ul>
        </div>

        <div>
          <h5>Charts</h5>
          <ul>
            <Li
              url="/admin/chart/bar"
              text="Bar Chart"
              Icon={BiBarChart}
              location={location}
            />
            <Li
              url="/admin/chart/pie"
              text="Pie Chart"
              Icon={BiPieChart}
              location={location}
            />
            <Li
              url="/admin/chart/line"
              text="Line Chart"
              Icon={BiLineChart}
              location={location}
            />
          </ul>
        </div>
        <div>
          <h5>Apps</h5>
          <ul>
            <Li
              url="/admin/apps/stopwatch"
              text="Stopwatch"
              Icon={BiStopwatch}
              location={location}
            />
            <Li
              url="/admin/apps/coupon"
              text="Coupon"
              Icon={RiCoupon2Fill}
              location={location}
            />
            <Li
              url="/admin/apps/toss"
              text="Toss"
              Icon={FaGamepad}
              location={location}
            />
          </ul>

          {phoneActive && (
            <button
              id="close-sidebar"
              onClick={() => {
                setShowModal(false);
              }}
            >
              Close
            </button>
          )}
        </div>
      </aside>
    </>
  );
}

interface LiProps {
  url: string;
  text: string;
  location: Location;
  Icon: IconType;
}

const Li = ({ url, Icon, text, location }: LiProps) => (
  <li
    style={{
      backgroundColor: location.pathname.includes(url)
        ? "rgba(0,115,255,0.1)"
        : "transparent",
    }}
  >
    <Link
      to={url}
      style={{
        color: location.pathname.includes(url) ? "rgb(0,115,225)" : "black",
      }}
    >
      <Icon />
      {text}
    </Link>
  </li>
);

export default AdminSidebar;
