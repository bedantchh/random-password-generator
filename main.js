const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];
let pw1 = document.getElementById("pw-1")
let pw2 = document.getElementById("pw-2")
let generatedpw1
let generatedpw2
let pwGenerate = document.getElementById("pw-generate")
pwGenerate.addEventListener("click", function () {
    pw1.textContent = ""
    pw2.textContent = ""
    for (let i = 0; i < 16; i++) {
        let randomIndex1 = (Math.floor(Math.random() * characters.length))
        // console.log(randomIndex)
        pw1.textContent += characters[randomIndex1]
        let randomIndex2 = (Math.floor(Math.random() * characters.length))
        pw2.textContent += characters[randomIndex2]
    }

})


