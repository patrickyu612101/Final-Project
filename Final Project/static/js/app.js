// from data.js
var tbody = d3.select("tbody");
var filteredData = 0;
ufodtls = data
console.log(data);
data.forEach((UFOReport) => {
    var row = tbody.append("tr");
    Object.entries(UFOReport).forEach(([key, value]) => {
      var cell = tbody.append("td");
      cell.text(value);
    });
  });

 // Select the submit button
var submit = d3.select("#filter-btn");

submit.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#Zip");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(data);
  var filteredData = ufodtls.filter(ufo => ufo.Zip === inputValue);
  console.log(filteredData);
  buildTable(filteredData);
  //var tbody = d3.select("filteredData");
  //console.log(tbody)
});

function buildTable(filteredData){ 
//var table = d3.select("filteredData");
  console.log("raj", filteredData);
  //var tbody = table.select("tbody");
  tbody.html("");
  filteredData.forEach((UFOReport) => {
    var row = tbody.append("tr");
    Object.entries(UFOReport).forEach(([key, value]) => {
      var cell = tbody.append("td");
      cell.text(value);
    });
  });
}