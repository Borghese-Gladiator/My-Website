function renderGraph() {
    var data1 = [18,35,40,55,80];
    var data2 = [50,33,45,39,20,23,25,40];
    var data3 = [10,20,30];
    var data4 = [11,21,31,41,31,21,11];
    var data5 = [1,100,2,80,3,50,4,30];
    
    var dataIndex=1;
    var xBuffer=100;
    var yBuffer=150;
    var lineLength=400;
    
    var svgDoc = d3.select("body").append("svg")
    
    svgDoc.append("text")
        .attr("x",xBuffer+(lineLength/2))
        .attr("y",50)
        .text("data"+dataIndex);
    
    svgDoc.append("line")
        .attr("x1",xBuffer)
        .attr("y1",yBuffer)
        .attr("x1",xBuffer+lineLength)
        .attr("y2",yBuffer)
    
    svgDoc.append("g").selectAll("circle")
        .data(eval("data"+dataIndex))
        .enter()
        .append("circle")
        .attr("cx",function(d,i){
            var spacing = lineLength/(eval("data"+dataIndex).length);
            return xBuffer+(i*spacing)
        })
        .attr("cy",yBuffer)
        .attr("r",function(d,i){return d});
    
    d3.select("body").append("button")
        .text("try it!")
        .on("click",function(){
    
            if (dataIndex==1) {
                dataIndex=2;
            } else if (dataIndex==2){
                dataIndex=3;
            }
            else if (dataIndex==3){
                dataIndex=4;
            } else if (dataIndex==4){
                dataIndex=5;
            }
            else {
                dataIndex=1;
            }
    
            var circle = svgDoc.select("g").selectAll("circle")
                .data(eval("data"+dataIndex));
    
            circle.exit().remove();
            circle.enter().append("circle")
                .attr("r",0);
    
            circle.transition()
                .duration(1000)
                .attr("cx",function(d,i){
                    var spacing = lineLength/(eval("data"+dataIndex).length);
                    return xBuffer+(i*spacing)
                })
                .attr("cy",yBuffer)
                .attr("r",function(d,i){return d});
    
            d3.select("text").text("data"+dataIndex);
    
        });
}
