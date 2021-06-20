var name = prompt("what is your name?")

alert("welcome to Games Wiki " + name)

var Age = prompt("How are you?")

if(Age >= 18){
  alert("That means you can see and play every game in our website")
}
else{
  alert("You cannot see or play every game we have in the website. You are welcome to try what suits you")

}

function Game(){
var FavGame = prompt("what is your favorite game? GTA V, Fallout 4 or Animal Crossing?")

while(FavGame != "GTA V" && FavGame != "Fallout 4" && FavGame != "Animal Crossing") {
  FavGame = prompt("Please enter a valid name from the previous options")
}

if(FavGame == "GTA V"){
  alert("Great! We have what you are asking for.")
}
else if(FavGame == "Fallout 4"){
  alert("Great! We have what you are asking for.")
}
else if(FavGame == "Animal Crossing"){
  alert("Great! We have what you are asking for.")
}
else{
  alert("Sorry, we don't have what you asked for, but feel free to see what we have.")
}
}
Game();

var GamNum = prompt("How many times would like to download you favorite game?")

for(var i = 1; i <= GamNum; i++){

document.write("<div>" + "<img src='https://www.rockstargames.com/V/img/global/order/GTAV-PC.jpg' width='500' height='500' class='InDivImg'>" + "<h4>" + "GTA V" + "</h4>" + "</div>"

)

document.write(i)
<<<<<<< HEAD
}

function rating (num){
for (var i = 0; i < num; i++){

  document.write("<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Golden_star.svg/1200px-Golden_star.svg.png'>")
=======
>>>>>>> 8882f344cc22c8798db9e131def415d8be0a8868
}

}

var starsNum = prompt('How many stars do you rate our website?')

rating(starsNum);