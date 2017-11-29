// var margin = {top: 20, right: 20, bottom: 50, left: 40},
//     width = 960 - margin.left - margin.right,
//     height = 450 - margin.top - margin.bottom;
// createLinegraph();
// function createLinegraph() {
//     // Set ranges
//     var x = d3.scale.linear()
//         .range([0, width]);
//     var y = d3.scale.linear()
//         .range([height, 0]);
//
// // Define the lines
//     var incidenceLine = d3.svg.line()
//         .x(function(d) { return x(d.year); })
//         .y(function(d) { return y(d.inc_rate); });
//
// // Define the lines
//     var mortalityLine = d3.svg.line()
//         .x(function(d) { return x(d.year); })
//         .y(function(d) { return y(d.inc_rate); });
//
// // Create SVG canvas
//     var svg = d3.select("#lineGraph")
//         .append("svg")
//         .attr("width", width + margin.left + margin.right)
//         .attr("height", height + margin.top + margin.bottom)
//         .append("g")
//         .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
//
// // Get the data
//     d3.csv("gender.csv", function(error, data) {
//         if (error) throw error;
//         // Coerce the data to numbers.
//         data.forEach(function(d) {
//             d.inc_rate = +d["Canada"];
//             d.year = +d.Year;
//             console.log(d.Date);
//             console.log(d);
//         });
//
//         // Group data by cancer type
//         var dataGroup = d3.nest()
//             .key(function(d) {
//                 return d["Gender"];
//             })
//             .entries(data);
//
//
//         // Compute the scales’ domains.
//         x.domain([d3.min(data, function(d){ return d.year; }), d3.max(data, function(d){ return d.year; })]);
//         y.domain([0, d3.max(data, function(d){
//             //console.log(d.inc_rate);
//             return d.inc_rate; })]);
//
//         legendSpace = width/dataGroup.length;
//         var color = d3.scale.category10();
//
//
//         // Add the paths
//         dataGroup.forEach(function(d, i) {
//             svg.append("path")
//                 .attr("class", "line")
//                 .style("stroke", function() {
//                     return d.color = color(d.key); })
//                 .attr("id", 'tag'+d.key.replace(/\s+/g, ''))
//                 .attr("d", incidenceLine(d.values));
//
//             // Add the legend
//             svg.append("rect")
//                 .attr("x", (legendSpace/2) + (i*legendSpace) - 15)
//                 .attr("y", height + (margin.bottom/2)+ 3)
//                 .attr("width", 12)
//                 .attr("height", 12)
//                 .attr("class", "legend")    // style the legend
//                 .style("fill", function() { // dynamic colours
//                     return d.color = color(d.key); })
//                 .on("click", function(){
//                     // Determine if current line is visible
//                     var active   = d.active ? false : true,
//                         newOpacity = active ? 0 : 1;
//                     // Hide or show the elements based on the ID
//                     d3.select("#tag"+d.key.replace(/\s+/g, ''))
//                         .transition().duration(100)
//                         .style("opacity", newOpacity);
//                     d3.select(this)
//                         .style("opacity", function() {
//                             if (active) {return "0.3"}
//                         })
//                     // Update whether or not the elements are active
//                     d.active = active;
//                 })
//                 .on("mouseover", function(){
//                     if (d.active != true) {
//                         d3.select(this)
//                             .transition()
//                             .duration(50)
//                             .style("opacity", function () {
//                                 if (d.active != true) {
//                                     return "0.3"
//                                 }
//                             })
//                         ;
//                     }})
//                 .on("mouseout", function(){
//                     if(d.active != true) {
//                         d3.select(this)
//                             .transition()
//                             .duration(1000)
//                             .style("opacity", function() {
//                                     return "1"
//                                 }
//                             )}
//                 })
//             ;
//
//             svg.append("text")
//                 .attr("x", (legendSpace/2) + (i*legendSpace))
//                 .attr("y", height + (margin.bottom/2)+ 14)
//                 .text(d.key);
//         });
//
//         // Add the x-axis.
//         svg.append("g")
//             .attr("class", "x axis")
//             .attr("transform", "translate(0," + height + ")")
//             .call(d3.svg.axis().scale(x).orient("bottom").tickFormat(d3.format("d")));
//
//         // Add the y-axis.
//         svg.append("g")
//             .attr("class", "y axis")
//             .attr("text-anchor", "end")
//             .call(d3.svg.axis().scale(y).orient("left"))
//             .append("text")
//             .attr("transform", "rotate(-90)")
//             .attr("y", -40)
//             .attr("x", margin.top - 150)
//             .attr("dy", ".71em")
//             .style("text-anchor", "end")
//             .text("Rate per 100,000 People");
//
//     });}


