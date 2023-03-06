// console.log(2);
// console.log(3);
// let number = 0;
// const load=document.getElementById('timeData').addEventListener('click',()=>{
//     const startTime = document.getElementById('start')
//     const setTime = startTime.innerText;
//     console.log(setTime,'number')
//      const intervalId = setInterval((setTime) =>{

//         console.log(++number)
//         if(number ===10){
//             clearInterval(intervalId);
//         }
//         },1000)
        
        

// })

// console.log(4)


let nIntervId =0

function changeColor() {
  // check if an interval has already been set up
  if (!nIntervId) {
    nIntervId = setInterval(flashText, 1000);
  }
}

function flashText() {
  const oElem = document.getElementById("my_box");
  oElem.className = oElem.className === "go" ? "stop" : "go";
}

function stopTextColor() {
  clearInterval(nIntervId);
  // release our intervalID from the variable
  nIntervId = null;
}

document.getElementById("start").addEventListener("click", changeColor);
document.getElementById("stop").addEventListener("click", stopTextColor);
