// myInterval=setInterval(fun, 1000);
// function fun(){
//     var d = new Date();
//     document.getElementById('timer').innerHTML=d.toLocaleTimeString();
// }

// step two anonimus function

// var myInterval=setInterval(function()  { 
//     var d = new Date();
//     document.getElementById('timer').innerHTML=d.toLocaleTimeString();
// }, 1000);

// step three arrow function
var myInterval=setInterval(() => { 
    var d = new Date();
    document.getElementById('timer').innerHTML=d.toLocaleTimeString();
}, 1000);