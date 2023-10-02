const b1=document.getElementById("b1");
const b2=document.getElementById("b2");
const p1=document.getElementById("result");

b1.addEventListener("click", rollDice);

function rollDice(){
    const rand1= Math.floor(Math.random() * (6) + 1);
    const rand2=Math.floor(Math.random() * (6) + 1);
    b1.textContent = rand1;
    b2.textContent = rand2;
    p1.textContent = "Total is "+(rand1+rand2);
}
