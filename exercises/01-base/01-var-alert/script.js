/* becode/javascript
 *
 * /01-base/01-var-alert/script.js - 1.1: var & alert
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    //let coucou = "Hello World";
    //alert(coucou);
    //let prenom = prompt("Nom?");
    //let prompty = alert("Bonjour" + prenom);
    //prompty;
   // let question = prompt("Tu veux du gateau?");
    //question;
    //if (question =="oui"){

       // alert("bravo");
        //console.log("bravo2");

   // } else { 

   //     alert("BOUUUUH");

   // }

   let testContinue=true;
while(true)
     {
    let age= prompt("quel est ton age?");
    let sexe= prompt("Sexe?");
    let ville=prompt("ville?"); 
    let reponse=confirm("Confirme-tu?"+age+sexe+ville);
    //let testContinue=true;
    if(reponse === true)break
     }
    
})();
