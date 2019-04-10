const siteContent = {
  nav: {
    'nav-item-1': 'Services',
    'nav-item-2': 'Product',
    'nav-item-3': 'Vision',
    'nav-item-4': 'Features',
    'nav-item-5': 'About',
    'nav-item-6': 'Contact',
    'img-src': 'img/logo.png'
  },

  cta: {
    h1: 'DOM\n Is\n Awesome',
    button: 'Get Started',
    'img-src': 'img/header-img.png'
  },

  'main-content': {
    'features-h4': 'Features',

    'features-content':
      'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',

    'about-h4': 'About',

    'about-content':
      'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',

    'middle-img-src': 'img/mid-page-accent.jpg',

    'services-h4': 'Services',

    'services-content':
      'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',

    'product-h4': 'Product',

    'product-content':
      'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',

    'vision-h4': 'Vision',

    'vision-content':
      'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
  },

  contact: {
    'contact-h4': 'Contact',
    address: '123 Way 456 Street\nSomewhere, USA',
    phone: '1 (888) 888-8888',
    email: 'sales@greatidea.io'
  },

  footer: {
    copyright: 'Copyright Great Idea! 2018'
  }
};

// make the logo image appear
let logo = document.getElementById('logo-img');
logo.setAttribute('src', siteContent['nav']['img-src']);

// make the nav items appear
let aLinkText = document.getElementsByTagName('a');
aLinkText[0].textContent = 'Services';
// aLinkText[0].style.color = '#DEC6D9';
aLinkText[1].textContent = 'Products';
aLinkText[2].textContent = 'Vision';
aLinkText[3].textContent = 'Features';
aLinkText[4].textContent = 'About';
aLinkText[5].textContent = 'Content';

// make the cta image appear
let ctaImage = document.getElementById('cta-img');
ctaImage.setAttribute('src', siteContent['cta']['img-src']);

// make the H1 appear
let ctaHeading = document.querySelector('h1');
ctaHeading.textContent = siteContent['cta']['h1'];
ctaHeading.style.whiteSpace = 'pre-wrap';

// make the button text appear
let ctaButton = document.querySelector('button');
ctaButton.textContent = siteContent['cta']['button'];

// make features h4 appear
let featuresH4 = document.querySelector('div:nth-child(1) > h4');
featuresH4.textContent = siteContent['main-content']['features-h4'];

// make features paragraph appear
let featuresP = document.querySelector('div:nth-child(1) > p');
featuresP.textContent = siteContent['main-content']['features-content'];

// make about h4 appear
let aboutH4 = document.querySelector('div:nth-child(2) > h4');
aboutH4.textContent = siteContent['main-content']['about-h4'];

// make about paragraph appear
let aboutP = document.querySelector('div:nth-child(2) > p');
aboutP.textContent = siteContent['main-content']['about-content'];

// make the middle image appear
let middleImage = document.getElementById('middle-img');
middleImage.setAttribute('src', siteContent['main-content']['middle-img-src']);

// make the services h4 appear
let servicesH4 = document.querySelector(
  'div.bottom-content > div:nth-child(1) > h4'
);
servicesH4.textContent = siteContent['main-content']['services-h4'];

// make the services paragraph appear
let servicesP = document.querySelector(
  'div.bottom-content > div:nth-child(1) > p'
);
servicesP.textContent = siteContent['main-content']['services-content'];

// // make the product h4 appear
let productH4 = document.querySelector(
  'div.bottom-content > div:nth-child(2) > h4'
);
productH4.textContent = siteContent['main-content']['product-h4'];

// // make the product paragraph appear
let productP = document.querySelector(
  'div.bottom-content > div:nth-child(2) > p'
);
productP.textContent = siteContent['main-content']['product-content'];

// // make the vision h4 appear
let visionH4 = document.querySelector(
  'div.bottom-content > div:nth-child(3) > h4'
);
visionH4.textContent = siteContent['main-content']['vision-h4'];

// // make the vision paragraph appear
let visionP = document.querySelector(
  'div.bottom-content > div:nth-child(3) > p'
);
visionP.textContent = siteContent['main-content']['vision-content'];

// make the contact h4 appear
let contactH4 = document.querySelector('section.contact > h4');
contactH4.textContent = siteContent['contact']['contact-h4'];

// make the paragraph 1-address appear
let p1Address = document.querySelector('section.contact > p:nth-child(2)');
p1Address.textContent = siteContent['contact']['address'];
p1Address.style.whiteSpace = 'pre-wrap';

// make the paragraph 2-phone appear
let p2Phone = document.querySelector('section.contact > p:nth-child(3)');
p2Phone.textContent = siteContent['contact']['phone'];

// make the paragraph 3-email appear
let p3Email = document.querySelector('section.contact > p:nth-child(4)');
p3Email.textContent = siteContent['contact']['email'];

let footerText = document.querySelector('footer > p');
footerText.textContent = siteContent['footer']['copyright'];
