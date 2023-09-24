import axios from "axios";
import Chart from "react-apexcharts";
import { BASE_URL } from "../../utils/requests";
import { SaleSum } from "../../types/sale";

type CharData = {
  labels: string[];
  series: number[];
};

const DonutChart = () => {
  //Forma errada:
  let chartData: CharData = {
    labels: [],
    series: [],
  };
  
  //Forma errada:
  axios.get(`${BASE_URL}/sales/amount-by-seller`).then((response) => {
    const data = response.data as SaleSum[];
    chartData.labels = data.map((saleSum: SaleSum) => saleSum.sellerName);
    chartData.series = data.map((saleSum: SaleSum) => saleSum.sum);
    console.log(chartData);
  });

  //const mockData = {
  //  series: [477138, 499928, 444867, 220426, 473088],
  //  labels: ["Anakin", "Barry Allen", "Kal-El", "Logan", "Padmé"],
  //};

  const options = {
    legend: {
      show: true,
    },
  };

  return (
    <Chart
      options={{ ...options, labels: chartData.labels }}
      series={chartData.series}
      type="donut"
      height="240"
    />
  );
};

export default DonutChart;
