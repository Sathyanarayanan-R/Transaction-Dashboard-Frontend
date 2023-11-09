import React from "react";
import { Pie } from "react-chartjs-2";

const StatisticsPieChart = ({ sales, month }) => {

  const labels = ["Total Sales Amount", "Total Sold Items Count", "Total Unsold Items Count"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: `Saleswise Statistics - ${month}`,
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)'
        ],
        hoverOffset: 4,
        data: [sales?.totalSaleAmount, sales?.totalSoldItemsCount, sales?.totalUnsoldItemsCount],
      },
    ],
  };

  const options = {
    plugins: {
      title: {
        display: true,
        text: `Saleswise Statistics - ${month}`
      }
    }
  }

  return (
    <div style={{ margin: '50px 90px' }}>
      <Pie data={data} options={options} />
    </div>
  );
};
export default StatisticsPieChart;