/* becode/javascript
 *
 * /07-classes/02-methods/script.js - 7.2: méthodes
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById('run').addEventListener('click', function(){
        class Personne{
            constructor(lastname, firstname){
                this.lastname= lastname ;
                this.firstname= firstname ; 
            }
            bonjour(){
                if(this.lastname= "Gaby"){
                    console.log("Hello");
                }else{
                    console.log("T NUL");
                }
            }
        }
            let gaby = new Personne("Gaby", "pombo");
            gaby.bonjour();

        
    });
})();
