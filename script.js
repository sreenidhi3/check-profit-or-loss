const apiKey = "API_KEY";
// var apiKey = 0;
const stock = document.querySelector('.select');
const price = document.querySelector('#costPrice');
const quantity = document.querySelector('#quantity');
const check = document.querySelector('#bt');
const outputSelector = document.querySelector('#profitOrLoss');

let stockName, costPrice, stockQuantity;
let sellPrice;


check.addEventListener('click', ()=>{
    stockName = stock.value;
    costPrice = Number(price.value);
    stockQuantity = Number(quantity.value);
    console.log(stockName, costPrice, stockQuantity);
    getStockDetails(stockName);
  });


function getStockDetails(stk){
    var url = "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=" + stockName + "&apikey=" + apiKey;
    console.log(url);
    //var res = "Global Quote";
    fetch(url).then(response => response.json()).then(
        json=>{
            console.log(json);
            console.log(json["Global Quote"]["05. price"]);
            sellPrice = Number(json["Global Quote"]["05. price"]);
            console.log(sellPrice);
            profitOrLoss(sellPrice)
    });
}

function profitOrLoss(currPrice){
    if (costPrice > currPrice){
      var lossPerStock = costPrice-currPrice;
      var loss = lossPerStock* stockQuantity;
      outputSelector.innerHTML = `<div class="res">
                                        <div>Loss</div>
                                        <img src="https://www.flaticon.com/svg/vstatic/svg/1027/1027892.svg?token=exp=1611309724~hmac=aa0c5fea1f0d3af7b1f5ad1cfe349e70">
                                        <div>${loss}</div>
                                  </div>`;
      console.log(loss);
    }else if(costPrice < currPrice){
      var profitPerStock = currPrice-costPrice;
      var profit = profitPerStock* stockQuantity;
      outputSelector.innerHTML = `<div class="res">
                                        <div>Profit</div>
                                        <img src="https://www.flaticon.com/svg/vstatic/svg/1027/1027891.svg?token=exp=1611309781~hmac=8d940b7b066be44763bb8841701b25a1">
                                        <div>${profit}</div>
                                  </div>`;
      console.log(profit);
    }else{
       outputSelector.innerText="Neither Profit Nor Loss";
    }
  }


















/*var btSelector = document.querySelector("#bt");
var costPriceSelector = document.querySelector("#costPrice");
var sellingPriceSelector = document.querySelector("#sellingPrice");
var quantitySelector = document.querySelector("#quantity");
var outputSelector = document.querySelector("#profitOrLoss"); 
//var startDate = startDateSelector.value;


function profitOrLoss(){
  var quantity = quantitySelector.value;
  var sellingPrice = sellingPriceSelector.value;
  var costPrice = costPriceSelector.value;
  if (costPrice > sellingPrice){
    var lossPerStock = costPrice-sellingPrice;
    var loss = lossPerStock*quantity;
    outputSelector.innerText="Loss "+loss;
    outputSelector.style.color="Red";
  }else if(costPrice < sellingPrice){
    var profitPerStock = sellingPrice-costPrice;
    var profit = profitPerStock*quantity;
    outputSelector.innerText="Profit " +profit;
    outputSelector.style.color="Green";
  }else{
     outputSelector.innerText="Neither Profit Nor Loss";
  }
}

function createurl(){ 
  console.log( "https://api.tiingo.com/tiingo/daily/aapl/prices?startDate="+ startDate +"&endDate="+ startDate+ "&token=0d2b11194e0d6ccfa51446f0120131b6f75c4826");
}

function click(){
console.log(costPriceSelector.value, sellingPriceSelector.value, quantitySelector.value);
profitOrLoss();
}
console.log(fetch(createurl))
btSelector.addEventListener("click", click);

*/






/*


function createurl(){ 
  
  return( "https://api.tiingo.com/tiingo/daily/aapl/prices?startDate="+ startDate +"&endDate="+ startDate+ "&token=0d2b11194e0d6ccfa51446f0120131b6f75c4826");
}*/


