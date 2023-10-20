const navLinks = document.querySelectorAll('.fade');

navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.transition = 'opacity 0.5s';
        link.style.opacity = '0.5';
    });

    link.addEventListener('mouseout', () => {
        link.style.transition = 'opacity 0.5s';
        link.style.opacity = '1';
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const formData = new FormData(form);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });
        console.log(data);
        form.reset();
    });
});