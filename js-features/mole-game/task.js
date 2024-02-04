let deadCount = 0;
let lostCount = 0;
function getHole(index) {
    return document.getElementById(`hole${index}`);
}
for (let i = 1; i <= 9; i++) {
    const hole = getHole(i);

    hole.addEventListener('click', () => HoleClick(hole));
}

function restartGame(){
    deadCount = 0;
    lostCount = 0;
}
function HoleClick(hole) {
    if (hole.classList.contains('hole_has-mole')) {
        deadCount++;
    } else {
        lostCount++;
    }

    updateStats();
    resetMole();
    if (lostCount >= 5)
    {
        alert('Вы проиграли');
        restartGame();
    }
    if (deadCount >= 10)
    {
        alert('Вы победили');
        restartGame();
    }
}
function updateStats() {
    document.getElementById('dead').textContent = deadCount;
    document.getElementById('lost').textContent = lostCount;
}

function resetMole() {
    const holes = document.querySelectorAll('.hole');
    for (let i = 0; i < holes.length; i++) {
        holes[i].classList.remove('hole_has-mole');
      }

    const randomIndex = Math.floor(Math.random() * holes.length) + 1;
    getHole(randomIndex).classList.add('hole_has-mole');
}