/* GRAPH 06 ALLUVIAL GROUPS */



$("#btn06taliban").click(function(){
    $(".G06grouprect").removeClass( "G06recton" );
    $("#G06grouprecttaliban").addClass( "G06recton" );
    $(".G06gruppi").removeClass( "idle" );
    $(this).addClass( "idle" );
    $('.G06flussi').removeClass( "G06on" );
    $('#G06flussotaliban').addClass( "G06on" );

});

$("#btn06isis").click(function(){
    $(".G06grouprect").removeClass( "G06recton" );
    $("#G06grouprectisis").addClass( "G06recton" );
    $(".G06gruppi").removeClass( "idle" );
    $(this).addClass( "idle" );
    $('.G06flussi').removeClass( "G06on" );
    $('#G06flussoisis').addClass( "G06on" );

});

$("#btn06haram").click(function(){
    $(".G06grouprect").removeClass( "G06recton" );
    $("#G06grouprectharam").addClass( "G06recton" );
    $(".G06gruppi").removeClass( "idle" );
    $(this).addClass( "idle" );
    $('.G06flussi').removeClass( "G06on" );
    $('#G06flussoharam').addClass( "G06on" );

});

$("#btn06ttp").click(function(){
    $(".G06grouprect").removeClass( "G06recton" );
    $("#G06grouprectttp").addClass( "G06recton" );
    $(".G06gruppi").removeClass( "idle" );
    $(this).addClass( "idle" );
    $('.G06flussi').removeClass( "G06on" );
    $('#G06flussottp').addClass( "G06on" );

});

$("#btn06shabaab").click(function(){
    $(".G06grouprect").removeClass( "G06recton" );
    $("#G06grouprectshabaab").addClass( "G06recton" );
    $(".G06gruppi").removeClass( "idle" );
    $(this).addClass( "idle" );
    $('.G06flussi').removeClass( "G06on" );
    $('#G06flussoshabaab').addClass( "G06on" );

});

$("#btn06farc").click(function(){
    $(".G06grouprect").removeClass( "G06recton" );
    $("#G06grouprectfarc").addClass( "G06recton" );
    $(".G06gruppi").removeClass( "idle" );
    $(this).addClass( "idle" );
    $('.G06flussi').removeClass( "G06on" );
    $('#G06flussofarc').addClass( "G06on" );

});

$("#btn06ltte").click(function(){
    $(".G06grouprect").removeClass( "G06recton" );
    $("#G06grouprectltte").addClass( "G06recton" );
    $(".G06gruppi").removeClass( "idle" );
    $(this).addClass( "idle" );
    $('.G06flussi').removeClass( "G06on" );
    $('#G06flussoltte').addClass( "G06on" );

});

$("#btn06lra").click(function(){
    $(".G06grouprect").removeClass( "G06recton" );
    $("#G06grouprectlra").addClass( "G06recton" );
    $(".G06gruppi").removeClass( "idle" );
    $(this).addClass( "idle" );
    $('.G06flussi').removeClass( "G06on" );
    $('#G06flussolra').addClass( "G06on" );

});

$("#btn06maoist").click(function(){
    $(".G06grouprect").removeClass( "G06recton" );
    $("#G06grouprectmaoist").addClass( "G06recton" );
    $(".G06gruppi").removeClass( "idle" );
    $(this).addClass( "idle" );
    $('.G06flussi').removeClass( "G06on" );
    $('#G06flussomaoist').addClass( "G06on" );

});

$("#btn06qaida").click(function(){
    $(".G06grouprect").removeClass( "G06recton" );
    $("#G06grouprectqaida").addClass( "G06recton" );
    $(".G06gruppi").removeClass( "idle" );
    $(this).addClass( "idle" );
    $('.G06flussi').removeClass( "G06on" );
    $('#G06flussoqaida').addClass( "G06on" );

});










$("#btn06AB").click(function(){
    $(".G06grouprect").removeClass( "G06recton" );
    $("#G06grouprectAB").addClass( "G06recton" );
    $(".G06gruppi").removeClass( "idle" );
    $(this).addClass( "idle" );
    $('.G06flussi').removeClass( "G06on" );
    $('#G06nodeAB').addClass( "G06on" );
});

