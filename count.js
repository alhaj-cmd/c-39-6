let countNum = document.getElementById('count');
let count = 0 , clear;



document.getElementById('countStr').addEventListener('click',()=>{
    clear = setInterval(ValueCount, 1000);
});

document.getElementById('countStp').addEventListener('click', () =>{
    clearInterval(clear);
})
document.getElementById('countRst').addEventListener('click', () =>{
    console.log('data')
    count= 0;
    countNum.innerHTML = count;
    // count= 0;
   
})

function ValueCount(){
    count++;
    countNum.innerHTML = count;
    
}