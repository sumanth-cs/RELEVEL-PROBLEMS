
let arr = [123,32,421,22,65];

//for minimum and maximum
let min = arr[0];
let max = arr[0];
for (let i = 1; i < arr.length; i++){
    if(arr[i] < min){
        min = arr[i];
    }
    if(arr[i] > max){
        max = arr[i];
    }
}
console.log(min,max);
