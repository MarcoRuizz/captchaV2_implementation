window.onload = function () {
  var container = document.getElementById("mi-contenedor");
  grecaptcha.render(container, {
    sitekey: "KEYSITE",
  });
};

function verificar() {
  var Password = document.getElementById("Password");
  var Username = document.getElementById("Username");

  if (Password.value.trim() == "" || Username.value.trim() == "") {
    alert("Por favor, ingrese todos los datos");
  } else {
    if (grecaptcha.getResponse()) {
      Password.value = "";
      Username.value = "";
      window.location.href = "./privada/index.html";
    } else {
      alert("Captcha is not verified");
    }
  }
}
