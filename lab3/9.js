let i = 0;
while (i < 3) { // shows 0, then 1, then 2
  console.log( i );
  i++;
}

let t = 0;

for (t = 0; t < 3; t++) { // use an existing variable
  alert(t); // 0, 1, 2
}

alert(t); // 3, visible, because declared outside of the loop