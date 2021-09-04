$(document).ready(function(){



let hamberger = document.querySelector('.hamberger');
let times = document.querySelector('.times');
let mobileNav = document.querySelector('mobile-nav');

hamberger.addEventListener('click', function(){
mobileNav .classList .add('open');
});
var typed = new Typed(".typing",{
    strings:["Programmer", "Web Developer", "Freelancer", "Engineering Student"],
    typespeed: 10,
    backspeed: 20,
    loop: true,
});
times.addEventListener('click', function(){
    mobileNav .classList 
    .remove('open');
});
});