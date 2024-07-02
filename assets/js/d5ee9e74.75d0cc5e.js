"use strict";(self.webpackChunkwp_secure=self.webpackChunkwp_secure||[]).push([[547],{7939:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>a});var i=n(4848),t=n(8453);const o={id:"session-timeout",title:"Session Timeout",sidebar_label:"Session Timeout",sidebar_position:9},r=void 0,l={id:"wp-secure/session-timeout",title:"Session Timeout",description:"The Session Timeout Settings tab allows you to configure automatic logout for inactive users. This feature helps to improve security by ensuring that users who leave their sessions open for too long are automatically logged out.",source:"@site/docs/wp-secure/session-timeout.md",sourceDirName:"wp-secure",slug:"/wp-secure/session-timeout",permalink:"/docs/wp-secure/session-timeout",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{id:"session-timeout",title:"Session Timeout",sidebar_label:"Session Timeout",sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Htaccess Security",permalink:"/docs/wp-secure/htacess-security"},next:{title:"Login Attempts",permalink:"/docs/wp-secure/login-attempts"}},c={},a=[{value:"Enable Session Timeout",id:"enable-session-timeout",level:3},{value:"Timeout Duration (seconds)",id:"timeout-duration-seconds",level:3},{value:"Example Settings",id:"example-settings",level:3},{value:"How to Configure",id:"how-to-configure",level:3}];function u(e){const s={admonition:"admonition",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.strong,{children:"Session Timeout Settings"})," tab allows you to configure automatic logout for inactive users. This feature helps to improve security by ensuring that users who leave their sessions open for too long are automatically logged out."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"Session Timeout",src:n(6731).A+"",width:"908",height:"403"})}),"\n",(0,i.jsx)(s.h3,{id:"enable-session-timeout",children:"Enable Session Timeout"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Description"}),": Automatically logs out inactive users after a specified period."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Advantages"}),":","\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Enhances security by preventing unauthorized access if a user forgets to log out."}),"\n",(0,i.jsx)(s.li,{children:"Reduces the risk of session hijacking."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Disadvantages"}),":","\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"May inconvenience users who take breaks without logging out."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.admonition,{title:"Pro Tip",type:"tip",children:(0,i.jsx)(s.p,{children:"Enable this feature on sites with sensitive information or in environments where multiple people have access to the same device."})}),"\n",(0,i.jsx)(s.h3,{id:"timeout-duration-seconds",children:"Timeout Duration (seconds)"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Description"}),": Sets the duration of inactivity before logging out the user."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Advantages"}),":","\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Provides control over how long a session can remain inactive before it is terminated."}),"\n",(0,i.jsx)(s.li,{children:"Allows customization to balance security needs with user convenience."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Disadvantages"}),":","\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Setting the duration too short may frustrate users by logging them out too quickly."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.admonition,{title:"Pro Tip",type:"tip",children:(0,i.jsx)(s.p,{children:"Set a reasonable timeout duration that balances security and user convenience. A common setting is 900 seconds (15 minutes)."})}),"\n",(0,i.jsx)(s.h3,{id:"example-settings",children:"Example Settings"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Enable Session Timeout"}),": Yes"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Timeout Duration (seconds)"}),": 900"]}),"\n"]}),"\n",(0,i.jsx)(s.admonition,{title:"Warning",type:"danger",children:(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Ensure that you inform your users about the session timeout settings to prevent confusion or frustration."}),"\n",(0,i.jsx)(s.li,{children:"Test the timeout duration to ensure it works well with your site's workflow before implementing it widely."}),"\n"]})}),"\n",(0,i.jsx)(s.h3,{id:"how-to-configure",children:"How to Configure"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["Navigate to the ",(0,i.jsx)(s.strong,{children:"Session Timeout Settings"})," tab."]}),"\n",(0,i.jsxs)(s.li,{children:["Check the ",(0,i.jsx)(s.strong,{children:"Enable Session Timeout"})," checkbox."]}),"\n",(0,i.jsxs)(s.li,{children:["Set the ",(0,i.jsx)(s.strong,{children:"Timeout Duration"})," in seconds."]}),"\n",(0,i.jsxs)(s.li,{children:["Click ",(0,i.jsx)(s.strong,{children:"Save Changes"})," to apply the settings."]}),"\n"]})]})}function d(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},6731:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/session-timeout-3ffeab02626b08e2f0cbf3377567daab.png"},8453:(e,s,n)=>{n.d(s,{R:()=>r,x:()=>l});var i=n(6540);const t={},o=i.createContext(t);function r(e){const s=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(o.Provider,{value:s},e.children)}}}]);