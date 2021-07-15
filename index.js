document.querySelector("button").addEventListener("click", findLength);
document.addEventListener("keyup", checkKey);

function checkKey(key) {
    if (key.keyCode === 13) {
        findLength();
    }
}

function findLength() {
    let word = document.querySelector("input").value;
    document.getElementById("answer").innerHTML = word.length;
}