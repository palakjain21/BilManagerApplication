import React, { useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import "./Chart.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: "Expense Tracker",
    },
  },
};

const labels = [
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

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [65, 59, 80, 81, 56, 55, 40, 50, 60, 55, 80, 65],
      borderColor: "#54B4D3",
      backgroundColor: "#54B4D3",
    },
  ],
};

export default function Charts({ bills }) {
  const [chartData, setChartData] = React.useState();
  let length = Object.keys(bills).length;
  const month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const YearmonthMap = {};
  for (let i = 0; i < length; i++) {
    const date = new Date(bills[i].date);
    const monthName = month[date.getMonth()];
    const year = date.getFullYear();
    if (!YearmonthMap[year]) {
      YearmonthMap[year] = {};
    }
    if (!YearmonthMap[year][monthName]) {
      YearmonthMap[year][monthName] = 0;
    }
    YearmonthMap[year][monthName] += bills[i].amount;
  }
  const [yearSelected, setYearSelected] = React.useState(
    Object.keys(YearmonthMap)[0]
  );
  console.log(YearmonthMap, "monthMap");
  useEffect(() => {
    for (let i = 0; i < month.length; i++) {
      if (!YearmonthMap[yearSelected][month[i]]) {
        YearmonthMap[yearSelected][month[i]] = 0;
      }
    }
    const datasetArray = [];
    for (let i = 0; i < month.length; i++) {
      datasetArray.push(YearmonthMap[yearSelected][month[i]]);
    }
    const data = {
      labels: month,
      datasets: [
        {
          label: "Budget",
          data: datasetArray,
          borderColor: "#54B4D3",
          backgroundColor: "#54B4D3",
        },
      ],
    };
    setChartData(data);
    console.log(data, "data");
  }, [yearSelected]);
  return (
    <div className="d-flex flex-column">
      {chartData ? (
        <Line options={options} data={chartData} className="customChart" />
      ) : (
        <></>
      )}
      <div className="d-flex justify-content-end w-100">
        <select
          className="form-select customChartSelectWidth"
          aria-label="Default select example"
          onChange={(e) => setYearSelected(e.target.value)}
        >
          <option value={yearSelected}>{yearSelected}</option>
          {Object.keys(YearmonthMap).map((year) => {
            if (year !== yearSelected)
              return <option value={year}>{year}</option>;
          })}
        </select>
      </div>
    </div>
  );
}
