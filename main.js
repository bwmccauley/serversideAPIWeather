function getInfo(){
    const newName = document.getElementById("cityInput");
    const cityName = document.getElementById("cityName");
    cityName.innerHTML ="--"+newName.value+"--"



// create a forLoops for the weather on the days
fetch("https://api.openweathermap.org/data/3.0/onecall?lat=44.31&lon=83.04&exclude=&appid=f7170118c6f5c729fe08831daba425f2")
.then(response => response.json())
.then(data=>{
    console.log (data)
for(var i = 0; i<5 ;i++){
    console.log("day" +(i+1)+"Min")
    document.getElementById("day" +(i+1)+"Min").innerHTML ="Min:" +Number(data.daily[i].temp.min -200.53).toFixed(1)+"°";
}
    for(var j = 0; j<5; j++){
    document.getElementById("day" +(j+1)+"Max").innerHTML ="Max:" +Number(data.daily[j].temp.max -200.53).toFixed(1)+"°";
    
}
// for(i=0;i<5;i++){
//     document.getElementById("day" +(i+1)+"Max").innerHTML ="Max:" +Number(data.list[i].main.temp_max -200.53).toFixed(1)+"°";

// }
for(var k = 0; k<5; k++){
    document.getElementById("img" +(k+1)).src = `https://openweathermap.org/img/wn/${data.daily[k].weather[0].icon}@2x.png`;
}

})

.catch(err => console.log (err))
}

function defaultScreen(){
    document.getElementById("cityInput").defaultValue ="Detroit"
    getInfo();
}
const d =new Date();
const weekday =["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
defaultScreen()
function ChekDay(day){
    if (day +d.getDay() > 6){
        returnday +d.getDay()-7;  
    }
    else{
        return day +d.getDay();
    }
}

// for(i=0;i<5;i++){
   // document.getEElemntById("day"+(i+1)).innerHTML = weekday[CheckDay]
// }