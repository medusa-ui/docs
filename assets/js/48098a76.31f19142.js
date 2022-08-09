"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2095],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=c(n),d=i,m=f["".concat(l,".").concat(d)]||f[d]||p[d]||a;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9151:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const a={sidebar_position:1},o="At startup initialization",s={unversionedId:"internals/at-startup-initialization",id:"internals/at-startup-initialization",title:"At startup initialization",description:"Before any requests are served, the app goes through its startup initialization.",source:"@site/docs/internals/at-startup-initialization.md",sourceDirName:"internals",slug:"/internals/at-startup-initialization",permalink:"/documentation/docs/internals/at-startup-initialization",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Internals",permalink:"/documentation/docs/category/internals"},next:{title:"Internal flow of rendering",permalink:"/documentation/docs/internals/medusa-flow"}},l={},c=[],u={toc:c};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"at-startup-initialization"},"At startup initialization"),(0,i.kt)("p",null,"Before any requests are served, the app goes through its startup initialization."),(0,i.kt)("p",null,"This is a sequence of classes that get executed at the BeanPostProcessor#postProcessBeforeInitialization level."),(0,i.kt)("p",null,"They are used for anything that is build-dependent. As such, things like determining which routes/controllers are\npossible is not something that happens at runtime."),(0,i.kt)("p",null,"It all starts with the RootDetector. This is the class that kicks off any initialization. That's all it does.\nEffectively this kicks off before each bean is initialized."),(0,i.kt)("p",null,"In addition to routes, all the HTML files are also scanned for Refs and Fragments, so it is known up-front which fragments are relevant, saving time during rendering."),(0,i.kt)("p",null,"We also scan all methods in controller classes for a Session object. If a Session object is present, we remember if the object is at the start or end of the method, so we can autowire it in ourselves."))}p.isMDXComponent=!0}}]);