let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newArray = [];

for (let i = 0; i < numbers.length; i += 1) {
    if(numbers[i] >= 1 && numbers[i] <= 25) {
        newArray.push(numbers[i]);
    }
}

console.log(newArray);