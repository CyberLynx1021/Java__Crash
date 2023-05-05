// console.log(fetch("https://jsonplaceholder.typicode.com/users/1"))
const emailRef = document.querySelector(".email");
console.log(emailRef)
// 1 Then second
fetch("https://jsonplaceholder.typicode.com/users/1").then((response) =>{
    response.json().then(data => {
        console.log(data)
    })
})