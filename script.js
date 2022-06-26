
///////////////////////////////////////////////////////// FIRST GRAPH \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
/////////////////////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

///////////////////////////////////////////////////////  INSERT CANVAS \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  var canvas=$('<canvas id="chart1"></canvas>');
  var before=$('#table1');

  before.before(canvas);
  
  /////////////////////////////////////////////////////// /ID/VAR/SELECTORS \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  let createId = document.querySelectorAll("#table1 tr"); //select the place to create an ID
      createId[1].setAttribute("id", "years"); // creates the ID using the var createId

  let targetYears = document.querySelectorAll("#years th"); //select the th to extract the years from it
  let targetNumberOfCrimes = document.querySelectorAll("#table1 td"); //select the td to extract the crime stats from it

  let takeYears = []; // creates a var that contains the extracted years
  let takeNumbersOfCrimes = []; // creates var to extract the crime numbers

  // loop to select years 

  for(i=2; i<targetYears.length; i++) {
  const content = targetYears[i].textContent 
  const contentAsNumber = parseInt(content) 
    if(!isNaN(contentAsNumber))
      takeYears.push(contentAsNumber)
}

  // loop to select crime numbers 


    let currentCountry = '';
    let dataObject = {};

    for(i=0; i<targetNumberOfCrimes.length; i++){
      const content = targetNumberOfCrimes[i].textContent 
      const contentAsNumber = parseFloat(content) 
      if(isNaN(contentAsNumber)) {
        currentCountry = content
        dataObject[currentCountry] = []
      }
      else {
        dataObject[currentCountry].push(contentAsNumber)
      }
    }

    const CountryList = Object.keys(dataObject) 
    
    
  // Creates array with all datas (country and crime numbers)
    
    let DataArray = []
    
    for(i=0; i<CountryList.length; i++){
      const countryName = CountryList[i]

      const data = {
         label: countryName,
         data: dataObject[countryName]
      }
      DataArray.push(data)
    }

//////////////////////////////////////////////////////////// CHART JS \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

let dataSets = []

    for (let i = 0; i < CountryList.length; i++) {
      const country = CountryList[i];

      let red = Math.floor(Math.random() * (255 - 1));
      let green = Math.floor(Math.random() * (255 - 1));
      let blue = Math.floor(Math.random() * (255 - 1));
      
      let color = `rgb(${red},${green},${blue})`;

      let oneElement =  {
        label: country,
        backgroundColor: color,
        borderColor: color,
        data: dataObject[country]
      }
      dataSets.push(oneElement)
    }

    const data = {
      labels: takeYears,
      datasets: dataSets
      }
  
    const config = {
      type: 'line',
      data: data,
      options: {}
    };
  
    const myChart = new Chart(
      document.getElementById('chart1'),
      config
    );
  
///////////////////////////////////////////////////////// SECOND GRAPH \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
///////////////////////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// insert canvas 2
let canvas2 = $('<canvas id="chart2"></canvas>');
let before2 = $('#table2');

before2.before(canvas2);

///ID/VAR/SELECTORS

createId2= document.querySelectorAll("#table2 tr");
  createId2[0].setAttribute("id", "years2");

let targetYears2 = document.querySelectorAll("#years2 th");
let targetMurders = document.querySelectorAll("#table2 td");

let takeYears2 = [];
let takeMurders = [];

  // loop to select years 

for(i=2; i<targetYears2.length; i++) {
  const content = targetYears2[i].textContent
  const contentAsNumber = parseInt(content)
      if(!isNaN(contentAsNumber))
      takeYears2.push(contentAsNumber)
}


let currentCountry2 = '';
let dataObject2 = {};

  // loop to select murder numbers 

for(i=0; i<targetMurders.length; i++) {
  const content = targetMurders[i].textContent
  const contentAsNumber = parseFloat(content)
  if(isNaN(contentAsNumber)) {
  currentCountry2 = content
  dataObject2[currentCountry2] = [];
}
else {
  dataObject2[currentCountry2].push(contentAsNumber);
}
}


const CountryList2 = Object.keys(dataObject2);


// Creates array with all datas (country and crime numbers)

let DataArray2 = []

for(i=0; i<CountryList2.length; i++){
const countryName2 = CountryList2[i]

const data2 = {
   label: countryName2,
   data: dataObject2[countryName2]
}
DataArray2.push(data2)
}

//////////////////////////////////////////////////////////// CHART JS \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

let dataSets2 = []

for (let i = 0; i < CountryList2.length; i++) {
  
const country = CountryList2[i];

let red = Math.floor(Math.random() * (255 - 1))
let green = Math.floor(Math.random() * (255 - 1))
let blue = Math.floor(Math.random() * (255 - 1))

let color = `rgb(${red},${green},${blue})`

let oneElement2 =  {
  label: country,
  backgroundColor: color,
  borderColor: color,
  data: dataObject2[country]
}
dataSets2.push(oneElement2)
}

const data2 = {
labels: takeYears2,
datasets: dataSets2
}

const config2 = {
type: 'bar',
data: data2,
options: {}
};

const myChart2 = new Chart(
document.getElementById('chart2'),
config2
);

///////////////////////////////////////////////////////// THIRD GRAPH \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
///////////////////////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// place canvas
let canvas3 = document.querySelector("#bodyContent");
let before3 = document.createElement("canvas");
canvas3.before(before3);

let apiLabelArray = [];

before3.setAttribute("id", "before3");

const ctxJson = document.getElementById('before3').getContext('2d');

let red = Math.floor(Math.random() * (255 - 1))
let green = Math.floor(Math.random() * (255 - 1))
let blue = Math.floor(Math.random() * (255 - 1))

let color = `rgb(${red},${green},${blue})`

 const myChart3 = new Chart(ctxJson, {
  type : 'line',
  data: {
    labels : "Data Api",
    datasets : [{
      label : "Data Api",
      data: [],
      borderColor : "#" + color,
      backgroundColor :"#" + color,
  }]
  },
  options: {
    scales: {
        y: {
            beginAtZero: true
        }
    }
}
});

// Refreshing the data of the API chart
function updateData(apiChart, apiLabel, apiData) {
  apiChart.data.labels = apiLabel;
  apiChart.data.datasets.forEach((apiDataSets) => {
    apiDataSets.data = apiData;
  });
  apiChart.update();
};

//Fecthing data in the url
function updateChart(){

async function fetchData(){
  const url= 'https://canvasjs.com/services/data/datapoints.php';
  const response = await fetch(url, {cache : "reload"});
  
  const datapoints = await response.json(); 

  return datapoints;
};
fetchData().then(datapoints => {
  for(i=0; i<datapoints.length; i++){
    console.log(datapoints[i][0])
   apiLabelArray[i] = datapoints[i][0];
   updateData(myChart3, apiLabelArray, datapoints);
  }
})
 console.log(apiLabelArray)
}
// Set a greater interval between updates
setInterval(updateChart, 3000)
