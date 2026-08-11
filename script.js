const progress=document.querySelector('.progress');
window.addEventListener('scroll',()=>{
  const h=document.documentElement;
  progress.style.width=(h.scrollTop/(h.scrollHeight-h.clientHeight)*100)+'%';
});
const observer=new IntersectionObserver((entries)=>{
  entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')});
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{
    const target=document.querySelector(a.getAttribute('href'));
    if(target){e.preventDefault();target.scrollIntoView({behavior:'smooth'})}
  });
});
