/* becode/javascript
 *
 * /03-colors/01-change-bcg-one/script.js - 3.1: couleur de fond (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    /*
    //récupérer le premier bouton
    let boutons = document.getElementsByTagName('button');
    //ajouter un evenement sur le premier bouton 
    boutons[0].addEventListener('click', ()=>{
       //essayer de récupérer valeur de son id 
       let color_bouton = boutons[0].getAttribute('id'); 
       //changer la couleur du background
       document.body.style.backgroundColor = color_bouton;
    })*/
    let boutons = document.getElementsByTagName('button');
    for(let bouton of boutons)
    {
        bouton.addEventListener('click', ()=>{
        //essayer de récupérer valeur de son id 
        let color_bouton = bouton.getAttribute('id'); 
        //changer la couleur du background
        document.body.style.backgroundColor = color_bouton;   
        });
    }
   
})();
