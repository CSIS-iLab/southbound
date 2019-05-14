import React, { Component } from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Page from "./pages/Page";
import Data from "./pages/Data";
import SiteMap from "./SiteMap";
import { Route } from "react-router-dom";
import SmoothScroll from "smooth-scroll";
import Highcharts from "Highcharts";

const SPREADSHEET_ID = "1X5WZaBcvkt_2e3L2gYvCjsMjAE2KHtinUK1Yl5jwYpA";
const { gapi } = window;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      siteStructure: SiteMap,
      categories: [],
      filteredCategories: [],
      sheetData: []
    };
  }

  updateCharts = (input, value) => {
    let filteredSheetData, filteredCategories;

    switch (input) {
      case "search":
        filteredSheetData = this.state.sheetData.filter(data =>
          JSON.stringify(data)
            .toLowerCase()
            .includes(value.toLowerCase())
        );

        filteredCategories = [
          ...new Set(
            filteredSheetData
              .map(data => data.tags)
              .reduce((a, b) => a.concat(b))
          )
        ];

        break;

      case "clear":
        filteredCategories = this.state.categories;
        filteredSheetData = this.state.sheetData;
        break;

      case "category":
        filteredCategories = this.state.filteredCategories;

        filteredCategories = filteredCategories.includes(value)
          ? filteredCategories.filter(
              cat => cat.toLowerCase() !== value.toLowerCase()
            )
          : [...filteredCategories, value];

        filteredSheetData = this.state.sheetData;
        this.state.sheetData.map(data => {
          data.hide = data.tags.some(t => filteredCategories.includes(t))
            ? false
            : true;
          return data;
        });
        break;
      default:
    }
    this.setState({ filteredSheetData, filteredCategories });
  };

  componentDidMount() {
    gapi.load("client", () => {
      gapi.client
        .init({
          apiKey: "AIzaSyA1ol27C1FVv-F6940xNXY-VImb5ZCE3JE",
          discoveryDocs: [
            "https://sheets.googleapis.com/$discovery/rest?version=v4"
          ]
        })
        .then(() => {
          gapi.client.sheets.spreadsheets
            .get({
              spreadsheetId: SPREADSHEET_ID
            })
            .then(response => {
              const ranges = response.result.sheets.map(
                sheet => sheet.properties.title
              );

              const fetches = ranges.map(sheet => {
                const request = {
                  spreadsheetId: SPREADSHEET_ID,
                  range: `'${sheet}'!A:Z`
                };
                return gapi.client.sheets.spreadsheets.values.get(request);
              });

              Promise.all(fetches).then(responses => {
                let sheetData = responses.map((response, index) => {
                  const { values } = response.result;
                  return {
                    key: ranges[index],
                    title: values[0][0] || "",
                    subtitle: values[1][0] || "",
                    credits: values[2] ? values[2][0] : "",
                    tags: values[3]
                      ? values[3][0].split(",").map(t => t.trim())
                      : [],
                    rows: values.slice(4)
                  };
                });

                const categories = [
                  ...new Set(
                    sheetData
                      .map(data => data.tags)
                      .reduce((a, b) => a.concat(b))
                  )
                ];
                this.setState(
                  {
                    sheetData,
                    categories,
                    filteredSheetData: sheetData,
                    filteredCategories: categories
                  }
                  // () => console.log(this.state)
                );
              });
            });
        });
    });

    new SmoothScroll('a[href*="#"]', {
      header: ".site-header",
      speed: 500
    });

    window.addEventListener("resize", () => {
      const highcharts = Array.from(document.querySelectorAll(".chart"));
      highcharts.forEach(hC => {
        const index = hC.dataset.highchartsChart;
        const chart = Highcharts.charts[index];

        const chartWidth = document.querySelector("main").offsetWidth;
        const metaWidth = (chartWidth / 3) * 2;

        const newSize =
          window.innerWidth > 1080
            ? {
                chart: {
                  height: 500,
                  width: chartWidth,
                  marginLeft: chartWidth / 2
                },
                title: { widthAdjust: metaWidth * -1, align: "left" },
                subtitle: { widthAdjust: metaWidth * -1, align: "left" },
                credits: { align: "left" }
              }
            : {
                chart: { height: 500, width: null, marginLeft: undefined },
                title: { widthAdjust: -44, align: "center" },
                subtitle: { widthAdjust: -44, align: "center" },
                credits: { align: "center" }
              };

        chart.update(newSize);

        const titleHeight = chart.title.getBBox().height + 24;
        const legendWidth = chart.legend.legendWidth;

        const newPos =
          window.innerWidth > 1080
            ? {
                chart: {
                  height: 500
                },
                subtitle: { y: titleHeight },
                legend: {
                  x: chartWidth * 0.75 - legendWidth / 2,
                  align: "left"
                }
              }
            : {
                chart: {
                  height: 500
                },
                subtitle: { y: titleHeight },
                legend: { x: 0, align: "center" }
              };

        chart.update(newPos);
      });
    });
  }

  render() {
    const {
      siteStructure,
      sheetData,
      filteredSheetData,
      categories,
      filteredCategories
    } = this.state;

    return (
      <div className="wrapper">
        <Header siteStructure={siteStructure} />
        <Route
          exact
          path="/"
          render={props => (
            <Page
              {...props}
              sheetData={sheetData}
              siteStructure={siteStructure}
              page="homepage"
            />
          )}
        />
        <Route
          exact
          path="/about"
          render={props => (
            <Page {...props} siteStructure={siteStructure} page="about" />
          )}
        />
        <Route
          exact
          path="/data"
          render={props => (
            <Data
              {...props}
              filteredSheetData={filteredSheetData}
              categories={categories}
              filteredCategories={filteredCategories}
              updateCharts={this.updateCharts}
              siteStructure={siteStructure}
              page="data"
            />
          )}
        />
        <Footer siteStructure={siteStructure} />
        <div className="content-overlay" />
      </div>
    );
  }
}

export default App;
