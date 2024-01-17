let flag = 0;
let flag1 = 0;
let flag2 = 0;
let flag3 = 0;

function phonefun() {
    let ipname = document.getElementById("phoneip").value;
    if (ipname.length === 10) 
    {
        document.getElementById("Phonee").innerText = "";
        flag = 0;
        return;
    }    
    else{
        document.getElementById("Phonee").innerText = "Phone No. Incorrect!";
        flag = 1;
        
    }
}


function namefun() {
    let ipname1 = document.getElementById("nameip").value
    if (ipname1.includes(' ')) 
    {
        document.getElementById("namee").innerText = "";
        flag1 = 0;
        return;
    }    
    else{
        document.getElementById("namee").innerText = "Full Name Required!";
        flag1 = 1;
    }
}

function emailfun() {
    let ipname2 = document.getElementById("emailip").value
    if (ipname2.includes('@.')) 
    {
        document.getElementById("Emaile").innerText = "";
        flag2 = 0;
        return;
    }    
    else{
        document.getElementById("Emaile").innerText = "Enter Correct Email!";
        flag2 = 1;
    }
}

function msgfun() {
    let ipname3 = document.getElementById("msgip").value
    if (ipname3.length < 30) 
    {
        document.getElementById("Msge").innerText = "Add "+(30 - ipname3.length)+" more letters !";
        flag3 = 1;
        return;
    }    
    else{
        document.getElementById("Msge").innerText = "";
        flag3 = 0;
    }
}

function check(event) {
    if(flag==1 || flag1 == 1 || flag2 == 1 || flag3 == 1){
        document.getElementById("sube").innerText = "Correct all fields!"
    }
    else if(document.getElementById("phoneip").value.length == 0 ||  document.getElementById("nameip").value.length == 0 || document.getElementById("emailip").value.length == 0 || document.getElementById("msgip").value.length == 0 ){
        document.getElementById("sube").innerText = "Fill all fields!"
    }
    else{
        document.getElementById("sube").innerText = ""
    }
}



