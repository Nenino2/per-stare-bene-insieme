const bubbles = document.querySelectorAll('.bubble');
const play = document.querySelector('.play')

play.addEventListener('click', () => {
    playMusic()
    animate()
    setInterval(animate, 3000)
    play.parentElement.removeChild(play)
})

bubbles.forEach(bubble => {
    bubble.addEventListener('click', () => {
        alert('Soundtrack: Hymn of the United Nations')
    })
})
function playMusic() {
    const audio = new Audio('soundtrack.mp3');
    audio.play();
}

function animate () {
    const border = Math.sqrt(window.innerWidth *  window.innerWidth + window.innerHeight / window.innerHeight) / 5
    const windowWidth = window.innerWidth - border;
    const windowHeight = window.innerHeight - border;
    const newPositions = []

    function getRandom(min, max) {
        return Math.random() * (max - min) + min
    }

    for (let bubble of bubbles) {
        let valid = true;
        let randomTop = 0;
        let randomLeft = 0
        while(valid) {
            randomTop = getRandom(border / 2, windowHeight);
            randomLeft = getRandom(border / 2, windowWidth);
            valid = !newPositions.every(({top, left}) => {
                if (Math.round(top / 200) === Math.round(randomTop / 200)) return false;
                if (Math.round(left / 200) === Math.round(randomLeft / 200)) return false;
                return true;
            })
        }
        const randomScale = getRandom(0.7, 1.5)
        bubble.style.top = randomTop + 'px'
        bubble.style.left = randomLeft + 'px'
        bubble.style.transform = `scale(${randomScale}, ${randomScale})`
    }
    console.log('UPDATED')
}