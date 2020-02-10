/* becode/javascript
 *
 * /08-dom/09-match-password-one/script.js - 8.9: vérification de mots de passe (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    let input1 = document.getElementById('pass-one');
    let input2 = document.getElementById('pass-two');

    //recup the init border color
    let initColor = input1.style.borderColor;         

    document.getElementById('run').addEventListener(
        'click',
        () => {
            if (input1.value != input2.value) {
                input1.style.borderColor = "red";
                input2.style.borderColor = "red";
            } else {
                input1.style.borderColor = initColor;
                input2.style.borderColor = initColor;
            }
        }
    )
})();