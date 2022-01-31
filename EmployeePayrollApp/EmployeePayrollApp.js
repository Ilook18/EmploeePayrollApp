function myFunction(newVal){
    document.getElementById("value").innerHTML=newVal;
}




function validate(){
    var regName =/^([A-Z]{1}[A-Za-z]{2,}) [A-Z]{1}[A-Za-z]{2,}$/ ;
    var name=document.forms["myform"]["name"];
    if(name.value==""){
        window.alert("Please enter your name");
             name.focus();
             return false;
    }if(!regName.test(name.value)){
          window.alert("Please enter your full name");
             name.focus();
             return false;
        }else{
            return true;
        }
        }
        
        
           
        
           
           
        
    

