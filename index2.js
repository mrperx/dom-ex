const first = document.getElementById("first");

//Canvair el contingut intern : es fa amb el innerText

first.innerText = "Girona";

// Crear un nou elemet.

const el = document.createElement("div");

//Donar contingut al element i mostrar-ho a la pantalla
el.innerText = "Quart";
//mostrar-ho a la pantalla o on mostrar-lo
document.body.appendChild(el);

//possar el color de fons de groc, creem una classe per fer-ho possible, en style.css
el.className = "groc";

//per afegir style en l'element
el.style.color = "white";

//seleccionar varios elements de la pagina.

function changerColor() {
  const divs = document.querySelectorAll("div"); //pots seleccionar per qualsevol cosa millor que  getElementbyId
  //per a modificat vasris elements hem de fer un loop.
  for (const div of divs) {
    div.innerText = "Berlin";
    div.style.color = input.value;
  }
}
//CREAR UN BOTTON

const btn = document.createElement("button");
btn.innerText = "Click me!";
document.body.appendChild(btn);

//per afegir un event listener (llamamiento) al boto
//els egon elememt fa referencia cap a la funció, SENSE PARENTESIS
btn.addEventListener("click", function () {
  changerColor(); //per injectar parametres per saber la imatge clicada.
});
//vull tenir un imput que pusgui escriure el color i que em pinti el color que sigui
// creem un imput i el mostrem per pantalla

const input = document.createElement("input");
document.body.appendChild(input);

// escriure el color i que el pinti del color que sigui input.value
