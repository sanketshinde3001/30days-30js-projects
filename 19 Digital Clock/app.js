function update() {
    let date = new Date();
    document.getElementById("h").innerText = date.getHours();
    document.getElementById("m").innerText = date.getMinutes();
    document.getElementById("s").innerText = date.getSeconds();
}

setInterval(update, 1000);