"use strict";(self.webpackChunkwp_secure=self.webpackChunkwp_secure||[]).push([[250],{8926:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=t(4848),r=t(8453);const i={id:"tools",title:"Tools",sidebar_label:"Tools",sidebar_position:11},o=void 0,l={id:"secure-site/tools",title:"Tools",description:"The Tools menu in SiteSecure provides utilities to enhance the security of your WordPress site. One of the key features available under this menu is the Password Strength Tool. This tool helps you generate strong passwords and evaluate their strength against brute force attacks.",source:"@site/docs/secure-site/tools.md",sourceDirName:"secure-site",slug:"/secure-site/tools",permalink:"/docs/secure-site/tools",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:11,frontMatter:{id:"tools",title:"Tools",sidebar_label:"Tools",sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"Login Attempts",permalink:"/docs/secure-site/login-attempts"}},a={},d=[{value:"Password Strength Tool",id:"password-strength-tool",level:3},{value:"Example Usage",id:"example-usage",level:3}];function c(e){const s={admonition:"admonition",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.strong,{children:"Tools"})," menu in ",(0,n.jsx)(s.strong,{children:"SiteSecure"})," provides utilities to enhance the security of your WordPress site. One of the key features available under this menu is the ",(0,n.jsx)(s.strong,{children:"Password Strength Tool"}),". This tool helps you generate strong passwords and evaluate their strength against brute force attacks."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Tools",src:t(1732).A+"",width:"845",height:"375"})}),"\n",(0,n.jsx)(s.h3,{id:"password-strength-tool",children:"Password Strength Tool"}),"\n",(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.strong,{children:"Password Strength Tool"})," allows users to generate secure passwords and check their strength. The tool includes the following features:"]}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Password Generation"}),":"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Users can generate a random password by clicking the ",(0,n.jsx)(s.strong,{children:"Generate Password"})," button."]}),"\n",(0,n.jsx)(s.li,{children:"The generated password will satisfy all the security criteria including the presence of symbols, numbers, uppercase letters, lowercase letters, and a length between 8 and 16 characters."}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Password Strength Meter"}),":"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"As users type or generate a password, the tool evaluates its strength using the zxcvbn library."}),"\n",(0,n.jsxs)(s.li,{children:["The strength meter displays the password strength as one of the following: ",(0,n.jsx)(s.strong,{children:"Weak"}),", ",(0,n.jsx)(s.strong,{children:"Fair"}),", ",(0,n.jsx)(s.strong,{children:"Good"}),", ",(0,n.jsx)(s.strong,{children:"Strong"}),", or ",(0,n.jsx)(s.strong,{children:"Very Strong"}),"."]}),"\n",(0,n.jsx)(s.li,{children:"The meter updates in real-time as the password is being entered or generated."}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Criteria Check"}),":"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["The tool checks the password against several criteria:","\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Contains Symbols"}),": Ensures the password includes special characters (e.g., !, @, #, $)."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Contains Numbers"}),": Ensures the password includes numerical digits (0-9)."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Contains Uppercase Letters"}),": Ensures the password includes uppercase alphabets (A-Z)."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Contains Lowercase Letters"}),": Ensures the password includes lowercase alphabets (a-z)."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Characters Entered"}),": Displays the number of characters entered, which should be between 8 and 16."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.li,{children:"Each criterion is initially displayed in gray. As the password satisfies each criterion, the text changes to green, indicating compliance."}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Time to Crack"}),":"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"The tool estimates the time it would take for a brute force attack to crack the password and displays this information."}),"\n",(0,n.jsx)(s.li,{children:"This helps users understand the effectiveness of their password in preventing unauthorized access."}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Copy Password"}),":"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Users can copy the generated or entered password to the clipboard by clicking the ",(0,n.jsx)(s.strong,{children:"Copy"})," button."]}),"\n",(0,n.jsx)(s.li,{children:"An alert confirms that the password has been copied successfully."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"example-usage",children:"Example Usage"}),"\n",(0,n.jsx)(s.p,{children:"Here is a step-by-step guide on how to use the Password Strength Tool:"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["Navigate to the ",(0,n.jsx)(s.strong,{children:"Tools"})," menu under ",(0,n.jsx)(s.strong,{children:"SiteSecure"}),"."]}),"\n",(0,n.jsxs)(s.li,{children:["In the ",(0,n.jsx)(s.strong,{children:"Password Strength Tool"})," section, you will see an input box where you can type your password or click the ",(0,n.jsx)(s.strong,{children:"Generate Password"})," button to create a strong password."]}),"\n",(0,n.jsx)(s.li,{children:"As you type or generate a password, the strength meter will display the password's strength."}),"\n",(0,n.jsx)(s.li,{children:"The criteria list will update in real-time, showing which requirements the password meets."}),"\n",(0,n.jsx)(s.li,{children:"The estimated time to crack the password will also be displayed."}),"\n",(0,n.jsxs)(s.li,{children:["Once you are satisfied with the password, click the ",(0,n.jsx)(s.strong,{children:"Copy"})," button to copy the password to the clipboard."]}),"\n"]}),"\n",(0,n.jsx)(s.admonition,{title:"Pro Tip",type:"tip",children:(0,n.jsx)(s.p,{children:"Regularly update your passwords using this tool to ensure maximum security. Strong passwords significantly reduce the risk of unauthorized access to your WordPress site."})}),"\n",(0,n.jsx)(s.admonition,{title:"Warning",type:"danger",children:(0,n.jsx)(s.p,{children:"Always store your passwords securely. Use a reliable password manager to keep track of your passwords and avoid writing them down or storing them in plain text."})})]})}function h(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},1732:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/tools-446a119a9dd206d4dc47541cb917fd2f.png"},8453:(e,s,t)=>{t.d(s,{R:()=>o,x:()=>l});var n=t(6540);const r={},i=n.createContext(r);function o(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);