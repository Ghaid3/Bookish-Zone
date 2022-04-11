function validationForm(){

    let firstName= document.forms["RegisterForm"]["fisrtName"];
    let secondName= document.forms["RegisterForm"]["secondName"];
    let username = document.forms["RegisterForm"]["UserName"];
    let email= document.forms["RegisterForm"]["email"];
    let phoneNumber= document.forms["RegisterForm"]["phoneNumber"];
    let password= document.forms["RegisterForm"]["password1"];
    let confirmPassword= document.forms["RegisterForm"]["password2"];
  
    if(firstName.value.search(/\w{5,20}/)==-1){ 
         alert("Incorrect user name");
            firstName.focus(); return false;
   }
   if(secondName.value.search(/\w{5,20}/)==-1){ 
         alert("Incorrect user name");
            secondName.focus(); return false;
   }
  
    if(username.value.search(/\w{5,20}/)==-1){ 
         alert("Incorrect user name");
            username.focus(); return false;
   }
   if(email.value == "") { //email should not be empty..
        alert("Please enter a valid e-mail address.");
        email.focus();
        return false;
    }
    if(email.value.indexOf("@", 0) < 0) {//use can use pattern search
          alert("Please enter a valid e-mail address.");
          email.focus(); return false;
   }
    if(email.value.indexOf(".", 0) < 0) {//use can use pattern search
          alert("Please enter a valid e-mail address.");
          email.focus(); return false;
   }
   if(phoneNumber.value.search(/\d{8}/)==-1) { 
            alert("Please enter your telephone number.");
            phoneNumber.focus(); return false;
   }
   if(pass.value == "") {//pass should not be empty..
            alert("Please enter your password");
            pass.focus(); return false;
   }
   if (password.value != confirmPassword.value )
   {
      alert("Password does not match");
      confirmPassword.focus(); return false;
   }
  return true;}

