(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{cwN0:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return b}));var r=a("q1tI"),n=a.n(r),i=a("dDsW"),s=a("L3vG"),c=a("B+Vx"),o=a("iQ2+");function l(e){var t=e.children,a=e.page,r=e.sectionTitle,i=e.hero,s=e.background;return n.a.createElement(n.a.Fragment,null,"events"===a&&n.a.createElement(m,{sectionTitle:r,background:s,hero:i},t))}function m(e){var t=e.children,a=e.sectionTitle,r=e.hero,i=e.background;return n.a.createElement("section",{className:"bg-parityGray px-4 "+(r&&"-mt-24 ")+" "+(i&&"bg-hero-pattern-dark bg-cover bg-center bg-no-repeat")+" "},n.a.createElement("div",{className:"container "+(r&&"pt-24")},n.a.createElement("div",{className:"text-center py-8 md:py-16 md:flex md:flex-col md:justify-center"},n.a.createElement("h3",{className:"text-textDark text-center font-normal md:text-5xl mb-0 md:mb-8"},a)),t))}function u(e){var t=e.dateTime,a=e.location,r=e.title,i=e.description,s=e.cta,c=e.link,o=e.image;return n.a.createElement("article",{className:"bg-white md:mx-4 my-8 rounded-lg shadow"},n.a.createElement("div",{className:"object-cover"},n.a.createElement("a",{href:c},n.a.createElement("img",{className:"rounded-t-lg",src:o,alt:"Parity Event Main Image"}))),n.a.createElement("div",{className:"px-4 pb-3"},n.a.createElement("div",{className:"flex justify-between text-textLight mb-0 uppercase"},n.a.createElement("p",{className:"text-xs text-parityPink mb-0"},t),n.a.createElement("p",{className:"text-xs mb-0"},a)),n.a.createElement("div",{className:"pt-3 pb-6 h-36 md:h-40"},n.a.createElement("p",{className:"font-normal my-0"},r),n.a.createElement("p",{className:"text-sm font-light my-0"},i)),n.a.createElement("div",{className:"flex"},n.a.createElement("a",{href:c,target:"_blank",rel:"noreferrer",className:"mx-auto"},n.a.createElement("button",{type:"button",className:"bg-whitefont-title text-base text-textDark opacity-90 px-20 py-2 border border-gray-300 focus:outline-none uppercase hover:border-gray-600 transition-transform transform hover:-translate-y-0.5"},s)))))}var d=a("jGxv");function p(e){var t=e.isPast,a=d.events;return n.a.createElement(n.a.Fragment,null,a.filter((function(e){return t?new Date(e.expiration_date).getTime()-(new Date).getTime()<0:new Date(e.expiration_date).getTime()-(new Date).getTime()>0})).map((function(e,t){return n.a.createElement("div",{key:t,className:"w-1/1 md:w-1/2 xl:w-1/3"},n.a.createElement(u,{dateTime:e.dateTime,location:e.location,title:e.title,description:e.description,cta:"LEARN MORE",link:e.link,image:e.image}))})))}var g=a("peRw");function b(){var e=Object(i.a)();return n.a.createElement(s.a,null,n.a.createElement(c.a,{title:e.formatMessage({id:"events-page-seo"})}),n.a.createElement(l,{page:"events",sectionTitle:"Join the Next Parity Events",background:!0,hero:!0},n.a.createElement("div",{className:"flex flex-wrap"},n.a.createElement(p,null))),n.a.createElement(l,{page:"events",sectionTitle:"Previous Events"},n.a.createElement("div",{className:"flex flex-wrap"},n.a.createElement(p,{isPast:!0}))),n.a.createElement(g.a,{title:""+e.formatMessage({id:"contact-page-footer-title"}),newsletterButton:!0,subCTATextOne:""+e.formatMessage({id:"contact-page-footer-subcta-one"}),subCTATextTwo:""+e.formatMessage({id:"contact-page-footer-subcta-two"}),subCTATextLink:"/blog"}),n.a.createElement(o.a,null))}},jGxv:function(e){e.exports=JSON.parse('{"events":[{"title":"Substrate Seminar","description":"Join the collaborative learning call where we learn about Substrate together!","dateTime":"Every other Tuesday","location":"ONLINE","cta":"Learn More","link":"https://www.crowdcast.io/e/substrate-seminar-2?utm_source=parity.io&utm_medium=referral&utm_campaign=substrate%20seminar&utm_content=parity%20event%20page","image":"/images/substrate-seminar_final.png","expiration_date":"2025-11-18"},{"title":"Sub0 Online","description":"The Biggest Substrate Event of the Year! At the cutting edge of blockchain: Tech Deep Dives, Workshops, Networking, All levels.","dateTime":"October 13th-14th, 2021","location":"Online","cta":"Register","link":"https://sub0.substrate.io/?utm_source=parity.io&utm_medium=referral&utm_campaign=sub0%202021&utm_content=register&utm_term=parity&ref=0ae106a23f5a","image":"/images/sub0_2021_event_banner.png","expiration_date":"2021-10-15"},{"title":"Parity & Friends Meetup: NFTs","description":"Particularly related to Polkadot and Kusama, our excellent line up of speakers from Web3 Foundation and Ternoa discuss the beauty and the tech, from crypto art to securing data transmission. ","dateTime":"July 8th, 2021","location":"ONLINE","cta":"Learn more","link":"https://www.crowdcast.io/e/parity_friends/2?utm_source=parity.io&utm_medium=referral&utm_campaign=crowdcast&utm_content=meetup%20parity%20website&utm_term=parity%20","image":"/images/parityfriends_-_crowdcast_-1-1.png","expiration_date":"2021-07-09"}]}')}}]);
//# sourceMappingURL=component---src-pages-events-tsx-64436e21102e38ec0ee4.js.map