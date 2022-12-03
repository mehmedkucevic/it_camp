const domaci = () => {
  const recenica = prompt("unesite neku recenicu");
  let polaDuzine;

  polaDuzine =
    recenica.length % 2 === 0
      ? recenica.length / 2
      : Math.round(recenica.length / 2);
  const prva = recenica.toUpperCase();
  const druga = recenica.toLowerCase();
  const prvaPol = recenica.slice(0, polaDuzine).toUpperCase();
  const drugaPol = recenica
    .substring(polaDuzine, recenica.length)
    .toLowerCase();

  const treca = prvaPol.concat(drugaPol);
  const cetvrta = recenica.replace(/skola/gi, "fakultet");
  const peta = recenica.substr(0, 10);
  const sesta = recenica.slice(-10);
  return prva.concat(
    "\n",
    druga,
    "\n",
    treca,
    "\n",
    cetvrta,
    "\n",
    peta,
    "\n",
    sesta
  );
};
const isecak = "recenica za primenu slice metode  jednim argumentom.".slice(12);

console.log(domaci);
