/* becode/javascript
 *
 * /04-dates/01-title-by-hour-one/script.js - 4.1: texte en fonction de l'heure (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
   
    let ajd = new Date       //Obligé de passer par date pour avoir l'heure
    let test = ajd.getHours()       //Attribut de l'heure, d'office celui-là
    let new_test = ajd.getMinutes()         //Pareil pour les minutes
    let final ="Il est  "+ test+ ":" + new_test         //Là je mets l'heure et les minutes ensembles dans une variable

    let heure=document.getElementById("target");          //Je prends l'element Target de l'HTML

    if(test<18){        //Si il est moins de 18h, afficher bj sinon bs 
        let bonsoir =document.getElementById("target")
        bonsoir.textContent="Bonjour"       //TextContent sert a changer l'html texte
    }
    else{
        let bonsoir =document.getElementById("target")
        bonsoir.textContent="Bonsoir"
    }
})();
