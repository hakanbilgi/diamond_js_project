//! https://github.com/clarusway/clarusway-full-stack-tr-12-22/blob/main/javascript/coding-challenges/CC-06/README.md

//* JS-CC-022 : Draw Diamond with Star Character

//? The purpose of this coding challenge is to draw an empty diamond figure (only the outline) into textarea field, using star character (*). Take the number of rows from user and draw the diamond figure accordingly. Add event listener to the input field and call the function when the user enters or changes the value.

//* Expected Outcome (input = 5)
//    *
//   * *
//  *   *
// *     *
//*       *
// *     *
//  *   *
//   * *
//    *

const input = document.querySelector("#number");
const textarea = document.querySelector("#textarea");

input.addEventListener("change", () => {
    textarea.value = "";
    const number = input.value;
    let space = 0;

    // üst
    for (let i = 1, j = 1; i <= number; i++) {
        // repeat fonksiyonu verilen string'i girilen değer kadar tekrar eder.
        textarea.value += " ".repeat(number - i);
        textarea.value += "*";

        // ilk satırda değilsek...
        if (i > 1) {
            textarea.value += " ".repeat(j);
            space = j;
            j += 2;
            textarea.value += "*";
        }

        textarea.value += "\n";
    }
    // alt
    for (let i = number - 1, j = space - 2; i >= 1; i--) {
        textarea.value += " ".repeat(number - i);
        textarea.value += "*";

        // ilk satırda değilsek...
        if (i > 1) {
            textarea.value += " ".repeat(j);
            space = j;
            j -= 2;
            textarea.value += "*";
        }

        textarea.value += "\n";
    }
});
