import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register required Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const AcquisitionsChart = () => {
  const [chartData, setChartData] = useState({
    labels: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat"],
    datasets: [
      {
        label: "New Patients",
        data: [8, 6, 10, 6, 9, 8],
        backgroundColor: "rgba(102, 232, 242, 0.8)",
        borderRadius: 5,
        barThickness: 25, // Increased thickness for visibility
      },
      {
        label: "Follow-Up Patients",
        data: [6, 5, 4, 7, 6, 7],
        backgroundColor: "rgba(25, 54, 81, 0.8)",
        borderRadius: 5,
        barThickness: 25, // Increased thickness for visibility
      },
    ],
  });

  // Initial options for the chart
  const [chartOptions, setChartOptions] = useState({
    responsive: true,
    maintainAspectRatio: false, // Allows full use of the container's height
    plugins: {
      legend: {
        position: "top",
        labels: {
          font: {
            size: 12,
          },
        },
      },
      tooltip: {
        backgroundColor: "white",
        titleColor: "black",
        padding: 10,
        bodyColor: "black",
        callbacks: {
          title: (context) => `Day: ${context[0].label}`,
          label: (context) => `${context.dataset.label}: ${context.raw}`,
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        max: 15, // Increased to make bars taller
        ticks: {
          stepSize: 5,
        },
      },
    },
  });

  // Adjust chart properties based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setChartOptions((prevOptions) => ({
          ...prevOptions,
          plugins: {
            ...prevOptions.plugins,
            legend: {
              position: "bottom",
              labels: {
                font: {
                  size: 12,
                },
              },
            },
          },
          scales: {
            y: {
              max: 15, // Keep consistent for smaller screens
              ticks: {
                stepSize: 5,
              },
            },
          },
        }));

        setChartData((prevData) => ({
          ...prevData,
          datasets: prevData.datasets.map((dataset) => ({
            ...dataset,
            barThickness: 15, // Smaller thickness for small screens
          })),
        }));
      } else {
        setChartOptions((prevOptions) => ({
          ...prevOptions,
          plugins: {
            ...prevOptions.plugins,
            legend: {
              position: "top",
              labels: {
                font: {
                  size: 14,
                },
              },
            },
          },
          scales: {
            y: {
              max: 15, // Keep consistent for larger screens
              ticks: {
                stepSize: 5,
              },
            },
          },
        }));

        setChartData((prevData) => ({
          ...prevData,
          datasets: prevData.datasets.map((dataset) => ({
            ...dataset,
            barThickness: 30, // Larger thickness for larger screens
          })),
        }));
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="graph-container" style={{ height: "350px", width: "100%" }}>
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
};

export default AcquisitionsChart;
