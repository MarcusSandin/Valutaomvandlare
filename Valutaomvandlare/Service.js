
inputOne.addEventListener("input", () => {
    inputTwo.value = CalculateRateLeftToRight();
    PurchaseCurrency();
  });
  
  inputTwo.addEventListener("input", () => {
    inputOne.value = CalculateRateRightToLeft();
    PurchaseCurrency();
  });
  
  curDropdownOne.addEventListener('click', () =>{
    inputTwo.value = CalculateRateLeftToRight();
    PurchaseCurrency();
  });
  
  curDropdownTwo.addEventListener('click',()=> {
    inputOne.value = CalculateRateRightToLeft();
    PurchaseCurrency();
  });
  selectBuyOrSell.addEventListener('click', () =>{
    PurchaseCurrency();
  });
  
  orderBtn.addEventListener('click', ()=>{
  
    buyText.innerText = "Swooosh. Transaktionen är genomförd."
  });


function CalculateRateLeftToRight() {
    let leftValue = dropdownOne.options[dropdownOne.selectedIndex].value;
    let rightValue = dropdownTwo.options[dropdownTwo.selectedIndex].value;
  
    let rate = (1 / leftValue) * rightValue;
    return rate * inputOne.value;
  }

  function CalculateRateRightToLeft() {
    let leftValue = dropdownOne.options[dropdownOne.selectedIndex].value;
    let rightValue = dropdownTwo.options[dropdownTwo.selectedIndex].value;
  
    let rate = (1 / rightValue) * leftValue;
    return rate * inputTwo.value;
  }
  
  function PurchaseCurrency()
  {
    let leftCurrency = dropdownOne.options[dropdownOne.selectedIndex].innerText;
    let rightCurrency = dropdownTwo.options[dropdownTwo.selectedIndex].innerText;
    let choice = selectBuyOrSell.options[selectBuyOrSell.selectedIndex].innerText;
    
    let buyMessage = `${choice} ${CalculateRateLeftToRight()} ${rightCurrency} för ${CalculateRateRightToLeft()} ${leftCurrency}?`;
    buyText.innerText = buyMessage;
    
  }