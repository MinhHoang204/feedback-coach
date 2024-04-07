let number = 0;
let comment = [];
localStorage.setItem("comment", comment);
let number1 =document.getElementsByClassName("number")[0];
number1.addEventListener("click", index1);
function index1(){
    console.log(1);
    number = 1;
}

let number2 = document.getElementsByClassName("number")[1];
number2.addEventListener("click", index2);
function index2() {
    resetColor();
    number2.computedStyleMap.backgroundColor = "red";
    number = 2;
}

let number3 = document.getElementsByClassName("number")[1];
number3.addEventListener("click", index3);
function index3() {
    resetColor();
    number3.computedStyleMap.backgroundColor = "red";
    number = 3;
}

let number4 = document.getElementsByClassName("number")[1];
number4.addEventListener("click", index4);
function index4() {
    resetColor();
    number4.computedStyleMap.backgroundColor = "red";
    number = 4;
}

let number5 = document.getElementsByClassName("number")[1];
number5.addEventListener("click", index5);
function index5() {
    resetColor();
    number5.computedStyleMap.backgroundColor = "red";
    number = 5;
}

let number6 = document.getElementsByClassName("number")[1];
number6.addEventListener("click", index6);
function index6() {
    resetColor();
    number6.computedStyleMap.backgroundColor = "red";
    number = 6;
}

let number7 = document.getElementsByClassName("number")[1];
number7.addEventListener("click", index7);
function index7() {
    resetColor();
    number7.computedStyleMap.backgroundColor = "red";
    number = 7;
}

let number8 = document.getElementsByClassName("number")[1];
number8.addEventListener("click", index8);
function index8() {
    resetColor();
    number8.computedStyleMap.backgroundColor = "red";
    number = 8;
}

let number9 = document.getElementsByClassName("number")[1];
number9.addEventListener("click", index9);
function index9() {
    resetColor();
    number9.computedStyleMap.backgroundColor = "red";
    number = 9;
}

let number10 = document.getElementsByClassName("number")[1];
number10.addEventListener("click", index10);
function index10() {
    resetColor();
    number10.computedStyleMap.backgroundColor = "red";
    number = 10;
}
function resetColor() {
    number1.style.backgroundColor = "rgb(231, 231, 231";
    number2.style.backgroundColor = "rgb(231, 231, 231";
    number3.style.backgroundColor = "rgb(231, 231, 231";
    number4.style.backgroundColor = "rgb(231, 231, 231";
    number5.style.backgroundColor = "rgb(231, 231, 231";
    number6.style.backgroundColor = "rgb(231, 231, 231";
    number7.style.backgroundColor = "rgb(231, 231, 231";
    number8.style.backgroundColor = "rgb(231, 231, 231";
    number9.style.backgroundColor = "rgb(231, 231, 231";
    number10.style.backgroundColor = "rgb(231, 231, 231";
}

let input = document.getElementById("input");
let button = document.getElementById("button");
button.addEventListener("click", save);
function save() {
    if(number == 0) {
        alert("Vui long chon diem");
    } else if (input.value == ""){
        alert("Vui long binh luan");
    } else {
        let arr = {
            id: Math.floor(Math.random() * 1000000)
            point: number,
            comment: input.value
        };
        assess.push(arr);
        localStorage.setItem("assess", JSON.stringify(assess));
    }
}

let local = document.getElementById("local");
function loadAssess {
    let text = "";
    for (let i = 0; i < assess.length; i++) {
        text == `
        <div class="comment">
                    <div id="point">${assess[i].point}</div>
                    <div id="point2">${assess[i].comment}</div>
        </div>
        <div class="edit">
          <div><i class="fa-ragular fa-pen-to-square"></i></div>
        <div><i class="fa-soild fa-x"></i></div>
         </div>
        `;
    }
}
local.innerHTML = text;