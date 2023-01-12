// callback funkcije //

// callback funkcija predstavlja funckiju koju saljemo kao argument neke druge funkcije
// Sam argument ne treba da bude
function main(func) {
  console.log("radnja unutar main funkcije");
  func();
  console.log("kraj main funkcije");
}

function callback() {
  console.log("radnjaa unutar callback funkcije");
}

main(callback);

// napraviti glavnu funk unutar kje ce se desiti ispis sta ona predstavlja, a celu stvar ce da izvrsi callback funk. callback funkcija ima 2 parametra i ispisuje rezultat par1 stepenovan par2

const main3 = (callBack2) => {
  console.log("prvi broj stepenovan drugim je:");
  callBack3(2, 3);
};

const callBack3 = (par1, par2) => {
  console.log(par1 ** par2);
};
main3(callBack3);
