let selectb = document.getElementsByClassName("box");
let leftb = document.getElementById("one");
let rightb = document.getElementById("two");
let selected=null;

for(x of selectb){
    x.addEventListener("dragstart" , function (e){
    selected = e.target;

    rightb.addEventListener("dragover", function(e){
        e.preventDefault();
    });
    rightb.addEventListener("drop",function(e){
        if (selected !== null) {
            rightb.appendChild(selected);
            selected = null;
        }
    });

    leftb.addEventListener("dragover", function(e){
        e.preventDefault();
    });
    leftb.addEventListener("drop",function(e){
        if (selected !== null) {
            leftb.appendChild(selected);
            selected = null;
        }
    });
})

};