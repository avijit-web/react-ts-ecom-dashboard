import { FaRegBell } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { HiTrendingDown, HiTrendingUp } from "react-icons/hi";
import assets from "../assets/data.json";
import { BarChart, DoughnutChart } from "../components/Charts";
import { BiMaleFemale } from "react-icons/bi";
import DashboardTable from "../components/DashboardTable";

function Dashboard() {
  return (
    <main className="dashboard">
      <div className="bar">
        <BsSearch />
        <input type="text" placeholder="Search for data , users , docs," />
        <FaRegBell />
        <img src={"https://i.pravatar.cc/300"} alt="User" />
      </div>
      <section className="widgetcontainer">
        <WidgetItem
          percent={40}
          amount={true}
          value={340000}
          heading="Revenue"
          color="rgb(0,115,255)"
        />
        <WidgetItem percent={-14} value={340000} heading="Users" color="red" />
        <WidgetItem
          percent={70}
          amount={true}
          value={23000}
          heading="Transactions"
          color="rgb(255,196,0)"
        />
        <WidgetItem
          percent={30}
          value={1000}
          heading="Products"
          color="rgb(76,0,255)"
        />
      </section>

      <section className="graph-container">
        <div className="revenue-chart">
          <h2>Revenue & Transactions</h2>
          <BarChart
            data_1={[300, 144, 433, 655, 237, 755, 190]}
            data_2={[200, 444, 533, 655, 737, 855, 990]}
            title_1="Revenue"
            title_2="Transaction"
            bgColor_1="rgb(0,115,255)"
            bgColor_2="rgba(53,162,235,0.8)"
          />
        </div>
        <div className="dashboard-categories">
          <h2>Inventory</h2>
          <div>
            {assets.categories.map((i) => (
              <CategoryItem
                key={i.heading}
                heading={i.heading}
                value={i.value}
                color={`hsl(${i.value * 4},${100}%, 50%)`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="transaction-container">
        <div className="gender-chart">
          <h2>Gender Ratio</h2>

          <DoughnutChart
            labels={["Female", "Male"]}
            data={[12, 19]}
            bgColor={["hsl(340,82%,56%)", "rgba(53,162,235,0.8)"]}
            cutout={90}
          />

          <p>
            <BiMaleFemale />
          </p>
        </div>

        <DashboardTable data={assets.transaction} />
      </section>
    </main>
  );
}

interface CategoryItemProps {
  color: string;
  value: number;
  heading: string;
}

const CategoryItem = ({ color, value, heading }: CategoryItemProps) => {
  return (
    <div className="category-item">
      <h5>{heading}</h5>
      <div>
        <div
          style={{
            backgroundColor: color,
            width: `${value}%`,
          }}
        ></div>
      </div>
      <span>{value}</span>
    </div>
  );
};

interface WidgetItemProps {
  heading: string;
  value: number;
  percent: number;
  color: string;
  amount?: boolean;
}

const WidgetItem = ({
  heading,
  value,
  percent,
  color,
  amount,
}: WidgetItemProps) => {
  return (
    <article className="widget">
      <div className="widgetInfo">
        <p>{heading}</p>
        <h4>{amount ? `$${value}` : value}</h4>
        {percent > 0 ? (
          <span className="green">
            <HiTrendingUp /> +{percent}%
          </span>
        ) : (
          <span className="red">
            <HiTrendingDown /> {percent}%
          </span>
        )}
      </div>

      <div
        className="widgetCircle"
        style={{
          background: `conic-gradient(${color} ${(Math.abs(percent) / 100) * 360}deg,rgb(255,255,255) 0 )`,
        }}
      >
        <span color={color}>{percent}%</span>
      </div>
    </article>
  );
};

export default Dashboard;
