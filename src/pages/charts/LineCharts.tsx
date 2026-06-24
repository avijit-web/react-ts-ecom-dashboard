import { LineChart } from "../../components/Charts";

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

function LineCharts() {
  return (
    <main className="chart-container">
      <h1>Line Charts</h1>
      <section>
        <h2>Active Users </h2>

        <LineChart
          data={[200, 444, 444, 556, 778, 990, 1444, 256, 447, 1000, 1200]}
          label="Users"
          borderColor="rgb(53,162,255)"
          backgroundColor="rgba(53,162,155,0.5)"
          labels={months}
        />
      </section>

      <section>
        <h2>Total Products (SKU) </h2>

        <LineChart
          data={[200, 444, 444, 556, 778, 990, 1444, 256, 447, 1000, 1200]}
          label="Products"
          borderColor="hsl(269,80%,40%)"
          backgroundColor="hsla(269,80%,40%,0.4)"
          labels={months}
        />
      </section>

      <section>
        <h2>Total Revenue </h2>

        <LineChart
          data={[
            24000, 14000, 14444, 15556, 17778, 19990, 12144, 9256, 4447, 11000,
            21200,
          ]}
          label="Revenue"
          borderColor="hsl(129,80%,40%)"
          backgroundColor="hsla(129,80%,40%,0.4)"
          labels={months}
        />
      </section>

      <section>
        <h2>Discount Alloted </h2>

        <LineChart
          data={[
            9000, 12000, 12000, 9000, 2000, 4000, 12144, 2200, 4447, 11000,
            5000, 6000,
          ]}
          label="Discount"
          borderColor="hsl(29,80%,40%)"
          backgroundColor="hsla(29,80%,40%,0.4)"
          labels={months}
        />
      </section>
    </main>
  );
}

export default LineCharts;
