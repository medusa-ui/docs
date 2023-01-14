"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[93],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=i,f=p["".concat(c,".").concat(d)]||p[d]||y[d]||o;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4420:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(7462),i=(n(7294),n(3905));const o={sidebar_position:5},a="Security",l={unversionedId:"internals/security",id:"internals/security",title:"Security",description:"As a micro frontend framework that mainly relies on Spring Security for its security functionality,",source:"@site/docs/internals/security.md",sourceDirName:"internals",slug:"/internals/security",permalink:"/documentation/docs/internals/security",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Hydra flow",permalink:"/documentation/docs/internals/hydra-flow"},next:{title:"TODO",permalink:"/documentation/docs/internals/todo"}},c={},u=[],s={toc:u};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"security"},"Security"),(0,i.kt)("p",null,"As a micro frontend framework that mainly relies on Spring Security for its security functionality,\nyou can deploy multiple Medusa instances internally and have Hydra be the gateway. "),(0,i.kt)("p",null,"As a gateway it will combine all micro frontends into a single ui experience.\nBy doing so, you only have to log in once into Hydra and you will be logged into whatever Medusa instance you hit."),(0,i.kt)("p",null,"Medusa has some preconfigured security features that can be easily set up by using a default base of security configuration."),(0,i.kt)("p",null,"To set up security rules on the Medusa level using a default base, you can use something like the following code snippet:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'@Bean\npublic SecurityWebFilterChain securityWebFilterChain(ServerHttpSecurity http) {\n    return MedusaSecurity.defaultSecurity(http)\n        .authorizeExchange()\n        .pathMatchers("/secure/**").authenticated()\n        .pathMatchers("/secure/special-role/**").hasRole("SPECIAL")\n        .anyExchange().permitAll()\n        .and().build();\n}\n')),(0,i.kt)("p",null,"This will forward you to a form login if you hit an authenticated-only endpoint."),(0,i.kt)("p",null,"If Hydra is running and connected, and you access said endpoint via Hydra, the forward to login will be to Hydra's login form. "),(0,i.kt)("p",null,"This login form can be the default provided one, or you can add a custom one as 'templates/login.html' and it will use that one instead. It uses plain spring security. "),(0,i.kt)("p",null,"Once logged into the Hydra login form, a JWT token cookie will be set. This token can be interpreted by any Medusa instance you're connected to. It will automatically log you in."))}p.isMDXComponent=!0}}]);