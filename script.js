function mOver(obj) {
    let affficheDesc = obj.querySelector(".desc");
    affficheDesc.classList.remove('hide');
}

function mOut(obj) {
    let affficheDesc = obj.querySelector(".desc");
    affficheDesc.classList.add('hide');

}

// SCROLLIGN
function scrollToSection(divId) {
    var section = document.getElementById(divId);
    section.scrollIntoView({
        behavior: 'smooth'
    });
}

const elements = document.querySelectorAll('.element');
window.addEventListener('scroll', () => {
    const triggerBottom = window.innerHeight * 0.8;
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < triggerBottom) {
            element.classList.add('show');
        }
    })
})