function myfunction() {
    let age = document.getElementsByTagName("input")[0].value; // <--- ska läsa input number
    let vip = document.getElementsByTagName("input")[1].checked; // <--- ska läsa input checkbox

    if (vip == true) alert("WELCOME MY BEST CUSTOMER ;)");
    else if (age >= 18) alert("Access granted");
    else alert("Access denied");

    /*
if ( age >= 18  ||  vip == true  ) {
        alert("WELCOME MY BEST CUSTOMER ;)");
} 

if (age >= 18) {
    alert("Access granted");
} else {
    alert("Access denied");
}

*/
}

/* function Anna() {

cond = (i > 17) && (vip = true)
if (vip = true) {
    alert("Welcome in my best VIP customer :)");
if (i > 17)
    alert("Access Granted")
} else {
    alert("Access Denied");
}
}*/

/*let age = 17;
let vip = true;

// && och / and om båda är true då är all true    
// || eller / or om någon är sann då är allt sant
if ( age >= 18  ||  vip == true  ) 
   alert("Access Granted") 
   else
   alert("Access Denied") */
