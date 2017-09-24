
$(function(){
     if(window.localStorage.username){   //already login
         $('.h-btn.comments').css('display', 'block');
     }else{
         $('.h-btn.login').css('display', 'block');
    }
 })
 