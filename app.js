// Given a array of elements, return the same length array
//  filled with 0's convertToZeros([5,100,0]) -->
function convertToZeros(arr){
    let newArr = []
    for (let i = 0; i < arr.length;  ++i) {
        newArr[i] = 0
 }
   return newArr;
}
console.log(convertToZeros([5,100,0]))