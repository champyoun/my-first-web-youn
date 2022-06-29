const toggletn = document.querySelector('.navbar_toggletn');
const meun = document.querySelector('.navbar_meun');
const icons = document.querySelector('.navbar_icons');

toggletn.addEventListener('click', () => {
    meun.classList.toggle('active');
    icons.classList.toggle('active');
}) ;
