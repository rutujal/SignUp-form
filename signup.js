
function validateEmail(email){
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.getElementById("email").value)){
        return true;
    }
    return false;
}
function validateNumber(number){
    var phoneno=/^\d{10}$/;
    if(document.getElementById("number").value.match(phoneno)){
        return true;
    }
    else{
        return false;
    }
}

function formValidation() {
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const pasword = document.getElementById("password");
    const number=document.getElementById("number")


    if (name.value.length == 0 || name.value==null) {
        name.classList.add("validateclass");
        email.classList.remove("validateclass")
    pasword.classList.remove("validateclass")
    number.classList.remove("validateclass")
        return false;
    
    }

    else if(email.value.length==0 || !validateEmail(email) || email.value==null ){
        name.classList.remove("validateclass")
    pasword.classList.remove("validateclass")
    number.classList.remove("validateclass")
        email.classList.add("validateclass");

        return false;
        
    }
    
   else if (pasword.value.length < 5 || pasword.value.length==0 || pasword.value==null) {
    email.classList.remove("validateclass")
    name.classList.remove("validateclass")
    number.classList.remove("validateclass")
        pasword.classList.add("validateclass");
        return false;
    
    }
    else if(number.value.length==0 || !validateNumber(number) || number.value==null){
        pasword.classList.remove("validateclass")
        email.classList.remove("validateclass")
    name.classList.remove("validateclass")
        number.classList.add("validateclass");
        return false;
        
    }
    name.classList.remove("validateclass")
    email.classList.remove("validateclass")
    pasword.classList.remove("validateclass")
    number.classList.remove("validateclass")
    alert("You have registerd successfully!!!")
    return true;
    
}