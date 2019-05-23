import Highcharts from "Highcharts";
import Charts from "./Charts";

export default function InitSheets(data, location) {
  const { isDataRepo } = location;
  const variableData = {
    title: {
      text: data.title
    },
    subtitle: {
      text: isDataRepo ? data.subtitle : ""
    },
    credits: {
      text: data.credits
    }
  };

  const chartOptions = {
    ...Charts[data.key],
    ...variableData
  };

  chartOptions.data = {
    ...chartOptions.data,
    csv: data.rows.map(r => r.join(",")).join("\n"),
    complete: d => {
      if (chartOptions.chart.type === "pie") {
        d.series[0].data = d.series[0].data.map(s => {
          const name = s[0].toLowerCase().replace(/ /g, "-");

          return { name: s[0], y: s[1], className: `color-${name}` };
        });
      }
      let filtered = [];
      const excluded = [
        "Myanmar",
        "Malaysia",
        "Cambodia",
        "Philippines",
        "Thailand"
      ];
      d.series.forEach(s => {
        const name = s.name.toLowerCase().replace(/ /g, "-");

        s.className = `color-${name}`;

        // Filter out every piece of data that isn't considered a part of Other
        if (excluded.includes(s.name)) filtered.push(s);
      });

      // Set these series to invisible on the chart so they don't appear
      filtered.forEach(item => {
        item.showInLegend = false;
        item.visible = false;
      });

      // pass these items into the 'Other' series of data as an object key that we can then access later in the toolbar using 'this'
      d.series.forEach(item => {
        if (item.name === "Other") {
          item.subData = filtered;
        }
      });
    }
  };

  const container = document.getElementById(`${data.key}`);
  if (container) Highcharts.chart(container, chartOptions);
}
