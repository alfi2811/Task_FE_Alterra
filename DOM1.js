document.getElementById('fill-me').innerHTML = "HALO"
let pClass = document.querySelectorAll('.change-all-of-me')

for (i = 0; i < pClass.length; i++) {
  pClass[i].innerHTML = "HALO JUGA";
}

let h2 = document.getElementsByTagName('h2')

for (i = 0; i < h2.length; i++) {
  h2[i].innerHTML = "Apa Kabar!";
}

let tag = document.createElement("button");
let text = document.createTextNode("Ini Button");
let element = document.getElementById("main");
tag.appendChild(text);
element.appendChild(tag);

tag = document.createElement("button");
text = document.createTextNode("Ini Juga Button");
tag.appendChild(text);
element.appendChild(tag);