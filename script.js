let boxes = document.querySelectorAll(".box");
let winMsg = document.querySelector(".winner-msg");
let msg = document.querySelector(".msg");

let count;
let turnO = true;

const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    winMsg.classList.remove("hide");
}

const checkWinner = () => {
    for (let i of winPattern) {
        let pos1val = boxes[i[0]].innerText;
        let pos2val = boxes[i[1]].innerText;
        let pos3val = boxes[i[2]].innerText;

        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                showWinner(pos1val);
            }
        }
    }
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO === true) {
            box.innerText = "O"
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        };
        box.disabled = true;
        count++;
        checkWinner();
    });
})

