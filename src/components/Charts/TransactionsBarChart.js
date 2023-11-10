import React from "react";
import { Bar } from "react-chartjs-2";

const TransactionsBarChart = ({ priceRange, month }) => {

  const sortedPriceRange = priceRange?.sort((a, b) => a._id - b._id);

  const priceRangeLabels = sortedPriceRange?.map((items) => items.priceRange);
  const totalNoOfItemsData = sortedPriceRange?.map((items) => items.totalNoOfItems);

  const labels = priceRangeLabels
  const data = {
    labels: labels,
    datasets: [
      {
        label: `Price Rangewise Stats (Number of Items in different ranges) - ${month}`,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)'
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)',
          'rgb(255, 205, 86)',
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)'
        ],
        borderWidth: 3,
        data: totalNoOfItemsData
      },
    ],
  };

  const options={
    plugins: {
      title: {
        display: true,
        text: `Price Rangewise Stats (Number of Items in different ranges) - ${month}`
      }
    }
  }

  return (
    <div style={{margin: '50px 90px'}}>
      <Bar data={data} options={options}/>
    </div>
  );
};

export default TransactionsBarChart;