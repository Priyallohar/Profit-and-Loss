const  purchsePrice = document.querySelector("#purchse-price")
const  Quantity = document.querySelector("#quantity")
const  SellingPrice = document.querySelector("#Selling-Price")
const checkBtn = document.querySelector(".check-btn")
const errorMessage = document.querySelector(".error-message")
const profitMessage = document.querySelector(".profit-message")
const lossMessage= document.querySelector(".loss-message")
const Container = document.querySelector(".container")
const noLossNoProfit =document.querySelector(".no-loss-no-profit")

lossMessage.style.display = "none";
profitMessage.style.display = "none";
noLossNoProfit.style.display="none"


checkBtn.addEventListener("click" , clickEventHandler)

errorMessage.classList.add("hidden")


function clickEventHandler(){
    let pPrice = purchsePrice.value;
    let qnt = Quantity.value
    let Sprice = SellingPrice.value

    if(pPrice===""|| qnt === ""|| Sprice===""){
        errorMessage.classList.remove("hidden")
        ;
    } else{
        errorMessage.classList.add("hidden");
         ProfitLossCheck(pPrice,qnt,Sprice)
    }
}

function ProfitLossCheck(pPrice, qnt, Sprice) {
    if (pPrice > Sprice) {
      let loss = (pPrice - Sprice).toFixed(2);
      const lossPercentage = ((loss / pPrice) * 100).toFixed(2);
      Container.style.display= "none"
      profitMessage.style.display = "none";
      noLossNoProfit.style.display="none"
      lossMessage.style.display = "block";
      lossMessage.innerHTML = `
              <h1>Sad it is Loss</h1>
              <h2>Loss is ${loss * qnt}</h2>
              <h2>Loss Percentage  is ${lossPercentage} %</h2>
          `;
    } else if (pPrice < Sprice) {
      let profit = (Sprice - pPrice).toFixed(2);
      const profitPercentage = ((profit / pPrice) * 100).toFixed(2);
      Container.style.display= "none"
      lossMessage.style.display = "none";
      noLossNoProfit.style.display="none"
      profitMessage.style.display = "block";
      profitMessage.innerHTML = `
              <h1> Hurray  it is Profit</h1>
              <h2>Profit is  ${profit * qnt}</h2>
              <h2>Profit Percentage is ${profitPercentage} %</h2>
          `;
    } else if( pPrice = Sprice ){
        Container.style.display= "none"
        lossMessage.style.display = "none";
        profitMessage.style.display = "none";
        noLossNoProfit.style.display="block"
        noLossNoProfit.innerHTML = "<h1>Hang is there you will surely get what you want</h1>"
    }
  }
  


