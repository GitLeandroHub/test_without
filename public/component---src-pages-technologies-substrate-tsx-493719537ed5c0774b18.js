(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{"2gVY":function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var s=a("q1tI"),m=a.n(s),l=a("Wbzz"),M=a("4bSG"),r=a("dDsW");function i(){var e=Object(r.a)(),t=Object(l.useStaticQuery)("908770090");return m.a.createElement("section",{className:"md:bg-hero-pattern-dark bg-cover bg-center bg-parityWhite h-full"},m.a.createElement("div",{className:"container pb-16"},m.a.createElement("h4",{className:"md:text-2xl font-medium pt-20 mt-0 mx-4 md:mb-0"},e.formatMessage({id:"homepage-featured-blog-heading"})),m.a.createElement("div",{className:"md:flex"},t.allMdx.edges.map((function(e,t){return m.a.createElement(M.a,{image:e.node.frontmatter.image,date:e.node.frontmatter.date_published,title:e.node.frontmatter.blogTitle,link:e.node.frontmatter.slug,key:t})})))))}},"4bSG":function(e,t,a){"use strict";a.d(t,"a",(function(){return M}));var s=a("q1tI"),m=a.n(s),l=a("Frpm");function M(e){var t=e.image,a=e.date,s=e.title,M=e.link,r=s.replace(/^(.{60}[^\s]*).*/,"$1");return m.a.createElement("div",{className:"bg-white mx-4 my-8 rounded-lg shadow h-full md:w-1/3"},m.a.createElement("div",{className:"object-cover h-2/3 md:h-3/4"},m.a.createElement(l.a,{to:"/"+M},m.a.createElement("img",{className:"rounded-t-lg",src:t,alt:s}))),m.a.createElement("div",{className:"p-4 md:py-6 h-1/3 md:h-1/4"},m.a.createElement("p",{className:"font-normal text-xs md:text-sm text-textDark mb-0"},a),m.a.createElement("p",{className:"md:text-lg font-normal text-textDark my-1 h-14 md:overflow-hidden"},r," ",s.length===r.length?null:"..."),m.a.createElement(l.a,{className:"text-xs md:text-sm text-parityPink no-underline hover:underline font-normal md:font-bold",to:"/"+M},"Read More")))}},GAd2:function(e,t,a){e.exports=a.p+"static/image-7-daa29fb208971f5dd4c91ab8851f7f62.jpg"},WFWk:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return E}));var s=a("q1tI"),m=a.n(s),l=a("L3vG"),M=a("Frpm");function r(e){return m.a.createElement(M.a,{to:e.link,className:"w-max mx-auto"},m.a.createElement("button",{type:"button",className:"bg-transparent border font-title text-lg text-white  px-12 py-2 rounded-sm uppercase focus:outline-none transition-transform transform hover:-translate-y-0.5 "+e.extraClass},e.children))}var i=a("dDsW"),w=a("fWkO"),c=a.n(w),n=a("2gVY"),L=a("B+Vx"),x=a("fViR"),u=a.n(x),N=a("ug43"),d=a.n(N),o=a("GAd2"),D=a.n(o);function E(e){var t=e.data,a=Object(i.a)();return m.a.createElement(l.a,{theme:"light"},m.a.createElement(L.a,{title:"Parity Substrate: Build Your Own Blockchain"}),m.a.createElement("section",{className:"bg-hero-substrate bg-cover bg-center -mt-24 xl:-mt-32 md:-mb-12"},m.a.createElement("div",{className:"md:h-screen md:min-h-heroMinLg"},m.a.createElement("div",{className:"container h-full max-w-4xl pt-40 md:pt-0 pb-16 px-2 flex flex-col justify-center items-center md:items-start md:w-2/3"},m.a.createElement("img",{className:"mx-auto md:mx-0 w-64 h-auto py-4",src:c.a,alt:"Polkadot Logo"}),m.a.createElement("h3",{className:"font-light text-white text-center md:text-left md:text-5xl lg:text-6xl py-4 max-w-2xl"},a.formatMessage({id:"substrate-page-hero-title"})),m.a.createElement("div",{className:"flex flex-col md:flex-row items-center"},m.a.createElement(r,{extraClass:" ",link:"https://www.substrate.io/"},a.formatMessage({id:"substrate-page-hero-cta-one"})),m.a.createElement("p",{className:"text-lg text-white font-title font-semibold tracking-normal py-6 md:pl-12 md:mb-0 transition-transform transform hover:-translate-y-0.5"},m.a.createElement("a",{className:"no-underline",href:"https://www.substrate.dev"},a.formatMessage({id:"substrate-page-hero-cta-two"}))))))),m.a.createElement("section",{className:"bg-parityBlack -mt-4 border-t border-gray-800 md:border-parityBlack"}),m.a.createElement("section",{id:"intro",className:"bg-parityGray h-full"},m.a.createElement("div",{className:"container flex  flex-col px-4 pt-12 pb-24"},m.a.createElement("div",{className:"mt-12 md:flex md:justify-center"},m.a.createElement("div",{className:"hidden md:inline-block md:w-1/2 md:mx-4 md:my-4 max-w-md"},m.a.createElement("img",{className:"w-auto h-auto mx-auto ",src:u.a,alt:"parity intro image"})),m.a.createElement("div",{className:"md:w-1/2 md:mx-4 md:flex md:flex-col md:justify-center"},m.a.createElement("h3",{className:"text-2xl md:text-3xl font-normal mb-4 md:mb-8"},a.formatMessage({id:"substrate-page-intro-one-title"})),m.a.createElement("p",{className:"text-textDark text-base md:text-lg md:mb-0"},a.formatMessage({id:"substrate-page-intro-one-description"})),m.a.createElement("hr",{className:"border-1 border-parityPink w-12"}),m.a.createElement("ul",{className:"list-none lsit-outside"},m.a.createElement("li",{className:"text-textDark text-base md:text-lg md:mb-2"},m.a.createElement("span",null,"— "),a.formatMessage({id:"substrate-page-intro-one-bullet-one"})),m.a.createElement("li",{className:"text-textDark text-base md:text-lg md:mb-2"},m.a.createElement("span",null,"— "),a.formatMessage({id:"substrate-page-intro-one-bullet-two"})),m.a.createElement("li",{className:"text-textDark text-base md:text-lg md:mb-2"},m.a.createElement("span",null,"— "),a.formatMessage({id:"substrate-page-intro-one-bullet-three"}))))),m.a.createElement("div",{className:"mt-12 md:flex md:justify-center md:flex-row-reverse"},m.a.createElement("div",{className:"md:w-1/2 md:mx-4 md:my-4 max-w-md"},m.a.createElement("img",{className:"w-auto h-auto mx-auto my-12",src:d.a,alt:"parity intro image"})),m.a.createElement("div",{className:"md:w-1/2 md:mx-4 md:flex md:flex-col md:justify-center"},m.a.createElement("h3",{className:"text-2xl md:text-3xl font-normal mb-4 md:mb-8"},a.formatMessage({id:"substrate-page-intro-two-title"})),m.a.createElement("p",{className:"text-textDark text-base md:text-lg md:mb-0"},a.formatMessage({id:"substrate-page-intro-two-description"})),m.a.createElement("hr",{className:"border-1 border-parityPink w-12"}),m.a.createElement("ul",{className:"list-none lsit-outside"},m.a.createElement("li",{className:"text-textDark text-base md:text-lg md:mb-2"},m.a.createElement("span",null,"— "),a.formatMessage({id:"substrate-page-intro-two-bullet-one"})),m.a.createElement("li",{className:"text-textDark text-base md:text-lg md:mb-2"},m.a.createElement("span",null,"— "),a.formatMessage({id:"substrate-page-intro-two-bullet-two"})),m.a.createElement("li",{className:"text-textDark text-base md:text-lg md:mb-2"},m.a.createElement("span",null,"— "),a.formatMessage({id:"substrate-page-intro-two-bullet-three"})),m.a.createElement("li",{className:"text-textDark text-base md:text-lg md:mb-2"},m.a.createElement("span",null,"— "),a.formatMessage({id:"substrate-page-intro-two-bullet-four"})),m.a.createElement("li",{className:"text-textDark text-base md:text-lg md:mb-2"},m.a.createElement("span",null,"— "),a.formatMessage({id:"substrate-page-intro-two-bullet-five"}))))),m.a.createElement("div",{className:"mt-12 md:flex md:justify-center"},m.a.createElement("div",{className:"md:w-1/2 md:mx-4 md:my-4 max-w-md"},m.a.createElement("img",{className:"w-auto h-auto mx-auto ",src:D.a,alt:"parity intro image"})),m.a.createElement("div",{className:"md:w-1/2 md:mx-4 md:flex md:flex-col md:justify-center"},m.a.createElement("h3",{className:"text-2xl md:text-3xl font-normal mb-4 md:mb-8"},a.formatMessage({id:"substrate-page-intro-three-title"})),m.a.createElement("p",{className:"text-textDark text-base md:text-lg md:mb-0"},a.formatMessage({id:"substrate-page-intro-three-description"})),m.a.createElement("hr",{className:"border-1 border-parityPink w-12"}),m.a.createElement("ul",{className:"list-none lsit-outside"},m.a.createElement("li",{className:"text-textDark text-base md:text-lg md:mb-2"},m.a.createElement("span",null,"— "),a.formatMessage({id:"substrate-page-intro-three-bullet-one"})),m.a.createElement("li",{className:"text-textDark text-base md:text-lg md:mb-2"},m.a.createElement("span",null,"— "),a.formatMessage({id:"substrate-page-intro-three-bullet-two"})),m.a.createElement("li",{className:"text-textDark text-base md:text-lg md:mb-2"},m.a.createElement("span",null,"— "),a.formatMessage({id:"substrate-page-intro-three-bullet-three"})),m.a.createElement("li",{className:"text-textDark text-base md:text-lg md:mb-2"},m.a.createElement("span",null,"— "),a.formatMessage({id:"substrate-page-intro-three-bullet-four"})),m.a.createElement("li",{className:"text-textDark text-base md:text-lg md:mb-2"},m.a.createElement("span",null,"— "),a.formatMessage({id:"substrate-page-intro-three-bullet-five"})),m.a.createElement("li",{className:"text-textDark text-base md:text-lg md:mb-2"},m.a.createElement("span",null,"— "),a.formatMessage({id:"substrate-page-intro-three-bullet-six"}))))))),m.a.createElement("section",{className:"bg-parityGray md:bg-hero-pattern-dark bg-cover bg-center border"},m.a.createElement("div",{className:"container py-16 md:py-32  md:max-w-5xl"},m.a.createElement("div",{className:"md:flex text-textDark mb-8"},m.a.createElement("div",{className:"md:w-1/2"},m.a.createElement("p",{className:"font-title font-medium mx-4 md:text-2xl"},a.formatMessage({id:"substrate-page-table-one-title"}))),m.a.createElement("div",{className:"w-full md:w-1/2"},m.a.createElement("div",{className:"flex items-center bg-white mx-4 text-sm border-b"},m.a.createElement("div",{className:"w-1/2 pl-4 py-4"},a.formatMessage({id:"substrate-page-table-one-heading-one"})),m.a.createElement("div",{className:"w-1/2 pl-4 py-4"},a.formatMessage({id:"substrate-page-table-one-web-assembly"}))),m.a.createElement("div",{className:"flex items-center bg-white mx-4 text-sm"},m.a.createElement("div",{className:"w-1/2 pl-4 py-4"},a.formatMessage({id:"substrate-page-table-one-heading-two"})),m.a.createElement("div",{className:"w-1/2 pl-4 py-4"},a.formatMessage({id:"substrate-page-table-one-rust"}))))),m.a.createElement("div",{className:"pt-12 md:flex text-textDark"},m.a.createElement("div",{className:"md:w-1/2"},m.a.createElement("p",{className:"mx-4 md:text-2xl"},a.formatMessage({id:"substrate-page-table-two-title"})),m.a.createElement("p",{className:"mx-4 text-sm text-textDark md:text-base"},a.formatMessage({id:"substrate-page-table-two-description"}))),m.a.createElement("div",{className:"w-full md:w-1/2"},m.a.createElement("div",{className:"flex items-center bg-white mx-4 text-sm border-b"},m.a.createElement("div",{className:"w-1/2 pl-4 py-4"},a.formatMessage({id:"substrate-page-table-two-networking"})),m.a.createElement("div",{className:"w-1/2 pl-4 py-4"},a.formatMessage({id:"substrate-page-table-two-libp2p"}))),m.a.createElement("div",{className:"flex items-center bg-white mx-4 text-sm border-b"},m.a.createElement("div",{className:"w-1/2 pl-4 py-4"},a.formatMessage({id:"substrate-page-table-two-algorithm"})),m.a.createElement("div",{className:"w-1/2 pl-4 py-4"},a.formatMessage({id:"substrate-page-table-two-hybrid"}))),m.a.createElement("div",{className:"flex items-center bg-white mx-4 text-sm border-b"},m.a.createElement("div",{className:"w-1/2 pl-4 py-4"},a.formatMessage({id:"substrate-page-table-two-beacon"})),m.a.createElement("div",{className:"w-1/2 pl-4 py-4"},a.formatMessage({id:"substrate-page-table-two-coin-flipping"}))),m.a.createElement("div",{className:"flex items-center bg-white mx-4 text-sm border-b"},m.a.createElement("div",{className:"w-1/2 pl-4 py-4"},a.formatMessage({id:"substrate-page-table-two-authentication"})),m.a.createElement("div",{className:"w-1/2 pl-4 py-4"},a.formatMessage({id:"substrate-page-table-two-ed25519"}))),m.a.createElement("div",{className:"flex items-center bg-white mx-4 text-sm border-b"},m.a.createElement("div",{className:"w-1/2 pl-4 py-4"},a.formatMessage({id:"substrate-page-table-two-hashing"})),m.a.createElement("div",{className:"w-1/2 pl-4 py-4"},a.formatMessage({id:"substrate-page-table-two-blake2b"}))),m.a.createElement("div",{className:"flex items-center bg-white mx-4 text-sm"},m.a.createElement("div",{className:"w-1/2 pl-4 py-4"},a.formatMessage({id:"substrate-page-table-two-address"})),m.a.createElement("div",{className:"w-1/2 pl-4 py-4"},a.formatMessage({id:"substrate-page-table-two-base-58"}))))))),m.a.createElement("section",{className:"bg-parityGray"},m.a.createElement("div",{className:"container flex flex-col justify-center py-12"},m.a.createElement("div",{className:"text-textLight text-center"},m.a.createElement("p",{className:"md:text-xl text-textDark"},a.formatMessage({id:"substrate-page-teams-heading"})," ",m.a.createElement("a",{className:"no-underline text-parityPink hover:underline",href:"https://www.substrate.io/substrate-users/"},a.formatMessage({id:"substrate-page-teams-cta"})))),m.a.createElement("div",{className:"flex flex-wrap justify-center"},t.substrateTeams.edges.map((function(e){return m.a.createElement("div",{key:e.node.id,className:"flex flex-col justify-center mx-6 my-4"},m.a.createElement("span",{className:"hidden text-center text-xs bg-textDark text-white capitalize py-1 px-2"},e.node.name))}))))),m.a.createElement("section",{className:"bg-textDark md:flex"},m.a.createElement("div",{className:"mx-4 py-10 md:w-1/2 md:py-0 md:flex md:flex-col md:justify-center xl:pl-20"},m.a.createElement("h4",{className:"text-parityWhite font-normal max-w-md text-2xl md:text-3xl mb-8"},a.formatMessage({id:"substrate-page-launch-blockchain-title"})),m.a.createElement("p",{className:"text-parityWhite font-light text-base max-w-md md:text-lg md:mb-0"},a.formatMessage({id:"substrate-page-launch-blockchain-description"})))),m.a.createElement("section",{className:"md:bg-hero-pattern-dark bg-cover bg-center bg-parityGray h-full py-6"},m.a.createElement("div",{className:"container pb-16"},m.a.createElement("div",{className:"flex flex-row justify-between items-center pt-20 mt-0 mx-4 md:mb-0"},m.a.createElement("h4",{className:""},a.formatMessage({id:"about-page-featured-video-title"})),m.a.createElement("p",{className:"text-parityPink font-bold text-sm"},m.a.createElement("a",{className:"no-underline hover:underline",href:"https://www.youtube.com/channel/UCSs5vZi0U7qHLkUjF3QnaWg",target:"_blank",rel:"noreferrer"},a.formatMessage({id:"about-page-featured-youtube-cta"})))))),m.a.createElement("section",{className:"h-full bg-textDark"},m.a.createElement("div",{className:"container"},m.a.createElement("div",{className:"px-4 mx-auto md:px-0 py-16 max-w-4xl"},m.a.createElement("div",{className:"text-center text-parityWhite"},m.a.createElement("blockquote",{className:"tracking-wider"},'"'+a.formatMessage({id:"substrate-page-gave-quote"})+'"'),m.a.createElement("p",{className:"text-base md:text-lg font-normal mb-0 mt-8"},a.formatMessage({id:"homepage-team-gavin"})),m.a.createElement("p",{className:"text-sm mt-0 font-normal"},a.formatMessage({id:"substrate-page-gave-quote-title"})))))),m.a.createElement(n.a,null))}},fViR:function(e,t,a){e.exports=a.p+"static/image-5-c960787d6db82096e5b7faede111281f.jpg"},fWkO:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MTkuNzUgNTguMTEiPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDojZmZmO30uY2xzLTJ7ZmlsbDojMThmZmIyO308L3N0eWxlPjwvZGVmcz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0yOC4zMywxNi40MkExNi41NywxNi41NywwLDAsMSwzNC4wNiwyNi41SDIyLjU0YTYuNDQsNi40NCwwLDAsMC0yLjI3LTMuODYsNi45Myw2LjkzLDAsMCwwLTQuNDMtMS40LDQuODUsNC44NSwwLDAsMC0zLjE3LjksMy4xNCwzLjE0LDAsMCwwLTEuMDgsMi41NiwzLDMsMCwwLDAsMiwyLjgsMzEuNTUsMzEuNTUsMCwwLDAsNi4yMywxLjg4LDYyLjkxLDYyLjkxLDAsMCwxLDcuNTYsMi4xOSwxMi41MiwxMi41MiwwLDAsMSw1LjExLDMuNjRBMTAsMTAsMCwwLDEsMzQuNjMsNDJhMTAuMzgsMTAuMzgsMCwwLDEtMS44Nyw2LjEyLDEyLjQsMTIuNCwwLDAsMS01LjQsNC4xN0EyMS4wNywyMS4wNywwLDAsMSwxOSw1My43OHEtOC4xNSwwLTEzLTMuNkExNS4xNywxNS4xNywwLDAsMSwwLDM5Ljg5SDExLjg4YTUuMzEsNS4zMSwwLDAsMCwyLjIsNEE4LjI2LDguMjYsMCwwLDAsMTksNDUuMjJhNC41OSw0LjU5LDAsMCwwLDMuMTctMSwzLjI2LDMuMjYsMCwwLDAsMS4wOC0yLjU1LDMuMDgsMy4wOCwwLDAsMC0yLTMsMzYuMTksMzYuMTksMCwwLDAtNi40NS0xLjkxLDUxLjIzLDUxLjIzLDAsMCwxLTcuMzQtMiwxMi4xMiwxMi4xMiwwLDAsMS01LTMuNUE5LjcxLDkuNzEsMCwwLDEsLjQzLDI0LjcsMTAuNzUsMTAuNzUsMCwwLDEsNC41NCwxNnE0LjA5LTMuMzQsMTEuNTktMy4zNVQyOC4zMywxNi40MloiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik04Mi4zNywxMy4xVjUzLjI4SDcwVjQ2YTEzLjMyLDEzLjMyLDAsMCwxLTUuMTUsNS42MSwxNC44OCwxNC44OCwwLDAsMS03Ljk1LDIuMDlxLTYuOTEsMC0xMS00LjYxVDQxLjgzLDM2LjQzVjEzLjFINTQuMDdWMzQuOTJhOC45Myw4LjkzLDAsMCwwLDIuMTMsNi4zNyw3LjQ2LDcuNDYsMCwwLDAsNS43MiwyLjI3LDcuNTUsNy41NSwwLDAsMCw1LjktMi4zOEM2OS4yNiwzOS42LDcwLDM3LjM0LDcwLDM0LjQyVjEzLjFaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMTI2LjM5LDE1LjA4YTE3LjE1LDE3LjE1LDAsMCwxLDYuMiw3LjEzLDI0LjgyLDI0LjgyLDAsMCwxLDIuMjYsMTEsMjQuODcsMjQuODcsMCwwLDEtMi4yNiwxMSwxNy4wNSwxNy4wNSwwLDAsMS02LjIsNy4xNiwxNi4yMiwxNi4yMiwwLDAsMS04Ljg5LDIuNDgsMTQuNTcsMTQuNTcsMCwwLDEtNy45Mi0yLjA4QTEyLjE2LDEyLjE2LDAsMCwxLDEwNC43Niw0NnY3LjI3SDkyLjQ1VjBoMTIuMzFWMjAuMzhhMTIuMTEsMTIuMTEsMCwwLDEsNC44Mi01LjY5LDE0LjU3LDE0LjU3LDAsMCwxLDcuOTItMi4wOUExNi4zLDE2LjMsMCwwLDEsMTI2LjM5LDE1LjA4Wk0xMDcuMTcsMjZhMTAsMTAsMCwwLDAtMi40OCw3LjE2LDEwLDEwLDAsMCwwLDIuNDgsNy4xMyw5LDksMCwwLDAsMTIuNzQuMDcsMTAuMTYsMTAuMTYsMCwwLDAsMi40Mi03LjIsMTAuMTYsMTAuMTYsMCwwLDAtMi40Mi03LjIsOC4yNyw4LjI3LDAsMCwwLTYuMzctMi41OUE4LjM5LDguMzksMCwwLDAsMTA3LjE3LDI2WiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTE2OC41MSwxNi40MmExNi41NywxNi41NywwLDAsMSw1LjczLDEwLjA4SDE2Mi43MmE2LjM5LDYuMzksMCwwLDAtMi4yNy0zLjg2LDYuOTMsNi45MywwLDAsMC00LjQzLTEuNCw0Ljg1LDQuODUsMCwwLDAtMy4xNy45LDMuMTQsMy4xNCwwLDAsMC0xLjA4LDIuNTYsMywzLDAsMCwwLDIsMi44QTMxLjU1LDMxLjU1LDAsMCwwLDE2MCwyOS4zOGE2Mi45MSw2Mi45MSwwLDAsMSw3LjU2LDIuMTksMTIuNTIsMTIuNTIsMCwwLDEsNS4xMSwzLjY0QTEwLDEwLDAsMCwxLDE3NC44MSw0MmExMC4zOCwxMC4zOCwwLDAsMS0xLjg3LDYuMTIsMTIuNCwxMi40LDAsMCwxLTUuNCw0LjE3LDIxLDIxLDAsMCwxLTguMzUsMS41MXEtOC4xMywwLTEzLTMuNmExNS4xNywxNS4xNywwLDAsMS02LTEwLjI5aDExLjg4YTUuMzQsNS4zNCwwLDAsMCwyLjIsNCw4LjI2LDguMjYsMCwwLDAsNC45MywxLjM3LDQuNTksNC41OSwwLDAsMCwzLjE3LTEsMy4yNiwzLjI2LDAsMCwwLDEuMDgtMi41NSwzLjA4LDMuMDgsMCwwLDAtMi0zQTM2LjE5LDM2LjE5LDAsMCwwLDE1NSwzNi43OWE1MS4yMyw1MS4yMywwLDAsMS03LjM0LTIsMTIuMTIsMTIuMTIsMCwwLDEtNS0zLjUsOS43MSw5LjcxLDAsMCwxLTIuMDktNi41OEExMC43NSwxMC43NSwwLDAsMSwxNDQuNzIsMTZxNC4wOS0zLjM0LDExLjU5LTMuMzVUMTY4LjUxLDE2LjQyWiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTIwNS40MSw0Mi43VjUzLjI4aC01LjU0Yy00LjcsMC04LjM3LTEuMTYtMTEtMy40OVMxODUsNDMuNjEsMTg1LDM4LjIzVjIzLjQ3aC01LjM5VjEzLjFIMTg1VjMuMjRoMTIuMzJWMTMuMWg4LjA2VjIzLjQ3aC04LjA2djE1YTQuNSw0LjUsMCwwLDAsMSwzLjMxLDQuNjcsNC42NywwLDAsMCwzLjI4Ljk0WiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTIzMi44OCwxNC44M2ExNS4xNCwxNS4xNCwwLDAsMSw3Ljg4LTIuMTZWMjUuODVoLTMuNTJjLTMuMjcsMC01LjguNjktNy42LDIuMDlzLTIuNywzLjc0LTIuNyw3LjA1VjUzLjI4SDIxNC42M1YxMy4xaDEyLjMxdjcuNTZBMTcuNjEsMTcuNjEsMCwwLDEsMjMyLjg4LDE0LjgzWiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTI2OS4yOCwxNC42OWExMi41NSwxMi41NSwwLDAsMSw0Ljg5LDUuNjlWMTMuMWgxMi4yNFY1My4yOEgyNzQuMTdWNDZhMTIuNiwxMi42LDAsMCwxLTQuODksNS42OSwxNC41NywxNC41NywwLDAsMS03LjkyLDIuMDgsMTYuMjUsMTYuMjUsMCwwLDEtOC45LTIuNDgsMTcsMTcsMCwwLDEtNi4xOS03LjE2LDI0Ljg3LDI0Ljg3LDAsMCwxLTIuMjctMTEsMjQuODIsMjQuODIsMCwwLDEsMi4yNy0xMSwxNy4xMywxNy4xMywwLDAsMSw2LjE5LTcuMTMsMTYuMzQsMTYuMzQsMCwwLDEsOC45LTIuNDhBMTQuNTcsMTQuNTcsMCwwLDEsMjY5LjI4LDE0LjY5Wk0yNTguOTQsMjZhMTAuMiwxMC4yLDAsMCwwLTIuNDEsNy4yLDEwLjIsMTAuMiwwLDAsMCwyLjQxLDcuMiw5LjA1LDkuMDUsMCwwLDAsMTIuNzUtLjA3LDEwLjA2LDEwLjA2LDAsMCwwLDIuNDgtNy4xM0ExMCwxMCwwLDAsMCwyNzEuNjksMjZhOC4zOSw4LjM5LDAsMCwwLTYuMzctMi42M0E4LjMxLDguMzEsMCwwLDAsMjU4Ljk0LDI2WiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTMxOC44MSw0Mi43VjUzLjI4aC01LjU0cS03LjA2LDAtMTEtMy40OXQtMy45My0xMS41NlYyMy40N0gyOTNWMTMuMWg1LjRWMy4yNGgxMi4zMlYxMy4xaDguMDZWMjMuNDdoLTguMDZ2MTVhNC41LDQuNSwwLDAsMCwxLDMuMzEsNC42Niw0LjY2LDAsMCwwLDMuMjcuOTRaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMzY0LjI0LDM1LjQySDMzNi4zOHEuMjEsNC41NSwyLjMsNi41MmE3LjQzLDcuNDMsMCwwLDAsNS4zMywyLDcuMzIsNy4zMiwwLDAsMCw0LjU0LTEuMzdBNi4zNiw2LjM2LDAsMCwwLDM1MC45MiwzOWgxM2ExNywxNywwLDAsMS0zLjQ1LDcuNiwxOC41NCwxOC41NCwwLDAsMS02Ljc3LDUuMjYsMjMuMTcsMjMuMTcsMCwwLDEtMTkuNjItLjU4QTE3LjY5LDE3LjY5LDAsMCwxLDMyNyw0NC4xNGEyMi4yMiwyMi4yMiwwLDAsMS0yLjYtMTEsMjIuNSwyMi41LDAsMCwxLDIuNTYtMTEsMTcuNTYsMTcuNTYsMCwwLDEsNy4xNi03LjEzLDIzLjY2LDIzLjY2LDAsMCwxLDIxLDAsMTcuMzMsMTcuMzMsMCwwLDEsNyw2Ljg3LDIwLjU2LDIwLjU2LDAsMCwxLDIuNDgsMTAuMTlBMTcsMTcsMCwwLDEsMzY0LjI0LDM1LjQyWk0zNTAsMjQuM2E3LjgsNy44LDAsMCwwLTUuNDMtMiw4LDgsMCwwLDAtNS42MiwyLDguNDEsOC40MSwwLDAsMC0yLjUyLDUuOWgxNS43QzM1Mi4xOSwyNy42LDM1MS40OSwyNS42MiwzNTAsMjQuM1oiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik00MTkuNzUsNDYuMDl2MTJIMzc1LjE5di0xMloiLz48L3N2Zz4K"},ug43:function(e,t,a){e.exports=a.p+"static/image-6-d86ad5bf7ead2e024a35a33790292648.jpg"}}]);
//# sourceMappingURL=component---src-pages-technologies-substrate-tsx-493719537ed5c0774b18.js.map