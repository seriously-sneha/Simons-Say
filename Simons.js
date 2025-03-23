//add logic og highest score in it

let gameSeq=[];
let userSeq=[];

let btns=["pink","orange","teal","violet"];

let started=false;
let level=0;

let h2=document.querySelector("h2");


//start
document.addEventListener("keypress",function(){
    if(started==false){
        console.log("Game Started");
        started=true;
        levelUp();
    }
})


function gameFlash(btn){
    btn.classList.add("gameFlash")
    setTimeout(function(){
        btn.classList.remove("gameFlash")}
        ,400
    )
}

function userFlash(btn){
    btn.classList.add("userFlash")
    setTimeout(function(){
        btn.classList.remove("userFlash")}
        ,400
    )
}

//levelup round gameflash
function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;

    //random btn choose by js
    let ranIdx= Math.floor(Math.random()*4);
    let ranColor= btns[ranIdx];
    let ranBtn=document.querySelector(`.${ranColor}`)//eg(.blue)
    // console.log(ranIdx);
    // console.log(ranColor);
    // console.log(ranBtn);
    gameSeq.push(ranColor);
    console.log(gameSeq);
    gameFlash(ranBtn);
}

//check color equality
function checkAns(idx){
    
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        h2.innerHTML=`Game Over!Your score was <b>${level}</b> ,<br/> Press Any key to start`;
        document.querySelector("body").style.backgroundColor="#a73756";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor="white";
        }, 155);
        reset();
    }
     
}


//userRound flash
function btnPress(){
    let btn=this;
    userFlash(btn);

    userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    console.log(userColor);

    checkAns(userSeq.length-1);

}

let allBtns=document.querySelectorAll('.btn');
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}