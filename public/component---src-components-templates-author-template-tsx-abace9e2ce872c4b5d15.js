(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"6Ut1":function(e){e.exports=JSON.parse('{"tags":[{"name":"Community","slug":"/blog/tag/community","image":"/images/blog-hero-image.jpg"},{"name":"Polkadot","slug":"/blog/tag/polkadot","image":"/images/blog-hero-image.jpg"},{"name":"Releases","slug":"/blog/tag/releases","image":"/images/blog-hero-image.jpg"},{"name":"Invisible Hand Lab","slug":"/blog/tag/parity-substrate","image":"/images/blog-hero-image.jpg"},{"name":"People of Parity","slug":"/blog/tag/people-of-parity","image":"/images/blog-hero-image.jpg"},{"name":"Rust","slug":"/blog/tag/rust","image":"/images/blog-hero-image.jpg"},{"name":"Wasm","slug":"/blog/tag/wasm","image":"/images/blog-hero-image.jpg"},{"name":"Partnerships","slug":"/blog/tag/partnerships","image":"/images/blog-hero-image.jpg"},{"name":"Custom Solutions","slug":"/blog/tag/custom-solutions","image":"/images/blog-hero-image.jpg"},{"name":"Security","slug":"/blog/tag/security","image":"/images/blog-hero-image.jpg"},{"name":"ink!","slug":"/blog/tag/ink","image":"/images/blog-hero-image.jpg"},{"name":"Parity Ethereum","slug":"/blog/tag/parity-ethereum","image":"/images/blog-hero-image.jpg"},{"name":"Parity Fether","slug":"/blog/tag/parity-fether","image":"/images/blog-hero-image.jpg"},{"name":"Light.js","slug":"/blog/tag/light-js","image":"/images/blog-hero-image.jpg"},{"name":"Company and Culture","slug":"/blog/tag/company-and-culture","image":"/images/blog-hero-image.jpg"},{"name":"Parity Signer","slug":"/blog/tag/parity-signer","image":"/images/blog-hero-image.jpg"},{"name":"Zcash","slug":"/blog/tag/zcash","image":"/images/blog-hero-image.jpg"},{"name":"PICOPS","slug":"/blog/tag/picops","image":"/images/blog-hero-image.jpg"},{"name":"Parity Bridge","slug":"/blog/tag/parity-bridge","image":"/images/blog-hero-image.jpg"}]}')},Hd1l:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a("KQm4"),g=a("q1tI"),m=a.n(g),l=a("Frpm"),i=a("dDsW"),r=a("6Ut1");function o(e){var t=Object(i.a)(),a=e.title,o=e.link,s=e.date,c=e.mdTags,u=e.image,d=e.excerpt,b=e.timeToRead,p=r.tags,h=Object(g.useState)([]),f=h[0],x=h[1];return Object(g.useEffect)((function(){c.forEach((function(e){p.filter((function(t){t.name===e&&x((function(e){return[].concat(Object(n.a)(e),[t])}))}))}))}),[]),m.a.createElement("div",{className:"container max-w-screen-md border-b animate-fade-in"},m.a.createElement("div",{className:"text-center my-10 tracking-wide"},m.a.createElement(l.a,{className:"no-underline hover:text-textLight",to:"/"+o},m.a.createElement("h2",{className:"font-normal text-2xl md:text-4xl md:leading-tight mb-6"},a)),m.a.createElement("p",{className:"text-textLight text-sm my-0"},s," ","in"," ",f.map((function(e,t){return m.a.createElement("span",{key:t},m.a.createElement(l.a,{className:"text-parityPink no-underline hover:underline",to:e.slug},e.name),t===f.length-1?"":", ")}))),m.a.createElement("p",{className:"text-textLight text-sm my-0"},b," min read")),m.a.createElement("div",null,u?m.a.createElement(l.a,{to:"/"+o},m.a.createElement("img",{className:"rounded",src:u,alt:a})):m.a.createElement("div",{className:"my-12"})),m.a.createElement("p",{className:"md:text-lg my-8"},d),m.a.createElement("div",{className:"text-sm mb-14"},m.a.createElement(l.a,{className:"text-parityPink no-underline hover:underline",to:"/"+o},m.a.createElement("strong",null,t.formatMessage({id:"blog-page-continue-reading"})))))}},IVbr:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a("q1tI"),g=a.n(n);function m(e){return g.a.createElement("button",{type:"button",className:"bg-parityPink font-title text-lg text-white opacity-90 tracking-wider  px-12 py-2 focus:outline-none uppercase transition-transform transform hover:-translate-y-0.5 focus:bg-buttonRed "+e.extraClass},e.children)}},x8Yz:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return s}));var n=a("q1tI"),g=a.n(n),m=a("dDsW"),l=a("L3vG"),i=a("B+Vx"),r=a("Hd1l"),o=a("IVbr");function s(e){var t=Object(m.a)(),a=e.pageContext,s=e.data,c=Object(n.useState)(10),u=c[0],d=c[1];return g.a.createElement(l.a,{theme:"light"},g.a.createElement(i.a,{title:a.author+" Blogs"}),g.a.createElement("section",{className:"block h-hero min-h-heroMin"},g.a.createElement("div",{className:"absolute h-hero min-h-heroMin z-0 w-full top-0 left-0 bg-hero-blogPage bg-cover bg-center"}),g.a.createElement("div",{className:"container relative text-center text-white h-5/6 flex flex-col justify-center"},g.a.createElement("h3",{className:"text-white font-normal md:text-5xl md:mb-8"},t.formatMessage({id:"blog-page-title"})),g.a.createElement("h4",{className:"text-white font-normal leading-relaxed px-4 mb-8 text-lg md:text-2xl md:px-24"},a.author))),g.a.createElement("section",{className:"mx-4 -mt-16"},s.allMdx.edges.slice(0,u).map((function(e,t){return g.a.createElement("article",{key:t},g.a.createElement(r.a,{title:e.node.frontmatter.blogTitle,link:e.node.frontmatter.slug,date:e.node.frontmatter.date_published,mdTags:e.node.frontmatter.tags,image:e.node.frontmatter.image,excerpt:e.node.excerpt,timeToRead:e.node.timeToRead}))})),g.a.createElement("div",{className:"flex justify-center my-10"},u<s.allMdx.edges.length?g.a.createElement("div",{onClick:function(){return d(u+10)}},g.a.createElement(o.a,null,"Load more")):null)))}}}]);
//# sourceMappingURL=component---src-components-templates-author-template-tsx-abace9e2ce872c4b5d15.js.map