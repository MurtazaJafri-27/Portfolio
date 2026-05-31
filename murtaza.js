
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

    const artworkButton = document.getElementById('artworkButton');
    const artworkContent = document.querySelector('.artworkView');
    const servicesButton = document.getElementById('servicesButton');
    const servicesContent = document.querySelector('.servicesView');


// handle clicks
servicesButton.addEventListener('click', () => {
    if(artworkContent.classList.contains('popInAni')){
        artworkContent.classList.remove('popInAni');
        artworkContent.classList.add('popOutAni');
        servicesContent.classList.add('popInAni');
    }
    else if(servicesContent.classList.contains('popInAni')){
        servicesContent.classList.remove('popInAni');
        servicesContent.classList.add('popOutAni');
    }
    else {
        servicesContent.classList.remove('popOutAni');
        servicesContent.classList.add('popInAni');
    }
});

artworkButton.addEventListener('click', () => {
    if(servicesContent.classList.contains('popInAni')){
        servicesContent.classList.remove('popInAni');
        servicesContent.classList.add('popOutAni');
        artworkContent.classList.add('popInAni');
    }
    else if(artworkContent.classList.contains('popInAni')){
        artworkContent.classList.remove('popInAni');
        artworkContent.classList.add('popOutAni');
    }
    else {
        artworkContent.classList.remove('popOutAni');
        artworkContent.classList.add('popInAni');
    }
});


      const images = document.querySelectorAll('.artDiv img');
      const artPopView = document.querySelector('.artPopView');
      const mobileMedia = window.matchMedia('(max-width: 767px)');

      images.forEach(e => {
        e.addEventListener('click', () => {
            const newImg = document.createElement('img');
            newImg.src = e.src;

            if(mobileMedia.matches){
                newImg.style.width = 70 + '%';
                newImg.style.height = 'auto';
            } else {
                newImg.style.height = 70 + '%';
                newImg.style.width = 'auto';
            }

            artPopView.appendChild(newImg);
            artPopView.classList.remove('popOutFastAni');
            artPopView.classList.add('popInFastAni');
        })
      })

      artPopView.addEventListener('click', () => {
        artPopView.classList.remove('popInFastAni');
        artPopView.classList.add('popOutFastAni');
        artPopView.replaceChildren();
      })

      const postsButton = document.getElementById('postsButton');

      postsButton.addEventListener('click', () => {
        window.location.href = 'postings.html';
      });
})
