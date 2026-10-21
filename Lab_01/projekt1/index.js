document.documentElement.style.colorScheme = localStorage.getItem("theme") || "dark";
document.getElementById('current-year').innerHTML = new Date().getFullYear();

let min_num = 0;
let max_num = 999999999;
let guess = 500000000;


function toggleFaq(el){
    el.classList.toggle("open");

    ans = el.querySelector('.faq-answer');
    ans.style.maxHeight ? ans.style.maxHeight = null : ans.style.maxHeight = ans.scrollHeight + "px";
}
function goUp(){
    min_num = guess+1;
    guess = Math.floor((min_num + max_num) / 2);
    document.getElementById('phone-output').innerHTML = guess;
}

function goDown(){
    max_num = guess-1;
    guess = Math.floor((min_num + max_num) / 2);
    document.getElementById('phone-output').innerHTML = guess;
}

function toggleNavLinks() {
    document.querySelector('.mobile-links-container').classList.toggle('open');
}

function switchColors(){
    if(document.documentElement.style.getPropertyValue('color-scheme') === 'light') {
        newColorScheme = 'dark';
    } else {
        newColorScheme = 'light';
    }
    localStorage.setItem("theme", newColorScheme);
    document.documentElement.style.setProperty('color-scheme', newColorScheme);
}