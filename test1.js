// const evenTaen = () => for (i = 0; i <= 10; i++) { i % 2 == 0}

function printTen() {
  for (let i = 0; i <= 10; i++) {
    console.log(i)
  }
}

function evenTen() {
  for (let i = 0; i <= 10; i++) {
    if (i % 2 == 0)
      console.log(i)
  }
}

function evenX() {
  let x = 0;
  while (x !== 11) {
    if (x % 2 == 0)
      console.log(x);
    x++;

  }
}

// ES6 Method
let printEven = (num) => {
  let x = 0;
  while (x !== num + 1) {
    if (x % 2 == 0)
      console.log(x);
    x++;
  }
}
