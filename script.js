function school()
{
    console.log("school");
    window.open("https://nonschool.netlify.com");
}

function sct()
{
    console.log("계산기")
    window.open("https://javascriptsat.netlify.com")
}

function won()
{
    alert("활인하는사이트가는것입니다")
    window.open("./won.html")
    var originPrice = document.querySelector('#oPrice').value;  // 원래 가격
    var rate = document.querySelector('#rate').value; // 할인율 
    var savedPrice = originPrice * (rate/100);  // 할인 금액
    var resultPrice = originPrice - savedPrice;  // 원래 가격에서 할인 금액을 뺀 최종 가격			
    document.querySelector('#showResult').innerHTML = "상품의 원래 가격은 " + originPrice + "원이고, 할인율은 " + rate + "%입니다." + savedPrice + "원을 절약한 " + resultPrice + "원에 살 수 있습니다."; 
}		