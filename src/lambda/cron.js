const cron = require("node-cron");
const { google } = require("googleapis");
const SPREADSHEET_ID = "1X5WZaBcvkt_2e3L2gYvCjsMjAE2KHtinUK1Yl5jwYpA";
// import chartJson from "../../public/charts.json";

export async function handler(event, context) {
  try {
    cron.schedule("2 * * * *", async function schedule() {
      try {
        let data = await getData();
        let sheetData = await Promise.all(data).then(json => json);

        return {
          statusCode: 200,
          body: JSON.stringify(sheetData)
        };
      } catch (err) {
        console.log("schedule: " + err); // output to netlify function log
        return {
          statusCode: 500,
          body: JSON.stringify([{ msg: "schedule: " + err.message }])
        };
      }
    });

    console.log("!!!!FETCHING!!!"); // output to netlify function log
    let data = await getData();
    let sheetData = await Promise.all(data).then(json => json);

    return {
      statusCode: 200,
      body: JSON.stringify(sheetData)
    };
  } catch (err) {
    console.log("handler: " + err); // output to netlify function log
    return {
      statusCode: 500,
      body: JSON.stringify([{ msg: "handler: " + err.message }])
    };
  }
}

async function getData() {
  let sheets = google.sheets({
    version: "v4"
  });

  let spreadsheet = await sheets.spreadsheets.get({
    spreadsheetId: SPREADSHEET_ID,
    auth: process.env.GAPI_KEY
  });

  let ranges = spreadsheet.data.sheets.map(sheet => sheet.properties.title);

  let sheetData = ranges.map(async function(sheet, index) {
    let response = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: `'${sheet}'!A:Z`,
      auth: process.env.GAPI_KEY
    });

    let values = response.data.values;

    return {
      key: ranges[index],
      title: values[0][0] || "",
      subtitle: values[1][0] || "",
      credits: values[2] ? values[2][0] : "",
      tags: values[3] ? values[3][0].split(",").map(t => t.trim()) : [],
      rows: values.slice(4)
    };
  });

  return sheetData;
}
