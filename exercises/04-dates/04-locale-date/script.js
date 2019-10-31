/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let adj = new Date; 
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }; //Dire qu'est-ce qui est en chiffre ou en lettre
    console.log(adj.toLocaleDateString('fr-FR', options)); // Ici c'est la date et la langue utilisée

    let final = document.getElementById("target").textContent=adj.toLocaleDateString('fr-FR', options); //Pour afficher ce que je veux 

})();
