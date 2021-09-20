"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1684],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),p=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),k=p(n),m=r,s=k["".concat(u,".").concat(m)]||k[m]||c[m]||l;return n?a.createElement(s,o(o({ref:t},d),{},{components:n})):a.createElement(s,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=k;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},8240:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return d},default:function(){return k}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),o=["components"],i={},u=void 0,p={unversionedId:"classes/Note",id:"classes/Note",isDocsHomePage:!1,title:"Note",description:'The Note class represents a single musical note such as "D3", "G#4", "F-1", "Gb7", etc.',source:"@site/api/classes/Note.md",sourceDirName:"classes",slug:"/classes/Note",permalink:"/webmidi/api/classes/Note",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"InputChannel",permalink:"/webmidi/api/classes/InputChannel"},next:{title:"Output",permalink:"/webmidi/api/classes/Output"}},d=[{value:"<code>new Note(value, [options])</code>",id:"new-notevalue-options",children:[]},{value:"<code>note.identifier</code> : <code>string</code>",id:"noteidentifier--string",children:[]},{value:"<code>note.name</code> : <code>string</code>",id:"notename--string",children:[]},{value:"<code>note.accidental</code> : <code>string</code>",id:"noteaccidental--string",children:[]},{value:"<code>note.octave</code> : <code>number</code>",id:"noteoctave--number",children:[]},{value:"<code>note.duration</code> : <code>number</code>",id:"noteduration--number",children:[]},{value:"<code>note.attack</code> : <code>number</code>",id:"noteattack--number",children:[]},{value:"<code>note.release</code> : <code>number</code>",id:"noterelease--number",children:[]},{value:"<code>note.rawAttack</code> : <code>number</code>",id:"noterawattack--number",children:[]},{value:"<code>note.rawRelease</code> : <code>number</code>",id:"noterawrelease--number",children:[]},{value:"<code>note.number</code> : <code>number</code>",id:"notenumber--number",children:[]},{value:"<code>note.getOffsetNumber(offset)</code> \u21d2 <code>number</code>",id:"notegetoffsetnumberoffset--number",children:[]}],c={toc:d};function k(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("a",{name:"Note"}),(0,l.kt)("h1",{id:"note"},"Note"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"Note")," class represents a single musical note such as ",(0,l.kt)("inlineCode",{parentName:"p"},'"D3"'),", ",(0,l.kt)("inlineCode",{parentName:"p"},'"G#4"'),", ",(0,l.kt)("inlineCode",{parentName:"p"},'"F-1"'),", ",(0,l.kt)("inlineCode",{parentName:"p"},'"Gb7"'),", etc."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Note")," objects can be played back on a single channel by calling\n",(0,l.kt)("a",{parentName:"p",href:"OutputChannel#playNote"},"OutputChannel.playNote()"),". A note can also be played back on the\nmultiple channels of an output by using ",(0,l.kt)("a",{parentName:"p",href:"Output#playNote"},"Output.playNote()"),"."),(0,l.kt)("p",null,"The note has attack and release velocities set at 0.5 by default. These can be changed by passing\nin the appropriate option. It is also possible to set a system-wide default for attack and\nrelease velocities by using the ",(0,l.kt)("inlineCode",{parentName:"p"},"WebMidi.defaults")," property."),(0,l.kt)("p",null,"The note may have a duration. If it does, playback will be stopped when the duration has elapsed\nby automatically sending a ",(0,l.kt)("strong",{parentName:"p"},"noteoff")," event. By default, the duration is set to ",(0,l.kt)("inlineCode",{parentName:"p"},"Infinity"),". In\nthis case, it will never stop playing unless explicitly stopped by calling a method such as\n",(0,l.kt)("a",{parentName:"p",href:"OutputChannel#stopNote"},"OutputChannel.stopNote()"),",\n",(0,l.kt)("a",{parentName:"p",href:"Output#stopNote"},"Output.stopNote()")," or similar."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Since"),": 3.0.0  "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"#Note"},"Note")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"#new_Note_new"},(0,l.kt)("inlineCode",{parentName:"a"},"new Note(value, [options])")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"#Note+identifier"},(0,l.kt)("inlineCode",{parentName:"a"},".identifier"))," : ",(0,l.kt)("code",null,"string"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"#Note+name"},(0,l.kt)("inlineCode",{parentName:"a"},".name"))," : ",(0,l.kt)("code",null,"string"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"#Note+accidental"},(0,l.kt)("inlineCode",{parentName:"a"},".accidental"))," : ",(0,l.kt)("code",null,"string"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"#Note+octave"},(0,l.kt)("inlineCode",{parentName:"a"},".octave"))," : ",(0,l.kt)("code",null,"number"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"#Note+duration"},(0,l.kt)("inlineCode",{parentName:"a"},".duration"))," : ",(0,l.kt)("code",null,"number"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"#Note+attack"},(0,l.kt)("inlineCode",{parentName:"a"},".attack"))," : ",(0,l.kt)("code",null,"number"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"#Note+release"},(0,l.kt)("inlineCode",{parentName:"a"},".release"))," : ",(0,l.kt)("code",null,"number"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"#Note+rawAttack"},(0,l.kt)("inlineCode",{parentName:"a"},".rawAttack"))," : ",(0,l.kt)("code",null,"number"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"#Note+rawRelease"},(0,l.kt)("inlineCode",{parentName:"a"},".rawRelease"))," : ",(0,l.kt)("code",null,"number"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"#Note+number"},(0,l.kt)("inlineCode",{parentName:"a"},".number"))," : ",(0,l.kt)("code",null,"number"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"#Note+getOffsetNumber"},(0,l.kt)("inlineCode",{parentName:"a"},".getOffsetNumber(offset)"))," \u21d2 ",(0,l.kt)("code",null,"number")))))),(0,l.kt)("hr",null),(0,l.kt)("a",{name:"new_Note_new"}),(0,l.kt)("h2",{id:"new-notevalue-options"},(0,l.kt)("inlineCode",{parentName:"h2"},"new Note(value, [options])")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Throws"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("code",null,"Error")," Invalid note identifier"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("code",null,"RangeError")," Invalid name value"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("code",null,"RangeError")," Invalid accidental value"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("code",null,"RangeError")," Invalid octave value"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("code",null,"RangeError")," Invalid duration value"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("code",null,"RangeError")," Invalid attack value"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("code",null,"RangeError")," Invalid release value")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"value"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"string")," ","|"," ",(0,l.kt)("code",null,"number")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"The value used to create the note. If an identifier string is used, it must be the note letter (with optional accidental) followed by the octave (",(0,l.kt)("inlineCode",{parentName:"td"},'"C3"'),", ",(0,l.kt)("inlineCode",{parentName:"td"},'"G#4"'),", ",(0,l.kt)("inlineCode",{parentName:"td"},'"F-1"'),", ",(0,l.kt)("inlineCode",{parentName:"td"},'"Db7"'),", etc.). If a number is used, it must be an integer between 0 and 127. In this case, middle C is considered to be C4 (note number 60).")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[options]"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"Object")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"{}")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[options.duration]"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"number")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"Infinity")),(0,l.kt)("td",{parentName:"tr",align:null},"The number of milliseconds before the note should be explicitly stopped.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[options.attack]"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"number")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"0.5")),(0,l.kt)("td",{parentName:"tr",align:null},"The note's attack velocity as a float between 0 and 1. If you wish to use an integer between 0 and 127, use the ",(0,l.kt)("inlineCode",{parentName:"td"},"rawAttack")," option instead. If both ",(0,l.kt)("inlineCode",{parentName:"td"},"attack")," and ",(0,l.kt)("inlineCode",{parentName:"td"},"rawAttack")," are specified, the latter has precedence.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[options.release]"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"number")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"0.5")),(0,l.kt)("td",{parentName:"tr",align:null},"The note's release velocity as a float between 0 and 1. If you wish to use an integer between 0 and 127, use the ",(0,l.kt)("inlineCode",{parentName:"td"},"rawRelease")," option instead. If both ",(0,l.kt)("inlineCode",{parentName:"td"},"release")," and ",(0,l.kt)("inlineCode",{parentName:"td"},"rawRelease")," are specified, the latter has precedence.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[options.rawAttack]"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"number")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"64")),(0,l.kt)("td",{parentName:"tr",align:null},"The note's attack velocity as an integer between 0 and 127. If you wish to use a float between 0 and 1, use the ",(0,l.kt)("inlineCode",{parentName:"td"},"release")," option instead. If both ",(0,l.kt)("inlineCode",{parentName:"td"},"attack")," and ",(0,l.kt)("inlineCode",{parentName:"td"},"rawAttack")," are specified, the latter has precedence.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[options.rawRelease]"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"number")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"64")),(0,l.kt)("td",{parentName:"tr",align:null},"The note's release velocity as an integer between 0 and 127. If you wish to use a float between 0 and 1, use the ",(0,l.kt)("inlineCode",{parentName:"td"},"release")," option instead. If both ",(0,l.kt)("inlineCode",{parentName:"td"},"release")," and ",(0,l.kt)("inlineCode",{parentName:"td"},"rawRelease")," are specified, the latter has precedence.")))),(0,l.kt)("hr",null),(0,l.kt)("a",{name:"Note+identifier"}),(0,l.kt)("h2",{id:"noteidentifier--string"},(0,l.kt)("inlineCode",{parentName:"h2"},"note.identifier")," : ",(0,l.kt)("code",null,"string")),(0,l.kt)("p",null,"The name, optional accidental and octave of the note, as a string."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Since"),": 3.0.0  "),(0,l.kt)("hr",null),(0,l.kt)("a",{name:"Note+name"}),(0,l.kt)("h2",{id:"notename--string"},(0,l.kt)("inlineCode",{parentName:"h2"},"note.name")," : ",(0,l.kt)("code",null,"string")),(0,l.kt)("p",null,"The name (letter) of the note"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Since"),": 3.0.0  "),(0,l.kt)("hr",null),(0,l.kt)("a",{name:"Note+accidental"}),(0,l.kt)("h2",{id:"noteaccidental--string"},(0,l.kt)("inlineCode",{parentName:"h2"},"note.accidental")," : ",(0,l.kt)("code",null,"string")),(0,l.kt)("p",null,"The accidental (#, ##, b or bb) of the note"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Since"),": 3.0.0  "),(0,l.kt)("hr",null),(0,l.kt)("a",{name:"Note+octave"}),(0,l.kt)("h2",{id:"noteoctave--number"},(0,l.kt)("inlineCode",{parentName:"h2"},"note.octave")," : ",(0,l.kt)("code",null,"number")),(0,l.kt)("p",null,"The octave of the note"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Since"),": 3.0.0  "),(0,l.kt)("hr",null),(0,l.kt)("a",{name:"Note+duration"}),(0,l.kt)("h2",{id:"noteduration--number"},(0,l.kt)("inlineCode",{parentName:"h2"},"note.duration")," : ",(0,l.kt)("code",null,"number")),(0,l.kt)("p",null,"The duration of the note as a positive decimal number representing the number of milliseconds\nthat the note should play for."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Since"),": 3.0.0  "),(0,l.kt)("hr",null),(0,l.kt)("a",{name:"Note+attack"}),(0,l.kt)("h2",{id:"noteattack--number"},(0,l.kt)("inlineCode",{parentName:"h2"},"note.attack")," : ",(0,l.kt)("code",null,"number")),(0,l.kt)("p",null,"The attack velocity of the note as an integer between 0 and 127."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Since"),": 3.0.0  "),(0,l.kt)("hr",null),(0,l.kt)("a",{name:"Note+release"}),(0,l.kt)("h2",{id:"noterelease--number"},(0,l.kt)("inlineCode",{parentName:"h2"},"note.release")," : ",(0,l.kt)("code",null,"number")),(0,l.kt)("p",null,"The release velocity of the note as an integer between 0 and 127."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Since"),": 3.0.0  "),(0,l.kt)("hr",null),(0,l.kt)("a",{name:"Note+rawAttack"}),(0,l.kt)("h2",{id:"noterawattack--number"},(0,l.kt)("inlineCode",{parentName:"h2"},"note.rawAttack")," : ",(0,l.kt)("code",null,"number")),(0,l.kt)("p",null,"The attack velocity of the note as a positive integer between 0 and 127."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Since"),": 3.0.0  "),(0,l.kt)("hr",null),(0,l.kt)("a",{name:"Note+rawRelease"}),(0,l.kt)("h2",{id:"noterawrelease--number"},(0,l.kt)("inlineCode",{parentName:"h2"},"note.rawRelease")," : ",(0,l.kt)("code",null,"number")),(0,l.kt)("p",null,"The release velocity of the note as a positive integer between 0 and 127."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Since"),": 3.0.0  "),(0,l.kt)("hr",null),(0,l.kt)("a",{name:"Note+number"}),(0,l.kt)("h2",{id:"notenumber--number"},(0,l.kt)("inlineCode",{parentName:"h2"},"note.number")," : ",(0,l.kt)("code",null,"number")),(0,l.kt)("p",null,"The MIDI number of the note. This number is derived from the note identifier using C4 as a\nreference for middle C."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Since"),": 3.0.0  "),(0,l.kt)("hr",null),(0,l.kt)("a",{name:"Note+getOffsetNumber"}),(0,l.kt)("h2",{id:"notegetoffsetnumberoffset--number"},(0,l.kt)("inlineCode",{parentName:"h2"},"note.getOffsetNumber(offset)")," \u21d2 ",(0,l.kt)("code",null,"number")),(0,l.kt)("p",null,"Returns a MIDI note number offset by the integer specified in the parameter. If the calculated\nvalue is less than 0, 0 will be returned. If the calculated value is more than 127, 127 will be\nreturned. If an invalid value is supplied, 0 will be used."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),": ",(0,l.kt)("code",null,"number")," - An integer between 0 and 127  "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"offset")))),(0,l.kt)("hr",null))}k.isMDXComponent=!0}}]);