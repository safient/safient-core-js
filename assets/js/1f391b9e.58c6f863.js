"use strict";(self.webpackChunkcore_js_docs=self.webpackChunkcore_js_docs||[]).push([[85,201],{7979:function(e,n,t){t.r(n),t.d(n,{default:function(){return m}});var a=t(7294),l=t(6010),r=t(2699),c=t(3905),i=t(6845),o=t(7588),s=t(3773),u="mdxPageWrapper_3qD3";var m=function(e){var n=e.content,t=n.frontMatter,m=n.metadata,d=t.title,f=t.description,v=t.wrapperClassName,h=t.hide_table_of_contents,g=m.permalink;return a.createElement(r.Z,{title:d,description:f,permalink:g,wrapperClassName:null!=v?v:s.kM.wrapper.mdxPages,pageClassName:s.kM.page.mdxPage},a.createElement("main",{className:"container container--fluid margin-vert--lg"},a.createElement("div",{className:(0,l.Z)("row",u)},a.createElement("div",{className:(0,l.Z)("col",!h&&"col--8")},a.createElement(c.Zo,{components:i.Z},a.createElement(n,null))),!h&&n.toc&&a.createElement("div",{className:"col col--2"},a.createElement(o.Z,{toc:n.toc,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level})))))}},7588:function(e,n,t){t.d(n,{Z:function(){return u}});var a=t(7462),l=t(3366),r=t(7294),c=t(6010),i=t(5002),o="tableOfContents_35-E",s=["className"];var u=function(e){var n=e.className,t=(0,l.Z)(e,s);return r.createElement("div",{className:(0,c.Z)(o,"thin-scrollbar",n)},r.createElement(i.Z,(0,a.Z)({},t,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},5002:function(e,n,t){t.d(n,{Z:function(){return s}});var a=t(7462),l=t(3366),r=t(7294),c=t(3773),i=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function o(e){var n=e.toc,t=e.className,a=e.linkClassName,l=e.isChild;return n.length?r.createElement("ul",{className:l?void 0:t},n.map((function(e){return r.createElement("li",{key:e.id},r.createElement("a",{href:"#"+e.id,className:null!=a?a:void 0,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(o,{isChild:!0,toc:e.children,className:t,linkClassName:a}))}))):null}function s(e){var n=e.toc,t=e.className,s=void 0===t?"table-of-contents table-of-contents__left-border":t,u=e.linkClassName,m=void 0===u?"table-of-contents__link":u,d=e.linkActiveClassName,f=void 0===d?void 0:d,v=e.minHeadingLevel,h=e.maxHeadingLevel,g=(0,l.Z)(e,i),C=(0,c.LU)(),k=null!=v?v:C.tableOfContents.minHeadingLevel,p=null!=h?h:C.tableOfContents.maxHeadingLevel,b=(0,c.DA)({toc:n,minHeadingLevel:k,maxHeadingLevel:p}),N=(0,r.useMemo)((function(){if(m&&f)return{linkClassName:m,linkActiveClassName:f,minHeadingLevel:k,maxHeadingLevel:p}}),[m,f,k,p]);return(0,c.Si)(N),r.createElement(o,(0,a.Z)({toc:b,className:s,linkClassName:m},g))}},6979:function(e,n,t){var a=t(7462),l=t(3366),r=t(7294),c=t(3935),i=t(2263),o=t(5977),s=t(4996),u=t(6742),m=t(9105),d=t(6397),f=t(7052),v=t(6747),h=t(5613),g=t(4973),C=["contextualSearch"],k=null;function p(e){var n=e.hit,t=e.children;return r.createElement(u.Z,{to:n.url},t)}function b(e){var n=e.state,t=e.onClose,a=(0,d.Z)().generateSearchPageLink;return r.createElement(u.Z,{to:a(n.query),onClick:t},"See all ",n.context.nbHits," results")}function N(e){var n,u,d=e.contextualSearch,N=(0,l.Z)(e,C),E=(0,i.Z)().siteMetadata,Z=(0,h.Z)(),_=null!=(n=null==(u=N.searchParameters)?void 0:u.facetFilters)?n:[],L=d?[].concat(Z,_):_,x=Object.assign({},N.searchParameters,{facetFilters:L}),H=(0,s.C)().withBaseUrl,S=(0,o.k6)(),P=(0,r.useRef)(null),A=(0,r.useRef)(null),w=(0,r.useState)(!1),M=w[0],O=w[1],y=(0,r.useState)(null),I=y[0],R=y[1],F=(0,r.useCallback)((function(){return k?Promise.resolve():Promise.all([t.e(300).then(t.bind(t,4300)),Promise.all([t.e(532),t.e(945)]).then(t.bind(t,6945)),Promise.all([t.e(532),t.e(846)]).then(t.bind(t,9846))]).then((function(e){var n=e[0].DocSearchModal;k=n}))}),[]),j=(0,r.useCallback)((function(){F().then((function(){P.current=document.createElement("div"),document.body.insertBefore(P.current,document.body.firstChild),O(!0)}))}),[F,O]),B=(0,r.useCallback)((function(){O(!1),P.current.remove()}),[O]),D=(0,r.useCallback)((function(e){F().then((function(){O(!0),R(e.key)}))}),[F,O,R]),T=(0,r.useRef)({navigate:function(e){var n=e.itemUrl;S.push(n)}}).current,U=(0,r.useRef)((function(e){return e.map((function(e){var n=document.createElement("a");return n.href=e.url,Object.assign({},e,{url:H(""+n.pathname+n.hash)})}))})).current,q=(0,r.useMemo)((function(){return function(e){return r.createElement(b,(0,a.Z)({},e,{onClose:B}))}}),[B]),V=(0,r.useCallback)((function(e){return e.addAlgoliaAgent("docusaurus",E.docusaurusVersion),e}),[E.docusaurusVersion]);(0,f.D)({isOpen:M,onOpen:j,onClose:B,onInput:D,searchButtonRef:A});var Y=(0,g.I)({id:"theme.SearchBar.label",message:"Search",description:"The ARIA label and placeholder for search button"});return r.createElement(r.Fragment,null,r.createElement(m.Z,null,r.createElement("link",{rel:"preconnect",href:"https://"+N.appId+"-dsn.algolia.net",crossOrigin:"anonymous"})),r.createElement(v.a,{onTouchStart:F,onFocus:F,onMouseOver:F,onClick:j,ref:A,translations:{buttonText:Y,buttonAriaLabel:Y}}),M&&(0,c.createPortal)(r.createElement(k,(0,a.Z)({onClose:B,initialScrollY:window.scrollY,initialQuery:I,navigator:T,transformItems:U,hitComponent:p,resultsFooterComponent:q,transformSearchClient:V},N,{searchParameters:x})),P.current))}n.Z=function(){var e=(0,i.Z)().siteConfig;return r.createElement(N,e.themeConfig.algolia)}}}]);