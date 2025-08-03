const arr1 = [1, 2, 3, 5, 9];
const arr2 = [4, 6, 7, 8];
let arr3 = [];
const combine = (arr1, arr2) => {
  arr3 = arr3.concat(arr1, arr2);
};
combine(arr1, arr2);
for (let i = 0; i < arr3.length; i++) {
  for (let j = 0; j < arr3.length - i - 1; j++) {
    if (arr3[j] > arr3[j + 1]) {
      let temp = arr3[j];
      arr3[j] = arr3[j + 1];
      arr3[j + 1] = temp;
    }
  }
}
console.log(arr3);
