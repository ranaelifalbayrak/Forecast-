var apiKey ="8f07af7e6660169955d864961e85f030"
var city=document.getElementById("input")

function show(){
    const xhr = new XMLHttpRequest()
    xhr.onload=function(){
        if(this.status===200){
        var data = JSON.parse(this.responseText)
        displayForecast(data)
    }if(this.status===404||this.status===400){
        document.getElementById("error").innerHTML="Not Found.Try Again.&#128532"
        setTimeout( () => document.getElementById("error").innerHTML="", 2000 );
    }}
    xhr.open("GET","https://api.openweathermap.org/data/2.5/weather?q="+city.value+"&appid="+apiKey)
    xhr.send()
}

function displayForecast(data){
    var city=data['name']
    var description = data['weather']["0"]["description"]
    var temp = Math.round(data['main']["temp"]-273)
    var country=data["sys"]["country"]
    document.querySelector(".city").innerHTML="Weather in "+city+"  ("+country+")"
    document.querySelector(".description").innerHTML=description
    document.querySelector(".temperature").innerHTML=temp+"°C"
    document.querySelector(".icon").src=icon

}

city.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("search").click();
  }
});