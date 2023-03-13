$(document).ready(function () {
       
    $('.username').click(function (e) { 
        e.preventDefault();
         $('body,html').click(function (e) { 
         e.preventDefault();
            $('.username').keyup(function (e) { 
                let valueUsername = $('.username').val();
                if(valueUsername.length >= 7){
                    $('.username').addClass('valid');
                    $('.message-username').css('display', 'none');
                    $('.icon-valid-username').css('display', 'block');
                    $('.icon-invalid-username').css('display', 'none');
                } else{     
                    $('.username').removeClass('valid');
                    $('.username').addClass('invalid');
                    $('.message-username').html('Please enter at least 6 characters');
                    $('.message-username').css('display', 'block');
                    $('.icon-invalid-username').css('display', 'block');
                    $('.icon-valid-username').css('display', 'none');
            };
       
            });
       
        });
    }); 
    $('.email').click(function (e) { 
        e.preventDefault();
         $('body,html').click(function (e) { 
         e.preventDefault();
         $('.email').keyup(function (e) { 
                let valueEmail = $('.email').val();
                let regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
                if(regex.test(valueEmail)){
                    $('.email').addClass('valid');
                    $('.message-email').css('display', 'none');
                    $('.icon-invalid-email').css('display', 'none');
                    $('.icon-valid-email').css('display', 'block');
                    
                } else{
                    $('.email').removeClass('valid');
                    $('.email').addClass('invalid');
                    $('.message-email').html('Please enter a valid email address');
                    $('.message-email').css('display', 'block');
                    $('.icon-invalid-email').css('display', 'block');
                    $('.icon-valid-email').css('display', 'none');
                };
         });
        });
    });
    $('.password').click(function (e) { 
        e.preventDefault();
         $('body,html').click(function (e) { 
         e.preventDefault();
            $('.password').keyup(function (e) { 
                let valuePassword = $('.password').val();
                let regExp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/
                if(regExp.test(valuePassword)){
                    $('.password').addClass('valid');
                    $('.message-password').css('display', 'none');
                    $('.icon-valid-password').css('display', 'block');
                    $('.icon-invalid-password').css('display', 'none');
                } else{
                    $('.password').removeClass('valid');
                    $('.password').addClass('invalid');
                    $('.message-password').html('Please enter uppercase, lowercase and special characters + at least 6 characters');
                    $('.message-password').css('display', 'block');
                    $('.icon-invalid-password').css('display', 'block');
                    $('.icon-valid-password').css('display', 'none');
                };
       
            });
       
        });
    }); 
    $('.password-check').keyup(function (e) { 
                let valuePasswordCheck = $('.password-check').val();
                if(valuePasswordCheck == $('.password').val()){
                    $('.password-check').addClass('valid');
                    $('.message-password-check').css('display', 'none');
                    $('.icon-valid-password-check').css('display', 'block');
                    $('.icon-invalid-password-check').css('display', 'none');
                } else if(valuePasswordCheck !== $('.password').val()) {
                    $('.password-check').removeClass('valid');
                    $('.password-check').addClass('invalid');
                    $('.message-password-check').html('Passwords does not match');
                    $('.message-password-check').css('display', 'block');
                    $('.icon-invalid-password-check').css('display', 'block');
                    $('.icon-valid-password-check').css('display', 'none');
                };
    });
    $('.password-check').click(function (e) { 
        e.preventDefault();
         $('body,html').click(function (e) { 
         e.preventDefault();
        
            $('.password-check').keyup(function (e) { 
                let valuePasswordCheck = $('.password-check').val();
                if(valuePasswordCheck == $('.password').val()){
                    $('.password-check').addClass('valid');
                    $('.message-password-check').css('display', 'none');
                    $('.icon-valid-password-check').css('display', 'block');
                    $('.icon-invalid-password-check').css('display', 'none');
                } else if(valuePasswordCheck !== $('.password').val()) {
                    $('.password-check').removeClass('valid');
                    $('.password-check').addClass('invalid');
                    $('.message-password-check').html('Passwords does not match');
                    $('.message-password-check').css('display', 'block');
                    $('.icon-invalid-password-check').css('display', 'block');
                    $('.icon-valid-password-check').css('display', 'none');
                };
       
            });
       
        });
    }); 
   $('.submit').click(function (e) { 
        e.preventDefault();
        let valueUsername = $('.username').val();
        let valueEmail = $('.email').val();
        let valuePassword = $('.password').val();
        let valuePasswordCheck = $('.password-check').val();
        let regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
        let regExp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/
        
        if(valueUsername.length >= 7 && regex.test(valueEmail) && regExp.test(valuePassword) && valuePasswordCheck == valuePassword){
              console.log('Succsess')
        }else {
                if(valueUsername.length < 6 ){
                    $('.username').removeClass('valid');
                    $('.username').addClass('invalid');
                    $('.message-username').html('Please enter at least 6 characters');
                    $('.message-username').css('display', 'block');
                    $('.icon-invalid-username').css('display', 'block');
                    $('.icon-valid-username').css('display', 'none');
                }
                if (regex.test(valueEmail) == false){
                    $('.email').removeClass('valid');
                    $('.email').addClass('invalid');
                    $('.message-email').html('Please enter a valid email address');
                    $('.message-email').css('display', 'block');
                    $('.icon-invalid-email').css('display', 'block');
                    $('.icon-valid-email').css('display', 'none');
                }
                if (regex.test(valueEmail) == true){
                    $('.email').addClass('valid');
                    $('.message-email').css('display', 'none');
                    $('.icon-invalid-email').css('display', 'none');
                    $('.icon-valid-email').css('display', 'block');
                }
                if (regExp.test(valuePassword) == false) {
                    $('.password').removeClass('valid');
                    $('.password').addClass('invalid');
                    $('.message-password').html('Please enter uppercase, lowercase and special characters + at least 6 characters');
                    $('.message-password').css('display', 'block');
                    $('.icon-invalid-password').css('display', 'block');
                    $('.icon-valid-password').css('display', 'none');
                }
                if (valuePasswordCheck !== valuePassword) {
                    $('.password-check').removeClass('valid');
                    $('.password-check').addClass('invalid');
                    $('.message-password-check').html('Passwords does not match');
                    $('.message-password-check').css('display', 'block');
                    $('.icon-invalid-password-check').css('display', 'block');
                    $('.icon-valid-password-check').css('display', 'none');
                }
                if (valuePasswordCheck == '') {
                    $('.password-check').removeClass('valid');
                    $('.password-check').addClass('invalid');
                    $('.message-password-check').html('Passwords does not match');
                    $('.message-password-check').css('display', 'block');
                    $('.icon-invalid-password-check').css('display', 'block');
                    $('.icon-valid-password-check').css('display', 'none');
                }
        }
    });
});
