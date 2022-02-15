function sortArray(array){
    for (let i = 0; i < array.length - 1; i++){
        for (let j = i + 1; j < array.length; j++){
            if (array[i] > array[j]){
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }

    return array;
}

function divisibles(arr){
    let sum = 0;

    for (let q = 0; q < arr.length; q++){
        if (arr[q] % 5 === 0){
            sum = sum + arr[q];
        }
    }
    return sum;
}

function printArray(arr){
    for (let q = 0; q < arr.length; q++){
        console.log(arr[q]);
    }
}

let array = [4,3,55,5,0,1,-2];
let x = sortArray(array);
console.log("The sum is: " + divisibles(x));
printArray(x);