// ES5 Method
// This function will take your x value, multiply by the index,
//   and output it to a table

let arrX = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
[0, 2],
[0, 3]]
// console.table(arrX);

let arrC = [[0, 0, 0, 0, 0], [0, 1, 2, 3, 4]]

// A 2D array to print the x times tables, up to the value of x
function multiX(x) {
  for (i = 1; i <= x; i++) {
    console.table(x * i)
  }
}
// A function to print the x times table up to the value of y
function multiXY(x, y) {
  for (i = 1; i <= y; i++) {
    console.table(x * i)
  }
}

function multiZ(z) {
  let arrZ = [0]
  for (i = 1; i <= z; i++) {
    arrZ.push(i * z)
  }

  console.table(arrZ)
}

function multiE(z) {
  let arr0 = [0];
  let arr1 = [0];
  let arr2 = [0];
  let arr3 = [0];
  let arr4 = [0];
  let arr5 = [0];
  let arr6 = [0];
  let arr7 = [0];
  let arr8 = [0];
  let arr9 = [0];
  let arr10 = [0];

  for (i = 1; i <= z; i++) {
    arr1.push(i * 1)
    arr2.push(i * 2)
    arr3.push(i * 3)
    arr4.push(i * 4)
    arr5.push(i * 5)
    arr6.push(i * 6)
    arr7.push(i * 7)
    arr8.push(i * 8)
    arr9.push(i * 9)
    arr10.push(i * 10)
  }

  let arrP = [arr0, arr1, arr2, arr3, arr4, arr5, arr6, arr7, arr8,
    arr9, arr10]
  console.table(arrP)
}

// Jamie Weavis was here!
function multiJ(x) {
  let arrJ = [];
  for (i = 0; i <= x; i++) {
    let arrK = []
    for (j = 0; j <= x; j++) {
      arrK.push(i * j)
    }
    arrJ.push(arrK)
  }
  console.table(arrJ)
}