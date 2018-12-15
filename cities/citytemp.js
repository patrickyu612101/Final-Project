function cityinfo(citycode){
  // citycode=parseInt(cityintcode);
  // console.log(citycode);
  d3.csv("cityinfo.csv", function(data) {
      console.log(data[citycode]);
      cityname=data[citycode].City;
      document.getElementById("cityname").innerHTML="City of "+cityname;

      citypopulation=data[citycode].Population;
      document.getElementById("citypopulation").innerHTML=citypopulation;
      cityMedianAge=data[citycode].MedianAge;
      document.getElementById("medianage").innerHTML=cityMedianAge;

      cityMedianHouseIncome=data[citycode].MedianHouseHoldIncome;
      document.getElementById("medianhouseincome").innerHTML=cityMedianHouseIncome;

      cityMeanHouseIncome=data[citycode].MeanHouseHoldIncome;
      document.getElementById("meanHouseIncome").innerHTML=cityMeanHouseIncome;

      cityUnemply=data[citycode].UnemplymentRate;
      document.getElementById("unemplymemt").innerHTML=cityUnemply;
      
      cityHomeOwner=data[citycode].HomeOwnership;
      document.getElementById("homeowner").innerHTML=cityHomeOwner;

      cityRenter=data[citycode].Renters;
      document.getElementById("renter").innerHTML=cityRenter;

      cityMajorEmployer=data[citycode].MajorEmployers;
      document.getElementById("majoremploy").innerHTML=cityMajorEmployer;

      cityWeather=data[citycode].Weather;

      // city=data[citycode];
      // document.getElementById("xxxxx").innerHTML=xxxxx;
      var request = new XMLHttpRequest();
      if(citycode==0){
      document.getElementById("citybackgroundimg").src="../citytempimg/austin.jpg";
      request.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=austin&APPID=e6488d4afd3881b596f321b719019bb2&units=imperial', true);
      }
      else if(citycode==1){
      document.getElementById("citybackgroundimg").src="../citytempimg/newyork.jpg";
      request.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=new york&APPID=e6488d4afd3881b596f321b719019bb2&units=imperial', true);
      }
      else if(citycode==2){
        document.getElementById("citybackgroundimg").src="../citytempimg/sanf.jpg";
        request.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=San%20Francisco&APPID=e6488d4afd3881b596f321b719019bb2&units=imperial', true);
      };
      request.onload = function () {
      
        // Begin accessing JSON data here
        var data = JSON.parse(this.response);
      var currenttemp=data.main.temp;
      var maxtemp=data.main.temp_max;
      var mintemp=data.main.temp_min;
      var weather=data.weather[0].main;
      var weatherdesc=data.weather[0].description;
      console.log(weatherdesc);
      
      document.getElementById("currenttemp").innerHTML=currenttemp;
      document.getElementById("maxtemp").innerHTML=maxtemp;
      document.getElementById("mintemp").innerHTML=mintemp;
      document.getElementById("currentweather").innerHTML=weather;
      document.getElementById("weathertooltip").innerHTML=weatherdesc;
      
      
      }
      request.send();
      
    });
}

