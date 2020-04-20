function myValidation(){

    var name = document.getElementById('name').Value
    var subject = document.getElementById('surname').Value;
    var phone = document.getElementById('phone').Value;
    var email = document.getElementById('email').Value;
    var message = document.getElementById('message').Value;
    
    
    document.getElementById("myForm");

    my_alert();
}
function my_alert(){
    if(confirm("Do you want to continue ?")|| !name.Value =="" || !surname.Value =="" || !phone.Value ==""
    || !email.Value =="" || !message.Value ==""){
        alert("Form submitted successfully");
        
    }else{
        
        alert("Form not submitted");
        ClearInfo()

    }
       
        }

        function ClearInfo(){
            document.getElementById("name").Value ="";
            document.getElementById("surname").Value ="";
            document.getElementById("phone").Value ="";

        }
    

    



//     var name = document.getElementById("name").Value
//     var subject = document.getElementById("subject").Value;
//     var phone = document.getElementById("phone").Value;
//     var email = document.getElementById("email").Value;
//     var message = document.getElementById("message").Value;
//     var  error_message = document.getElementById("error_message");
//     var text;

//     error_message.style.padding = "10px";
    

//     if(name.length <5) {
//         text = "Please Enter Valid Name";
//         error_message.innerHTML = text;
//         return false;
//     }

//     if(subject.length <10) {
//         text = "Please Enter Correct Subject";
//         error_message.innerHTML = text;
//         return false;  
// }
// if(isNaN(phone) || phone.length != 10) {
//     text = "Please Enter Valid Phone Number";
//     error_message.innerHTML = text;
//     return false;  
// }
// if(email.indexOf("@") == -1 || email.length < 6) {
//     text = "Please Enter Valid Email";
//     error_message.innerHTML = text;
//     return false;  
// }
// if(message.length <= 140){
//     text = "Please Enter More than 140 Characters";
//     error_message.innerHTML = text;
//     return false;  
// }
//  alert("Form Submitted Successfully!")
//  return true;
// }


/*var mypictures=new Array("images/lufuno.jpg","images/madima.jpg","images/funi.jpg", "images/laptop.jpeg", "images/laptop1.jpeg", "images/group_banner.png", "images/workspace.jpeg")

var counter = 0

function myCycle()
{
counter=counter + 1
if (counter==10){
counter = 0
}

document.pictures.src=mypictures[counter]
setTimeout("myCycle()", 3000)
}
*/