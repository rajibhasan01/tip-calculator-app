let tipField = document.getElementById('tip');
let totalField = document.getElementById('total');
let billField = document.getElementById('bill');
let peopleField = document.getElementById('people');

document.getElementById("btn").addEventListener('click', (event)=>{
    let number = parseInt (event.target.innerText) || parseInt(event.target.value);
    const bill = document.getElementById('bill').value;
    const billCheck = checkValidation(bill, 'bills');
    const people = document.getElementById('people').value;
    const peopleCheck = checkValidation(people, "peoples");
    
    if(billCheck && peopleCheck && !isNaN(number)){
        updateTotal(number, bill, people, tipField, totalField);
       
    }


    
})

document.getElementById('reset').addEventListener('click', ()=>{
    resetAll('bills');
    resetAll('peoples');

})

function resetAll(id){
    tipField.innerText = '0.00';
    totalField.innerText = '0.00';
    billField.value = '';
    peopleField.value = '';
    document.getElementById('custom').value = '';
    
    setValue(id);
}

function setValue(id){
    document.getElementById('text-show-' + id).style.display = 'none';
    document.getElementById(id).classList.remove("design");
    
}



function checkValidation(input, id){
    if(input <= 0){
        document.getElementById('text-show-'+id).style.display = 'block';
        document.getElementById(id).classList.add("design");
        return false;
    }
    else{
        setValue(id);
        return true;
    }

}

function updateTotal(number, bill, people, tipField, totalField){
    const tip = (bill * (number/100)) / people;
    const total = tip + (bill/people);
    tipField.innerText = tip.toFixed(2);
    totalField.innerText = total.toFixed(2);
    setValue('bills');
    setValue('peoples')
}
