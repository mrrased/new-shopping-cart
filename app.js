document.getElementById('increment-plus-button').addEventListener('click', function(){

    // const currentValue = document.getElementById("input-increment-value")
    // const incrementValue = currentValue.value;
    // const intValue = parseInt(incrementValue) + 1;
    // currentValue.value = intValue;
    updateIncrementDecrementValue(true);
    
    
})


document.getElementById('decrement-minus-button').addEventListener('click', function(){

    updateIncrementDecrementValue();
    // const currentMinusValue = document.getElementById('input-increment-value')
    // const decrementValue = currentMinusValue.value;
    // const intMinusValue = parseInt(decrementValue) - 1;
    // currentMinusValue.value = intMinusValue;

    // const currentCasePrice = document.getElementById('case-price')
    // const innerPrice = currentCasePrice.innerText;
    // const ParsePrice = parseFloat(innerPrice);
    // currentCasePrice.innerText = ParsePrice * innerPrice;
})


function updateIncrementDecrementValue(isAddValue){
    const currentValue = document.getElementById("case-input-value")
    let inputValue = currentValue.value;
    if(isAddValue == true){
        
        inputValue = parseInt(inputValue) + 1;
        // currentValue.value = intValue;
    }
    else if(inputValue > 0){
        
        inputValue = parseInt(inputValue) - 1;
        // currentValue.value = intValue;
        
    }
    currentValue.value = inputValue;

    //  total case price

    const currentCasePrice = document.getElementById('case-total-price')
    currentCasePrice.innerText = inputValue * 59;

    totalUpdateValue();


}

function updateTotalValue(product){
    
    const number = document.getElementById(product +'-input-value');
    const newNumber = parseInt(number.value);
    
    return newNumber;
}

function totalUpdateValue(){
    
    const mobileTotal = updateTotalValue('mobile') * 1219;

    const caseTotal = updateTotalValue('case') * 59;
    const subTotal = mobileTotal + caseTotal;
    const tax = subTotal / 5;
    const inTotal = subTotal + tax;
    console.log(subTotal);
    document.getElementById('subTotal-Price').innerText = subTotal;
    document.getElementById('gov-Tax').innerText = tax;
    document.getElementById('total-Buy-Price').innerText = inTotal;
}

// mobile part start


document.getElementById('mobile-plus-button').addEventListener('click', function(){
updateMobileValue(true);
    
})
document.getElementById('mobile-minus-button').addEventListener('click', function(){
updateMobileValue();
    
})

function updateMobileValue(isAddValue){
    const currentValue = document.getElementById("mobile-input-value");
    let inputValue = currentValue.value;
    if(isAddValue == true){
        
        inputValue = parseInt(inputValue) + 1;
        // currentValue.value = intValue;
    }
    else if(inputValue > 0){
        
        inputValue = parseInt(inputValue) - 1;
        // currentValue.value = intValue;
        
    }
    currentValue.value = inputValue;

    //  total case price

    const currentCasePrice = document.getElementById('mobile-total-price')
    currentCasePrice.innerText = inputValue * 1219;

    totalUpdateValue();

}


document.getElementById('remove-button').addEventListener('click', function(){
    // document.getElementById('mobile-area').style.display = 'none';
    removeItem('mobile-area');
})

document.getElementById('case-row-remove').addEventListener('click', function(){
    removeItem('case-area');
})

function removeItem(id){
    document.getElementById(id).style.display = 'none';
}

// check out area

document.getElementById('checkOut-button').addEventListener('click', function(){
    window.location.href = '/checkOutPage.html';
    console.log(window.location.href = "/checkOutPage.html");
})