/* eslint-disable */
import "bootstrap";
import "./style.css";

// Arrays utilizados para el Domain Name Generator
let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];

for (let p = 0; p < pronoun.length; p++) {
  for (let a = 0; a < adj.length; a++) {
    for (let n = 0; n < noun.length; n++) {
      console.log(`https://www.${pronoun[p]}${adj[a]}${noun[n]}.com`);
      let elements = document.createElement("p");
      elements.innerText = `https://www.${pronoun[p]}${adj[a]}${noun[n]}.com`;
      elements.style.marginLeft = "20px";
      document.body.appendChild(elements);
    }
  }
}
