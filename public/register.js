var signup_form = document.getElementById("signup_form");

signup_form.addEventListener("submit", event => {
  event.preventDefault();

  var signup_username = document.getElementById("signup_username").value;
  var signup_email = document.getElementById("signup_email").value;
  var signup_password = document.getElementById("signup_password").value;

  var user_data = {
    username: signup_username,
    email: signup_email,
    password: signup_password
  };

  var url = "/register";
  var options = {
    method: "POST",
    body: JSON.stringify(user_data),
    headers: {
      "content-type": "application/json"
    }
  };

  fetch(url, options)
    .then(res => {
      if (res.redirected) {
        window.location.href = res.url;
      }
    })
    .catch(error => {
      console.log(error);
    });
});
