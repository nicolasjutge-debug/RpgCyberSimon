(function(){
  // Smoke test pour Vr/fortnite — coller dans la console DevTools sur la page ouverte
  var results = [];
  function ok(msg){results.push({ok:true,msg:msg});console.log('%c[OK] %c'+msg,'color:#27e0a0;font-weight:700','color:inherit');}
  function fail(msg){results.push({ok:false,msg:msg});console.error('[FAIL] '+msg);} 

  try{
    if(window.THREE) ok('Three.js détecté'); else fail('Three.js MANQUANT');
    var canvas = document.querySelector('canvas');
    if(canvas) ok('Canvas renderer présent'); else fail('Canvas renderer introuvable');
    var hud = document.querySelector('.hud');
    if(hud) ok('HUD présent'); else fail('HUD absent');
    var battle = document.getElementById('battleBtn');
    if(battle) ok('Bouton BATTLE présent'); else fail('Bouton BATTLE absent');
    var profileBtn = document.getElementById('openProfile');
    if(profileBtn) ok('Bouton Profile présent'); else fail('Bouton Profile absent');
    // test modal open/close
    if(profileBtn){ profileBtn.click(); setTimeout(function(){ var modal = document.getElementById('profileModal'); if(modal && getComputedStyle(modal).display!=='none') ok('Modal Profile ouvre correctement'); else fail('Modal Profile ne s\'ouvre pas'); // close
      var close = document.getElementById('closeProfile'); if(close){ close.click(); } }, 250); }
    // Check localStorage keys
    try{ var p = localStorage.getItem('cq_p'); ok('localStorage accessible (cq_p='+String(p).slice(0,20)+')'); }catch(e){ fail('localStorage indisponible: '+e.message); }
    // Check JSONBin/Groq keys presence
    var jb = localStorage.getItem('cq_j'); var gk = localStorage.getItem('cq_g');
    if(jb) ok('X-Master-Key JSONBin detectee localement'); else console.warn('X-Master-Key JSONBin non present (normal si mode Guest)');
    if(gk) ok('Cle Groq detectee localement'); else console.warn('Cle Groq non presente (les fonctions IA seront inactives)');

  }catch(e){fail('Erreur smoke test: '+e.message);} 

  // summary
  setTimeout(function(){
    var okc = results.filter(r=>r.ok).length, tot = results.length;
    console.log('Smoke test terminé — %c'+okc+'/'+tot+' checks OK','color:#27e0a0;font-weight:700');
    if(results.some(r=>!r.ok)){ console.warn('Certaines vérifications ont échoué — consulte les logs ci-dessus.'); }
  },400);
})();
