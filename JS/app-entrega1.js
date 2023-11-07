console.log("conectado");

/* PROGRAMA QUE VALIDA EL NOMBRE DEL TUTOR Y
 LUEGO SACA EL PROMEDIO DE LAS NOTAS DE UN ALUMNO CUALQUIERA*/

// tutor VALIDO: "LAUTARO AMENGUAL||Lautaro Amengual||lautaro amengual"

function nombreValido(nombre) {
  return /^[A-Za-z\s]+$/.test(nombre);
}

let tutorFirstName;
let tutorLastName;
let nota1;
let nota2;
let nota3;
let resultado = 0;

do {
  tutorFirstName = prompt("Ingrese nombre del tutor");
  tutorLastName = prompt("Ingrese apellido del tutor");

  if (
    (!tutorFirstName && !tutorLastName) ||
    (tutorFirstName && !tutorLastName) ||
    (!tutorFirstName && tutorLastName)
  ) {
    alert(
      "Por favor, ingresa un nombre válido.Los campos no pueden quedar vacíos."
    );
  } else if (!nombreValido(tutorFirstName) && !nombreValido(tutorLastName)) {
    alert(
      "Por favor, ingresa un nombre válido sin números ni caracteres especiales."
    );
  }
} while (
  (!tutorFirstName && !tutorLastName) ||
  (tutorFirstName && !tutorLastName) ||
  (!tutorFirstName && tutorLastName) ||
  (!nombreValido(tutorFirstName) && !nombreValido(tutorLastName))
);

alert("Hola " + tutorFirstName + " " + tutorLastName + ", bienvenido.");

if (
  (tutorFirstName == "LAUTARO" ||
    tutorFirstName == "Lautaro" ||
    tutorFirstName == "lautaro") &&
  (tutorLastName == "AMENGUAL" ||
    tutorLastName == "Amengual" ||
    tutorLastName == "amengual")
) {
  nota1 = parseFloat(prompt("Ingresa nota de la primera entrega."));
  while (nota1 == null || /\D/.test(nota1) || nota1 == "") {
    nota1 = prompt("Entre un número VÁLIDO: ");
  }
  nota2 = parseFloat(prompt("Ingresa nota de la segunda entrega."));
  while (nota2 == null || /\D/.test(nota2) || nota2 == "") {
    nota2 = prompt("Entre un número VÁLIDO: ");
  }
  nota3 = parseFloat(prompt("Ingresa nota de la tercera entrega."));
  while (nota3 == null || /\D/.test(nota3) || nota3 == "") {
    nota3 = prompt("Entre un número VÁLIDO: ");
  }

  function promedio(n1, n2, n3) {
    resultado = (n1 + n2 + n3) / 3;
  }
  function mostrarPromedio(mostrar) {
    alert("El promedio de las etrengas es: " + resultado);
  }
  promedio(nota1, nota2, nota3);
  mostrarPromedio(resultado);
} else {
  alert(
    "Tutor su nombre NO figura en la base de datos, no puedes ingresar a CODER."
  );
}
