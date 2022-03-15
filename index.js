//CREAR ELEMENT NOU//
const el = document.createElement("p");

el.innerText = "Hello Barcelona";

document.body.appendChild(el);

//AGAFAR ELEMENT QUE JA EXISTEIX//

const demo = document.getElementById("demo");

function hadleClick(event) {
  demo.innerText = `Has fet click a x : ${event.x} i y : ${event.y}`;

  if (event.x > 200) {
    demo.style.backgroundColor = "yellow";
  } else {
    demo.style.backgroundColor = "orange";
  }
}

demo.addEventListener("mousemove", hadleClick);
