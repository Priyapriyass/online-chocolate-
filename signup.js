const name =document.getElementById('name');

const email =document.getElementById('email');

const password =document.getElementById('password');
const cpassword =document.getElementById('cpassword');

const form =document.getElementById('form');


const name_error =document.getElementById('name_error');

const email_error =document.getElementById('email_error');

const password_error =document.getElementById('password_error');

const cpassword_error =document.getElementById('cpassword_error');

form.addEventListener('click',(e)=>
    {
     
        var email_check = /^([A-Za-z0-9_\-\])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/ ;


        if(name.value =='' || name.value == null)
        {
            e.preventDefault();
            name_error.innerHTML = "Name is Required";
        }

        else{
            
            name_error.innerHTML ='';
        }


        if(!email.value.match(email_check))
        {
            e.preventDefault();
            email_error.innerHTML = "Valid email is Required";
        }

        else{
            
            email_error.innerHTML ='';
        }


        if(password.value.length <=5)
            {
                e.preventDefault();
                password_error.innerHTML = "Password cannot be less than 6 letters";
            }
       
       else if(password.value.length >=20)
            {
               e.preventDefault();
                password_error.innerHTML = "Password cannot be more than 20 letters";
            }

         else
            {
            
                password_error.innerHTML ='';
            }


            if(cpassword.value.length <=5)
                {
                    e.preventDefault();
                    cpassword_error.innerHTML = "Password cannot be less than 6 letters";
                }
           
           else if(cpassword.value.length >=20)
                {
                   e.preventDefault();
                    cpassword_error.innerHTML = "Password cannot be more than 20 letters";
                }
    
             else
                {
                
                    if(password.value == cpassword.value){
                   
                        cpassword_error.innerHTML = "";
                    }else{
                        cpassword_error.innerHTML = "Password mismatch";
                    }
    
                    
                     cpassword_error.innerHTML ='';
                     alert("Registration completed")
                     window.location.href="choco.html";
                }
                debugger;

              
               
        

    }
     
    
)
