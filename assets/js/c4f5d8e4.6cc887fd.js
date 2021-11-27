"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[195,554],{2399:function(e,t,a){a.r(t),a.d(t,{default:function(){return g}});var n=a(7294),r=(a(4996),a(8553)),l=a(2263),i="Button_3akz",s="buttonBg_341n";function o(e){var t=e.children,a=e.href,r=e.type,l=e.target;return n.createElement("div",{className:"\n        Button\n        "+i+"\n        "+r+"_src-components-"+"Button-module\n      "},n.createElement("a",{href:a,target:l},t),n.createElement("div",{className:""+s}))}var c="Column_1nfB";function m(e){var t=e.children,a=e.type;return n.createElement("div",{className:"\n      Column\n      "+c+"\n      "+a+"_src-components-"+"Column-module\n    "},t)}var u="InformationBar_1qQ-";function b(e){var t=e.children,a=e.type,r="InformationBar";return n.createElement("div",{className:"\n      "+r+"\n      "+u+"\n      "+a+"_src-components-"+r+"-module\n    "},n.createElement("div",{className:"container"},n.createElement("p",null,t)))}function d(){var e=(0,l.Z)().siteConfig;return n.createElement("section",{className:"hero"},n.createElement("div",{className:"container"},n.createElement("div",{className:"texts"},n.createElement("div",{className:"logo"}),n.createElement("span",null,e.tagline),n.createElement("div",{className:"cta"},n.createElement(o,{type:"button-bg-full",href:"./docs/",target:"_self"},"Get started in 5 minutes!")))))}function v(){var e=(0,l.Z)().siteConfig;return n.createElement("section",{className:"presentation"},n.createElement("div",{className:"container"},n.createElement("h2",null,"What is ",e.title,"?"),n.createElement(m,{type:"col-2"},n.createElement("p",null,"The ",n.createElement("strong",null,"Web MIDI API")," is a really exciting addition to the web platform allowing a web page to interact with ",n.createElement("strong",null,"MIDI musical instruments"),". However, while great, most developers will find the API to be too ",n.createElement("em",null,"low-level")," for their needs. Having to perform binary arithmetic or needing to read the 300-page MIDI spec is no fun (trust us on this!). The goal behind ",n.createElement("strong",null,"WEBMIDI.js")," is to get you started with your web-based MIDI project as efficiently as possible."),n.createElement("div",{className:"media"},n.createElement("div",{className:"imgMedia",src:"",alt:""})))))}function g(){var e=(0,l.Z)().siteConfig;return n.createElement(r.Z,{title:""+e.title,description:"A JavaScript library to kickstart your MIDI projects on the web and in Node.js."},n.createElement(d,null),n.createElement("main",null,n.createElement(b,null,n.createElement("strong",null,"Version 3.0 has been released!")," ",n.createElement("br",null),n.createElement("a",{rel:"noreferrer",target:"_blank",href:"https://mailchi.mp/eeffe50651bd/webmidijs-newsletter"},"Subscribe to the newsletter")," ",n.createElement("br",null),"to learn about all the new features."),n.createElement(v,null)))}},7472:function(e,t,a){a.d(t,{Z:function(){return d}});var n=a(7294),r=a(2822),l=a(4996),i="footer_2bJW",s="container_J_cY",o="copyright_3Nz8",c="sponsor_W6vH",m="sponsors_N4HH",u=a(2263),b=a(4593);var d=function(){var e=(0,r.LU)().footer,t=((0,u.Z)().sponsors,(e||{}).copyright);if(!e)return null;var a=(0,l.Z)("img/sponsors/edouard-montpetit-logo.svg");return n.createElement("footer",{className:"footer "+i},n.createElement("div",{className:"container "+s},n.createElement("div",{className:c},n.createElement("p",null,"This project is supported in part by:"),n.createElement("div",{className:m},n.createElement("a",{href:"https://www.cegepmontpetit.ca/",target:"_blank",rel:"noreferrer"},n.createElement("img",{src:a,alt:"Logo cegep Edouard-Montpetit"})))),t?n.createElement("div",{className:"footer__copyright "+o,dangerouslySetInnerHTML:{__html:t}}):null),n.createElement(b.q,null,n.createElement("script",{id:"mcjs",src:"/scripts/newsletter-popup.js",type:"text/javascript"})))}},4110:function(e,t,a){a.d(t,{Z:function(){return y}});var n=a(3117),r=a(7294),l=a(6010),i=a(5999),s=a(4978),o=a(232),c=a(5350),m=a(2822),u=a(5662),b=a(1839),d=a(3783),v=a(6730),g=a(2207),f=a(8487),h=a(4478),E=a(4013),p={toggle:"toggle_2xs0",navbarHideable:"navbarHideable_1VR7",navbarHidden:"navbarHidden_1FmO",navbarSidebarToggle:"navbarSidebarToggle_nWi-",navbarSidebarMobile:"navbarSidebarMobile_2HCi"},_="right";function N(){return(0,m.LU)().navbar.items}function k(){var e=(0,m.LU)().colorMode.disableSwitch,t=(0,c.Z)(),a=t.isDarkTheme,n=t.setLightTheme,l=t.setDarkTheme;return{isDarkTheme:a,toggle:(0,r.useCallback)((function(e){return e.target.checked?l():n()}),[n,l]),disabled:e}}function w(e){var t=e.sidebarShown,a=e.toggleSidebar;(0,b.Z)(t);var s=N(),c=k(),u=function(e){var t,a=e.sidebarShown,n=e.toggleSidebar,l=null==(t=(0,m.g8)())?void 0:t({toggleSidebar:n}),i=(0,m.D9)(l),s=(0,r.useState)((function(){return!1})),o=s[0],c=s[1];(0,r.useEffect)((function(){l&&!i&&c(!0)}),[l,i]);var u=!!l;return(0,r.useEffect)((function(){u?a||c(!0):c(!1)}),[a,u]),{shown:o,hide:(0,r.useCallback)((function(){c(!1)}),[]),content:l}}({sidebarShown:t,toggleSidebar:a});return r.createElement("div",{className:"navbar-sidebar"},r.createElement("div",{className:"navbar-sidebar__brand"},r.createElement(f.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),!c.disabled&&r.createElement(o.Z,{className:p.navbarSidebarToggle,checked:c.isDarkTheme,onChange:c.toggle}),r.createElement("button",{type:"button",className:"clean-btn navbar-sidebar__close",onClick:a},r.createElement(E.Z,{color:"var(--ifm-color-emphasis-600)",className:p.navbarSidebarCloseSvg}))),r.createElement("div",{className:(0,l.Z)("navbar-sidebar__items",{"navbar-sidebar__items--show-secondary":u.shown})},r.createElement("div",{className:p.navbarSidebarMobile+" navbar-sidebar__item menu"},r.createElement("ul",{className:"menu__list"},s.map((function(e,t){return r.createElement(g.Z,(0,n.Z)({mobile:!0},e,{onClick:a,key:t}))})))),r.createElement("div",{className:"navbar-sidebar__item menu"},s.length>0&&r.createElement("button",{type:"button",className:"clean-btn navbar-sidebar__back",onClick:u.hide},r.createElement(i.Z,{id:"theme.navbar.mobileSidebarSecondaryMenu.backButtonLabel",description:"The label of the back button to return to main menu, inside the mobile navbar sidebar secondary menu (notably used to display the docs sidebar)"},"\u2190 Back to main menu")),u.content)))}var y=function(){var e,t=(0,m.LU)().navbar,a=t.hideOnScroll,i=t.style,c=function(){var e=(0,d.Z)(),t="mobile"===e,a=(0,r.useState)(!1),n=a[0],l=a[1];(0,m.Rb)((function(){if(n)return l(!1),!1}));var i=(0,r.useCallback)((function(){l((function(e){return!e}))}),[]);return(0,r.useEffect)((function(){"desktop"===e&&l(!1)}),[e]),{shouldRender:t,toggle:i,shown:n}}(),b=k(),E=(0,v.gA)(),y=(0,u.Z)(a),Z=y.navbarRef,S=y.isNavbarVisible,C=N(),I=C.some((function(e){return"search"===e.type})),M=function(e){return{leftItems:e.filter((function(e){var t;return"left"===(null!=(t=e.position)?t:_)})),rightItems:e.filter((function(e){var t;return"right"===(null!=(t=e.position)?t:_)}))}}(C),T=M.leftItems,D=M.rightItems;return r.createElement("nav",{ref:Z,className:(0,l.Z)("navbar","navbar--fixed-top",(e={"navbar--dark":"dark"===i,"navbar--primary":"primary"===i,"navbar-sidebar--show":c.shown},e[p.navbarHideable]=a,e[p.navbarHidden]=a&&!S,e))},r.createElement("div",{className:"navbar__inner"},r.createElement("div",{className:"navbar__items"},((null==C?void 0:C.length)>0||E)&&r.createElement("button",{"aria-label":"Navigation bar toggle",className:"navbar__toggle clean-btn",type:"button",tabIndex:0,onClick:c.toggle,onKeyDown:c.toggle},r.createElement(h.Z,null)),r.createElement(f.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),T.map((function(e,t){return r.createElement(g.Z,(0,n.Z)({},e,{key:t}))}))),r.createElement("div",{className:"navbar__items navbar__items--right"},D.map((function(e,t){return r.createElement(g.Z,(0,n.Z)({},e,{key:t}))})),!b.disabled&&r.createElement(o.Z,{className:p.toggle,checked:b.isDarkTheme,onChange:b.toggle}),!I&&r.createElement(s.Z,null))),r.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:c.toggle}),c.shouldRender&&r.createElement(w,{sidebarShown:c.shown,toggleSidebar:c.toggle}))}}}]);