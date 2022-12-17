const contacts = document.getElementById('.contacts');
const skills = document.getElementById('.skills');
const code = document.getElementById('code');
const courses = document.getElementById('.courses');
const projects = document.getElementById('.projects');
const education = document.getElementById('.education');
const english = document.getElementById('.english');
const navItem = document.querySelectorAll('.nav-link');

console.log('navItem =', navItem[0].textContent);
console.log('code =', code.id);

function changeVisibleContent() {
    if (
        navItem[0].classList.contains('sectionVisible') ||
        navItem[1].classList.contains('sectionVisible') ||
        navItem[2].classList.contains('sectionVisible') ||
        navItem[3].classList.contains('sectionVisible') ||
        navItem[4].classList.contains('sectionVisible') ||
        navItem[5].classList.contains('sectionVisible')) {
        navItem.classList.remove('sectionVisible');
    }
    if (navItem[0].textContent == contacts.id ||
        navItem[1].textContent == code.id ||
        navItem[2].textContent == courses.id ||
        navItem[3].textContent == projects.id ||
        navItem[4].textContent == education.id ||
        navItem[5].textContent == english.id
    ) {
        navItem.classList.add('sectionVisible');
        console.log('navitem =', navItem[i].textContent);
    }
}


navItem.addEventListener('click', changeVisibleContent);






/*
const content = document.querySelectorAll ('content');
const navItem = document.querySelector ('.nav-link');
const section_title_h2 = document.querySelectorAll ('.section-title-h2')

function changeVisibleContent () {
    if (navItem.classList.contains('contentVisible')) {
        navItem.classList.remove('contentVisible');
    }
    console.log ('content=', content.textContent)
    console.log('navItem =', navItem.textContent);
    console.log('h2 =', section_title_h2.innerText);
}
   
changeVisibleContent();

*/