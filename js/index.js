const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent['nav']["img-src"])

let code = document.getElementById("cta-img");
code.setAttribute('src',siteContent['cta']['img-src'])

let middle = document.getElementById('middle-img');
middle.setAttribute('src',siteContent['main-content']['middle-img-src'])


// Navigation ////////
let navItems = document.querySelectorAll('a');

navItems[0].innerText=siteContent['nav']['nav-item-1']
navItems[1].innerText=siteContent['nav']['nav-item-2']
navItems[2].innerText=siteContent['nav']['nav-item-3']
navItems[3].innerText=siteContent['nav']['nav-item-4']
navItems[4].innerText=siteContent['nav']['nav-item-5']


const nav1 = document.createElement('a')
const mainNav = document.querySelector('nav')

nav1.innerText = 'Read'
nav1.href = '#'
mainNav.prepend(nav1)
nav1.style.color = 'green'



 const nav2 = document.createElement('a')
const mainNav2 = document.querySelector('nav')
nav2.innerText = 'Pictures'
nav2.href = '#'
mainNav2.append(nav2)
nav2.style.color = 'green'


// CTA////////////

let ctaHead = document.querySelector('h1');
ctaHead.innerText = siteContent['cta']['h1']

let center = document.querySelector('.cta-text');
center.style.textAlign='center'
center.style.justifyContent='flex-start'
center.style.alignItems='center'



const title = document.querySelector('.cta-text h1');
title.textContent = 'Dom \n Is \n Awesome';
title.style.textAlign='center'
title.style.width = '100px';
title.style.marginRight = '200px'


let ctaButton = document.querySelector('button');
ctaButton.textContent = siteContent['cta']['button']


// //Main////////////////

// let mainH4 =document.querySelector('text-content h4')
// mainH4.innerText = siteContent['main-content']['features-h4']


// let ctaContent = document.querySelector('p')
// ctaContent.textContent=siteContent['main-content']['features-content']


// let aboutH4 =document.querySelector('h4')
// aboutH4.innerText = siteContent['main-content']['about-h4']

// let ctaContents = document.querySelector('p')
// ctaContents.innerText=siteContent['main-content']['about-content']


let mainContent = document.querySelectorAll('.text-content')

 mainContent[0].querySelector('h4').textContent = siteContent['main-content']['features-h4']
mainContent[0].querySelector('p').textContent = siteContent['main-content']['features-content']
mainContent[1].querySelector('h4').textContent = siteContent['main-content']['about-h4']
mainContent[1].querySelector('p').textContent = siteContent['main-content']['about-content']
mainContent[2].querySelector('h4').textContent = siteContent['main-content']['services-h4']
mainContent[2].querySelector('p').textContent = siteContent['main-content']['services-content']
mainContent[3].querySelector('h4').textContent = siteContent['main-content']['product-h4']
mainContent[3].querySelector('p').textContent = siteContent['main-content']['product-content']
mainContent[4].querySelector('h4').textContent = siteContent['main-content']['vision-h4']
mainContent[4].querySelector('p').textContent = siteContent['main-content']['vision-content']

let contactInfo = document.querySelector('.contact')

 contactInfo.getElementsByTagName('h4')[0].textContent = siteContent["contact"]["contact-h4"]
contactInfo.getElementsByTagName('p')[0].textContent = siteContent["contact"]["address"]
contactInfo.getElementsByTagName('p')[1].textContent = siteContent["contact"]["phone"]
contactInfo.getElementsByTagName('p')[2].textContent = siteContent["contact"]["email"]


let footer = document.querySelector('footer')
 footer.innerText = "Copyright Great Idea! 2018" 