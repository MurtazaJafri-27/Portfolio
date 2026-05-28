
document.addEventListener('DOMContentLoaded', function() {
    const circleContainer = document.querySelector('.circleContainer');

    for(let i = 0; i<100; i++){
        const circle = document.createElement('div');
        circle.classList.add('circle');

        const innerCircle = document.createElement('div');
        innerCircle.classList.add('innerCircle');

        const size = Math.floor(Math.random() * (30 - 10) + 10);
        circle.style.height = size + 'px';
        circle.style.width = size + 'px';

        if(i < 50){
        circle.style.left = (Math.random() * (85- 2) + 2) + '%';
        circle.style.bottom = (Math.random() * (50 - 10) + 10) + '%';
        }
        else {
            circle.style.right = (Math.random() * (85- 2) + 2) + '%';
            circle.style.bottom = (Math.random() * (50 - 10) + 10) + '%';
        }

        const time = Math.random() * (3 - 1) + 1;
        innerCircle.style.animation = `${time}s ripple linear infinite`;

        const opacity = Math.random() * (1 - 0.4) + 0.4;
        circle.style.opacity = opacity;

        const transVar = Math.random() * (10 - 5) + 5;
        circle.style.setProperty('--transVar', transVar + 'px');

        const bobTime = Math.random() * (5-3)+ 3;
        circle.style.animation = `${bobTime}s upNDown linear infinite`;

        circle.appendChild(innerCircle);
        circleContainer.appendChild(circle);
    }
})