function a (){
   let email = false;
   let pass = false;
   let error = document.querySelector(".form-box__error")  ;

   if( document.querySelector(".form-box__email_cont").value === "testuser@todo.com" ){
        console.log("email_true");
        email = true;
   }
 
   if (document.querySelector(".form-box__password_cont").value === "123456789"){
       console.log("pass_true");
       pass = true;
   }
  

   if ( email === true && pass === true ){
        document.location.href="file:///D:/Grass-Business-Labs-Homework-/jsHome/index2.html";
   }
    else{
        error.classList.add("visible");
    }

}

// переменная а = катя
// а === катя? да или нет? - да
// а = Юля
// а === катя? да или нет? - нет

// а = катя(девочка)
// а === катя(девочка),  да или нет? - да

// а = катя(мальчик)
// а == катя(девочка),  да или нет? - да

// а = катя(мальчик)
// а === катя(девочка),  да или нет? - нет

