/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  var quien = [
    "my father",
    "my mom",
    "my cat",
    "my dog",
    "my sister",
    "my brother"
  ];
  var que = [
    "I force myself to stay",
    "I force myself to take him",
    "He attacked me leaving",
    "ate",
    "I forget ",
    "Got sick on"
  ];
  var donde = [
    "at home",
    "to the supermarket",
    "my room",
    "my homework",
    "my car keys",
    "the trip"
  ];

  var sentencia =
    quien[aleatorio(quien.length)] +
    " " +
    que[aleatorio(que.length)] +
    " " +
    donde[aleatorio(donde.length)];

  let excusaSpan = document.querySelector("#excusa");
  excusaSpan.innerHTML = sentencia;
};

function aleatorio(length) {
  let numero = Math.floor(Math.random() * length);
  return numero;
}
