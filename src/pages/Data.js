import React from "react";
import MarkdownToSections from "../helpers/MarkdownToSections";
import ValueToJSX from "../helpers/ValueToJSX";
import PageContent from "../helpers/PageContent";
import GetData from "../helpers/GetData";
import CloseMenu from "../helpers/CloseMenu";
import InitSheets from "../helpers/InitSheets";
import Theme from "../helpers/Theme";
import Highcharts from "Highcharts";

class Data extends React.Component {
  constructor(props) {
    super(props);
    const { siteStructure, page } = this.props;

    const pageContent = PageContent(siteStructure, page, GetData(page));

    this.state = {
      siteStructure,
      pageContent,
      page,
      title: GetData(page).title
    };
  }

  handleCategoryChange = e => {
    this.props.updateCharts("category", e.target.name);
  };

  handleClear = e => {
    this.props.updateCharts("clear");
  };

  handleSearch = e => {
    this.props.updateCharts("search", e.target.value);
  };

  componentDidMount() {
    document.title = `${this.state.title} | CSIS Careers`;
    const { filteredSheetData } = this.props;

    if (filteredSheetData && filteredSheetData.length) {
      Highcharts.setOptions(Theme({ isDataRepo: true }));

      filteredSheetData.forEach(data => {
        InitSheets(data, { isDataRepo: true });
      });
    }
  }

  componentDidUpdate() {
    const { filteredSheetData } = this.props;
    Highcharts.setOptions(Theme({ isDataRepo: true }));

    filteredSheetData.forEach(data => {
      InitSheets(data, { isDataRepo: true });
    });
  }

  componentWillUnmount() {
    this.props.updateCharts("clear");
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
    const { filteredSheetData, categories, filteredCategories } = this.props;

    const { page, pageContent } = this.state;

    const header = pageContent.find(content => content.component === "header");
    const headerContent = header ? header.content : {};
    const otherContent = pageContent.filter(
      content => content.component !== "header"
    );

    return (
      <main className={page}>
        <section id="#header">
          <div className="header">
            {Object.keys(headerContent).map(content => {
              return ValueToJSX(
                headerContent[content],
                `header__${content}`,
                content
              );
            })}
          </div>
        </section>
        <div id="listings">
          <section className="listings__filters">
            <div className="listings__filters-search">
              <div className="filters-label">Filter by keyword</div>
              <div className="listings__filters-search-box">
                <input
                  type="search"
                  placeholder="Search"
                  onChange={this.handleSearch}
                />
              </div>
            </div>

            <div className="listings__filters-category">
              <input type="checkbox" id="filter-trigger" />

              <label htmlFor="filter-trigger" className="filters-label">
                Filter by category
              </label>

              <ul className="listings__filters-category_list">
                {categories.map(category => {
                  return (
                    <li key={category}>
                      <label
                        className={
                          filteredCategories.includes(category) ? "checked" : ""
                        }
                      >
                        <input
                          type="checkbox"
                          checked={filteredCategories.includes(category)}
                          name={category}
                          onChange={this.handleCategoryChange}
                        />
                        <span className="label">{category}</span>
                      </label>
                    </li>
                  );
                })}
              </ul>
              <button className="block clear-all" onClick={this.handleClear}>
                Clear All
              </button>
            </div>
            <p className="listings__filters-summary">
              {filteredCategories.length} categories selected
            </p>
          </section>
          <section className="listings__results">
            <h2 className="listings__results-summary">Results</h2>
            <ul className="listings__results-list">
              {filteredSheetData ? (
                filteredSheetData.map(data => {
                  return (
                    <li
                      key={data.key}
                      id={data.key}
                      className="chart"
                      dataset-tags={data.tags}
                    />
                  );
                })
              ) : (
                <div className="loader" />
              )}
            </ul>
          </section>
        </div>
        {MarkdownToSections(otherContent)}
      </main>
    );
  }
}

export default Data;
