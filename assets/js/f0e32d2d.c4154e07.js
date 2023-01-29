"use strict";(self.webpackChunkdotenx_docs=self.webpackChunkdotenx_docs||[]).push([[103],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(n),h=i,k=p["".concat(c,".").concat(h)]||p[h]||u[h]||o;return n?a.createElement(k,r(r({ref:t},d),{},{components:n})):a.createElement(k,r({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var l=2;l<o;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},790:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(7462),i=(n(7294),n(3905));const o={sidebar_position:5,title:"Interactions"},r=void 0,s={unversionedId:"builder_studio/interactions",id:"builder_studio/interactions",title:"Interactions",description:"An Interaction is a workflow, exposed as an API endpoint, which you can executed though a simple API call.",source:"@site/docs/builder_studio/interactions.md",sourceDirName:"builder_studio",slug:"/builder_studio/interactions",permalink:"/docs/builder_studio/interactions",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Interactions"},sidebar:"builderSidebar",previous:{title:"Tables",permalink:"/docs/builder_studio/tables"},next:{title:"Automation Template",permalink:"/docs/builder_studio/automations"}},c={},l=[{value:"Creating an Interaction",id:"creating-an-interaction",level:2},{value:"Interaction tasks",id:"interaction-tasks",level:3},{value:"Dependency between the tasks",id:"dependency-between-the-tasks",level:3},{value:"Executing an Interaction",id:"executing-an-interaction",level:2},{value:"Authorization",id:"authorization",level:3},{value:"Integration and Provider",id:"integration-and-provider",level:3}],d={toc:l};function u(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"An ",(0,i.kt)("inlineCode",{parentName:"p"},"Interaction")," is a workflow, exposed as an API endpoint, which you can executed though a simple API call.\nEach interaction is composed of multiple ",(0,i.kt)("inlineCode",{parentName:"p"},"Tasks")," which you can execute in the order you specify in the interaction."),(0,i.kt)("p",null,"The tasks can be configured with the input provided by the user or the output of the preceding tasks.\nYou can use any of the existing tasks or create your own with custom code."),(0,i.kt)("p",null,"Each interaction is executed in a ",(0,i.kt)("inlineCode",{parentName:"p"},"Session")," which is a single execution of the workflow.\nYou can use (call) interactions as API endpoints to execute workflows. "),(0,i.kt)("p",null,"Worth mentioning, interactions are ",(0,i.kt)("strong",{parentName:"p"},"massively scalable")," and based on your plan, can be called tens of thousands of times per minute!"),(0,i.kt)("h2",{id:"creating-an-interaction"},"Creating an Interaction"),(0,i.kt)("p",null,"To create an ",(0,i.kt)("inlineCode",{parentName:"p"},"Interaction")," click the ",(0,i.kt)("inlineCode",{parentName:"p"},"+ New Interaction")," button to go to the ",(0,i.kt)("strong",{parentName:"p"},"Interaction Canvas")," where you can create workflows you can use as API endpoints."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Interaction canvas",src:n(3441).Z,width:"1158",height:"538"})),(0,i.kt)("h3",{id:"interaction-tasks"},"Interaction tasks"),(0,i.kt)("p",null,"An Interaction can be comprised of a single task or multiple tasks. The tasks can depend on other tasks or execute as soon as the interaction is executed.\nThis means that you ",(0,i.kt)("strong",{parentName:"p"},"can run multiple tasks in parallel")," (this feature, if used correctly, gives you a unique performance advantage)."),(0,i.kt)("p",null,"You can add a task to the interaction by dragging and dropping it to the canvas and you can delete it by right-clicking on the task and clicking on the delete option."),(0,i.kt)("p",null,"When you add a task to the interaction, you can select the type of the task and based on that you can configure the task.\n",(0,i.kt)("img",{alt:"Task settings",src:n(4153).Z,width:"476",height:"780"})),(0,i.kt)("p",null,'In the above example, you can see the task of type "Send tweet" accepts only a single value, ',(0,i.kt)("inlineCode",{parentName:"p"},"text")," which is the text of the tweet. You can set a value for field which will always be used when this task is executed in this interaction, or in the more likely case, you can leave it blank to set it value dynamically when you want to execute this interaction. It's also possible to set a value for some attributes of the tasks and leave some of them blank."),(0,i.kt)("h3",{id:"dependency-between-the-tasks"},"Dependency between the tasks"),(0,i.kt)("p",null,"You can create a dependency relation between on task with multiple tasks by connecting them and setting the dependency condition."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Dependent tasks",src:n(7202).Z,width:"699",height:"458"})),(0,i.kt)("p",null,"In the above image, the tasks ",(0,i.kt)("strong",{parentName:"p"},"A")," and ",(0,i.kt)("strong",{parentName:"p"},"B")," run in parallel as soon as the interaction's execution has started and the task ",(0,i.kt)("strong",{parentName:"p"},"C")," starts when both of those tasks\nare ",(0,i.kt)("inlineCode",{parentName:"p"},"completed"),"."),(0,i.kt)("p",null,"In order to set the condition of dependency, click on the cog on the link between two tasks and select the the condition as follow:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"failed"),": the preceding task should fail to run this task"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"completed"),": the preceding task should complete successfully to run this task")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Dependent tasks",src:n(8225).Z,width:"492",height:"240"})),(0,i.kt)("h2",{id:"executing-an-interaction"},"Executing an Interaction"),(0,i.kt)("p",null,"Before executing an interaction, make sure it's ",(0,i.kt)("inlineCode",{parentName:"p"},"activated"),"."),(0,i.kt)("p",null,"In the list of the interactions click on the endpoint to get the details of the HTTP request you should send run this interaction. In the endpoint you automatically get the body of the request based on the blank inputs of the tasks in the interaction."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Dependent tasks",src:n(3446).Z,width:"961",height:"541"})),(0,i.kt)("h3",{id:"authorization"},"Authorization"),(0,i.kt)("p",null,"All the interaction endpoints are ",(0,i.kt)("inlineCode",{parentName:"p"},"protected"),", meaning you have to provide a valid ",(0,i.kt)("inlineCode",{parentName:"p"},"Authorization")," token when calling the endpoint. You get this token in the body of the response of a request to the login endpoint which has been successful. For more details refer to the ",(0,i.kt)("a",{parentName:"p",href:"../builder_studio/user_management#sign-in"},"User management")," section."),(0,i.kt)("h3",{id:"integration-and-provider"},"Integration and Provider"),(0,i.kt)("p",null,"Some tasks need a ",(0,i.kt)("inlineCode",{parentName:"p"},"provider"),' to work. For example, if you want to use the "Send tweet" task, you need a user ',(0,i.kt)("inlineCode",{parentName:"p"},"integration")," which is crated with your Twitter ",(0,i.kt)("inlineCode",{parentName:"p"},"provider"),".\nThis section will be completed soon."))}u.isMDXComponent=!0},8225:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/dependency_condition-45264ac8d60f60bd5d70ccc6c4445f2c.png"},3441:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/interaction_canvas-66badad3ca5055ab1a0746985e3758f9.png"},3446:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/run_interaction_endpoint-e54fa43bf2d5c71dd07ca9671f8112a3.png"},4153:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/single_task-1f3145c358f8c867364c6c8761168267.png"},7202:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/task_dependency-69277abeb66bc5d1db66847c65638961.png"}}]);