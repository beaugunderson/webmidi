"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5782],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,f=m["".concat(l,".").concat(d)]||m[d]||c[d]||s;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<s;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5658:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var a=n(3117),r=n(102),s=(n(7294),n(3905)),i=["components"],o={sidebar_position:1,title:"API Documentation",slug:"/"},l="API Documentation",p={unversionedId:"index",id:"index",isDocsHomePage:!1,title:"API Documentation",description:"Core Classes",source:"@site/api3/index.md",sourceDirName:".",slug:"/",permalink:"/api3/",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"API Documentation",slug:"/"},sidebar:"tutorialSidebar",next:{title:"Enumerations",permalink:"/api3/classes/Enumerations"}},u=[{value:"Core Classes",id:"core-classes",children:[],level:2},{value:"Support Classes",id:"support-classes",children:[],level:2},{value:"DjipEvents Classes",id:"djipevents-classes",children:[],level:2}],c={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,s.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"api-documentation"},"API Documentation"),(0,s.kt)("h2",{id:"core-classes"},"Core Classes"),(0,s.kt)("p",null,"These classes are the ones developers are most likely to be dealing with while working on their MIDI\nprojects. Note that all these classes are pre-instantiated within WebMidi.js."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"classes/WebMidi"},(0,s.kt)("strong",{parentName:"a"},"WebMidi"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"classes/Input"},(0,s.kt)("strong",{parentName:"a"},"Input"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"classes/InputChannel"},(0,s.kt)("strong",{parentName:"a"},"InputChannel"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"classes/Output"},(0,s.kt)("strong",{parentName:"a"},"Output"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"classes/OutputChannel"},(0,s.kt)("strong",{parentName:"a"},"OutputChannel"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"classes/Message"},(0,s.kt)("strong",{parentName:"a"},"Message")))),(0,s.kt)("p",null,"The exception are the ",(0,s.kt)("a",{parentName:"p",href:"classes/Note"},(0,s.kt)("inlineCode",{parentName:"a"},"Note"))," class which you can instantiate when you need to store\na musical note and the ",(0,s.kt)("a",{parentName:"p",href:"classes/Forwarder"},(0,s.kt)("inlineCode",{parentName:"a"},"Forwarder"))," class used to forward messages from an input\nto an output:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"classes/Note"},(0,s.kt)("strong",{parentName:"a"},"Note"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"classes/Forwarder"},(0,s.kt)("strong",{parentName:"a"},"Forwarder")))),(0,s.kt)("h2",{id:"support-classes"},"Support Classes"),(0,s.kt)("p",null,"These classes are mostly for internal use, but you might find them useful in some contexts. The\n",(0,s.kt)("a",{parentName:"p",href:"classes/Enumerations"},(0,s.kt)("inlineCode",{parentName:"a"},"Enumerations"))," class contains static enums of MIDI messages, registered\nparameters, etc. The ",(0,s.kt)("a",{parentName:"p",href:"classes/Utilities"},(0,s.kt)("inlineCode",{parentName:"a"},"Utilities"))," class contains various static methods. "),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"classes/Enumerations"},(0,s.kt)("strong",{parentName:"a"},"Enumerations"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"classes/Utilities"},(0,s.kt)("strong",{parentName:"a"},"Utilities")))),(0,s.kt)("h2",{id:"djipevents-classes"},"DjipEvents Classes"),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"EventEmitter")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"Listener")," classes from the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/djipco/djipevents"},"DjipEvents"),"\nmodule are extended by various WebMidi.js classes. So, in the interest of completeness, we include\ntheir full documentation here and cross-reference it with the core classes"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"classes/EventEmitter"},(0,s.kt)("strong",{parentName:"a"},"EventEmitter"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"classes/Listener"},(0,s.kt)("strong",{parentName:"a"},"Listener")))))}m.isMDXComponent=!0}}]);