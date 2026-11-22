/* Meta PageView is loaded only after an explicit advertising-cookie opt-in. */
(() => {
  'use strict';
  const PIXEL_ID='1459512363027624', KEY='aljami-advertising-consent-v1', MAX_AGE=180*24*60*60*1000;
  let choice=null,tracked=false,loaded=false;
  const messages={
    fr:{title:'Cookies publicitaires',text:'Avec votre accord, ALJAMÏGUIDE utilise le pixel Meta pour mesurer les visites issues de ses publicités. Meta peut recevoir des identifiants de navigation et l’adresse de la page visitée. Aucun champ du formulaire n’est transmis par cette intégration. Votre choix est conservé 6 mois et peut être modifié à tout moment.',accept:'Accepter',reject:'Refuser',settings:'Cookies publicitaires',policy:'Confidentialité Meta'},
    de:{title:'Werbe-Cookies',text:'Mit Ihrer Einwilligung verwendet ALJAMÏGUIDE das Meta-Pixel, um Besuche aus Werbeanzeigen zu messen. Meta kann Browser-Kennungen und die Adresse der besuchten Seite erhalten. Diese Integration übermittelt keine Formularfelder. Ihre Auswahl wird 6 Monate gespeichert und kann jederzeit geändert werden.',accept:'Akzeptieren',reject:'Ablehnen',settings:'Werbe-Cookies',policy:'Datenschutz bei Meta'},
    en:{title:'Advertising cookies',text:'With your consent, ALJAMÏGUIDE uses the Meta pixel to measure visits from its advertisements. Meta may receive browser identifiers and the address of the visited page. This integration does not send form fields. Your choice is saved for 6 months and can be changed at any time.',accept:'Accept',reject:'Reject',settings:'Advertising cookies',policy:'Meta privacy policy'}
  };
  function readChoice(){try{const c=JSON.parse(localStorage.getItem(KEY));if(c&&['accepted','rejected'].includes(c.value)&&Number.isFinite(c.at)&&c.at<=Date.now()&&Date.now()-c.at<MAX_AGE)return c.value;}catch{}return null;}
  function clearMetaCookies(){for(const name of ['_fbp','_fbc']){document.cookie=name+'=; Max-Age=0; path=/; SameSite=Lax; Secure';const parts=location.hostname.split('.');for(let i=0;i<parts.length-1;i++){const domain=parts.slice(i).join('.');document.cookie=name+'=; Max-Age=0; path=/; domain='+domain+'; SameSite=Lax; Secure';}}}
  function enable(){
    if(!loaded){
      if(!window.fbq){const n=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments);};window.fbq=n;if(!window._fbq)window._fbq=n;n.push=n;n.loaded=true;n.version='2.0';n.queue=[];}
      window.fbq('consent','grant');window.fbq('set','autoConfig',false,PIXEL_ID);window.fbq('init',PIXEL_ID);
      const script=document.createElement('script');script.async=true;script.src='https://connect.facebook.net/en_US/fbevents.js';document.head.appendChild(script);loaded=true;
    }else window.fbq('consent','grant');
    if(!tracked){window.fbq('track','PageView');tracked=true;}
  }
  function save(value){choice=value;try{localStorage.setItem(KEY,JSON.stringify({value,at:Date.now()}));}catch{}if(value==='accepted')enable();else{if(window.fbq)window.fbq('consent','revoke');clearMetaCookies();}banner.hidden=true;settings.focus();}
  const banner=document.createElement('section');banner.className='advertising-consent';banner.setAttribute('aria-labelledby','advertising-title');banner.setAttribute('aria-label','Cookies');
  const title=document.createElement('h2');title.id='advertising-title';const text=document.createElement('p');
  const policy=document.createElement('a');policy.href='https://www.facebook.com/privacy/policy/';policy.target='_blank';policy.rel='noopener noreferrer';
  const actions=document.createElement('div');actions.className='advertising-actions';const reject=document.createElement('button'),accept=document.createElement('button');reject.type=accept.type='button';reject.addEventListener('click',()=>save('rejected'));accept.addEventListener('click',()=>save('accepted'));actions.append(reject,accept);banner.append(title,text,policy,actions);
  const settings=document.createElement('button');settings.type='button';settings.className='advertising-settings';settings.addEventListener('click',()=>{banner.hidden=false;reject.focus();});
  function translate(){const t=messages[document.documentElement.lang]||messages.fr;title.textContent=t.title;text.textContent=t.text;policy.textContent=t.policy;reject.textContent=t.reject;accept.textContent=t.accept;settings.textContent=t.settings;}
  document.body.append(banner,settings);translate();new MutationObserver(translate).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
  choice=readChoice();banner.hidden=choice!==null;if(choice==='accepted')enable();else clearMetaCookies();
  window.addEventListener('storage',event=>{if(event.key!==KEY&&event.key!==null)return;choice=readChoice();if(choice==='accepted')enable();else{if(window.fbq)window.fbq('consent','revoke');clearMetaCookies();}banner.hidden=choice!==null;});
})();
