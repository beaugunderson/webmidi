"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2297],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),k=d(n),m=r,c=k["".concat(p,".").concat(m)]||k[m]||s[m]||l;return n?a.createElement(c,i(i({ref:t},u),{},{components:n})):a.createElement(c,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},1865:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return u},default:function(){return k}});var a=n(3117),r=n(102),l=(n(7294),n(3905)),i=["components"],o={},p="Note",d={unversionedId:"classes/Note",id:"classes/Note",isDocsHomePage:!1,title:"Note",description:'The Note class represents a single musical note such as "D3", "G#4", "F-1", "Gb7", etc.',source:"@site/api3/classes/Note.md",sourceDirName:"classes",slug:"/classes/Note",permalink:"/api3/classes/Note",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Message",permalink:"/api3/classes/Message"},next:{title:"Output",permalink:"/api3/classes/Output"}},u=[{value:"<code>Constructor</code>",id:"constructor",children:[],level:3},{value:"Properties",id:"properties",children:[{value:"<code>.accidental</code>",id:"accidental",children:[],level:3},{value:"<code>.attack</code>",id:"attack",children:[],level:3},{value:"<code>.duration</code>",id:"duration",children:[],level:3},{value:"<code>.identifier</code>",id:"identifier",children:[],level:3},{value:"<code>.name</code>",id:"name",children:[],level:3},{value:"<code>.number</code>",id:"number",children:[],level:3},{value:"<code>.octave</code>",id:"octave",children:[],level:3},{value:"<code>.rawAttack</code>",id:"rawAttack",children:[],level:3},{value:"<code>.rawRelease</code>",id:"rawRelease",children:[],level:3},{value:"<code>.release</code>",id:"release",children:[],level:3}],level:2},{value:"Methods",id:"methods",children:[{value:"<code>.getOffsetNumber(...)</code>",id:"getOffsetNumber",children:[],level:3}],level:2}],s={toc:u};function k(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"note"},"Note"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"Note")," class represents a single musical note such as ",(0,l.kt)("inlineCode",{parentName:"p"},'"D3"'),", ",(0,l.kt)("inlineCode",{parentName:"p"},'"G#4"'),", ",(0,l.kt)("inlineCode",{parentName:"p"},'"F-1"'),", ",(0,l.kt)("inlineCode",{parentName:"p"},'"Gb7"'),", etc."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Note")," objects can be played back on a single channel by calling\n",(0,l.kt)("a",{parentName:"p",href:"OutputChannel#playNote"},(0,l.kt)("inlineCode",{parentName:"a"},"OutputChannel.playNote()"))," or, on multiple channels of the same\noutput, by calling ",(0,l.kt)("a",{parentName:"p",href:"Output#playNote"},(0,l.kt)("inlineCode",{parentName:"a"},"Output.playNote()")),"."),(0,l.kt)("p",null,"The note has ",(0,l.kt)("a",{parentName:"p",href:"#attack"},(0,l.kt)("inlineCode",{parentName:"a"},"attack"))," and ",(0,l.kt)("a",{parentName:"p",href:"#release"},(0,l.kt)("inlineCode",{parentName:"a"},"release"))," velocities set at ",(0,l.kt)("inlineCode",{parentName:"p"},"0.5")," by default.\nThese can be changed by passing in the appropriate option. It is also possible to set a\nsystem-wide default for attack and release velocities by using the\n",(0,l.kt)("a",{parentName:"p",href:"WebMidi#defaults"},(0,l.kt)("inlineCode",{parentName:"a"},"WebMidi.defaults"))," property."),(0,l.kt)("p",null,"If you prefer to work with raw MIDI values (",(0,l.kt)("inlineCode",{parentName:"p"},"0")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"127"),"), you can use ",(0,l.kt)("a",{parentName:"p",href:"#rawAttack"},(0,l.kt)("inlineCode",{parentName:"a"},"rawAttack"))," and\n",(0,l.kt)("a",{parentName:"p",href:"#rawRelease"},(0,l.kt)("inlineCode",{parentName:"a"},"rawRelease"))," to both get and set the values."),(0,l.kt)("p",null,"The note may have a ",(0,l.kt)("a",{parentName:"p",href:"#duration"},(0,l.kt)("inlineCode",{parentName:"a"},"duration")),". If it does, playback will be automatically stopped\nwhen the duration has elapsed by sending a ",(0,l.kt)("inlineCode",{parentName:"p"},'"noteoff"')," event. By default, the duration is set to\n",(0,l.kt)("inlineCode",{parentName:"p"},"Infinity"),". In this case, it will never stop playing unless explicitly stopped by calling a\nmethod such as ",(0,l.kt)("a",{parentName:"p",href:"OutputChannel#stopNote"},(0,l.kt)("inlineCode",{parentName:"a"},"OutputChannel.stopNote()")),",\n",(0,l.kt)("a",{parentName:"p",href:"Output#stopNote"},(0,l.kt)("inlineCode",{parentName:"a"},"Output.stopNote()"))," or similar."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Since"),": 3.0.0"),(0,l.kt)("h3",{id:"constructor"},(0,l.kt)("inlineCode",{parentName:"h3"},"Constructor")),(0,l.kt)("p",null,"  ",(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("inlineCode",{parentName:"p"},"new Note(value, [options])"))),(0,l.kt)("div",{class:"parameter-table-container"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"value"))),(0,l.kt)("td",{parentName:"tr",align:null},"string",(0,l.kt)("br",null),"number",(0,l.kt)("br",null)),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"The value used to create the note. If an identifier string is used, it must start with the note letter, optionally followed by an accidental and followed by the octave number (",(0,l.kt)("inlineCode",{parentName:"td"},'"C3"'),", ",(0,l.kt)("inlineCode",{parentName:"td"},'"G#4"'),", ",(0,l.kt)("inlineCode",{parentName:"td"},'"F-1"'),", ",(0,l.kt)("inlineCode",{parentName:"td"},'"Db7"'),", etc.). If a number is used, it must be an integer between 0 and 127. In this case, middle C is considered to be C4 (note number 60).")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[",(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"options")),"]"),(0,l.kt)("td",{parentName:"tr",align:null},"object",(0,l.kt)("br",null)),(0,l.kt)("td",{parentName:"tr",align:null},"{}"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[",(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"options.duration")),"]"),(0,l.kt)("td",{parentName:"tr",align:null},"number",(0,l.kt)("br",null)),(0,l.kt)("td",{parentName:"tr",align:null},"Infinity"),(0,l.kt)("td",{parentName:"tr",align:null},"The number of milliseconds before the note should be explicitly stopped.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[",(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"options.attack")),"]"),(0,l.kt)("td",{parentName:"tr",align:null},"number",(0,l.kt)("br",null)),(0,l.kt)("td",{parentName:"tr",align:null},"0.5"),(0,l.kt)("td",{parentName:"tr",align:null},"The note's attack velocity as a float between 0 and 1. If you wish to use an integer between 0 and 127, use the ",(0,l.kt)("inlineCode",{parentName:"td"},"rawAttack")," option instead. If both ",(0,l.kt)("inlineCode",{parentName:"td"},"attack")," and ",(0,l.kt)("inlineCode",{parentName:"td"},"rawAttack")," are specified, the latter has precedence.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[",(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"options.release")),"]"),(0,l.kt)("td",{parentName:"tr",align:null},"number",(0,l.kt)("br",null)),(0,l.kt)("td",{parentName:"tr",align:null},"0.5"),(0,l.kt)("td",{parentName:"tr",align:null},"The note's release velocity as a float between 0 and 1. If you wish to use an integer between 0 and 127, use the ",(0,l.kt)("inlineCode",{parentName:"td"},"rawRelease")," option instead. If both ",(0,l.kt)("inlineCode",{parentName:"td"},"release")," and ",(0,l.kt)("inlineCode",{parentName:"td"},"rawRelease")," are specified, the latter has precedence.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[",(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"options.rawAttack")),"]"),(0,l.kt)("td",{parentName:"tr",align:null},"number",(0,l.kt)("br",null)),(0,l.kt)("td",{parentName:"tr",align:null},"64"),(0,l.kt)("td",{parentName:"tr",align:null},"The note's attack velocity as an integer between 0 and 127. If you wish to use a float between 0 and 1, use the ",(0,l.kt)("inlineCode",{parentName:"td"},"release")," option instead. If both ",(0,l.kt)("inlineCode",{parentName:"td"},"attack")," and ",(0,l.kt)("inlineCode",{parentName:"td"},"rawAttack")," are specified, the latter has precedence.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[",(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"options.rawRelease")),"]"),(0,l.kt)("td",{parentName:"tr",align:null},"number",(0,l.kt)("br",null)),(0,l.kt)("td",{parentName:"tr",align:null},"64"),(0,l.kt)("td",{parentName:"tr",align:null},"The note's release velocity as an integer between 0 and 127. If you wish to use a float between 0 and 1, use the ",(0,l.kt)("inlineCode",{parentName:"td"},"release")," option instead. If both ",(0,l.kt)("inlineCode",{parentName:"td"},"release")," and ",(0,l.kt)("inlineCode",{parentName:"td"},"rawRelease")," are specified, the latter has precedence."))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Throws"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Error")," : Invalid note identifier"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"RangeError")," : Invalid name value"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"RangeError")," : Invalid accidental value"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"RangeError")," : Invalid octave value"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"RangeError")," : Invalid duration value"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"RangeError")," : Invalid attack value"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"RangeError")," : Invalid release value")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("h3",{id:"accidental"},(0,l.kt)("inlineCode",{parentName:"h3"},".accidental")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Since"),": 3.0.0",(0,l.kt)("br",null),"\n",(0,l.kt)("strong",{parentName:"p"},"Type"),": string",(0,l.kt)("br",null)),(0,l.kt)("p",null,"The accidental (#, ##, b or bb) of the note."),(0,l.kt)("h3",{id:"attack"},(0,l.kt)("inlineCode",{parentName:"h3"},".attack")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Since"),": 3.0.0",(0,l.kt)("br",null),"\n",(0,l.kt)("strong",{parentName:"p"},"Type"),": number",(0,l.kt)("br",null)),(0,l.kt)("p",null,"The attack velocity of the note as an integer between 0 and 1."),(0,l.kt)("h3",{id:"duration"},(0,l.kt)("inlineCode",{parentName:"h3"},".duration")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Since"),": 3.0.0",(0,l.kt)("br",null),"\n",(0,l.kt)("strong",{parentName:"p"},"Type"),": number",(0,l.kt)("br",null)),(0,l.kt)("p",null,"The duration of the note as a positive decimal number representing the number of milliseconds\nthat the note should play for."),(0,l.kt)("h3",{id:"identifier"},(0,l.kt)("inlineCode",{parentName:"h3"},".identifier")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Since"),": 3.0.0",(0,l.kt)("br",null),"\n",(0,l.kt)("strong",{parentName:"p"},"Type"),": string",(0,l.kt)("br",null)),(0,l.kt)("p",null,"The name, optional accidental and octave of the note, as a string."),(0,l.kt)("h3",{id:"name"},(0,l.kt)("inlineCode",{parentName:"h3"},".name")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Since"),": 3.0.0",(0,l.kt)("br",null),"\n",(0,l.kt)("strong",{parentName:"p"},"Type"),": string",(0,l.kt)("br",null)),(0,l.kt)("p",null,"The name (letter) of the note"),(0,l.kt)("h3",{id:"number"},(0,l.kt)("inlineCode",{parentName:"h3"},".number")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Since"),": 3.0.0",(0,l.kt)("br",null),"\n",(0,l.kt)("strong",{parentName:"p"},"Type"),": number",(0,l.kt)("br",null)),(0,l.kt)("p",null,"The MIDI number of the note (",(0,l.kt)("inlineCode",{parentName:"p"},"0")," - ",(0,l.kt)("inlineCode",{parentName:"p"},"127"),"). This number is derived from the note identifier\nusing C4 as a reference for middle C."),(0,l.kt)("h3",{id:"octave"},(0,l.kt)("inlineCode",{parentName:"h3"},".octave")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Since"),": 3.0.0",(0,l.kt)("br",null),"\n",(0,l.kt)("strong",{parentName:"p"},"Type"),": number",(0,l.kt)("br",null)),(0,l.kt)("p",null,"The octave of the note."),(0,l.kt)("h3",{id:"rawAttack"},(0,l.kt)("inlineCode",{parentName:"h3"},".rawAttack")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Since"),": 3.0.0",(0,l.kt)("br",null),"\n",(0,l.kt)("strong",{parentName:"p"},"Type"),": number",(0,l.kt)("br",null)),(0,l.kt)("p",null,"The attack velocity of the note as a positive integer between 0 and 127."),(0,l.kt)("h3",{id:"rawRelease"},(0,l.kt)("inlineCode",{parentName:"h3"},".rawRelease")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Since"),": 3.0.0",(0,l.kt)("br",null),"\n",(0,l.kt)("strong",{parentName:"p"},"Type"),": number",(0,l.kt)("br",null)),(0,l.kt)("p",null,"The release velocity of the note as a positive integer between 0 and 127."),(0,l.kt)("h3",{id:"release"},(0,l.kt)("inlineCode",{parentName:"h3"},".release")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Since"),": 3.0.0",(0,l.kt)("br",null),"\n",(0,l.kt)("strong",{parentName:"p"},"Type"),": number",(0,l.kt)("br",null)),(0,l.kt)("p",null,"The release velocity of the note as an integer between 0 and 1."),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"methods"},"Methods"),(0,l.kt)("h3",{id:"getOffsetNumber"},(0,l.kt)("inlineCode",{parentName:"h3"},".getOffsetNumber(...)")),(0,l.kt)("p",null,"Returns a MIDI note number offset by octave and/or semitone. If the calculated value is less\nthan 0, 0 will be returned. If the calculated value is more than 127, 127 will be returned. If\nan invalid value is supplied, 0 will be used."),(0,l.kt)("p",null,"  ",(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Signature: ",(0,l.kt)("inlineCode",{parentName:"p"},"getOffsetNumber([octaveOffset], [semitoneOffset])"))),(0,l.kt)("div",{class:"parameter-table-container"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type(s)"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[",(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"octaveOffset")),"]"),(0,l.kt)("td",{parentName:"tr",align:null},"number",(0,l.kt)("br",null)),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"An integer to offset the note number by octave.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[",(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"semitoneOffset")),"]"),(0,l.kt)("td",{parentName:"tr",align:null},"number",(0,l.kt)("br",null)),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"An integer to offset the note number by semitone."))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Return Value")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Returns: ",(0,l.kt)("inlineCode",{parentName:"p"},"number"),(0,l.kt)("br",null))),(0,l.kt)("p",null,"An integer between 0 and 127"))}k.isMDXComponent=!0}}]);