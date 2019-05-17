require 'google/apis/sheets_v4'


  service = Google::Apis::SheetsV4::SheetsService.new
  service.client_options.application_name = 'client'
  service.key = ENV['GAPI_KEY']


  spreadsheet_id = '1X5WZaBcvkt_2e3L2gYvCjsMjAE2KHtinUK1Yl5jwYpA'
  sheets = service.get_spreadsheet(spreadsheet_id).sheets.map{|sheet| sheet.properties.title }

  ranges = sheets.map do |title|
    service.get_spreadsheet_values(spreadsheet_id,"'#{title}'!A:Z").values
  end


  rows = ranges.each_with_index.map do |values, index|
    {
      "key": sheets[index],
      "title":  values[0][0] || "",
      "subtitle": values[1][0] || "",
      "credits": values[2] ? values[2][0] : "",
      "tags": values[3] ? values[3][0].split(",").map{|t| t.strip} : [],
      "rows": values.slice(4,values.length)
    }
  end

  File.write('public/charts.json', rows.to_json, mode: 'w')
