var data

// importing data
d3.json("file.json", function(error, json) {
  if (error) return console.warn(error);
  data = json;

  // Set the dimensions of the canvas / graph
  var margin = {top: 50, right: 50, bottom: 50, left: 50},
      width = 1000 - margin.left - margin.right,
      height = 500 - margin.top - margin.bottom;

  // search for max y-value
  var max_y = d3.max(data,function(d){
    return parseInt(d[1]/10);
  });

  // search for min y-value
  var min_y = d3.min(data,function(d){
    return parseInt(d[1]/10);
  });

  // search for max x-value
  var max_x = d3.max(data,function(d){
    new_date = new Date(d[0]).getTime()
    return new_date;
  });

  // search for min x-value
  var min_x = d3.min(data,function(d){
    new_date = new Date(d[0]).getTime()
    return new_date;
  });

  // scale on y-axis
  var scale_y = d3.scale.linear().domain([min_y, max_y]).range([height - margin.bottom, margin.top]);

  // scale on x-axis
  var scale_x = d3.time.scale().domain([min_x, max_x]).range([margin.left, width])

  // reversed transformation for crosshair
  var reverse_scale = d3.scale.linear().domain([margin.left, width]).range([0, 364]);

  // define x-axis
  var x_axis = d3.svg.axis().scale(scale_x).orient("bottom")

  // define y-axis
  var y_axis = d3.svg.axis().scale(scale_y).orient("left")

  // creating svg
  var svg = d3.select("body")
              .append("svg")
              .attr("width", width + margin.left + margin.right)
              .attr("height", height + margin.top + margin.bottom)

  // draw x-axis
  svg.append("g")
     .attr("class", "axis")  //Assign "axis" class
     .attr("transform", "translate(0," + (height - margin.top) + ")")
     .call(x_axis);

  // draw y-axis
  svg.append("g")
      .attr("class", "axis")  //Assign "axis" class
      .attr("transform", "translate(" + margin.left + ",0)")
      .call(y_axis);

  // function to draw graphline
  var lineFunc = d3.svg.line()
    .x(function(d) {
      return scale_x(new Date(d[0]));
    })
    .y(function(d) {
      return scale_y(d[1]/10);
    })
    .interpolate('linear');

  //draw line
  svg.append('svg:path')
    .attr('d', lineFunc(data))
    .attr('stroke', 'blue')
    .attr('stroke-width', 2)
    .attr('fill', 'none');

  // define crosshair y
  var line_crosshair_y = svg.append("line")
      .style("stroke", "black")
      .attr("x1", 10)
      .attr("y1", 0)
      .attr("x2", 10)
      .attr("y2", height)
      .attr('opacity', 0);

  // define crosshair x
  var line_crosshair_x = svg.append("line")
      .style("stroke", "black")
      .attr("x1", 0)
      .attr("y1", 10)
      .attr("x2", width)
      .attr("y2", 10)
      .attr('opacity', 0);

  // mousemove
  svg.on('mousemove', function(){
    mouse = d3.mouse(this);
    x = mouse[0]
    y = mouse[1]

    // define index
    index = Math.round(reverse_scale(x))

    // use index to set the height of the y-line of the crosshair
    temperature = (data[index][1] / 10)

    // move y-line to mouse position
    line_crosshair_y.style('opacity', 1)
                  .attr('x1', x)
                  .attr('x2', x)

    // update the line to the mouse position
    line_crosshair_x.style('opacity', 1)
                  .attr('y1', scale_y(temperature))
                  .attr('y2', scale_y(temperature))
  });
});
