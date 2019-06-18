const { google } = require('googleapis')
const fs = require('fs')
const SPREADSHEET_ID = '1X5WZaBcvkt_2e3L2gYvCjsMjAE2KHtinUK1Yl5jwYpA'

async function getData() {
  let sheets = google.sheets('v4')

  let spreadsheet = await sheets.spreadsheets.get({
    spreadsheetId: SPREADSHEET_ID,
    auth: process.env.GAPI_KEY
  })

  let ranges = spreadsheet.data.sheets.map(sheet => sheet.properties.title)

  let sheetData = ranges.map(async function(sheet, index) {
    let response = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: `'${sheet}'!A:Z`,
      auth: process.env.GAPI_KEY
    })

    let values = response.data.values

    return {
      key: ranges[index],
      title: values[0][0] || '',
      subtitle: values[1][0] || '',
      credits: values[2] ? values[2][0] : '',
      tags: values[3] ? values[3][0].split(',').map(t => t.trim()) : [],
      pdf: values[4] ? values[4][0] : '',
      rows: values.slice(5)
    }
  })

  return sheetData
}

async function run() {
  try {
    let data = await getData()

    let sheetData = await Promise.all(data).then(json =>
      fs.writeFileSync('./src/app/charts.json', JSON.stringify(json))
    )
  } catch (err) {
    console.log(err) // output to netlify function log
  }
}

run()
