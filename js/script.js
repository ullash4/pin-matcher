// Genarate random numbers 
document.getElementById('pin-btn').addEventListener('click', function genaratePin(){
    const pin = Math.round(Math.random()*10000);
    const stringPin = pin+'';
    if(stringPin.length == 4){
        console.log(stringPin);
    }
    else{
        return genaratePin();
    }
    document.getElementById('pin-input').value = stringPin;
})
// Make calculator alive 
document.getElementById('keypad').addEventListener('click', function (event){
    const number = event.target.innerText;
    const calc = document.getElementById('number-input');
    if(isNaN(number)){
        if(number == 'C'){
            calc.value = '';
        }
    }
    else{
        
        const oldCalc = calc.value;
        const newCalc = oldCalc + number;
        calc.value = newCalc;
    }
    
});
// Verify Pin 
document.getElementById('submit-btn').addEventListener('click', function (){
    const genaratePin = document.getElementById('pin-input').value;
    const typePin = document.getElementById('number-input').value;
    if(genaratePin == typePin){
        document.getElementById('suc-sms').style.display = 'block';
        document.getElementById('fail-sms').style.display = 'none';
    }
    else{
        document.getElementById('fail-sms').style.display = 'block';
        document.getElementById('suc-sms').style.display = 'none';
    }
})
