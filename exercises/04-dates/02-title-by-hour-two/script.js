/* becode/javascript
 *
 * /04-dates/02-title-by-hour-two/script.js - 4.2: texte en fonction de l'heure (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
   
    let adj= new Date;
    let test= adj.getHours();
    let minutes= adj.getMinutes();
    let final= "Il est " + test + ":" +  minutes;
    console.log(final);

    let heure=document.getElementById("target");

    if(test<17){

        heure.textContent="Bonjour"
    }
    else if(test===17){

         if(minutes>30){

            heure.textContent="Bonsoir"
         } else{

            heure.textContent="Bonjour"

         }
    } else {

            heure.textContent="Bonjour"

        }
    
})();
