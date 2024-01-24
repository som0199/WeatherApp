let qoute = document.querySelector(".h1")
let form = document.querySelector("form")
let input = document.querySelector("input")
let h1 = document.querySelector("h1")
let h2 = document.querySelector("h2")
let p= document.querySelector("p")
let img= document.querySelector("#img1")
let cards = document.querySelector(".card")
let body = document.querySelector("body")
body.style.backgroundImage = "url(photo-1558486012-817176f84c6d.avif)"
body.style.backgroundPosition = "20%"
body.style.backgroundRepeat = "no-repeat"
body.style.backgroundSize = "cover"

const getQuote = async() =>{
    const respon = await fetch("https://quotable.io/random");
    const data = await respon.json();
    qoute.innerText = data.content +"- "+data.author;
    qoute.className= "mt-2"
    qoute.style.color = "aliceblue"
}
setInterval(()=>{
    getQuote();
},15000)


const fetchData = async(e) =>{
    e.preventDefault();
    try{
    const respon = await fetch(`https://api.weatherapi.com/v1/current.json?key=79e3902ab96d4464bfd85005240401&q=${input.value}&aqi=yes`)
    const data = await respon.json();
    // console.log(data)
     
    h1.innerText = data.current.temp_c+ "°C";
    h2.innerText = data.location.name;
    img.setAttribute('src', data.current.condition.icon)
    p.innerText = data.current.condition.text;
   
    if(data.current.condition.text === "Sunny" ){
        cards.style.backgroundColor = "lightyellow"
        cards.style.color="black"
    }else if(data.current.condition.text === "Fog"){
        cards.style.backgroundColor = "lavender"
        cards.style.color = "gray"
    }else if(data.current.condition.text === "Mist") {
        cards.style.backgroundColor = "lightgray"
        cards.style.color = "rgb(50, 50, 50)"
    }else if(data.current.condition.text === "Clear"){
        cards.style.backgroundColor = "lightskyblue"
    }else{
        cards.style.backgroundColor = "gray"
        cards.style.color = "black"
    }
    getQuote();

    }
    catch{
        window.alert("Invalid City Name")
    }
    form.reset();
};
form.addEventListener("submit",fetchData);
