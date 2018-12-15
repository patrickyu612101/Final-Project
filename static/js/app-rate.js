
// from data.js
var tbody = d3.select("tbody");
var filteredData = 0;
var score = 0;
var jobcount=0;
var ufodtls = citiesdata;
citiesdata.forEach((UFOReport) => {
    var row = tbody.append("tr");
    jobcount=jobcount+1;
    Object.entries(UFOReport).forEach(([key, value]) => {
      // console.log(key);
      if(key=="description"){
        var cell = tbody.append("pre");
        cell.attr("class","description");
        cell.text(value);
      }else if(key=="city"){

      }else if(key=="location"){

      }else{
      var cell = tbody.append("td");     
      cell.text(value);
      }
    });
  });
console.log(jobcount+"GG");
document.getElementById("showjobcount").innerHTML="Jobs Avaliable: "+jobcount;

 // Select the submit button
var submit = d3.select("#filter-btn");

submit.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#citysearch");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);

  var filteredData = ufodtls.filter(ufo => ufo.city === inputValue);
  console.log("build");
  buildTable(filteredData);
  // rate(filteredData);
  //var tbody = d3.select("filteredData");
  //console.log(tbody)
});

function buildTable(filteredData){ 
//var table = d3.select("filteredData");

  //var tbody = table.select("tbody");
  tbody.html("");
  jobcount=0;
  filteredData.forEach((UFOReport) => {
    var row = tbody.append("tr");
    jobcount=jobcount+1;

    Object.entries(UFOReport).forEach(([key, value]) => {
      if(key=="description"){
        var cell = tbody.append("div");
        // cell.style="d";
        cell.attr("class","description");
        cell.text(value);
      }else if(key=="city"){

      }else{
      var cell = tbody.append("td");     
      cell.text(value);
      }
    });
  });
  console.log(jobcount+" new");
document.getElementById("showjobcount").innerHTML="Jobs Avaliable: "+jobcount;
}


function rate(filteredData){ 
  console.log("g3");
      tbody.html("");
      filteredData.forEach((UFOReport) => {
        var temp_catgry  = "" 
        var result = ""
        // scorezip(temp_catgry);             
        var row = tbody.append("tr");
        jobcount=jobcount+1;

        Object.entries(UFOReport).forEach(([key, value]) => {                 
          if(key=="description"){
            var cell = tbody.append("div");
            // cell.style="d";
            cell.attr("class","description");
            cell.text(value);
          }else if(key=="city"){

          }else{
          var cell = tbody.append("td");     
          cell.text(value);
          }
        });
      });
      // console.log(jobcount);


}

function scorezip(temp_catgry){
  console.log("Rohan", temp_catgry);
  var catgry = ['Pharmacy', 'Grocery', 'Restaurant', 'Fast Food', 'Gas Stations/Convenience Stores', 'Hospitals/Urgent Care']
      score++;
      console.log("rajit", score);
}  