$("#btn06BC").click(function(){
    $(".G06grouprect").removeClass( "G06recton" );
    $("#G06grouprectBC").addClass( "G06recton" );
    $(".G06gruppi").removeClass( "idle" );
    $(this).addClass( "idle" );
    $('.G06flussi').removeClass( "G06on" );
    $('#G06nodeBC').addClass( "G06on" );
});

$("#btn06MB").click(function(){
    $(".G06grouprect").removeClass( "G06recton" );
    $("#G06grouprectMB").addClass( "G06recton" );
    $(".G06gruppi").removeClass( "idle" );
    $(this).addClass( "idle" );
    $('.G06flussi').removeClass( "G06on" );
    $('#G06nodeMB').addClass( "G06on" );
});

$("#btn06NB").click(function(){
    $(".G06grouprect").removeClass( "G06recton" );
    $("#G06grouprectNB").addClass( "G06recton" );
    $(".G06gruppi").removeClass( "idle" );
    $(this).addClass( "idle" );
    $('.G06flussi').removeClass( "G06on" );
    $('#G06nodeNB').addClass( "G06on" );
});

$("#btn06NL").click(function(){
    $(".G06grouprect").removeClass( "G06recton" );
    $("#G06grouprectNL").addClass( "G06recton" );
    $(".G06gruppi").removeClass( "idle" );
    $(this).addClass( "idle" );
    $('.G06flussi').removeClass( "G06on" );
    $('#G06nodeNL').addClass( "G06on" );
});

$("#btn06NT").click(function(){
    $(".G06grouprect").removeClass( "G06recton" );
    $("#G06grouprectNT").addClass( "G06recton" );
    $(".G06gruppi").removeClass( "idle" );
    $(this).addClass( "idle" );
    $('.G06flussi').removeClass( "G06on" );
    $('#G06nodeNT').addClass( "G06on" );

});

$("#btn06NS").click(function(){
    $(".G06grouprect").removeClass( "G06recton" );
    $("#G06grouprectNS").addClass( "G06recton" );
    $(".G06gruppi").removeClass( "idle" );
    $(this).addClass( "idle" );
    $('.G06flussi').removeClass( "G06on" );
    $('#G06nodeNS').addClass( "G06on" );
});

$("#btn06BC").click(function(){
    $(".G06grouprect").removeClass( "G06recton" );
    $("#G06grouprectBC").addClass( "G06recton" );
    $(".G06gruppi").removeClass( "idle" );
    $(this).addClass( "idle" );
    $('.G06flussi').removeClass( "G06on" );
    $('#G06nodeBC').addClass( "G06on" );
});

$("#btn06ON").click(function(){
    $(".G06grouprect").removeClass( "G06recton" );
    $("#G06grouprectON").addClass( "G06recton" );
    $(".G06gruppi").removeClass( "idle" );
    $(this).addClass( "idle" );
    $('.G06flussi').removeClass( "G06on" );
    $('#G06nodeON').addClass( "G06on" );
});

$("#btn06PE").click(function(){
    $(".G06grouprect").removeClass( "G06recton" );
    $("#G06grouprectPE").addClass( "G06recton" );
    $(".G06gruppi").removeClass( "idle" );
    $(this).addClass( "idle" );
    $('.G06flussi').removeClass( "G06on" );
    $('#G06nodePE').addClass( "G06on" );
});

$("#btn06QC").click(function(){
    $(".G06grouprect").removeClass( "G06recton" );
    $("#G06grouprectQC").addClass( "G06recton" );
    $(".G06gruppi").removeClass( "idle" );
    $(this).addClass( "idle" );
    $('.G06flussi').removeClass( "G06on" );
    $('#G06nodeQC').addClass( "G06on" );
});

$("#btn06SK").click(function(){
    $(".G06grouprect").removeClass( "G06recton" );
    $("#G06grouprectSK").addClass( "G06recton" );
    $(".G06gruppi").removeClass( "idle" );
    $(this).addClass( "idle" );
    $('.G06flussi').removeClass( "G06on" );
    $('#G06nodeSK').addClass( "G06on" );
});

$("#btn06YT").click(function(){
    $(".G06grouprect").removeClass( "G06recton" );
    $("#G06grouprectYT").addClass( "G06recton" );
    $(".G06gruppi").removeClass( "idle" );
    $(this).addClass( "idle" );
    $('.G06flussi').removeClass( "G06on" );
    $('#G06nodeYT').addClass( "G06on" );
});
