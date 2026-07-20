
const menu=document.getElementById('navlinks');
document.querySelectorAll('[data-menu-toggle]').forEach(btn=>btn.addEventListener('click',()=>menu?.classList.toggle('open')));
menu?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>menu.classList.remove('open')));
