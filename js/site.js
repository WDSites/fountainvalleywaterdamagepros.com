(function(){
var d=document,root=d.documentElement,bp=window.matchMedia('(max-width:900px)');
var t=d.getElementById('navToggle'),dr=d.getElementById('mobDrawer'),ov=d.getElementById('mobOverlay'),cl=d.getElementById('mobClose');
function setOpen(o){if(!dr)return;dr.classList.toggle('open',o);ov.classList.toggle('open',o);t.setAttribute('aria-expanded',o?'true':'false');root.style.overflow=o?'hidden':'';}
if(t){t.addEventListener('click',function(){setOpen(!dr.classList.contains('open'));});}
if(cl){cl.addEventListener('click',function(){setOpen(false);});}
if(ov){ov.addEventListener('click',function(){setOpen(false);});}
d.addEventListener('keydown',function(e){if(e.key==='Escape'){setOpen(false);}});
bp.addEventListener('change',function(e){if(!e.matches){setOpen(false);}});
d.querySelectorAll('.faq-q').forEach(function(b){b.addEventListener('click',function(){var it=b.closest('.faq-item');var o=it.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');});});
})();
