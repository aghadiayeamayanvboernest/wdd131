const hambutton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
const temple = document.querySelector('.temple');


hambutton.addEventListener('click', () => {
    navigation.classList.toggle('show');
    hambutton.classList.toggle('show');
    temple.classList.toggle('hide')
});


// this set of code help in the h2 to change to the same link as the nav when click
const navLinks = document.querySelectorAll('.navigation a');
const sectionTitle = document.getElementById('sectionTitle');

navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();

        const linkText = this.textContent;
        sectionTitle.textContent = linkText;
    });
});
//it end here 

