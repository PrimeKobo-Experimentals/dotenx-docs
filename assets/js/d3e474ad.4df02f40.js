"use strict";(self.webpackChunkdotenx_docs=self.webpackChunkdotenx_docs||[]).push([[238],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var i=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=i.createContext({}),u=function(e){var t=i.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return i.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(r),m=n,k=d["".concat(p,".").concat(m)]||d[m]||s[m]||a;return r?i.createElement(k,o(o({ref:t},c),{},{components:r})):i.createElement(k,o({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var u=2;u<a;u++)o[u]=r[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7350:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var i=r(7462),n=(r(7294),r(3905));const a={sidebar_position:7,title:"Twitter"},o=void 0,l={unversionedId:"builder_studio/providers/twitter",id:"builder_studio/providers/twitter",title:"Twitter",description:"Twitter provider can be used for both authentication and integration. In this section you learn about the steps to add providers of type Twitter to your project.",source:"@site/docs/builder_studio/providers/twitter.md",sourceDirName:"builder_studio/providers",slug:"/builder_studio/providers/twitter",permalink:"/docs/builder_studio/providers/twitter",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,title:"Twitter"},sidebar:"builderSidebar",previous:{title:"Providers",permalink:"/docs/builder_studio/providers/"}},p={},u=[{value:"Authentication",id:"authentication",level:2},{value:"Get the callback URL",id:"get-the-callback-url",level:3},{value:"Create Twitter OAuth Application",id:"create-twitter-oauth-application",level:3},{value:"Use the Twitter application credentials",id:"use-the-twitter-application-credentials",level:3},{value:"Test functionality",id:"test-functionality",level:3}],c={toc:u};function s(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,i.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Twitter provider can be used for both authentication and integration. In this section you learn about the steps to add providers of type Twitter to your project."),(0,n.kt)("h2",{id:"authentication"},"Authentication"),(0,n.kt)("p",null,"In order to give your users the option to sign up/in in your application with Twitter, follow these steps:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Start the wizard for creating a Provider to get the callback URL (the URL your users will be redirected to after successful authentication with Twitter)"),(0,n.kt)("li",{parentName:"ol"},"Create a Twitter OAuth application"),(0,n.kt)("li",{parentName:"ol"},"Finish the wizard you started in step 1 with the credentials created in step 2")),(0,n.kt)("h3",{id:"get-the-callback-url"},"Get the callback URL"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Go to ",(0,n.kt)("a",{parentName:"li",href:"https://admin.dotenx.com"},"https://admin.dotenx.com")," and login to your DoTenX account"),(0,n.kt)("li",{parentName:"ul"},"Go to Builder Studio and select your project"),(0,n.kt)("li",{parentName:"ul"},"Navigate to Providers section"),(0,n.kt)("li",{parentName:"ul"},"Click on ",(0,n.kt)("inlineCode",{parentName:"li"},"New Provider")),(0,n.kt)("li",{parentName:"ul"},"Enter your provider name (e.g: twitter_login)"),(0,n.kt)("li",{parentName:"ul"},"Select Twitter as provider type"),(0,n.kt)("li",{parentName:"ul"},"Copy your user management callback url (e.g: ",(0,n.kt)("a",{parentName:"li",href:"https://api.dotenx.com/user/management/project/YOUR_PROJECT_TAG/provider/YOUR_PROVIDER_NAME/callback"},"https://api.dotenx.com/user/management/project/YOUR_PROJECT_TAG/provider/YOUR_PROVIDER_NAME/callback"),")")),(0,n.kt)("h3",{id:"create-twitter-oauth-application"},"Create Twitter OAuth Application"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Go to ",(0,n.kt)("a",{parentName:"li",href:"https://developer.twitter.com"},"https://developer.twitter.com"),"."),(0,n.kt)("li",{parentName:"ul"},"Click on Sign in at the top right to log in."),(0,n.kt)("li",{parentName:"ul"},"Click on ",(0,n.kt)("inlineCode",{parentName:"li"},"+ Create Project"),"."),(0,n.kt)("li",{parentName:"ul"},"Enter your project name, click Next."),(0,n.kt)("li",{parentName:"ul"},"Select your use case, click Next."),(0,n.kt)("li",{parentName:"ul"},"Enter a description for your project, click Next."),(0,n.kt)("li",{parentName:"ul"},"Enter a name for your app, click Complete."),(0,n.kt)("li",{parentName:"ul"},"Copy and save your API Key (this is your ",(0,n.kt)("inlineCode",{parentName:"li"},"client_id"),")."),(0,n.kt)("li",{parentName:"ul"},"Copy and save your API Secret Key (this is your ",(0,n.kt)("inlineCode",{parentName:"li"},"client_secret"),")."),(0,n.kt)("li",{parentName:"ul"},"At the bottom, under Next, setup your App click the link enable 3rd party authentication."),(0,n.kt)("li",{parentName:"ul"},"Under App Settings, click on the gear icon next to your app name to go to App Settings."),(0,n.kt)("li",{parentName:"ul"},"At the bottom, next to Authentication settings, click Edit."),(0,n.kt)("li",{parentName:"ul"},"Turn Enable 3-legged OAuth ON."),(0,n.kt)("li",{parentName:"ul"},"Turn Request email address from users ON."),(0,n.kt)("li",{parentName:"ul"},"Paste your Callback URL. (that was copied in the last step of ",(0,n.kt)("inlineCode",{parentName:"li"},"Create DoTenX Provider (part 1)"),")"),(0,n.kt)("li",{parentName:"ul"},"Enter your Website URL."),(0,n.kt)("li",{parentName:"ul"},"Enter your Terms of service URL."),(0,n.kt)("li",{parentName:"ul"},"Enter your Privacy policy URL."),(0,n.kt)("li",{parentName:"ul"},"Click Save.")),(0,n.kt)("h3",{id:"use-the-twitter-application-credentials"},"Use the Twitter application credentials"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Back to add DoTenX Provider tab"),(0,n.kt)("li",{parentName:"ul"},"Paste Key of your Twitter application (",(0,n.kt)("inlineCode",{parentName:"li"},"client_id"),") in ",(0,n.kt)("inlineCode",{parentName:"li"},"Key")," field."),(0,n.kt)("li",{parentName:"ul"},"Paste Secret Key of your Twitter application (",(0,n.kt)("inlineCode",{parentName:"li"},"client_secret"),") in ",(0,n.kt)("inlineCode",{parentName:"li"},"Secret")," field."),(0,n.kt)("li",{parentName:"ul"},"Enter your front-end url that your users will redirect here (with his/her tokens as query parameter) when they was authenticated by Twitter"),(0,n.kt)("li",{parentName:"ul"},"Add this two scopes in ",(0,n.kt)("inlineCode",{parentName:"li"},"Scopes")," field (",(0,n.kt)("inlineCode",{parentName:"li"},"tweet.read"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"users.read"),")"),(0,n.kt)("li",{parentName:"ul"},"Click on Add Provider")),(0,n.kt)("h3",{id:"test-functionality"},"Test functionality"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Click on name of your DoTenX Provider to see details"),(0,n.kt)("li",{parentName:"ul"},"Copy url that prepared for your user management (e.g: ",(0,n.kt)("a",{parentName:"li",href:"https://api.dotenx.com/user/management/project/YOUR_PROJECT_TAG/provider/YOUR_PROVIDER_NAME/authorize"},"https://api.dotenx.com/user/management/project/YOUR_PROJECT_TAG/provider/YOUR_PROVIDER_NAME/authorize"),")"),(0,n.kt)("li",{parentName:"ul"},"Paste this url in new tab and give access to your Twitter app."),(0,n.kt)("li",{parentName:"ul"},"You should redirect to your front-end url with some query parameters."),(0,n.kt)("li",{parentName:"ul"},"Finally if all thing is good you should see your twitter account on ",(0,n.kt)("inlineCode",{parentName:"li"},"user management")," section on DoTenX.")))}s.isMDXComponent=!0}}]);