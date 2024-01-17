let productImg = document.getElementById("productImg");
let btn = document.getElementsByClassName("btn");

let colors = ""

function colorshirt(color) {
    colors = color;
    productImg.src = `${colors}1.jpg`;
    }
    
}

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function () {
        productImg.src = `${colors}${i + 1}.jpg`;
        removeActiveClass();
        this.classList.add("active");
    });
}

function removeActiveClass() {
    for (let i = 0; i < btn.length; i++) {
        btn[i].classList.remove("active");
    }
}