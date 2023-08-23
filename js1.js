
let playscors=0;
let computerscore=0;




function playRound(playerSelection,getComputerChoice){
    if (getComputerChoice===playerSelection){ 
        alert("tie");
    }
    else if(((( getComputerChoice === "paper")&&(playerSelection==="scissors")) || 
    ((getComputerChoice==="scissors")&&(playerSelection==="rock"))) || 
    ((getComputerChoice==="rock")&&(playerSelection==="paper")))
 {
    alert("you won this round");
        playscors +=1;

    }
    else if (
        (getComputerChoice==="rock" && playerSelection==="scissors")||
        (getComputerChoice==="scissors" && playerSelection==="paper")||
        (getComputerChoice==="paper" && playerSelection==="rock")
    ){
        alert("you lost this round");
       computerscore +=1;
       
    }
    console.log(computerscore);
    console.log(playscors);


}

function playerSelection(){
    while(true){
        var player_choice = prompt("what will you choose");
        player_choice=player_choice.toLowerCase();
        if(player_choice == "rock" || player_choice == "paper" || player_choice == "pcissors"){
            break;
        }
    }
    console.log(player_choice);
    return player_choice;
}




function getComputerChoice(){
    let items = ["rock", "paper", "scissors"];
    let comp_choice = items[Math.floor(Math.random()*items.length)];
    console.log(comp_choice);
    return comp_choice;
}

function game(){
    while (playscors != 5 || computerscore != 5){
        playRound(playerSelection(),getComputerChoice());
        if(playscors == 5){
            alert( "player won the game");
            break;
        }
        else if(computerscore == 5){
            alert("the computer won the game");
            break;
        }
    }
    
}
game();

