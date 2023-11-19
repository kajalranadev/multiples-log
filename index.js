console.clear();

//  multiplication table
function showTable(num) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${num} X ${i} = ${num * i}`);
  }
}
console.log("Calling showTable(5):");
// multiplication table for 5
showTable(5);

//  reverse multiplication table
function reverseTable(num) {
  for (let i = 10; i >= 1; i--) {
    console.log(`${num} X ${i} = ${num * i}`);
  }
}

// reverse multiplication table for 6
console.log("Calling reverseTable(6):");
reverseTable(6);

// multiplication table, skipping when i is 5

function skipTable(num) {
  for (let i = 1; i <= 10; i++) {
    if (i === 5) {
      continue;
    }
    console.log(`${num} X ${i} = ${num * i}`);
  }
}

// multiplication table for 4, skipping when i is 5
console.log("Calling skipTable(4):");
skipTable(4);

// multiplication table, break  when i is greater than 7

function skipLastTable(num) {
  for (let i = 1; i <= 10; i++) {
    if (i > 7) {
      break;
    }
    console.log(`${num} X ${i} = ${num * i}`);
  }
}

// multiplication table for 10, breaking when i is greater than 7
console.log("Calling skipLastTable(10):");
skipLastTable(10);
