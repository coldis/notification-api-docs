(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[689],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=u(n),d=o,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(f,a(a({ref:t},l),{},{components:n})):r.createElement(f,a({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9546:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return p}});var r=n(2122),o=n(9756),i=(n(7294),n(3905)),a=["components"],c={sidebar_position:2},s={unversionedId:"guides/sms-call",id:"guides/sms-call",isDocsHomePage:!1,title:"SMS/Call Notifications",description:"Origin Phone Number",source:"@site/docs/guides/sms-call.md",sourceDirName:"guides",slug:"/guides/sms-call",permalink:"/docs/guides/sms-call",editUrl:"https://github.com/notificationapi-com/docs/edit/main/docs/guides/sms-call.md",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Display In-App Notifications",permalink:"/docs/guides/display-inapp-notifications"},next:{title:"Server SDKs (Back-end)",permalink:"/docs/reference/server"}},u=[{value:"Origin Phone Number",id:"origin-phone-number",children:[]},{value:"Maximum Length",id:"maximum-length",children:[]}],l={toc:u};function p(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"origin-phone-number"},"Origin Phone Number"),(0,i.kt)("p",null,"SMS and phone call notifications from ",(0,i.kt)("strong",{parentName:"p"},"free accounts")," originate from a shared phone number: +16505501770. We do not guarantee that the free account phone number stays the same."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Paid accounts")," have their own dedicated phone number from the +1 (650) area code."),(0,i.kt)("h2",{id:"maximum-length"},"Maximum Length"),(0,i.kt)("p",null,"SMS messages and phone call scripts have a maximum length of 800 characters, including the real merge tag values."))}p.isMDXComponent=!0}}]);