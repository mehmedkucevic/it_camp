//neparni brojevi od 1 do 20
for(let i=1;i<=20;i+=2){
    console.log(i)
}

for(let i=1;i<=20;i++){
   if(i%2==0){
      continue
   }
  else{
       console.log(i)
  }
}


//brojevi od 50 do 100 deljivi sa 5

for(let i=50;i<=100;i++){
   if(i%5==0){
       console.log(i)
} 
  else{
       continue
         }
}


//dvostruka vrednost prirodnih brojeva od 6 do 14
for(let i=6;i<=14;i++){
  console.log(2*i)
}

//suma neparnih prirodnih brojeva od 10 do 20
let x=0;
for(let i=11;i<=20;i+=2){
   console.log(x=x+i)
   }