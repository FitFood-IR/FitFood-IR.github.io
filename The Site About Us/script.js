const boxes = document.querySelectorAll('.box, .top, .center');
boxes.forEach(box => {
    box.style.opacity = '1';
    box.addEventListener('mouseenter', () => {
        boxes.forEach(b => {
            if (b !== box) {
                b.style.opacity = '0.5'; 
            }
        });
    });

    box.addEventListener('mouseleave', () => {
        boxes.forEach(b => {
            b.style.opacity = '1'; 
        });
    });
});

function toggleMenu() {
    document.querySelector('.hamburger').
classList.toggle('active');
    document.getElementById('myMenu').
classList.toggle('show');
    document.body.classList.toggle('menu-open');
}

document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', () => {
        const answer = 
        item.nextElementSibling;
        const arrow =
        item.querySelector('.arrow');
        if(answer.style.display === 
            'block'
        ) {
            answer.style.display = 'none';
            arrow.src = 'img/down-arrow.svg';
        
        arrow.classList.remove('rotated');
    }
        else {
            answer.style.display = 'block';
            arrow.src = 'img/down-arrow.svg';
        arrow.classList.add('rotated');
        }
    });
});


