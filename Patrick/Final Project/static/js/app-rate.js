// from data.js
var tbody = d3.select("tbody");
var filteredData = 0;
var score = 0;
var ufodtls = data
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
  rate(filteredData);
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


function rate(filteredData){ 
  console.log("raj", filteredData);
      tbody.html("");
      filteredData.forEach((UFOReport) => {
        var temp_catgry  = "" 
        var result = ""
        scorezip(temp_catgry);             
        var row = tbody.append("tr");
        Object.entries(UFOReport).forEach(([key, value]) => {                 
          var cell = tbody.append("td");
          cell.text(value);
        });
      });
      if (score < 10){
        result = "Low";
      }
        else if (score < 30) {
        result = "Medium";
      } else {
       result = "High";
      } 
      document.getElementById("Rate").innerHTML = result;
      score = 0;
}

function scorezip(temp_catgry){
  console.log("Rohan", temp_catgry);
  var catgry = ['Pharmacy', 'Grocery', 'Restaurant', 'Fast Food', 'Gas Stations/Convenience Stores', 'Hospitals/Urgent Care']
      score++;
      console.log("rajit", score);
}  
