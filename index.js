

// player 1 codes
var randomNumber1 = Math.floor(Math.random()*6)+1; // 1-6 randoms
var randomDice1 = ("dice"+randomNumber1+".png");
var randomImage1 = ("images/"+randomDice1);
document.querySelectorAll("img")[0].setAttribute("src", randomDice1);


// player 2 codes
var randomNumber2 = Math.floor(Math.random()*6)+1; 
var randomDice2 = ("dice"+randomNumber2+".png");
var randomImage2 = ("images/"+randomDice2);
document.querySelectorAll("img")[1].setAttribute("src", randomDice2);

// the scoring patter
if(randomNumber1 > randomNumber2){
   document.querySelector("h1").innerHTML="👮‍♂️(San)wins😂"
}else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML="👮‍♀️(Egom)wins😂"
}else{
    document.querySelector("h1").innerHTML="🫂Draws🫂"
}
