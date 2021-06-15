//FIRST DICE RANDOM NUMBER GENERATOR
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //FOR 1-6 NUMBER GENERATION

var randomSourceImage1 = "images/dice" + randomNumber1 + ".png";
//FOR RANDOM IMAGE SELECTION AND SOURCE .IT WILL SHOW ACCORDING TO NUMBER GENERATED.

var image1 = document.querySelectorAll("img")[0].setAttribute("src", randomSourceImage1);
//WE HAVE TO SELECT ELEMENTS BY querySelectorAll (ALL BECOZ WE HAVE TO SELECT ALL IMG TAGS) AND THEN TAG NAME AND THEN ITS LOCATION IN ARRAY AND THEN
//WE HAVE TO CHANGE ATTRIBUTE BY setAttribute (FIRST-WHAT TO CHANGE AND SECOND-WHOM TO CHANGE)



//SECOND DICE RANDOM NUMBER GENERATOR
var randomNumber2 = Math.floor(Math.random() * 6) + 1; //FOR 1-6 NUMBER GENERATION

var randomSourceImage2 = "images/dice" + randomNumber2 + ".png";
//FOR RANDOM IMAGE SELECTION AND SOURCE .IT WILL SHOW ACCORDING TO NUMBER GENERATED.

var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomSourceImage2);
//WE HAVE TO SELECT ELEMENTS BY querySelectorAll (ALL BECOZ WE HAVE TO SELECT ALL IMG TAGS) AND THEN TAG NAME AND THEN ITS LOCATION IN ARRAY AND THEN
//WE HAVE TO CHANGE ATTRIBUTE BY setAttribute (FIRST-WHAT TO CHANGE AND SECOND-WHOM TO CHANGE)


//USING CONDITONS FOR OUTPUT ACCORDING TO HIGHEST NUMBER
//THEN SELECT ELEMENTS BY querySelector (NOT ALL BCOZ H1 IS ONLY ONE).
//THEN CHANGE H1 BY .innerHTML


if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player-1 Wins🏆";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player-2 Wins🏆";
} else {
  document.querySelector("h1").innerHTML = ("Draw🎌");
}
