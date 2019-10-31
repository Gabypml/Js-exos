/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value
    document.getElementById("addition").addEventListener("click", () => {

    let premier = +document.getElementById("op-one").value + +document.getElementById("op-two").value;
    alert(premier);
    });

    document.getElementById("substraction").addEventListener("click", () => {
    let deux=+document.getElementById("op-one").value - +document.getElementById("op-two").value;
    alert(deux);
    });

    document.getElementById("multiplication").addEventListener("click", () => {
    let trois=+document.getElementById("op-one").value * +document.getElementById("op-two").value;
    alert(trois);
    });

    document.getElementById("division").addEventListener("click", () => {
    let quatre=+document.getElementById("op-one").value / +document.getElementById("op-two").value;
    alert(quatre);
    });



    




















   /* document.getElementById("addition").addEventListener("click", () => {
        const test=+document.getElementById("op-one").value
        const deux=+document.getElementById("op-two").value 
        alert(test+deux)
    });

    document.getElementById("substraction").addEventListener("click", () => {
        const test=+document.getElementById("op-one").value
        const deux=+document.getElementById("op-two").value 
        alert(test-deux)
    });

    document.getElementById("multiplication").addEventListener("click", () => {
        const test=+document.getElementById("op-one").value
        const deux=+document.getElementById("op-two").value 
        alert(test*deux)
    });

    document.getElementById("division").addEventListener("click", () => {
        const test=+document.getElementById("op-one").value
        const deux=+document.getElementById("op-two").value 
        alert(test/deux)
    });*/
})();
