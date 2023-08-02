let buttons = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "+",
  "-",
  "*",
  "/",
  "=",
  "clear",
];

let target = document.getElementById("generated");

for (i = 0; i < buttons.length; i++) {
  let elemenBaru = document.createElement("button");
  elemenBaru.innerHTML = buttons[i];
  target.append(elemenBaru);
  elemenBaru.addEventListener("click", ketikaTombolDitekan);
}

let display = "Display";
let target2 = document.createElement("div");
target2.classList.add("display");
target2.innerHTML = display;
target.append(target2);
let penampungan = "";

function ketikaTombolDitekan() {
  if (penampungan === "Display"){
        penampungan= "";
    }
  if (this.innerHTML === "clear"){
    penampungan = "Display";
    target2.innerHTML = penampungan;
  } else if (this.innerHTML === "=") {
    let hasil = eval(penampungan);
    target2.innerHTML = hasil;
    console.log(hasil);
  } else {
    penampungan = penampungan + this.innerHTML;
    console.log(penampungan);
    target2.innerHTML = penampungan;
  }
}

