/* Shared brand endorsement and About page copy. Existing page scripts own language selection. */
(() => {
  'use strict';
  const copy = {
    en: {
      brandBy:'A brand of NK Voyage',navAbout:'About us',footerBy:'ALJAMÏGUIDE, a brand of NK Voyage',
      navHome:'Home',navDest:'Destinations',navJourneys:'Our journeys',navOffers:'Offers & prices',navGuide:'Umrah & Hajj',navGallery:'Photos & videos',navContact:'Contact',reserveNow:'Plan my journey',
      footerText:'Religious and cultural journeys. Experiences of faith, discovery and connection in Makkah and Madinah.',footerNav:'Explore',footerUseful:'Useful information',footerContact:'Contact us',faqKicker:'Frequently asked questions',footerQuestions:'Questions? Contact us',
      aboutKicker:'ABOUT US',aboutTitle:'ALJAMÏGUIDE, a brand of NK Voyage',aboutLead:'One team, two identities: travel and spiritual guidance.',storyKicker:'YOUR SPIRITUAL JOURNEY',storyTitle:'A pilgrimage shaped around you.',
      aboutP1:'ALJAMÏGUIDE is the specialised branch of NK Voyage, dedicated to organising Umrah, Hajj and spiritual journeys.',
      aboutP2:'We support you at every stage of your pilgrimage, offering services tailored to your needs and combining comfort, peace of mind and personalised guidance.',
      aboutOffers:'Explore our offers',identityAl:'Our identity dedicated to spiritual journeys',identityNk:'The company behind ALJAMÏGUIDE',contactKicker:'LET’S DISCUSS YOUR PLANS',aboutContactTitle:'Your journey begins with a conversation.',aboutContactText:'A group Umrah or a private, personalised VIP stay? Contact us to prepare your journey.',aboutWhatsapp:'Contact us on WhatsApp'
    },
    de: {
      brandBy:'Eine Marke von NK Voyage',navAbout:'Über uns',footerBy:'ALJAMÏGUIDE, eine Marke von NK Voyage',
      navHome:'Startseite',navDest:'Reiseziele',navJourneys:'Unsere Reisen',navOffers:'Angebote & Preise',navGuide:'Umra & Hadsch',navGallery:'Fotos & Videos',navContact:'Kontakt',reserveNow:'Reise anfragen',
      footerText:'Religiöse und kulturelle Reisen. Erlebnisse voller Glauben und Entdeckungen in Mekka und Medina.',footerNav:'Entdecken',footerUseful:'Nützliche Informationen',footerContact:'Kontakt',faqKicker:'Häufige Fragen',footerQuestions:'Noch Fragen? Kontakt aufnehmen',
      aboutKicker:'ÜBER UNS',aboutTitle:'ALJAMÏGUIDE, eine Marke von NK Voyage',aboutLead:'Ein Team, zwei Identitäten: Reisen und spirituelle Begleitung.',storyKicker:'IHRE SPIRITUELLE REISE',storyTitle:'Eine Pilgerreise nach Ihren Bedürfnissen.',
      aboutP1:'ALJAMÏGUIDE ist der spezialisierte Bereich von NK Voyage für die Organisation von Umra, Hadsch und spirituellen Reisen.',
      aboutP2:'Wir begleiten Sie bei jedem Schritt Ihrer Pilgerreise mit Leistungen, die auf Ihre Bedürfnisse abgestimmt sind und Komfort, Ruhe und persönliche Betreuung verbinden.',
      aboutOffers:'Unsere Angebote entdecken',identityAl:'Unsere Identität für spirituelle Reisen',identityNk:'Das Unternehmen hinter ALJAMÏGUIDE',contactKicker:'SPRECHEN WIR ÜBER IHRE PLÄNE',aboutContactTitle:'Ihre Reise beginnt mit einem Gespräch.',aboutContactText:'Eine Umra in der Gruppe oder eine private, individuell gestaltete VIP-Reise? Kontaktieren Sie uns, um Ihre Reise zu planen.',aboutWhatsapp:'Über WhatsApp kontaktieren'
    }
  };
  const elements=[...document.querySelectorAll('[data-brand]')];
  const originals=new Map(elements.map(el=>[el,el.textContent]));
  function update(){const lang=document.documentElement.lang;elements.forEach(el=>{el.textContent=copy[lang]?.[el.dataset.brand]||originals.get(el);});}
  new MutationObserver(update).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
  update();
})();
