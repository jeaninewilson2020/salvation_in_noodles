

function isEmpty(str) {
    "use strict";
    return (str.length === 0 || !str.trim());
}

function validatePhone(inputtext) {
    "use strict";
    var phoneno = /^\d{11}$/;
    if (inputtext.value.match(phoneno)) 
    {
    return true; 
    } 
    return false; 
}

function formatPhoneNumber(phoneNo) {
    phoneNo = phoneNo.join('');
    return '(' + phoneNo.substring(0, 1) + ')'
           + phoneNo.substring(1, 4) 
           + ' '
           + phoneNo.substring(4, 7)
           + ' '
           + phoneNo.substring(7)
 }

function validateEmail(email) {
    "use strict";
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,15}(?:\.[a-z]{2})?)$/i;
    return isEmpty(email) || re.test(email);
}


function validateDate(enteredDate) {
    "use strict";
    var idate = document.getElementById("date"), 
    dateReg = /(0[1-9]|[12][0-9]|3[01])[\/](0[1-9]|1[012])[\/]201[4-9]|20[2-9][0-9]/;
    if (!dateReg.test(idate.value)) {
        return false; 
    } else {
        return true; 
    }
    
}

/*
function validateTime(enteredTime) {
    re = /^(\d{1,2}):(\d{2})([ap]m)?$/;
    if (document.getElementById('time').value != '') {
        if (regs = document.getElementById('time').value.match(re)) {

            if (regs[3]) {
             // 12-hour value between 6 and 10 
                if (regs[1] < 6 || regs[1] > 10) {
                    alert("We accept bookings between 6pm and 10pm");
                    return false;
                }
            } else {
                // 24 hour value between 18 and 22 
                if (regs[1] > 22 || regs[1] < 18) {
                    alert("We accept bookings between 18:00 and 22:00");
                    return false; 
                }
            }
            // Minute value between 0 and 59 
            if (regs[2] > 59) {
                alert("Invalid value for minutes: " + regs[2]);
                return false; 
            }
        } else {
            return true; 
        }
    }
}
*/

function validateForm() {
    if (isEmpty(document.getElementById('name').value.trim())) {
        alert('Name is required!');
        return false;
    }
    else if (!validatePhone(document.getElementById('phone'))) {
        alert("Please enter a valid 11 digit UK phone number");
        return false;
    } else {
        (formatPhoneNumber(document.getElementById('phone'))); 
    }
    if (!validateEmail(document.getElementById('email').value.trim())) {
        alert('Email must be a valid email address!');
        return false;
    }
    else if(isEmpty(document.getElementById('email').value.trim())) {
        alert('Email is required!');
        return false;
    }
    else if (isEmpty(document.getElementById('date').value.trim())) {
        alert('Date is required!');
        return false;
    } else if (!validateDate(document.getElementById('date'))) {
        alert("Please enter a valid date");
    }
    else if (isEmpty(document.getElementById('time').value.trim())) {
        alert('Time is required!');
        return false; /*
    } else if (!validateTime(document.getElementById('time'))) {
        alert("Please enter a valid time. We are open for bookings Monday to Sunday, 6pm to 10pm.")
    }
  */
  }
}

   

    