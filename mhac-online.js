(function(){
  const cfg = window.MHAC_FIREBASE_CONFIG || {};
  const ready = cfg.apiKey && cfg.authDomain && cfg.projectId && cfg.appId;
  window.MHAC_ONLINE = { enabled:false, db:null, user:null, ready:Promise.resolve(false) };
  function setBadge(){
    const els=document.querySelectorAll('[data-online-status]');
    els.forEach(el=>{el.textContent=window.MHAC_ONLINE.enabled?'🟢 ONLINE DATABASE':'🟡 OFFLINE / LOCAL MODE';el.style.color=window.MHAC_ONLINE.enabled?'#087443':'#9a5b00'});
  }
  if(!ready || !window.firebase){ setBadge(); return; }
  try{
    if(!firebase.apps.length) firebase.initializeApp(cfg);
    const db=firebase.firestore();
    window.MHAC_ONLINE.db=db;
    window.MHAC_ONLINE.ready=firebase.auth().signInAnonymously().then(r=>{
      window.MHAC_ONLINE.enabled=true;window.MHAC_ONLINE.user=r.user;setBadge();return true;
    }).catch(e=>{console.error('Firebase auth:',e);setBadge();return false;});
  }catch(e){console.error('Firebase init:',e);setBadge();}

  window.saveOnlineOrder=async function(order){
    const ok=await window.MHAC_ONLINE.ready;if(!ok) throw new Error('Firebase is not connected');
    await db.collection('mhac_orders').doc(order.id).set({...order,updatedAt:firebase.firestore.FieldValue.serverTimestamp()},{merge:true});
    return true;
  };
  window.updateOnlineOrder=async function(id,patch){
    const ok=await window.MHAC_ONLINE.ready;if(!ok) throw new Error('Firebase is not connected');
    await db.collection('mhac_orders').doc(id).set({...patch,updatedAt:firebase.firestore.FieldValue.serverTimestamp()},{merge:true});
  };
  window.getOnlineOrder=async function(id){
    const ok=await window.MHAC_ONLINE.ready;if(!ok) return null;
    const d=await db.collection('mhac_orders').doc(id).get();return d.exists?d.data():null;
  };
  window.listenOnlineOrder=function(id,cb){
    let unsub=null;window.MHAC_ONLINE.ready.then(ok=>{if(ok)unsub=db.collection('mhac_orders').doc(id).onSnapshot(s=>cb(s.exists?s.data():null));});return ()=>{if(unsub)unsub();};
  };
  window.listenOnlineOrders=function(cb){
    let unsub=null;window.MHAC_ONLINE.ready.then(ok=>{if(ok)unsub=db.collection('mhac_orders').orderBy('createdAt','desc').limit(100).onSnapshot(s=>cb(s.docs.map(d=>d.data())),e=>console.error(e));});return ()=>{if(unsub)unsub();};
  };
  window.saveOnlineMenus=async function(menus){
    const ok=await window.MHAC_ONLINE.ready;if(!ok) throw new Error('Firebase is not connected');
    await db.collection('mhac_config').doc('catalog').set({menus,updatedAt:firebase.firestore.FieldValue.serverTimestamp()},{merge:true});
  };
  window.listenOnlineMenus=function(cb){
    let unsub=null;window.MHAC_ONLINE.ready.then(ok=>{if(ok)unsub=db.collection('mhac_config').doc('catalog').onSnapshot(s=>{if(s.exists&&Array.isArray(s.data().menus))cb(s.data().menus)});});return ()=>{if(unsub)unsub();};
  };
})();
