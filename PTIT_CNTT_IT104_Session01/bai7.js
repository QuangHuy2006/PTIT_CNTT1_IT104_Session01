const sum = (...element) => {
    return element.reduce((total, curr) => total + curr, 0);
};
const arr = [];
arr.push(sum(1,2));
arr.push(sum(6, 7, 8));
arr.push(sum(12, 8));
console.log(arr);

