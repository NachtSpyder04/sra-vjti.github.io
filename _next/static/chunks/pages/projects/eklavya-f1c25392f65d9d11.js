(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[533],{747:function(e,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects/eklavya",function(){return n(2770)}])},218:function(e,a,n){"use strict";var i=n(1309),r=n(5893),s=n(1147),t=n.n(s),c=n(9603),o=n(9417),l=n(7294);a.Z=function(e){var a=e.imgName,n=e.title,s=e.subtitleList,d=e.isHome,_=e.backgroundPosition,u=(0,i._)((0,l.useState)("none"),2),v=u[0],j=u[1];return(0,l.useEffect)(function(){setTimeout(function(){j("")},2e3)},[]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{style:{backgroundImage:'linear-gradient(\n                            to bottom,\n                            rgba(0, 0, 0, 0.5),\n                            rgba(0, 0, 0, 0.5),\n                            rgba(0, 0, 0, 0.5)), url("/static/images/hero/'.concat(a,'")'),backgroundPosition:void 0===_?"center":_},className:t().hero,children:[(0,r.jsx)("div",{className:t().heroHead,children:n}),(0,r.jsx)("div",{className:t().heroSub,children:s.map(function(e,a){return s.length!==a+1?(0,r.jsxs)("span",{children:[e,"\xa0\xa0•\xa0\xa0"]},"hero_".concat(a)):(0,r.jsx)("span",{children:e},"hero_".concat(a))})}),(0,r.jsx)("a",{href:"#is",children:(0,r.jsx)("div",{className:t().scrollIndicator})}),d&&(0,r.jsx)("a",{href:"#notifs",className:t().notif,style:{display:v},children:(0,r.jsx)(c.G,{icon:o.qmU})})]}),d&&(0,r.jsxs)("div",{className:t().is,id:"is",children:[(0,r.jsxs)("div",{style:{backgroundImage:'linear-gradient(#00000081, #00000081),\n		url("/static/images/ideate.png")'},className:t().caption,children:[(0,r.jsx)("div",{className:t().captionHead,children:"Ideate"}),(0,r.jsx)("div",{className:t().captionSub,children:"Changing the world, one solution at a time."})]}),(0,r.jsxs)("div",{style:{backgroundImage:'linear-gradient(#00000098, #00000098),\n		url("/static/images/innovate.png")'},className:t().caption,children:[(0,r.jsx)("div",{className:t().captionHead,children:"Innovate"}),(0,r.jsx)("div",{className:t().captionSub,children:"Creativity is thinking up new things. Innovation is doing new things."})]}),(0,r.jsxs)("div",{style:{backgroundImage:'linear-gradient(#00000081, #00000081),\n		url("/static/images/inspire.png")'},className:t().caption,children:[(0,r.jsx)("div",{className:t().captionHead,children:"Inspire"}),(0,r.jsx)("div",{className:t().captionSub,children:"Don't inspire by being perfect, inspire by embracing your imperfections."})]})]})]})}},2770:function(e,a,n){"use strict";n.r(a),n.d(a,{default:function(){return eklavya}});var i=n(5893),r=n(2253),s=n(4932),t=n(1309),c=n(7294),o=n(369),l=n.n(o);n(1664);var d=n(4414),_=n(3024),u=n(218),v=n(9603),ProjectCard=function(e){var a=e.name,n=e.imgName,r=e.sub,s=e.githubLink,o=(0,c.useRef)(),d=(0,t._)((0,c.useState)(!1),2),u=d[0],j=d[1],onIClick=function(){u?(o.current.style.clipPath="circle(4% at 90.75% 8%)",j(!1)):(o.current.style.clipPath="circle(120% at 90.75% 8%)",j(!0))};return(0,i.jsxs)("div",{className:l().eklavyaProj,children:[(0,i.jsx)("div",{style:{backgroundImage:'url("/static/images/'.concat(n,'")')},className:l().projPhoto}),(0,i.jsx)("div",{className:l().projName,children:a}),(0,i.jsxs)("div",{ref:o,className:l().iCard,onMouseEnter:onIClick,onMouseLeave:onIClick,onClick:onIClick,children:[(0,i.jsx)("div",{className:l().iButton,children:"i"}),(0,i.jsx)("div",{className:l().iInfo,children:r}),(0,i.jsx)("a",{className:l().iLink,href:s,children:(0,i.jsx)(v.G,{icon:_.zhw})})]})]})},EklavyaProjects_EklavyaProjects=function(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(u.Z,{imgName:"eklavya-hero.jpg",backgroundPosition:"center top",title:(0,i.jsx)(i.Fragment,{children:"Eklavya Projects"}),subtitleList:["Nurturing the future"],isHome:!1}),(0,i.jsx)("div",{className:l().eklavyaTotal,id:"is",children:(0,i.jsx)("div",{className:l().eklavyaYearCloud,children:d.OD.map(function(e,a){return(0,i.jsx)("a",{className:l().eklavyaYearTag,href:"#".concat(e.year),children:e.year},"year_".concat(a))})})}),d.OD.map(function(e,a){return(0,i.jsxs)("div",{className:l().eklavyaYear,id:e.year,children:[(0,i.jsx)("h2",{children:e.year}),(0,i.jsx)("div",{className:l().eklavyaYearList,children:e.projects.map(function(a,n){return(0,c.createElement)(ProjectCard,(0,s._)((0,r._)({},a),{key:"eklavya_project_".concat(e.year,"_").concat(n)}))})})]},"eklavya_projects_".concat(e.year))})]})},j=n(9008),h=n.n(j),eklavya=function(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(h(),{children:(0,i.jsx)("title",{children:"Eklavya Projects | SRA VJTI"})}),(0,i.jsx)(EklavyaProjects_EklavyaProjects,{})]})}},1147:function(e){e.exports={hero:"Hero_hero__XKL82",heroHead:"Hero_heroHead__riJDI",heroSub:"Hero_heroSub__nbQOo",notif:"Hero_notif__EqBdx",wobble:"Hero_wobble__7uaPS","scroll-indicator":"Hero_scroll-indicator__XZigV",bounce:"Hero_bounce__B72fu",is:"Hero_is__1nwRr",caption:"Hero_caption__o5EFp",captionHead:"Hero_captionHead___hsCe",captionSub:"Hero_captionSub__U32uZ",scrollIndicator:"Hero_scrollIndicator__yScPO"}},369:function(e){e.exports={eklavyaProj:"EklavyaProjects_eklavyaProj__hPLky",projPhoto:"EklavyaProjects_projPhoto__Xdy47",projName:"EklavyaProjects_projName__gYmon",iCard:"EklavyaProjects_iCard__25_og",iButton:"EklavyaProjects_iButton__aHEgA",iInfo:"EklavyaProjects_iInfo__7KvKa",iLink:"EklavyaProjects_iLink__iOSQY",eklavyaYearCloud:"EklavyaProjects_eklavyaYearCloud__feMPZ",eklavyaYearTag:"EklavyaProjects_eklavyaYearTag__0Sqn2",eklavyaYear:"EklavyaProjects_eklavyaYear__YqPAA",eklavyaYearList:"EklavyaProjects_eklavyaYearList__FU4FQ"}},9008:function(e,a,n){e.exports=n(9201)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=747)}),_N_E=e.O()}]);