//login check

//listeners
document.getElementById('login').addEventListener('click', checkInput);

//functions
function checkInput() {

  //variables
  let username = document.getElementById('username').value;
  let password = document.getElementById('password').value;

  //check inputs
  if (username == 'uname' && password == 'pword') {
    //both correct
    document.getElementById('message').innerHTML = '<em>Sign in Successful</em>';
    document.getElementById('message').style.color = 'green';
    document.getElementById('username').style.backgroundColor = 'lightgreen';
    document.getElementById('password').style.backgroundColor = 'lightgreen';
  } else if (username == 'uname' && password != 'pword') {
    //pword wrong
    document.getElementById('message').innerHTML = '<em>Sign in Unsuccessful (password incorrect)</em>';
    document.getElementById('message').style.color = 'red';
    document.getElementById('username').style.backgroundColor = 'lightgreen';
    document.getElementById('password').style.backgroundColor = 'lightpink';
    document.getElementById('password').value = '';
  } else if (username != 'uname' && password == 'pword') {
    //uname wrong
    document.getElementById('message').innerHTML = '<em>Sign in Unsuccessful (username incorrect)</em>';
    document.getElementById('message').style.color = 'red';
    document.getElementById('username').style.backgroundColor = 'lightpink';
    document.getElementById('password').style.backgroundColor = 'lightgreen';
    document.getElementById('password').value = '';
  } else {
    //both wrong
    document.getElementById('message').innerHTML = '<em>Sign in Unsuccessful (username and password incorrect</em>';
    document.getElementById('message').style.color = 'red';
    document.getElementById('username').style.backgroundColor = 'lightpink';
    document.getElementById('password').style.backgroundColor = 'lightpink';
    document.getElementById('password').value = '';
  }
}