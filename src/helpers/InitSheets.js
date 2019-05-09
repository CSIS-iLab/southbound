import Highcharts from "Highcharts";
import Theme from "./Theme";
import Charts from "./Charts";

export default function InitSheets(sheetData) {
  Highcharts.setOptions(Theme({ isDataRepo: true }));

  sheetData.forEach((data, index) => {
    const variableData = {
      data: {
        rows: data.rows
      },
      title: {
        text: data.title
      },
      subTitle: {
        text: data.subtitle
      },
      credits: {
        text: data.credits
      }
    };

    const chartOptions = {
      ...Charts[data.key],
      ...variableData
    };

    const container = document.getElementById(`${data.key}`);
    if (container) Highcharts.chart(container, chartOptions);
  });

  Highcharts.setOptions(Theme({ isDataRepo: false }));

  window.addEventListener("resize", () => {
    const highcharts = Array.from(document.querySelectorAll(".chart"));
    highcharts.forEach(hC => {
      const index = hC.dataset.highchartsChart;
      const chart = Highcharts.charts[index];

      const chartWidth = document.querySelector("main").offsetWidth;
      const metaWidth = (chartWidth / 3) * 2;

      const newSize = {
        chart: { width: chartWidth, marginLeft: chartWidth / 2 },
        title: { widthAdjust: metaWidth * -1 },
        subtitle: { widthAdjust: metaWidth * -1 }
      };

      chart.update(newSize);

      const titleHeight = chart.title.getBBox().height;
      const legendWidth = chart.legend.legendWidth;

      const newPos = {
        subtitle: { y: titleHeight },
        legend: { x: chartWidth * 0.75 - legendWidth / 2 }
      };

      chart.update(newPos);
    });
  });
}
