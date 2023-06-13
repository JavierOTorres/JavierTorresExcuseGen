/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here
  let randomNumber = Math.random() * 10;
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });

  console.log("Hello Rigo from the console!");
};

let generateExcuse = () => {
  let pronoun = ["A", "The"];
  let subject = ["jogger", "dog", "car", "monster", "pizza"];
  let action = ["took my", "stole my", "threw my", "hit my"];
  let what = ["homework", "laptop", "xbox", "phone", "money"];
  let where = [
    "in my house",
    "in my garage",
    "at the store",
    "in space",
    "in the dark",
  ];

  let proIndx = Math.floor(Math.random() * pronoun.length);
  let subIndx = Math.floor(Math.random() * subject.length);
  let actIndx = Math.floor(Math.random() * action.length);
  let whatIndx = Math.floor(Math.random() * what.length);
  let whereIndx = Math.floor(Math.random() * where.length);

  return `${pronoun[proIndx]} ${subject[subIndx]} ${action[actIndx]} ${what[whatIndx]} ${where[whereIndx]}`;
};
