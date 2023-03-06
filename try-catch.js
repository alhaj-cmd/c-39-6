// console.log('try');
function cheackAge(){
    // console.log('check list')
    const ageField = document.getElementById('age');
    const ageText = ageField.value;
    const errorTag = document.getElementById('error')
    
    try{
// console.log(bBaria);
const age = parseInt(ageText)
if(isNaN(age)){
    // console.log('age not found',age, ageText)
    throw('that is not a value')
}
    }
    catch(err){
        console.log('Error:', err)
        errorTag.innerHTML = 'some one'
    }
    console.log(1111);
}