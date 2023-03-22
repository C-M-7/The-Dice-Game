var sum1=0,sum2=0;
document.querySelector(".btn2").disabled = true;
// function for checking the results
function check(){
  // player 1 wins
    if(sum1>=30){
      document.querySelector("h1").style.color="#B2A4FF";
      document.querySelector("h1").style.backgroundColor="#411530";
      document.querySelector("h1").textContent="Player 1 Won";
      document.querySelector(".btn1").textContent="Game Over";
      document.querySelector(".btn2").textContent="Game Over";
      document.querySelector(".btn1").disabled="true";
      document.querySelector(".btn2").disabled="true";
      document.querySelector(".spn1").textContent="Game Over, Reload to Play Again";
      document.querySelector(".removeme").style.display="none";
    }
  //player 2 wins
    if(sum2>=30){
      document.querySelector("h1").style.color="#B2A4FF";
      document.querySelector("h1").style.backgroundColor="#411530";
      document.querySelector("h1").textContent="Player 2 Won";
      document.querySelector(".btn1").textContent="Game Over";
      document.querySelector(".btn2").textContent="Game Over";
      document.querySelector(".btn1").disabled="true";
      document.querySelector(".btn2").disabled="true";
      document.querySelector(".spn1").textContent="Game Over, Reload to Play Again";
      document.querySelector(".removeme").style.display="none";
    }
}
// Turn of Player 1
function refresh(){
var a = Math.random();
a = Math.floor(a*6)+1;
sum1=sum1+a;
document.querySelector(".btn1").textContent="Roll Again";
document.querySelector(".fst img").setAttribute("src", "images/dice"+a+".png");
document.querySelector(".sp1").textContent=sum1;
document.querySelector(".spn1").textContent="~ Turn of Player 2 ~";
document.querySelector(".btn1").classList.toggle("x");
document.querySelector(".btn2").classList.toggle("x");
document.querySelector(".hey").classList.toggle("dis");
document.querySelector(".hey2").classList.toggle("dis");
document.querySelector(".btn1").disabled = true;
document.querySelector(".btn2").disabled = false;
check();
}
// Turn of player 2
function refresh2(){
var b = Math.random();
b = Math.floor(b*6)+1;
sum2=sum2+b;
document.querySelector(".btn2").textContent="Roll Again";
document.querySelector(".scnd img").setAttribute("src", "images/dice"+b+".png");
document.querySelector(".sp2").textContent=sum2;
document.querySelector(".spn1").textContent="~ Turn of Player 1 ~";
document.querySelector(".btn1").classList.toggle("x");
document.querySelector(".btn2").classList.toggle("x");
document.querySelector(".hey").classList.toggle("dis");
document.querySelector(".hey2").classList.toggle("dis");
document.querySelector(".btn1").disabled = false;
document.querySelector(".btn2").disabled = true;
check();
}
