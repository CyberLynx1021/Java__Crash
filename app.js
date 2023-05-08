// Given an array of truthy and falsy values return same
// array of elements into its boolean value.
// converToBoolean([500,0,"David","",[])
function converToBoolean(arr){
arrNew = []
// Makes every element either truth or falsy depending on value
return arr.map(elem => !!elem)
  }

console.log(converToBoolean([500,0,0,"David","",]))