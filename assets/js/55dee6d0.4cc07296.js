(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[958],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return f}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=i.createContext({}),l=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),f=a,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||r;return n?i.createElement(m,o(o({ref:t},u),{},{components:n})):i.createElement(m,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<r;l++)o[l]=n[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){"use strict";var i=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return i.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},1395:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var i=n(7294),a=n(944),r=n(6010),o="tabItem_1uMI",s="tabItemActive_2DSg";var c=37,l=39;var u=function(e){var t=e.lazy,n=e.block,u=e.defaultValue,p=e.values,d=e.groupId,f=e.className,m=(0,a.Z)(),v=m.tabGroupChoices,h=m.setTabGroupChoices,k=(0,i.useState)(u),b=k[0],y=k[1],g=i.Children.toArray(e.children),N=[];if(null!=d){var T=v[d];null!=T&&T!==b&&p.some((function(e){return e.value===T}))&&y(T)}var w=function(e){var t=e.currentTarget,n=N.indexOf(t),i=p[n].value;y(i),null!=d&&(h(d,i),setTimeout((function(){var e,n,i,a,r,o,c,l;(e=t.getBoundingClientRect(),n=e.top,i=e.left,a=e.bottom,r=e.right,o=window,c=o.innerHeight,l=o.innerWidth,n>=0&&r<=l&&a<=c&&i>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},E=function(e){var t,n;switch(e.keyCode){case l:var i=N.indexOf(e.target)+1;n=N[i]||N[0];break;case c:var a=N.indexOf(e.target)-1;n=N[a]||N[N.length-1]}null==(t=n)||t.focus()};return i.createElement("div",{className:"tabs-container"},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},f)},p.map((function(e){var t=e.value,n=e.label;return i.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,r.Z)("tabs__item",o,{"tabs__item--active":b===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:E,onFocus:w,onClick:w},n)}))),t?(0,i.cloneElement)(g.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):i.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==b})}))))}},9443:function(e,t,n){"use strict";var i=(0,n(7294).createContext)(void 0);t.Z=i},944:function(e,t,n){"use strict";var i=n(7294),a=n(9443);t.Z=function(){var e=(0,i.useContext)(a.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},2717:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return f}});var i=n(2122),a=n(9756),r=(n(7294),n(3905)),o=n(1395),s=n(8215),c=["components"],l={sidebar_position:2},u={unversionedId:"quick-start/send-the-notification",id:"quick-start/send-the-notification",isDocsHomePage:!1,title:"Send the Notification",description:"Prerequisite",source:"@site/docs/quick-start/send-the-notification.md",sourceDirName:"quick-start",slug:"/quick-start/send-the-notification",permalink:"/docs/quick-start/send-the-notification",editUrl:"https://github.com/notificationapi-com/docs/edit/main/docs/quick-start/send-the-notification.md",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Setup a Notification",permalink:"/docs/quick-start/setup-the-notification"},next:{title:"Display In-App Notifications",permalink:"/docs/guides/display-inapp-notifications"}},p=[{value:"Prerequisite",id:"prerequisite",children:[]},{value:"1. Install back-end SDK",id:"1-install-back-end-sdk",children:[]},{value:"2. Send",id:"2-send",children:[]},{value:"That&#39;s it?",id:"thats-it",children:[]}],d={toc:p};function f(e){var t=e.components,n=(0,a.Z)(e,c);return(0,r.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"prerequisite"},"Prerequisite"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"./setup-the-notification"},"NotificationAPI account and Notification setup")),(0,r.kt)("h2",{id:"1-install-back-end-sdk"},"1. Install back-end SDK"),(0,r.kt)("p",null,"Notifications are triggered from your back-end. So install one of our back-end SDKs:"),(0,r.kt)(o.Z,{groupId:"backend-language",defaultValue:"js",values:[{label:"Node.js",value:"js"},{label:"Python",value:"py"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install notificationapi-node-server-sdk\n// or using yarn:\nyarn add notificationapi-node-server-sdk\n"))),(0,r.kt)(s.Z,{value:"py",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pip install notificationapi_python_server_sdk\n")))),(0,r.kt)("h2",{id:"2-send"},"2. Send"),(0,r.kt)("p",null,'The example below sends the "New Comment Notification" to the test user:'),(0,r.kt)(o.Z,{groupId:"backend-language",defaultValue:"js",values:[{label:"Node.js",value:"js"},{label:"Python",value:"py"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// import/require:\nimport notificationapi from 'notificationapi-node-server-sdk';\n// const notificationapi = require('notificationapi-node-server-sdk').default\n\n// init\nnotificationapi.init('CLIENT_ID', 'CLIENT_SECRET');\n\n// send\nnotificationapi.send({\n  notificationId: 'new_comment_notification',\n  user: {\n    id: 'TEST_USER_ID',\n    email: 'TEST@TEST.COM', // required for email notifications\n    number: '+15005550006' // required for SMS\n  }\n});\n"))),(0,r.kt)(s.Z,{value:"py",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'# import\nfrom notificationapi_python_server_sdk import (notificationapi)\n\n# init\nnotificationapi.init("CLIENT_ID", "CLIENT_SECRET")\n\n# send\nnotificationapi.send({\n        "notificationId": "new_comment_notification",\n        "user": {\n            "id": "TEST_USER_ID",\n            "email": "TEST@TEST.COM",   # required for email notifications\n            "number": "+15005550006"    # required for SMS\n        }\n    })\n')))),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"You must replace the CLIENT_ID and CLIENT_SECRET with real values. You can get yours from ",(0,r.kt)("a",{parentName:"p",href:"https://app.notificationapi.com/environments"},"here"),"."))),(0,r.kt)("h2",{id:"thats-it"},"That's it?"),(0,r.kt)("p",null,"You are now sending notifications through email, SMS, automated voice calls, etc."),(0,r.kt)("p",null,"Please take the time to review:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In-App Notifications require our ",(0,r.kt)("a",{parentName:"li",href:"../guides/display-inapp-notifications"},"Front-End SDK")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.notificationapi.com/pricing"},"Free usage tier")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../guides/sms-call"},"SMS/Voice Details"))))}f.isMDXComponent=!0},6010:function(e,t,n){"use strict";function i(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=i(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=i(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})}}]);