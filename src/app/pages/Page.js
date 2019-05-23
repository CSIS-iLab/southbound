import React from "react";
import MarkdownToSections from "../helpers/MarkdownToSections";
import PageContent from "../helpers/PageContent";
import GetData from "../helpers/GetData";
import CloseMenu from "../helpers/CloseMenu";
import ChartOptions from "../helpers/ChartOptions";
import Highcharts from "Highcharts";
import InitSheets from "../helpers/InitSheets";

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
    if (sheetData && sheetData.length) {
      Highcharts.setOptions(ChartOptions({ isDataRepo: false }));

      ["3.1", "5.1", "7.1", "8.1"].forEach(key => {
        const data = sheetData.find(d => d.key === key);

        InitSheets(data, { isDataRepo: false });
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
