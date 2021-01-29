const mailid = document.querySelector('#email');
const erroricon = document.querySelector('.error-icon')
const submitbtn = document.querySelector('#myBtn');
const errormsg = document.querySelector('.error');
let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

var returnval = false;
function check() {

    submitbtn.addEventListener('click', () => {
        if (mailid.value.match(mailformat)) {
            mailid.style.borderColor = "rgba(128, 128, 128, 0.5)";
            errormsg.style.display = "none";
            erroricon.style.display = "none";
            returnval = true;
        }
        else {
            mailid.style.borderColor = "hsl(0, 93%, 68%)";
            errormsg.style.display = "block";
            erroricon.style.display = "inline";
            returnval = false;
        }
    });
    return returnval;
}

check();