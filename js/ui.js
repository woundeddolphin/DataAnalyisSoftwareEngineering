
    google.load('visualization', '1', {packages: ['corechart']});
    function drawVisualization() {
      var queryText = encodeURIComponent("SELECT Year, Sessions FROM 1P23PE35fnBA8V9Bf4u2C3jqqwr-O0i-s8pjrSEjD WHERE Year = 2014");
      google.visualization.drawChart({
        "containerId": "visualization_div",
        "dataSourceUrl": 'https://www.google.com/fusiontables/gvizdata?tq=',
	"query": "SELECT Year, Sessions FROM 1P23PE35fnBA8V9Bf4u2C3jqqwr-O0i-s8pjrSEjD WHERE Year = 2014",
        "refreshInterval": 500,
        "chartType": "ColumnChart",
        "options": {
          "titleTextStyle": { color: "black",
                          fontName: "Open Sans",
                          fontSize: 16,
                          bold: false,
                          italic: false },
          "title":"Session Hours Provided by University of Portland Librarians",
          "titleFontSize": 12,
          "bar": {"groupWidth": "95%"},
          "vAxis": {"title": "Session Hours",
                    "textStyle" : { color: "black",
                                         fontName: "Open Sans",
                                         fontSize: 12,
                                         bold: false,
                                         italic: false },
                    "titleTextStyle" : { color: "black",
                                         fontName: "Open Sans",
                                         fontSize: 16,
                                         bold: false,
                                         italic: false }},    
          "hAxis": {"title": "Month",
                    "textStyle" : { color: "black",
                                         fontName: "Open Sans",
                                         fontSize: 12,
                                         bold: false,
                                         italic: false },
                    "titleTextStyle" : { color: "black",
                                         fontName: "Open Sans",
                                         fontSize: 16,
                                         bold: false,
                                         italic: false }},
          "legend": { "position": "none" }}
    })};

    google.setOnLoadCallback(drawVisualization);