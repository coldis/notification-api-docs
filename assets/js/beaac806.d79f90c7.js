(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[16],{4856:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return d},metadata:function(){return p},toc:function(){return u},default:function(){return c}});var a=t(2122),i=t(9756),o=(t(7294),t(3905)),s=t(1395),l=t(8215),r=["components"],d={sidebar_position:1},p={unversionedId:"reference/server",id:"reference/server",isDocsHomePage:!1,title:"Server SDKs (Back-end)",description:"The server-side SDKs allow you to trigger sending notifications. Supported environments:",source:"@site/docs/reference/server.md",sourceDirName:"reference",slug:"/reference/server",permalink:"/docs/reference/server",editUrl:"https://github.com/notificationapi-com/docs/edit/main/docs/reference/server.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Display In-App Notifications",permalink:"/docs/quick-start/display-inapp-notifications"},next:{title:"JS Client SDK (Front-End)",permalink:"/docs/reference/js-client"}},u=[{value:"Installation",id:"installation",children:[]},{value:"Usage",id:"usage",children:[{value:"1. import or require",id:"1-import-or-require",children:[]},{value:"2. init",id:"2-init",children:[]},{value:"3. send",id:"3-send",children:[]}]}],m={toc:u};function c(e){var n=e.components,t=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The server-side SDKs allow you to trigger sending notifications. Supported environments:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Node.js"),(0,o.kt)("li",{parentName:"ul"},"Python")),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)(s.Z,{groupId:"back-end-language",defaultValue:"nodejs",values:[{label:"Node.js",value:"nodejs"},{label:"Python",value:"python"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"nodejs",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install notificationapi-node-server-sdk\n# Or using Yarn:\nyarn add notificationapi-node-server-sdk\n"))),(0,o.kt)(l.Z,{value:"python",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pip install notificationapi_python_server_sdk\n")))),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("h3",{id:"1-import-or-require"},"1. import or require"),(0,o.kt)(s.Z,{groupId:"back-end-language",defaultValue:"nodejs",values:[{label:"Node.js",value:"nodejs"},{label:"Python",value:"python"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"nodejs",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import notificationapi from "notificationapi-node-server-sdk";\n// or with require:\nconst notificationapi = require("notificationapi-node-server-sdk").default;\n'))),(0,o.kt)(l.Z,{value:"python",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from notificationapi_python_server_sdk import (notificationapi)\n")))),(0,o.kt)("h3",{id:"2-init"},"2. init"),(0,o.kt)("p",null,"The init function is to configure the SDK and must run before the ",(0,o.kt)("a",{parentName:"p",href:"#3-send"},"send")," function. It requires your ",(0,o.kt)("inlineCode",{parentName:"p"},"clientId")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"clientSecret")," which you can get from ",(0,o.kt)("a",{parentName:"p",href:"https://app.notificationapi.com/environments"},"here"),"."),(0,o.kt)(s.Z,{groupId:"back-end-language",defaultValue:"nodejs",values:[{label:"Node.js",value:"nodejs"},{label:"Python",value:"python"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"nodejs",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'notificationapi.init("CLIENT_ID", "CLIENT_SECRET");\n'))),(0,o.kt)(l.Z,{value:"python",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'notificationapi.init("CLIENT_ID", "CLIENT_SECRET")\n')))),(0,o.kt)("h3",{id:"3-send"},"3. send"),(0,o.kt)("h4",{id:"basic"},"Basic:"),(0,o.kt)("p",null,"The code sample below will send the ",(0,o.kt)("inlineCode",{parentName:"p"},"hello_world")," notification to the specified user."),(0,o.kt)(s.Z,{groupId:"back-end-language",defaultValue:"nodejs",values:[{label:"Node.js",value:"nodejs"},{label:"Python",value:"python"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"nodejs",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'notificationapi.send({\n  notificationId: "hello_world",\n  user: { id: "123", email: "test@test.com" }\n});\n'))),(0,o.kt)(l.Z,{value:"python",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'notificationapi.send({\n    "notificationId": "hello_world",\n    "user": { "id": "123", "email": "test@test.com" } \n})\n')))),(0,o.kt)("p",null,"Parameters:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"notificationId")," (string): The ID of the notification you wish to send. You can find this value from the dashboard."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"user.id")," (string): The ID of the user in your system."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"user.email")," (string): User's email address.")),(0,o.kt)("h4",{id:"merge-tags"},"Merge Tags"),(0,o.kt)("p",null,"If you are using ",(0,o.kt)("inlineCode",{parentName:"p"},"{{mergeTags}}")," in your notification designs, be sure to pass the actual values into the SDK. The example below replaces the ",(0,o.kt)("inlineCode",{parentName:"p"},"{{firstName}}")," merge tag in your design with the value ",(0,o.kt)("inlineCode",{parentName:"p"},"Jane"),"."),(0,o.kt)(s.Z,{groupId:"back-end-language",defaultValue:"nodejs",values:[{label:"Node.js",value:"nodejs"},{label:"Python",value:"python"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"nodejs",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"notificationapi.send({\n    notificationId: 'hello_world'\n    user: { id: \"123\", email: \"test@test.com\" },\n    mergeTags: { firstName: 'Jane' }\n})\n"))),(0,o.kt)(l.Z,{value:"python",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'notificationapi.send({\n    "notificationId": "hello_world",\n    "user": { "id": "123", "email": "test@test.com" },\n    "mergeTags": { "firstName": "Jane" }\n})\n')))),(0,o.kt)("h4",{id:"merge-tags-advanced"},"Merge Tags (Advanced)"),(0,o.kt)("p",null,"You can actually pass in complex objects and arrays into mergeTags to make your notifications future-proof. The example below sends a whole user object to the mergeTag. You can now use merge tags such as ",(0,o.kt)("inlineCode",{parentName:"p"},"{{user.firstName}}"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"{{user.lastName}}")," or even ",(0,o.kt)("inlineCode",{parentName:"p"},"{{user.orders[1].productName}}")," in the designs without going back to change your server code."),(0,o.kt)(s.Z,{groupId:"back-end-language",defaultValue:"nodejs",values:[{label:"Node.js",value:"nodejs"},{label:"Python",value:"python"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"nodejs",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const user = {\n    firstName: 'Jane',\n    lastName: 'Doe',\n    orders: [\n        {\n            id: '123',\n            productName: 'socks'\n        },\n        {\n            id: '124',\n            productName: 'socks'\n        }\n    ]\n}\nnotificationapi.send({\n    notificationId: 'hello_world'\n    user: { id: \"123\", email: \"test@test.com\" },\n    mergeTags: { user }\n})\n"))),(0,o.kt)(l.Z,{value:"python",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'user = {\n    "firstName": "Jane",\n    "lastName": "Doe",\n    "orders": [\n        {\n            "id": "123",\n            "productName": "socks"\n        },\n        {\n            "id": "124",\n            "productName": "socks"\n        }\n    ]\n}\nnotificationapi.send({\n    "notificationId": "hello_world",\n    "user": { "id": "123", "email": "test@test.com" },\n    "mergeTags": { "user": user }\n})\n')))),(0,o.kt)("h4",{id:"options"},"Options"),(0,o.kt)("p",null,"You can dynamically modify certain notification behavior by passing in options. Example:"),(0,o.kt)(s.Z,{groupId:"back-end-language",defaultValue:"nodejs",values:[{label:"Node.js",value:"nodejs"},{label:"Python",value:"python"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"nodejs",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"notificationapi.send({\n    notificationId: 'hello_world'\n    user: { id: \"123\", email: \"test@test.com\" },\n    options: {\n        email: {\n            replyToAddresses: ['noreply@test.com']\n        }\n    }\n})\n"))),(0,o.kt)(l.Z,{value:"python",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'notificationapi.send({\n    "notificationId": "hello_world",\n    "user": { "id": "123", "email": "test@test.com" },\n    "options": { \n            "email": {\n                "replyToAddresses": ["noreply@test.com"]\n            }\n        }\n})\n')))),(0,o.kt)("p",null,"Available options:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"options.email.replyToAddresses")," (string[]): An array of email addresses to be used in the reply-to field of emails notifications."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"options.email.ccAddresses")," (string[]): An array of emails to be CC'ed on the email notifications."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"options.email.bccAddresses")," (string[]): An array of emails to be BCC'ed on the email notifications.")))}c.isMDXComponent=!0}}]);