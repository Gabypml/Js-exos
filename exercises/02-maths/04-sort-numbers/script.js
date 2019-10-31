/* becode/javascript
 *
 * /02-maths/04-sort-numbers/script.js - 2.4: classer des nombres
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", () => {

        
        let nbs = document.getElementById("numbers").value; //récup les numbres de l'input
        new_nbs = nbs.split(',');
        new_nbs.sort(function(a, b){ //Ici il vaq y avoir le changement par ordre croissant
            return a - b; 
        })
        console.log(new_nbs)
        alert(new_nbs);



    });
})();
