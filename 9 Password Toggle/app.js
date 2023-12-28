let abc = document.getElementById("password");
let xyz = document.getElementById("image");
let flag=0;

function toggle(){
    if(flag==0){
        flag=1;
        xyz.src="eye.svg";
        abc.type="input";
    }
    else{
        flag=0;
        xyz.src="off.svg";
        abc.type="password";

    }
}



