"use strict";(self.webpackChunkcore_js_docs=self.webpackChunkcore_js_docs||[]).push([[32],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),f=a,g=d["".concat(c,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2979:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={id:"core-getting-started",title:"Safient Core",sidebar_label:"Getting started",custom_edit_url:null},c=void 0,s={unversionedId:"core-getting-started",id:"core-getting-started",isDocsHomePage:!1,title:"Safient Core",description:"JavaScript SDK to manage and interact with the safes on Safient protocol.",source:"@site/docs/core-getting-started.md",sourceDirName:".",slug:"/core-getting-started",permalink:"/core-getting-started",editUrl:null,tags:[],version:"current",frontMatter:{id:"core-getting-started",title:"Safient Core",sidebar_label:"Getting started",custom_edit_url:null},sidebar:"docs",previous:{title:"Overview",permalink:"/dev-overview"},next:{title:"SafientCore",permalink:"/api/classes/SafientCore"}},u=[{value:"Getting started",id:"getting-started",children:[],level:2},{value:"Local installation",id:"local-installation",children:[],level:2},{value:"Running Tests",id:"running-tests",children:[],level:2}],p={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"JavaScript SDK to manage and interact with the safes on Safient protocol."),(0,i.kt)("h2",{id:"getting-started"},"Getting started"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"  npm i @safient/core\n")),(0,i.kt)("h2",{id:"local-installation"},"Local installation"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"  git clone https://github.com/safient/safient-core.git\n  cd safient-core\n  npm install\n  npm run build\n")),(0,i.kt)("h2",{id:"running-tests"},"Running Tests"),(0,i.kt)("p",null,"Create an ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," file in the ",(0,i.kt)("inlineCode",{parentName:"p"},"middleware")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"root")," folder with ",(0,i.kt)("inlineCode",{parentName:"p"},"USER_API_KEY"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"USER_API_SECRET")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"DB_FILE_NAME='./thread.config'")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"  cd ..\n  npm run test\n")))}d.isMDXComponent=!0}}]);