let strength = 0;
function op(strength) {
    switch (strength) {
        case 0:
            strengthIndicator.textContent = 'Password strength: Weak';
            strengthIndicator.style.color = 'red';
            ipcontainer.style.border = "2px solid red"
            break;
        case 1:
            strengthIndicator.textContent = 'Password strength: Weak';
            strengthIndicator.style.color = 'red';
            ipcontainer.style.border = "2px solid red"
            break;
        case 2:
            strengthIndicator.textContent = 'Password strength: Moderate';
            strengthIndicator.style.color = 'orange';
            ipcontainer.style.border = "2px solid orange"
            break;
        case 3:
            strengthIndicator.textContent = 'Password strength: Strong';
            strengthIndicator.style.color = 'green';
            ipcontainer.style.border = "2px solid green"
            break;
        case 4:
            strengthIndicator.textContent = 'Password strength: Strong';
            strengthIndicator.style.color = 'green';
            ipcontainer.style.border = "2px solid green"
            break;
        default:
            break;
    }
}


function check() {
    console.log("hi")
    let ip = document.getElementById("pass").value;
    if (ip.length < 8) {
        strength = 0;
    }
    if (ip.length >= 8) {
        strength += 1;
    }
    if (/[A-Z]/.test(ip)) {
        strength += 1;
    }
    if (/\d/.test(ip)) {
        strength += 1;
    }
    if (/[!@#$%^&*(),.?":{}|<>]/.test(ip)) {
        strength += 1;
    }
    console.log(strength)
    op(strength);
    strength=0;
}


