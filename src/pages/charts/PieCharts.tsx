import { DoughnutChart, PieChart } from "../../components/Charts";
import { categories } from "../../assets/data.json";

function PieCharts() {
  return (
    <main className="chart-container">
      <h1>Pie & Doughnut Charts</h1>

      <section>
        <h2>Order Fulfillment ratio</h2>

        <div>
          <PieChart
            labels={["Processing", "Shipped", "Delivered"]}
            data={[12, 9, 13]}
            backgroundColor={[
              "hsl(110,80%,80%)",
              "hsl(110,80%,50%)",
              "hsl(110,40%,50%)",
            ]}
            offset={[0, 0, 50]}
          />
        </div>
      </section>

      <section>
        <h2>Product Category ratio</h2>

        <div>
          <DoughnutChart
            labels={categories.map((val) => val.heading)}
            data={categories.map((val) => val.value)}
            bgColor={categories.map(
              (val) => ` hsl(${val.value * 4},${val.value}%,50%)`,
            )}
            offset={[0, 0, 0, 80]}
            legends={false}
          />
        </div>
      </section>

      <section>
        <h2>Product Category ratio</h2>

        <div>
          <DoughnutChart
            labels={categories.map((val) => val.heading)}
            data={categories.map((val) => val.value)}
            bgColor={categories.map(
              (val) => ` hsl(${val.value * 4},${val.value}%,50%)`,
            )}
            offset={[0, 0, 0, 80]}
            legends={false}
          />
        </div>
      </section>

      <section>
        <h2>Stock Availablity ratio</h2>

        <div>
          <DoughnutChart
            labels={["In stock", "Out of stock"]}
            data={[40, 20]}
            bgColor={["hsl(269,80%,40%)", "rgb(53,162,255)"]}
            offset={[0, 80]}
            legends={false}
            cutout={"70%"}
          />
        </div>
      </section>

      <section>
        <h2>Revenue Distribution</h2>

        <div>
          <DoughnutChart
            labels={[
              "Marketing Cost",
              "Discount",
              "Burnt",
              "Production Cost",
              "Net Margin",
            ]}
            data={[32, 18, 5, 20, 25]}
            bgColor={[
              "hsl(110,80%,40%)",
              "hsl(19,80%,40%)",
              "hsl(69,80%,40%)",
              "hsl(300,80%,40%)",
              "rgb(53,162,255)",
            ]}
            offset={[20, 30, 20, 30, 80]}
            legends={false}
          />
        </div>
      </section>

      <section>
        <h2>User Age Group</h2>
        <div>
          <PieChart
            labels={["Teenager", "Adult", "Older"]}
            data={[30, 250, 70]}
            backgroundColor={[
              `hsl(10,${80}%,80%)`,
              `hsl(10,${80}%,50%)`,
              `hsl(10,${40}%,50%)`,
            ]}
            offset={[0, 0, 50]}
          />
        </div>
      </section>

      <section>
        <h2>Product Category ratio</h2>

        <div>
          <DoughnutChart
            labels={["Admin", "Customers"]}
            data={[40, 250]}
            bgColor={[`hsl(335,100%,38%)`, "hsl(44,98%,50%)"]}
            offset={[0, 80]}
            legends={false}
          />
        </div>
      </section>
    </main>
  );
}

export default PieCharts;
