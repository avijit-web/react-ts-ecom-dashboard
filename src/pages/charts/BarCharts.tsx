import { BarChart } from "../../components/Charts";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function BarCharts() {
  return (
    <main className="chart-container">
      <h1>Bar Charts</h1>

      <section>
        <h2>Top selling products & top customers</h2>

        <BarChart
          data_1={[300, 144, 433, 655, 237, 755, 190]}
          data_2={[200, 444, 343, 556, 778, 455, 990]}
          title_1="Products"
          title_2="Users"
          bgColor_1="hsl(260,50%,30%)"
          bgColor_2="hsl(360,90%,90%)"
        />
      </section>

      <section>
        <h2>Top Selling Products & top customers</h2>

        <BarChart
          horizontal
          data_1={[300, 144, 433, 655, 237, 755, 190, 506, 435, 641, 510, 302]}
          title_1="Products"
          title_2=""
          bgColor_1="hsl(260,50%,30%)"
          bgColor_2=""
          labels={months}
        />
      </section>
    </main>
  );
}

export default BarCharts;
