/**
 * chart.js
 *
 * Defines the controller functionality to grab the fusion table data and dump
 * it into the DOM. 
 *
 */

// #include <google charts>
google.load('visualization', '1', {packages: ['corechart']});

/*
function drawVisualization(evt, year) {

    // Get the year.  Either it was provided in the arguments, or we need to assume
    // a value.
    if (year === undefined) {
	year = "" + 2014;

	console.log(options);
    
    }
    else {
	year = "" + year;
    
        hMax -= 12;
	hMin -= 12;

	options.hAxis.viewWindow.min = hMin;
	options.hAxis.viewWindow.max = hMax;

	console.log(options);
    }


    // Create the chart that will be used to animate year-by-year information.
    var chart = new google.visualization.ColumnChart(document.getElementById('visualization_div'));

    // Programmatically create the query based on the year determined in the previous step.
    // var query = "SELECT Month, Sessions FROM 1P23PE35fnBA8V9Bf4u2C3jqqwr-O0i-s8pjrSEjD WHERE Year = " + year;
    var query = "SELECT Month, Sessions FROM 1P23PE35fnBA8V9Bf4u2C3jqqwr-O0i-s8pjrSEjD";

    var opts = {sendMethod: 'auto'};
    var queryObj = new google.visualization.Query('https://www.google.com/fusiontables/gvizdata?tq=', opts);
    queryObj.setQuery(query);
    queryObj.send(function(e) { 

	    console.log("response: "); 
	    console.log(e); 
	    var data = e.getDataTable();

	    console.log("table: ");
	    console.log(data);

	    chart.draw(data, options);
	
	});

    console.log(opts);



    console.log(chart);
    chart.query = query;
    chart.dataSourceUrl = 'https://www.google.com/fusiontables/gvizdata?tq=';
    chart.options = options;

    // chart.draw(
    
        google.visualization.drawChart({
	    "containerId": "visualization_div",
		"dataSourceUrl": 'https://www.google.com/fusiontables/gvizdata?tq=',
		"query": query,
		"refreshInterval": 500,
		"chartType": "ColumnChart",
		"options": options
	})};
    
};


google.setOnLoadCallback(drawVisualization);

*/
