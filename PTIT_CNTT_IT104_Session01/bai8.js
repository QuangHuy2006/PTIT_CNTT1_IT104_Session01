const arr1 = [1, 2, 3, 7, 8];
const arr2 = [4, 5, 6];
let arr3 = [];
const combine = (arr1, arr2, pos) => {
  if (pos == arr1.length) {
    arr3 = arr3.concat(arr1, arr2);
  } else {
    const temp = arr1.slice(pos, arr1.length);
    const secTemp = arr1.slice(0, pos);
    arr3 = arr3.concat(secTemp, arr2, temp);
  }
};
combine(arr1, arr2, 3);
console.log(arr3);

