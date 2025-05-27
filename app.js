const p1_btn = document.querySelector('#player1')
const p2_btn = document.querySelector('#player2')
const rst_btn = document.querySelector('#reset')

let score1 = document.querySelector('#score1')
let score2 = document.querySelector('#score2')
const maxScore = document.querySelector('#maxScore')

p1_btn.addEventListener('click', function () {
    if (maxScore.value > 0) {
        if (Number(score1.textContent) < maxScore.value && Number(score2.textContent) < maxScore.value) {
            console.log("Player1 scored!")
            const newScore = Number(score1.textContent) + 1;
            score1.textContent = String(newScore);
        }
        if (Number(score1.textContent) == maxScore.value) {
            score1.style.color = 'green';
            score2.style.color = 'red';
            p1_btn.classList.add('freeze');
            p2_btn.classList.add('freeze');
        }
    }

})



p2_btn.addEventListener('click', function () {
    if (maxScore.value > 0) {
        if (Number(score1.textContent) < maxScore.value && Number(score2.textContent) < maxScore.value) {
            console.log("Player2 scored!")
            const newScore = Number(score2.textContent) + 1;
            score2.textContent = String(newScore);
        }
        if (Number(score2.textContent) == maxScore.value) {
            score2.style.color = 'green';
            score1.style.color = 'red';
            p1_btn.classList.add('freeze');
            p2_btn.classList.add('freeze');
        }
    }
})

rst_btn.addEventListener('click', reset)
maxScore.addEventListener('change', reset)

function reset(e) {
    console.log("Resetting Game")
    score1.textContent = 0;
    score2.textContent = 0;
    score2.style.color = 'black';
    score1.style.color = 'black';
    p1_btn.classList.remove('freeze');
    p2_btn.classList.remove('freeze');
    console.dir(e.target);  // nodeName = "SELECT"  // nodeName = "BUTTON"

    if (e.target.nodeName === "BUTTON") {
        maxScore.value = 0;
    }
}