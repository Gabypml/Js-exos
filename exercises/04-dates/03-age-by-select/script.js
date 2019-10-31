/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    //ici j'initialise ma variable avec l'objet Date
    let dateCal = new Date;

    //je donne à chaque variable l'élement date qui correspond
    let jourD = dateCal.getDay()
    let moisD = dateCal.getMonth()
    let anneeD = dateCal.getFullYear()

    //je vais chercher le bouton et je lui rajoute un evenement
    document.getElementById('run').addEventListener('click', function(){

    //ici avec value je vais chercher la date seletionner par l'user
        let jour = document.getElementById("dob-day").value;
        let mois = document.getElementById("dob-month").value;
        let annee = document.getElementById("dob-year").value;

    //comme la value est un string je la convertie (ici parseInt m'intéresee plus que l'unaire +) en integer
        let numJour = parseInt(jour);
        let numMois = parseInt(mois);
        let numAnnee = parseInt(annee);

    //ici c'est juste que je rentre d'office dans ma condition jamais tu ne sera née au délà de 2019
        if(anneeD > annee){
    //je deduis simplement 2019 à la date rentré par l'user
            let age = anneeD - annee;
            let ageM =  moisD- mois;
            alert("Vous avez : "+ age+ " ans," + ageM +" mois et "+ jour +" jours !")
        }
    })
})();
