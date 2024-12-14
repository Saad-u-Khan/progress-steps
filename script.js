const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;

next.addEventListener('click', () => {
    currentActive++;

    if (currentActive > circles.length) {
        currentActive = circles.length;
    }
    update();
})

prev.addEventListener('click', () => {
    currentActive--;
    
    if (currentActive < 1) {
        currentActive = 1;
    }
    update();
})

function update() {
    circles.forEach((circle, index) => {
        if (index < currentActive) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    })

    const actives = document.querySelectorAll('.active');
    
    //moving the progress line by 33.33%
    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%';

    //disabling the prev button when the circle moves to position 1
    //disabling the next button when the circle moves to last position
    //enabling both the buttons when the circle is at position 2 or 3..
    if (currentActive === 1) {
        prev.disabled = true;
    } else if (currentActive === circles.length){
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }
}