// call this API "https//jsonplaceholder.typicode.com/todos"
// and return all posts by any given user id.
async function firstSixIncomplete(userId) {
    // getting promise from fetch API
   const promise = await fetch("https://jsonplaceholder.typicode.com/todos");
    // converting from backend lan to json wait for it
   const result = await promise.json()
// result filter element if userId is = to parameter userId return 
// ! saying if its not true then slice it 6 times
   const incompleTasks = result.filter(elem => !elem.completed).slice(0,6)
console.log(incompleTasks)
}
 
firstSixIncomplete(6);