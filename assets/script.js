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

let display = "777";
let target2 = document.createElement("div");
target2.innerHTML = display;
target.append(target2);
let penampungan = 0;

function ketikaTombolDitekan() {
  if (this.innerHTML === "=") {
    let hasil = eval(penampungan);
    target2.innerHTML = hasil;
    console.log(hasil);
  } else {
    penampungan = penampungan + this.innerHTML;
    console.log(penampungan);
    target2.innerHTML = penampungan;
  }
}
