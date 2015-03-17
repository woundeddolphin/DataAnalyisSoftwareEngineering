/**
 * controller.js
 *
 * Defines the angular controller which defines button behavior on the
 * librarians data visualization.
 *
 *
 */

  google.load('visualization', '1', {packages: ['corechart']});

  google.setOnLoadCallback(drawChart);

  function drawChart() {
	    // Create the chart that will be used to animate year-by-year information.
	    var chart = new google.visualization.AreaChart(document.getElementById('visualization_div'));
/*
	    var options = { "titleTextStyle": { color: "black",
						fontName: "Roboto",
						fontSize: 16,
						bold: false,
						italic: false },
			    "title":"Game Genres over history",
			    "titleFontSize": 12,
			    "animation": {
				startup: true,
				duration: 850,
				easing: 'in'
			    },
			    "bar": {"groupWidth": "95%"},
			    "vAxis": {"title": "Session Hours",
				      "viewWindow" : {max : 3000},
				      "textStyle" : { color: "black",
						      fontName: "Roboto",
						      fontSize: 12,
						      bold: false,
						      italic: false },
				      "titleTextStyle" : { color: "black",
							   fontName: "Roboto",
							   fontSize: 16,
							   bold: false,
							   italic: false }},
			    "hAxis": {"title": "Month",
				      "textStyle" : { color: "black",
						      fontName: "Roboto",
						      fontSize: 12,
						      bold: false,
						      italic: false },
				      "titleTextStyle" : { color: "black",
							   fontName: "Roboto",
							   fontSize: 16,
							   bold: false,
							   italic: false }},
			    "legend": { "position": "none" }
	    };
*/
      var options = {
        width: 1000,
        height: 650,
        title: 'Game Genres',
        //colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'],
        isStacked: "true"
      };

	    // Make the initial query to get the whole Fusion table.
	    // var query = "SELECT Year, Genre, Number FROM https://www.google.com/fusiontables/embedviz?viz=GVIZ&t=TABLE&q=select+col0%2C+col1%2C+col2+from+1eMrmjGdM7ymDA5vD3iNRdYIMXOayIOyMffMEmUVr";
	    // var opts = {sendMethod: 'auto'};
	    // var queryObj = new google.visualization.Query('https://www.google.com/fusiontables/gvizdata?tq=', opts);


	    // Define the variables to hold the entire fusion table,
	    // and a collection of views, one for each year.
	    //var data;

       var data = google.visualization.arrayToDataTable([
          ['Year', 'Sales', 'Expenses'],
          ['2013',  1000,      400],
          ['2014',  1170,      460],
          ['2015',  660,       1120],
          ['2016',  1030,      540]
        ]);

      var query = "SELECT * FROM 1IOfn29P52Wvcvs3tpc-5S_aiOtCJEDXsi17lqdPR";
	    var opts = {sendMethod: 'auto'};
	    var queryObj = new google.visualization.Query('https://www.google.com/fusiontables/gvizdata?tq=', opts);
	    var temp;
      var data2;

      queryObj.setQuery(query);

      queryObj.send(function(e) {
		    temp = e.getDataTable();

        data2 = new google.visualization.DataView(temp);

		    chart.draw(data2, options);
    });

  }










