var barHeight = Math.floor(height / data.length);

var bars = r2d3.svg.selectAll('rect')
    .data(r2d3.data);
    
bars.enter()
    .append('rect')
      .attr('width', function(d) { return d.num * width; })
      .attr('height', barHeight)
      .attr('y', function(d, i) { return i * barHeight; })
      .attr('fill', function(d) { return d.col; });

bars.exit().remove();

bars.transition()
  .duration(100)
  .attr("width", function(d) { return d.num * width; })
  .attr('fill', function(d) { return d.col; });
  