function getInfo(){
    const newName = document.getElementById("cityInput");
    const cityName = document.getElementById("cityName");
    cityName.innerHTML ="--"+newName.value+"--"



// create a forLoops for the weather on the days
fetch("https://api.openweathermap.org/data/3.0/onecall?lat={44.31t}&lon={83.04}&exclude=&appid={f7170118c6f5c729fe08831daba425f2}")
.then(response => response.json())
.then(data=>{
for(i=0;i<5;i++){+
    document.getElementById("day" +(i+1)+"Min").innerHTML ="Min:" +Number(data.list[i].main.temp_min -200.53).toFixed(1)+"°";
}
    for(i=0;i<5;i++){+
    document.getElementById("day" +(i+1)+"Max").innerHTML ="Max:" +Number(data.list[i].main.temp_max -200.53).toFixed(1)+"°";
    
}
for(i=0;i<5;i++){+
    document.getElementById("day" +(i+1)+"Max").innerHTML ="Max:" +Number(data.list[i].main.temp_max -200.53).toFixed(1)+"°";
    
}
for(i=0;i<5;i++){
    document.getElementById("img" +(i=1)).src =" http://openweathermap.org/img/wn/" +data.list[i].weather[0].icon+".png";
}
})

.catch(err => alert("Something Went Wrong"))
}

function DefaultScreen(){
    document.getElemntById("cityInput").defaultValue ="Detroit"
    getInfo();
}
const d =new Date();
const weekday =["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function ChekDay(day){
    if (day +d.getDay() > 6){
        returnday +d.getDay()-7;  
    }
    else{
        return day +d.getDay();
    }
}

for(i=0;i<5;i++){
    document.getEElemntById("day"+(i+1)).innerHTML = weekday[CheckDay]
}