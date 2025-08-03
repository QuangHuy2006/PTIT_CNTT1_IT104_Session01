let checkParity = (a) => {
  if (isNaN(a)) {
    if (a % 2 == 0) {
      console.log(`${a} is an even number`);
    } else {
      console.log(`${a} is an odd number`);
    }
  } else {
    console.log(`${a} not is number`);
  }
};
let a = prompt("nhap gia tri bat ky: ");
checkParity(a);
