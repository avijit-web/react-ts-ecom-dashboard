import { Route, Router, Routes } from "react-router";
import { lazy, Suspense } from "react";
import "./styles/app.scss";
import Loader from "./components/Loader";
import DashboardLayout from "./pages/DashboardLayout";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const Products = lazy(() => import("./pages/Products"));
const Transactions = lazy(() => import("./pages/Transactions"));
const Customers = lazy(() => import("./pages/Customers"));

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route element={<DashboardLayout />}>
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/products" element={<Products />} />
            <Route path="/admin/transactions" element={<Transactions />} />
            <Route path="/admin/customers" element={<Customers />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
