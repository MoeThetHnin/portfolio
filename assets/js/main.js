// mobile nav toggle
const navToggle=document.getElementById('navToggle');
const nav=document.getElementById('primaryNav');
if(navToggle&&nav){navToggle.addEventListener('click',()=>{nav.classList.toggle('open');});}
// theme toggle
const themeBtn=document.getElementById('themeToggle');
const root=document.documentElement;const saved=localStorage.getItem('theme');if(saved){root.setAttribute('data-theme',saved)}
if(themeBtn){themeBtn.addEventListener('click',()=>{const cur=root.getAttribute('data-theme');const next=cur==='light'?'':'light';if(next){root.setAttribute('data-theme','light');localStorage.setItem('theme','light')}else{root.removeAttribute('data-theme');localStorage.removeItem('theme')}})}
// year
const y=document.getElementById('year'); if(y){y.textContent=new Date().getFullYear();}

