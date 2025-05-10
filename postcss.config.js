const config = {
  type: "bar",
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Bar Chart",
      },
    },
  },
};

export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
  config,
};
