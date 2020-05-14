var backdrop = document.querySelector('.backdrop')
var modal = document.querySelector('.modal')

var btns = document.querySelectorAll('.plan button')
var noBtn = document.querySelector('.modal button')

var toggleBtn = document.querySelector('.toggle-button')
var mobileNav = document.querySelector('.mobile-nav')

for (let index = 0; index < btns.length; index++) {
    btns[index].addEventListener('click',function () {
        modal.style.display = 'block';
        backdrop.style.display = 'block';

    })
    
}

noBtn.addEventListener('click', function () {
    
    modal.style.display = 'none';
    backdrop.style.display = 'none';


})

toggleBtn.addEventListener('click',function () {
    backdrop.style.display = 'block';
    mobileNav.style.display ='block'

})


