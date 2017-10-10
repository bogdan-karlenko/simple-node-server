function sendRequest() {
  var login = document.getElementById("inputLogin").value;
  var password = document.getElementById("inputPassword").value;
  var url = '/login';

  var xhr = new XMLHttpRequest();
  xhr.open('POST', url);
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.send('login=' + encodeURIComponent(login) + '&' + 'password=' + encodeURIComponent(password));

  xhr.onreadystatechange = function() {
    if (xhr.readyState !== 4) {
      return
    } else {
      console.log(xhr.responseText);
    }
  };
}
