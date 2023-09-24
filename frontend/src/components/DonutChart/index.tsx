import axios from "axios";
import Chart from "react-apexcharts";
import { BASE_URL } from "../../utils/requests";
import { SaleSum } from "../../types/sale";
import { useEffect, useState } from "react";

type CharData = {
  labels: string[];
  series: number[];
};

const DonutChart = () => {
  const [chartData, setChartData] = useState<CharData>({
    labels: [],
    series: [],
  });

  useEffect(() => {
    axios.get(`${BASE_URL}/sales/amount-by-seller`).then((response) => {
      const data = response.data;
      chartData.labels = data.map((saleSum: SaleSum) => saleSum.sellerName);
      chartData.series = data.map((saleSum: SaleSum) => saleSum.sum);
      setChartData({ labels: chartData.labels, series: chartData.series });
    });
  }, []);

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
