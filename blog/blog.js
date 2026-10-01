// ===== Nobre & Dias — script compartilhado do blog =====
var WHATS = "5511986367128"; // mesmo número da landing — troque aqui se mudar o chip

// Tema claro/escuro (igual à landing)
(function(){
  var btn=document.getElementById('theme');
  function cur(){return document.documentElement.getAttribute('data-theme');}
  try{var s=localStorage.getItem('tema'); if(s)document.documentElement.setAttribute('data-theme',s);}catch(e){}
  if(btn){
    btn.addEventListener('click',function(){
      var next=cur()==='dark'?'light':(cur()==='light'?'dark':(matchMedia('(prefers-color-scheme:dark)').matches?'light':'dark'));
      document.documentElement.setAttribute('data-theme',next);
      try{localStorage.setItem('tema',next);}catch(e){}
    });
  }
})();

// Ano no rodapé
var yr=document.getElementById('yr'); if(yr){yr.textContent=new Date().getFullYear();}

// Links de WhatsApp (qualquer <a data-wa="mensagem">)
(function(){
  function waLink(msg){return "https://wa.me/"+WHATS+"?text="+encodeURIComponent(msg);}
  var els=document.querySelectorAll('[data-wa]');
  for(var i=0;i<els.length;i++){ els[i].href=waLink(els[i].getAttribute('data-wa')); }
})();
