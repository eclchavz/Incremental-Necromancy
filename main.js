console.log("main.js loaded")

// Variables
let mana = 50; // Start with 50 mana
let apprentices = 0; // Generate Ghouls
let corpses = 5; // Start with 5 corpses
let ghouls = 0; // Generate mana
let apprenticeCostMana = 100;
let apprenticeCostGhouls = 10;
let ghoulCostMana = 15;
let manaMult = 1;
let corpseMult = 1;
let ghoulMult = 1;
let killingFields = 1; // Generate Corpses (start with 1)

// Functions
function addMana(amount){
    mana += amount;
    document.getElementById("mana").innerHTML = mana;
}

function addApprentice(amount){
    apprentices += amount;
    document.getElementById("apprentices").innerHTML = apprentices;
}


function addCorpse(amount){
    corpses += amount;
    document.getElementById("corpses").innerHTML = corpses;
}

function addGhoul(amount){
    ghouls += amount;
    document.getElementById("ghouls").innerHTML = ghouls;
}

function buyApprentice(){
    if(mana >= apprenticeCostMana && ghouls >= apprenticeCostGhouls && corpses > 0){
        mana -= apprenticeCostMana;
        ghouls -= apprenticeCostGhouls;
        corpses--;
        document.getElementById("mana").innerHTML = mana;
        document.getElementById("ghouls").innerHTML = ghouls;
        document.getElementById("corpses").innerHTML = corpses;
        addApprentice(1);
    }
}

function buyGhoul(){
    if(mana >= ghoulCostMana && corpses > 0){
        mana -= ghoulCostMana;
        corpses--;
        document.getElementById("mana").innerHTML = mana;
        document.getElementById("corpses").innerHTML = corpses;
        addGhoul(1);
    }
}

setInterval(function(){
    addMana(manaMult * ghouls);
    addCorpse(corpseMult * killingFields);
    addGhoul(ghoulMult * apprentices);
}, 1000) // Every 1000ms (1s)