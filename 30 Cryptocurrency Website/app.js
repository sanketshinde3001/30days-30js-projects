var bitcoinp = document.getElementById("bitcoin");
var ethp = document.getElementById("ethereum");
var dogeprice = document.getElementById("dogecoin");


async function fun() {
    let responce = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2CEthereum%2Cdogecoin&vs_currencies=inr");
    let data = await responce.json();
    bitcoinp.innerHTML = data.bitcoin.inr;
    ethp.innerHTML = data.ethereum.inr;
    dogeprice.innerHTML = data.dogecoin.inr;
}

fun()