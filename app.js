const words = ["redux", "query", "coder", "pixel", "array", "loops", "react"];
const guess1 = document.querySelector("#guess1").children;
const guess2 = document.querySelector("#guess2").children;
const guess3 = document.querySelector("#guess3").children;
const guess4 = document.querySelector("#guess4").children;
const guess5 = document.querySelector("#guess5").children;
const guess6 = document.querySelector("#guess6").children;



// for(let i=0; i<6; i++){
// guess2[i].disabled = true;
// guess3[i].disabled = true;
// guess4[i].disabled = true;
// guess5[i].disabled = true;
// guess6[i].disabled = true;
// }

guess2[0].disabled = true;
guess2[1].disabled = true;
guess2[2].disabled = true;
guess2[3].disabled = true;
guess2[4].disabled = true;

guess3[0].disabled = true;
guess3[1].disabled = true;
guess3[2].disabled = true;
guess3[3].disabled = true;
guess3[4].disabled = true;

guess4[0].disabled = true;
guess4[1].disabled = true;
guess4[2].disabled = true;
guess4[3].disabled = true;
guess4[4].disabled = true;

guess5[0].disabled = true;
guess5[1].disabled = true;
guess5[2].disabled = true;
guess5[3].disabled = true;
guess5[4].disabled = true;

guess6[0].disabled = true;
guess6[1].disabled = true;
guess6[2].disabled = true;
guess6[3].disabled = true;
guess6[4].disabled = true;

document.addEventListener("keyup", function(e){
  let secretWord = words[0].split("");

   if(){

   }else{}

  
  
      if(guess1[0].value !=="" && guess1[1].value !=="" && guess1[2].value !=="" && guess1[3].value !=="" && guess1[4].value !=="" && e.key =="Enter"){
         

              if(guess1[0].value ==secretWord[0]){
                guess1[0].style.backgroundColor = "green";
              }
              if(guess1[1].value ==secretWord[1]){
                guess1[1].style.backgroundColor = "green";
              }
              if(guess1[2].value ==secretWord[2]){
                guess1[2].style.backgroundColor = "green";
              }
              if(guess1[3].value ==secretWord[3]){
                guess1[3].style.backgroundColor = "green";
              }
              if(guess1[4].value ==secretWord[4]){
                guess1[4].style.backgroundColor = "green";
              }

              if((guess1[0].value !==secretWord[0]) && (guess1[0].value ==secretWord[1] || guess1[0].value ==secretWord[2] || guess1[0].value ==secretWord[3] || guess1[0].value ==secretWord[4]) ){
                guess1[0].style.backgroundColor = "yellow";
              }
        
              if((guess1[1].value !==secretWord[1]) && (guess1[1].value ==secretWord[0] || guess1[1].value ==secretWord[2] || guess1[1].value ==secretWord[3] || guess1[1].value ==secretWord[4]) ){
                guess1[1].style.backgroundColor = "yellow";
              }

              if((guess1[2].value !==secretWord[2]) && (guess1[2].value ==secretWord[1] || guess1[2].value ==secretWord[0] || guess1[2].value ==secretWord[3] || guess1[2].value ==secretWord[4]) ){
                guess1[2].style.backgroundColor = "yellow";
              }

              if((guess1[3].value !==secretWord[3]) && (guess1[3].value ==secretWord[1] || guess1[3].value ==secretWord[2] || guess1[3].value ==secretWord[0] || guess1[3].value ==secretWord[4]) ){
                guess1[3].style.backgroundColor = "yellow";
              }

              if((guess1[4].value !==secretWord[4]) && (guess1[4].value ==secretWord[1] || guess1[4].value ==secretWord[2] || guess1[4].value ==secretWord[3] || guess1[4].value ==secretWord[0]) ){
                guess1[4].style.backgroundColor = "yellow";
              }

              guess1[0].disabled = true;
              guess1[1].disabled = true;
              guess1[2].disabled = true;
              guess1[3].disabled = true;
              guess1[4].disabled = true;

              guess2[0].disabled = false;
              guess2[1].disabled = false;
              guess2[2].disabled = false;
              guess2[3].disabled = false;
              guess2[4].disabled = false;
          
      }



})


  
   

  





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
  
