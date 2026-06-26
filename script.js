let boxes = document.querySelectorAll(".box");
let Resetbtn = document.querySelector(".reset-btn");
let newGmebtn = document.querySelector(".New-btn");
let msgContain = document.querySelector(".msg-container");
let WinnMsg = document.querySelector("#msg");

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5], 
    [6, 7, 8], 
    [0, 3, 6], 
    [1, 4, 7], 
    [2, 5, 8], 
    [0, 4, 8], 
    [2, 4, 6], 
];

let Player1 = true;

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(Player1){
            box.textContent = "O";
            Player1 = false;
        } else {
            box.textContent = "X";
            Player1 = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const checkWinner = () => {
    for(let pattern of winPatterns) {
        let pos1 = boxes[pattern[0]].textContent;
        let pos2 = boxes[pattern[1]].textContent;
        let pos3 = boxes[pattern[2]].textContent;

        if(pos1 !== "" && pos2 !== "" && pos3 !== "") {
            if(pos1 === pos2 && pos2 === pos3) {
                showWinner(pos1);
            }
        }
    }
};

const showWinner = (winner) => {
    WinnMsg.textContent = `Congrats! Winner is ${winner}`;
    msgContain.classList.remove("hide");
};

const resetGame = () => {
    Player1 = true;
    boxes.forEach((box) => {
        box.textContent = "";
        box.disabled = false;
    });
    msgContain.classList.add("hide");
};

Resetbtn.addEventListener("click", resetGame);
newGmebtn.addEventListener("click", resetGame);