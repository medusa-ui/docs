"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[652],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),h=c(n),u=a,m=h["".concat(l,".").concat(u)]||h[u]||p[u]||o;return n?r.createElement(m,s(s({ref:t},d),{},{components:n})):r.createElement(m,s({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[h]="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6125:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:2},s="Internal flow of rendering",i={unversionedId:"internals/medusa-flow",id:"internals/medusa-flow",title:"Internal flow of rendering",description:"As part of Medusa v1.0.0, these are the steps the code takes to render a page. Relevant to note is that at this point, at-startup initialization has completed.",source:"@site/docs/internals/medusa-flow.md",sourceDirName:"internals",slug:"/internals/medusa-flow",permalink:"/documentation/docs/internals/medusa-flow",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"At startup initialization",permalink:"/documentation/docs/internals/at-startup-initialization"},next:{title:"Components",permalink:"/documentation/docs/internals/components"}},l={},c=[{value:"Initial render",id:"initial-render",level:2},{value:"Subsequence actions",id:"subsequence-actions",level:2},{value:"Server-to-client actions",id:"server-to-client-actions",level:2}],d={toc:c};function h(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"internal-flow-of-rendering"},"Internal flow of rendering"),(0,a.kt)("p",null,"As part of Medusa v1.0.0, these are the steps the code takes to render a page. Relevant to note is that at this point, ",(0,a.kt)("a",{parentName:"p",href:"/documentation/docs/internals/at-startup-initialization"},"at-startup initialization")," has completed. "),(0,a.kt)("p",null,"This does not account for Hydra, which is described in the ",(0,a.kt)("a",{parentName:"p",href:"/documentation/docs/internals/hydra-flow"},"Hydra flow"),". and describes its flow at more of an architectural high-level point. "),(0,a.kt)("h2",{id:"initial-render"},"Initial render"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"/GET browser -> RouteSetup -> RequestStreamHandler -> Renderer")),(0,a.kt)("p",null,"We start with a new request being made in the browser to our server. This request is picked up by the ",(0,a.kt)("a",{parentName:"p",href:"/documentation/docs/internals/components#req-handler"},"request handler"),"."),(0,a.kt)("p",null,"Here, we find the relevant controller. Using the controller, we find the combination of referenced raw Thymeleaf HTML and initial parameters. This also starts a ",(0,a.kt)("a",{parentName:"p",href:"/documentation/docs/internals/components#session"},"session"),"."),(0,a.kt)("p",null,"Said combination is used to ",(0,a.kt)("a",{parentName:"p",href:"/documentation/docs/internals/components#renderer"},"render")," the page. Within the page, we establish an RSocket channel. "),(0,a.kt)("p",null,"From that point on, any interaction with the page is done through the RSocket channel - at least until a page change, which counts as a new request.  "),(0,a.kt)("h2",{id:"subsequence-actions"},"Subsequence actions"),(0,a.kt)("p",null,"As an action happens, we want to trigger a controller method server-side. Each action triggered through a Medusa tag,\nwill be triggering a Javascript function which builds up an event and sends it through the RSocket channel."),(0,a.kt)("p",null,"The socket is set up with ",(0,a.kt)("a",{parentName:"p",href:"/documentation/docs/internals/components#socket-handler"},"SocketHandler"),". "),(0,a.kt)("p",null,"Initial connection is handled via '/socket' as defined by the default spring.rsocket.server.mapping-path."),(0,a.kt)("p",null,"The socket's channel is then opened on 'event-emitter/{hash}/{sessionId}'. "),(0,a.kt)("p",null,"The hash is the key for the route, so it allows a quick lookup of what route is accessed. The sessionId is a generated ID that corresponds with a ",(0,a.kt)("a",{parentName:"p",href:"/documentation/docs/internals/components#session"},"session")," object."),(0,a.kt)("p",null,"The SocketHandler works as a controller, connecting the flow of the action. Once the route and session are retrieved, we pass along the action to the ",(0,a.kt)("a",{parentName:"p",href:"/documentation/docs/internals/components#action-handler"},"Action Handler")," component."),(0,a.kt)("p",null,"The goal of the action handler is simply to execute the action. This set of Attributes can be merged with the last used attributes from the session, to then trigger a ",(0,a.kt)("a",{parentName:"p",href:"/documentation/docs/internals/components#renderer"},"re-render")," of the template."),(0,a.kt)("p",null,"Not all attributes are used for rendering - some are pass-through. Those are attributes that do not get used for rendering purposes, but instead pass through all the way down to the JS, where they are interpreted. These should be rare; Currently there only exists the 'forwarding' attribute that acts like this.\nThose pass-through attributes get filtered out first and gets merged in later. This works the same way for the SocketHandler as it does for the ServerToClient setup."),(0,a.kt)("p",null,"This results in a new HTML. "),(0,a.kt)("p",null,"We then route this HTML though the ",(0,a.kt)("a",{parentName:"p",href:"/documentation/docs/internals/components#diff-engine"},"Diff Engine"),", together with the last ",(0,a.kt)("a",{parentName:"p",href:"/documentation/docs/internals/components#renderer"},"rendered")," HTML from the ",(0,a.kt)("a",{parentName:"p",href:"/documentation/docs/internals/components#session"},"session"),"."),(0,a.kt)("p",null,"We then send the diffs back through the RSocket Channel. These diffs contain the changed HTML, the action (add, delete or edit a node) and the relevant xpath to the changing DOM node."),(0,a.kt)("p",null,"In the JS we then apply the diff in the browser via ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/patrick-steele-idem/morphdom"},"morphdom")," (in case of an edit, in case of addition / delete, we can simply add or remove these nodes)."),(0,a.kt)("h2",{id:"server-to-client-actions"},"Server-to-client actions"),(0,a.kt)("p",null,"Communication in Medusa is bidirectional, meaning changes can happen not only due to actions from the browser, but also from the server."),(0,a.kt)("p",null,"Key to this is access to the ",(0,a.kt)("a",{parentName:"p",href:"/documentation/docs/internals/components#-session"},"session")," a user has. Each session can get tags assigned to it."),(0,a.kt)("p",null,"Developers can also add tags to sessions programmatically. "),(0,a.kt)("p",null,"Some such tags are also automatically added to the sessions, like the current page they are on and the kind of roles they have."),(0,a.kt)("p",null,"With the tags, these sessions can then be queried. With a list of sessions, these can then be used to send events."))}h.isMDXComponent=!0}}]);