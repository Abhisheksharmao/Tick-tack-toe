let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let newbutton = document.querySelector("#new");
let msgcontainer = document.querySelector(".msg");
let msge = document.querySelector("#ms");

let turn = true;

const win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 7, 4],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
const showwinner = (winner) => {
    msgcontainer.classList.remove("hide");
    msge.innerText = `winner is: ${winner}`;
};
const hidewinner = () => {
    msgcontainer.classList.add("hide");
};

const disablebox = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

const resetgame = () => {
    turn = true;
    enablebox();
}

const newgame = () => {
    turn = true;
    hidewinner();
    enablebox();
}

const enablebox = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerHTML = "";
    }
}
const check = () => {
    for (let pattern of win) {
        let post1val = boxes[pattern[0]].innerText;
        let post2val = boxes[pattern[1]].innerText;
        let post3val = boxes[pattern[2]].innerText;

        if (post1val != "" && post2val != "" && post3val != "") {
            if (post1val === post2val && post2val === post3val) {
                console.log("winner", post1val);
                disablebox();
                showwinner(post1val);
            }
        }
    }
};



boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("clicked");

        if (turn == true) {
            box.innerText = "O";
            turn = false;
        }
        else {
            box.innerText = "X";
            turn = true;
        }
        box.disabled = true;
        check();
    })
})
newbutton.addEventListener("click", newgame);
reset.addEventListener("click", resetgame);
