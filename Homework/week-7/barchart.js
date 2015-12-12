d3.json("data1.json", function(error, data) {
  if (error) return console.error(error);

  // function to get data of country which is clicked on map
  takedata = function(country){
    data_list = data[country]
    list = []
    for (i = 0; i < data_list.length; i++){
      list.push(parseFloat(data_list[i]))
    }

    // define width, height and margins
    var margin = {top: 50, right: 50, bottom: 50, left: 50},
        width = 1000 - margin.left - margin.right,
        height = 300 - margin.top - margin.bottom;

    var x = d3.scale.ordinal().rangeRoundBands([0, width], .10);
    var y = d3.scale.linear().range([height, 0]);

    var svg = d3.select("#barchart")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
      .append("g")
        .attr("transform",
              "translate(" + margin.left + "," + margin.top + ")");

    var xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom")
        .ticks(10);

    var yAxis = d3.svg.axis()
        .scale(y)
        .orient("left")
        .ticks(10);

    //
    x.domain([1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014]).rangeRoundBands([0, width], .10);
    y.domain([0, d3.max(list, function(d) { return d; })]).range([(height), 0]);

    // draw x-axis
    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis)
      .selectAll("text")
        .style("text-anchor", "end")
        .attr("dx", "-.8em")
        .attr("dy", "-.55em")
        .attr("transform", "rotate(-90)" );

    // draw y-axis
    svg.append("g")
        .attr("class", "y axis")
        .call(yAxis)
      .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", "-4em")
        .style("text-anchor", "end")
        .text("Growth (%)");

    // draw bars
    svg.selectAll("bar")
        .data(list)
      .enter().append("rect")
        .attr("class", "bar")
        .attr("x", function(d, i) { return x(1991 + i); })
        .attr("width", x.rangeBand())
        .attr("y", function(d) { return y(d); })
        .attr("height", function(d) { return height - y(d); });
    }

    remove_old_bars = function() {
      // select all barscharts
      var svg = d3.select("#barchart")
      svg.selectAll("*").remove()
    }
});
