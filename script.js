
function validateForm() {
    if (isEmpty(document.getElementById('name').value.trim())) {
        alert('Name is required!');
        return false;
    }
    else if (!validatePhone(document.getElementById('phone'))) {
        alert("Please enter a valid 11 digit UK phone number");
        return false;
    }
    else if (!validateEmail(document.getElementById('email').value.trim())) {
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
        return false;
    } /*else if (!validateTime(document.getElementById('time'))) {
        alert("Please enter a valid time. We are open for bookings Monday to Sunday, 6pm to 10pm.")
    }*/
    else {
      alert('Thank you for your booking request. A member of our team will be in touch to confirm shortly.');
    }
}

    function isEmpty(str) {
        return (str.length === 0 || !str.trim());
    }
    
    function validatePhone (inputtext) {
        let phoneno = /^\d{11}$/;
        if (inputtext.value.match(phoneno))
        {
            return true; 
        } else {
            return false; 
        }
    }
   
    function validateEmail(email) {
        var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,15}(?:\.[a-z]{2})?)$/i;
        return isEmpty(email) || re.test(email);
    }
  

    function validateDate(enteredDate) {
        let idate = document.getElementById("date"), 
        dateReg = /(0[1-9]|[12][0-9]|3[01])[\/](0[1-9]|1[012])[\/]201[4-9]|20[2-9][0-9]/;
        if (!dateReg.test(idate.value)) {
            return false; 
        } else {
            return true; 
        }
        
    }

    /*
    function validateTime(enteredTime) {
        re = ^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$;
        if (document.getElementById('time').value != '') {
            if (regs = document.getElementById('time').value.match(re)) {
                if (regs[3]) {
                    if (regs[1] < 6 || regs[1] > 10) {
                        return false;
                    }
                } else {
                    if (regs[1] > 22 || regs[1] < 18) {
                        return false; 
                    }
                }
                if (regs[2] > 59) {
                    return false; 
                }
            } else {
                return true; 
            }
        }
*/