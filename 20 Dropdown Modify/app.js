document.getElementById("list").addEventListener("click",function(e){
    // console.log(e.target.innerText)
    document.getElementById("op").innerText = e.target.innerText;
    document.getElementById("main2").style.display = "none";
    flag = true;
})

let flag = false;

document.getElementById("main").addEventListener("click",function() {
    if (flag === false){
        document.getElementById("main2").style.display = "none";
        document.getElementById("arrow").style.transform = "rotate(180deg)";

        flag = true;
        
    }    
    else{
        document.getElementById("main2").style.display = "block";
        document.getElementById("arrow").style.transform = "rotate(0deg)";

        flag = false
    }    
})

