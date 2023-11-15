let scoreHome = document.getElementById("home-score");
let scoreGuest = document.getElementById("guest-score");

console.log(scoreHome);

function addOneH(){
    let scoreTotal = parseInt(scoreHome.textContent) + 1;
    scoreHome.textContent = scoreTotal;
}

function addTwoH(){
    let scoreTotal = parseInt(scoreHome.textContent) + 2;
    scoreHome.textContent = scoreTotal;
}

function addThreeH(){
    let scoreTotal = parseInt(scoreHome.textContent) + 3;
    scoreHome.textContent = scoreTotal;
}



function addOneG(){
    let scoreTotal = parseInt(scoreGuest.textContent) + 1;
    scoreGuest.textContent = scoreTotal;
}

function addTwoG(){
    let scoreTotal = parseInt(scoreGuest.textContent) + 2;
    scoreGuest.textContent = scoreTotal;
}

function addThreeG(){
    let scoreTotal = parseInt(scoreGuest.textContent) + 3;
    scoreGuest.textContent = scoreTotal;
}

