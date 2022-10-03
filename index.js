// *Declaracion de usuarios por medio de objetos
var accounts = [
  { name: "Amelia", nip: "789" },
  { name: "Eiffel", nip: "456" },
  { name: "Lewis", nip: "555" },
];

//*Ingreso de usuario con funcion comparar

function autenticar() {
  const user = document.querySelector("#user").value;
  const password = document.querySelector("#password").value;

  if (user == accounts[0].name && password == accounts[0].nip) {
    location.href = "amelia.html";
  } else if (user == accounts[1].name && password == accounts[1].nip) {
    location.href = "eiffel.html";
  } else if (user == accounts[2].name && password == accounts[2].nip) {
    location.href = "lewis.html";
  } else {
    document.querySelector("#message").innerHTML =
      "user or password incorrect, try again!";
  }
}
function logOut() {
  location.href = "index.html";
}
