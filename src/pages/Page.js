import React from "react";
import MarkdownToSections from "../helpers/MarkdownToSections";
import PageContent from "../helpers/PageContent";
import GetData from "../helpers/GetData";
import CloseMenu from "../helpers/CloseMenu";
import Theme from "../helpers/Theme";
import Charts from "../helpers/Charts";
import Highcharts from "Highcharts";

class Page extends React.Component {
  constructor(props) {
    super(props);
    const { siteStructure, page } = this.props;

    const pageContent = PageContent(siteStructure, page, GetData(page));

    this.state = {
      siteStructure,
      page,
      pageContent,
      title: GetData(page).title
    };
  }

  loadCharts = () => {
    const { sheetData } = this.props;
    if (sheetData.length) {
      Highcharts.setOptions(Theme({ isDataRepo: false }));

      ["3.1", "5.1", "7.1", "8.1"].forEach(key => {
        const data = sheetData.find(d => d.key === key);

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

        const container = document.getElementById(`${key}`);
        if (container) Highcharts.chart(container, chartOptions);
      });
    }
  };

  componentDidMount() {
    document.title = `${this.state.title} | CSIS Careers`;
    this.loadCharts();
  }
  componentDidUpdate() {
    this.loadCharts();
  }

  componentWillUnmount() {
    const triggers = Array.from(
      document.querySelectorAll(".menu-trigger.is-active")
    );
    triggers.forEach(trigger => {
      const target = document.querySelector(trigger.dataset.target);
      CloseMenu(trigger, target);
    });

    window.scrollTo({
      top: 0
    });
  }

  render() {
    const { pageContent, page } = this.state;

    return <main className={page}>{MarkdownToSections(pageContent)}</main>;
  }
}

export default Page;
