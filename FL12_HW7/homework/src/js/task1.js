
let user_old_password, change_password, user_new_password;
const correct_email_length = 5,
  correct_password_length = 6;
let user_email = prompt('Please enter your email', '');

if (user_email === null || user_email === '') {
  alert('Canceled');
  } else if (user_email.length < correct_email_length) {
  alert('I don\'t know any emails having name length less than 5 symbols');
} else if (
  user_email === 'user@gmail.com' ||
  user_email === 'admin@gmail.com'
) {
    user_old_password = prompt('Please enter your password', '');
    if (user_old_password === null || user_old_password === '') {
        alert('Canceled');
    } else if (
        user_old_password === 'UserPass' && user_email === 'user@gmail.com' ||
        user_old_password === 'AdminPass' && user_email === 'admin@gmail.com'
    ) {
        change_password = confirm('Do you want to change your password?');
        if (change_password === true) {
            let user_old_password_confirmation = prompt('Please enter your old password','');
            if (user_old_password_confirmation === null || user_old_password_confirmation === '') {
                alert('You have failed the change');
            } else if (
                user_old_password_confirmation === user_old_password
            ){
                user_new_password = prompt('Please enter your new password','');
                if (user_new_password === null || user_new_password === '') {
                    alert('Canceled');
                } else if (user_new_password.length < correct_password_length) {
                    alert('It’s too short password. Sorry.');
                    } else {
                        let user_new_password_confirmation = prompt('Enter your new password again','');
                        if (user_new_password_confirmation === user_new_password){
                        alert('You have successfully changed your password.');
                        } else {
                            alert('You wrote the wrong password.');
                        }
                    }
            } else {
                alert('Wrong pasword');
            }
        } 
    } else {
        alert('Wrong password');
    }
} else {
  alert('I don’t know you');
}
