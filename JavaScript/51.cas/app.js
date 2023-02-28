function max(arr) {
  for (i = 0; i < arr.length; i++) {
    for (i = k + 1; k < arr.length; k++) {
      if (niz[i] > niz[k]) {
        pom = niz[k];
        niz[k] = niz[i];
        niz[i] = pom;
      }
    }
  }
  console.log(max);
}

max([]);
