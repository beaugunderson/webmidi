"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3351],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),m=l(r),f=o,d=m["".concat(c,".").concat(f)]||m[f]||p[f]||i;return r?n.createElement(d,s(s({ref:t},u),{},{components:r})):n.createElement(d,s({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,s=new Array(i);s[0]=m;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var l=2;l<i;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8606:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const i={sidebar_position:5,title:"Electron"},s="Electron",a={unversionedId:"going-further/electron",id:"going-further/electron",title:"Electron",description:"WEBMIDI.js works fine inside Electron but you must make sure to",source:"@site/docs/going-further/electron.md",sourceDirName:"going-further",slug:"/going-further/electron",permalink:"/docs/going-further/electron",draft:!1,editUrl:"https://github.com/djipco/webmidi/edit/master/website/docs/going-further/electron.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Electron"},sidebar:"tutorialSidebar",previous:{title:"TypeScript",permalink:"/docs/going-further/typescript"},next:{title:"Migrating from 2.5.x to 3.x",permalink:"/docs/migration/"}},c={},l=[],u={toc:l};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"electron"},"Electron"),(0,o.kt)("p",null,"WEBMIDI.js works fine inside ",(0,o.kt)("a",{parentName:"p",href:"https://www.electronjs.org/"},"Electron")," but you must make sure to\nproperly handle the permission request and permission check handlers from within the main process:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"mainWindow.webContents.session.setPermissionRequestHandler((webContents, permission, callback, details) => {\n  if (permission === 'midi' || permission === 'midiSysex') {\n    callback(true);\n  } else {\n    callback(false);\n  }\n})\n\nmainWindow.webContents.session.setPermissionCheckHandler((webContents, permission, requestingOrigin) => {\n  if (permission === 'midi' || permission === 'midiSysex') {\n    return true;\n  }\n  return false;\n});\n")))}p.isMDXComponent=!0}}]);