// create function that takes 2 strings. If 1st string is
// equal to "LOGGED_IN" or second string = Subscribed return
// true otherwise return false isLoggedInAndSubscribed("LOGGED_IN",SUBSCRIBED) -> true



function isLoggedInAndSubscribed(Logged_In, Subscribed){
if (Logged_In ==="LOGGED_IN" || Subscribed === "SUBSCRIBED")
return true
else 
return false
}

console.log(isLoggedInAndSubscribed("LOGGED_IN","SUBSCRIBED" ))

