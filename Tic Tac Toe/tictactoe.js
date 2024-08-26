let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let turnO = true;
let newGamebutton=document.querySelector("#new-game")
let msgContainer=document.querySelector(".msg-container")
let msg=document.querySelector("#msg")

const winningPattern = [
    [0, 1, 2],
    [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8]
];

//reset game
const resetGame=()=>{
    turnO=true;
    enableButton();
    msgContainer.classList.add("hide")
}

//new game
newGamebutton.addEventListener("click",resetGame)
resetBtn.addEventListener("click",resetGame)

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO===true){
            box.innerText="O"
            turnO=false
        }else{
            box.innerText="X"
            turnO=true
        }
        box.disabled=true
        checkWinner();
    })
})

const enableButton=()=>{
    for (let box of boxes) {
        box.disabled=false
        box.innerText=""
    }
}


const disableButton=()=>{
    for (let box of boxes) {
        box.disabled=true
    }
}

const showWinner=(winner)=>{
    msg.innerText=`Congratulations, Winner is ${winner}`
    msgContainer.classList.remove("hide")
    disableButton();
}


const checkWinner=()=>{
    for(let pattern of winningPattern){
        let position1Value=boxes[pattern[0]].innerText
        let position2Value=boxes[pattern[1]].innerText
        let position3Value=boxes[pattern[2]].innerText

        if(position1Value!=="" && position2Value!=="" && position3Value!==""){
          if(position1Value===position2Value && position2Value===position3Value){
            showWinner(position1Value)
          }  
        }
    }
}