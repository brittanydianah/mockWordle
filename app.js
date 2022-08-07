const words = ["redux", "query", "coder", "pixel", "array", "loops", "react"];
let secretWord = "";
let regex = /[a-zA-Z]/ig
const guess1 = document.querySelector("#guess1").children;
const guess2 = document.querySelector("#guess2");
const guess3 = document.querySelector("#guess3");
const guess4 = document.querySelector("#guess4");
const guess5 = document.querySelector("#guess5");
const guess6 = document.querySelector("#guess6");


if (regex.test(guess1[0].value) == true){
    console.log(guess1[0].value)
}else{console.log(false)}

for (let i=0; i<words.length; i++){
  let secretWord = words[i];
  
  




}



// $(document).ready(function() {
    // const letters = document.querySelectorAll("input");
    
//   $(document).keyup(function addLetter(event) {
 
//      if(letters[0].value == ""||letters[1].value == ""||letters[2].value == ""||letters[3].value == ""||letters[4].value == ""||letters[5].value == ""){
   
   
//         if (event.keyCode >= 65 && event.keyCode <= 90) { 
//           if (letters[0].value == ""){
//             letters[0].value = event.originalEvent.key;}
//           else if (letters[0].value !== "" && letters[1].value == ""){
//             letters[1].value = event.originalEvent.key;}
//           else if (letters[1].value !== "" && letters[2].value == ""){
//             letters[2].value = event.originalEvent.key;} 
//           else if (letters[2].value !== "" && letters[3].value == ""){
//             letters[3].value = event.originalEvent.key;}
//           else if (letters[3].value !== "" && letters[4].value == ""){
//             letters[4].value = event.originalEvent.key;}
    
//         } else {console.log(event.keyCode); console.log(words)}
//      }
//   })
 
  

// }) 
  
