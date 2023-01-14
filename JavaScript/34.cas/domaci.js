// I zadatak

const niz = ["tarik", "hamed", "emin", "bakir", "dzenan"];

niz.forEach((student) => {
  console.log(`${student}`);
});

const niz4 = niz.map(
  (student) => student[0].toUpperCase() + student.toUpperCase().slice(1)
);
console.log(niz4);

// II zadatak

const niz1 = [2, 4, 6, 5];

const niz5 = niz1.map((broj) => broj ** 2);
console.log(niz5);

// III zadatak

const niz2 = [3, 5, 7, 1];

const niz6 = niz2.map((broj) => broj ** 2 / broj);
console.log(niz6);

// IV zadatak

const brojevi = [-5, 4, 3, 10, 14, -5];

const sqrt =(broj)=>{
    if(broj<0){
        return -1 * broj 
    }else{
        return broj ** 2
    }
}

const brojevi1 = brojevi.map(sqrt)
console.log(brojevi1)