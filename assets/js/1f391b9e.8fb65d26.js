"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3085,2554],{6416:function(e,a,t){t.r(a),t.d(a,{default:function(){return d}});var n=t(7294),r=t(6010),l=t(8553),i=t(3905),s=t(7707),o=t(1575),c=t(2822),m="mdxPageWrapper_3qD3";var d=function(e){var a=e.content,t=a.frontMatter,d=a.metadata,u=t.title,b=t.description,v=t.wrapperClassName,g=t.hide_table_of_contents,f=d.permalink;return n.createElement(l.Z,{title:u,description:b,permalink:f,wrapperClassName:null!=v?v:c.kM.wrapper.mdxPages,pageClassName:c.kM.page.mdxPage},n.createElement("main",{className:"container container--fluid margin-vert--lg"},n.createElement("div",{className:(0,r.Z)("row",m)},n.createElement("div",{className:(0,r.Z)("col",!g&&"col--8")},n.createElement(i.Zo,{components:s.Z},n.createElement(a,null))),!g&&a.toc&&n.createElement("div",{className:"col col--2"},n.createElement(o.Z,{toc:a.toc,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level})))))}},1575:function(e,a,t){t.d(a,{Z:function(){return m}});var n=t(3117),r=t(102),l=t(7294),i=t(6010),s=t(5002),o="tableOfContents_35-E",c=["className"];var m=function(e){var a=e.className,t=(0,r.Z)(e,c);return l.createElement("div",{className:(0,i.Z)(o,"thin-scrollbar",a)},l.createElement(s.Z,(0,n.Z)({},t,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},5002:function(e,a,t){t.d(a,{Z:function(){return c}});var n=t(3117),r=t(102),l=t(7294),i=t(2822),s=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function o(e){var a=e.toc,t=e.className,n=e.linkClassName,r=e.isChild;return a.length?l.createElement("ul",{className:r?void 0:t},a.map((function(e){return l.createElement("li",{key:e.id},l.createElement("a",{href:"#"+e.id,className:null!=n?n:void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(o,{isChild:!0,toc:e.children,className:t,linkClassName:n}))}))):null}function c(e){var a=e.toc,t=e.className,c=void 0===t?"table-of-contents table-of-contents__left-border":t,m=e.linkClassName,d=void 0===m?"table-of-contents__link":m,u=e.linkActiveClassName,b=void 0===u?void 0:u,v=e.minHeadingLevel,g=e.maxHeadingLevel,f=(0,r.Z)(e,s),_=(0,i.LU)(),h=null!=v?v:_.tableOfContents.minHeadingLevel,p=null!=g?g:_.tableOfContents.maxHeadingLevel,N=(0,i.DA)({toc:a,minHeadingLevel:h,maxHeadingLevel:p}),E=(0,l.useMemo)((function(){if(d&&b)return{linkClassName:d,linkActiveClassName:b,minHeadingLevel:h,maxHeadingLevel:p}}),[d,b,h,p]);return(0,i.Si)(E),l.createElement(o,(0,n.Z)({toc:N,className:c,linkClassName:d},f))}},592:function(e,a,t){t.d(a,{Z:function(){return b}});var n=t(7294),r=t(2822),l=t(4996),i="footer_2bJW",s="container_J_cY",o="copyright_3Nz8",c="sponsor_W6vH",m="sponsors_N4HH",d=t(2263),u=t(4593);var b=function(){var e=(0,r.LU)().footer,a=((0,d.Z)().sponsors,(e||{}).copyright);if(!e)return null;var t=(0,l.Z)("img/sponsors/edouard-montpetit-logo.svg");return n.createElement("footer",{className:"footer "+i},n.createElement("div",{className:"container "+s},n.createElement("div",{className:c},n.createElement("p",null,"This project is supported in part by:"),n.createElement("div",{className:m},n.createElement("a",{href:"https://www.cegepmontpetit.ca/",target:"_blank",rel:"noreferrer"},n.createElement("img",{src:t,alt:"Logo cegep Edouard-Montpetit"})))),a?n.createElement("div",{className:"footer__copyright "+o,dangerouslySetInnerHTML:{__html:a}}):null),n.createElement(u.q,null,n.createElement("script",{id:"mcjs",src:"/scripts/newsletter-popup.js",type:"text/javascript"})))}},4110:function(e,a,t){t.d(a,{Z:function(){return C}});var n=t(3117),r=t(7294),l=t(6010),i=t(5999),s=t(4978),o=t(232),c=t(5350),m=t(2822),d=t(5662),u=t(1839),b=t(3783),v=t(6730),g=t(2207),f=t(8487),_=t(4478),h=t(4013),p={toggle:"toggle_2xs0",navbarHideable:"navbarHideable_1VR7",navbarHidden:"navbarHidden_1FmO",navbarSidebarToggle:"navbarSidebarToggle_nWi-",navbarSidebarMobile:"navbarSidebarMobile_2HCi"},N="right";function E(){return(0,m.LU)().navbar.items}function k(){var e=(0,m.LU)().colorMode.disableSwitch,a=(0,c.Z)(),t=a.isDarkTheme,n=a.setLightTheme,l=a.setDarkTheme;return{isDarkTheme:t,toggle:(0,r.useCallback)((function(e){return e.target.checked?l():n()}),[n,l]),disabled:e}}function Z(e){var a=e.sidebarShown,t=e.toggleSidebar;(0,u.Z)(a);var s=E(),c=k(),d=function(e){var a,t=e.sidebarShown,n=e.toggleSidebar,l=null==(a=(0,m.g8)())?void 0:a({toggleSidebar:n}),i=(0,m.D9)(l),s=(0,r.useState)((function(){return!1})),o=s[0],c=s[1];(0,r.useEffect)((function(){l&&!i&&c(!0)}),[l,i]);var d=!!l;return(0,r.useEffect)((function(){d?t||c(!0):c(!1)}),[t,d]),{shown:o,hide:(0,r.useCallback)((function(){c(!1)}),[]),content:l}}({sidebarShown:a,toggleSidebar:t});return r.createElement("div",{className:"navbar-sidebar"},r.createElement("div",{className:"navbar-sidebar__brand"},r.createElement(f.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),!c.disabled&&r.createElement(o.Z,{className:p.navbarSidebarToggle,checked:c.isDarkTheme,onChange:c.toggle}),r.createElement("button",{type:"button",className:"clean-btn navbar-sidebar__close",onClick:t},r.createElement(h.Z,{color:"var(--ifm-color-emphasis-600)",className:p.navbarSidebarCloseSvg}))),r.createElement("div",{className:(0,l.Z)("navbar-sidebar__items",{"navbar-sidebar__items--show-secondary":d.shown})},r.createElement("div",{className:p.navbarSidebarMobile+" navbar-sidebar__item menu"},r.createElement("ul",{className:"menu__list"},s.map((function(e,a){return r.createElement(g.Z,(0,n.Z)({mobile:!0},e,{onClick:t,key:a}))})))),r.createElement("div",{className:"navbar-sidebar__item menu"},s.length>0&&r.createElement("button",{type:"button",className:"clean-btn navbar-sidebar__back",onClick:d.hide},r.createElement(i.Z,{id:"theme.navbar.mobileSidebarSecondaryMenu.backButtonLabel",description:"The label of the back button to return to main menu, inside the mobile navbar sidebar secondary menu (notably used to display the docs sidebar)"},"\u2190 Back to main menu")),d.content)))}var C=function(){var e,a=(0,m.LU)().navbar,t=a.hideOnScroll,i=a.style,c=function(){var e=(0,b.Z)(),a="mobile"===e,t=(0,r.useState)(!1),n=t[0],l=t[1];(0,m.Rb)((function(){if(n)return l(!1),!1}));var i=(0,r.useCallback)((function(){l((function(e){return!e}))}),[]);return(0,r.useEffect)((function(){"desktop"===e&&l(!1)}),[e]),{shouldRender:a,toggle:i,shown:n}}(),u=k(),h=(0,v.gA)(),C=(0,d.Z)(t),S=C.navbarRef,y=C.isNavbarVisible,H=E(),w=H.some((function(e){return"search"===e.type})),L=function(e){return{leftItems:e.filter((function(e){var a;return"left"===(null!=(a=e.position)?a:N)})),rightItems:e.filter((function(e){var a;return"right"===(null!=(a=e.position)?a:N)}))}}(H),x=L.leftItems,T=L.rightItems;return r.createElement("nav",{ref:S,className:(0,l.Z)("navbar","navbar--fixed-top",(e={"navbar--dark":"dark"===i,"navbar--primary":"primary"===i,"navbar-sidebar--show":c.shown},e[p.navbarHideable]=t,e[p.navbarHidden]=t&&!y,e))},r.createElement("div",{className:"navbar__inner"},r.createElement("div",{className:"navbar__items"},((null==H?void 0:H.length)>0||h)&&r.createElement("button",{"aria-label":"Navigation bar toggle",className:"navbar__toggle clean-btn",type:"button",tabIndex:0,onClick:c.toggle,onKeyDown:c.toggle},r.createElement(_.Z,null)),r.createElement(f.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),x.map((function(e,a){return r.createElement(g.Z,(0,n.Z)({},e,{key:a}))}))),r.createElement("div",{className:"navbar__items navbar__items--right"},T.map((function(e,a){return r.createElement(g.Z,(0,n.Z)({},e,{key:a}))})),!u.disabled&&r.createElement(o.Z,{className:p.toggle,checked:u.isDarkTheme,onChange:u.toggle}),!w&&r.createElement(s.Z,null))),r.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:c.toggle}),c.shouldRender&&r.createElement(Z,{sidebarShown:c.shown,toggleSidebar:c.toggle}))}}}]);