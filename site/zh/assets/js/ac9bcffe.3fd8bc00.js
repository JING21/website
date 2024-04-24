"use strict";(self.webpackChunk_project_hami_website=self.webpackChunk_project_hami_website||[]).push([[9849],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),u=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},l=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),l=u(n),m=r,f=l["".concat(s,".").concat(m)]||l[m]||p[m]||a;return n?i.createElement(f,o(o({ref:t},d),{},{components:n})):i.createElement(f,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=l;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var u=2;u<a;u++)o[u]=n[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}l.displayName="MDXCreateElement"},5094:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var i=n(7462),r=(n(7294),n(3905));const a={title:"Assign to certain device"},o=void 0,c={unversionedId:"userguide/NVIDIA-device/specify-device-uuid-to-use",id:"userguide/NVIDIA-device/specify-device-uuid-to-use",title:"Assign to certain device",description:"Assign to certain device type",source:"@site/docs/userguide/NVIDIA-device/specify-device-uuid-to-use.md",sourceDirName:"userguide/NVIDIA-device",slug:"/userguide/NVIDIA-device/specify-device-uuid-to-use",permalink:"/zh/docs/next/userguide/NVIDIA-device/specify-device-uuid-to-use",draft:!1,editUrl:"https://github.com/karmada-io/website/edit/main/docs/userguide/NVIDIA-device/specify-device-uuid-to-use.md",tags:[],version:"current",lastUpdatedBy:"limengxuan",lastUpdatedAt:1713870135,formattedLastUpdatedAt:"2024\u5e744\u670823\u65e5",frontMatter:{title:"Assign to certain device"},sidebar:"docs",previous:{title:"Assign to certain device type",permalink:"/zh/docs/next/userguide/NVIDIA-device/specify-device-type-to-use"},next:{title:"Use exclusive GPU",permalink:"/zh/docs/next/userguide/NVIDIA-device/examples/use-exclusive-card"}},s={},u=[{value:"Assign to certain device type",id:"assign-to-certain-device-type",level:2}],d={toc:u};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"assign-to-certain-device-type"},"Assign to certain device type"),(0,r.kt)("p",null,"Sometimes a task may wish to run on a certain GPU, it can fill the ",(0,r.kt)("inlineCode",{parentName:"p"},"nvidia.com/use-gpuuuid")," field in pod annotation. HAMi scheduler will try to fit in device with that uuid."),(0,r.kt)("p",null,"For example, a task with the following annotation will be assigned to the device with uuid ",(0,r.kt)("inlineCode",{parentName:"p"},"GPU-123456")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'metadata:\n  annotations:\n    nvidia.com/use-gpuuuid: "GPU-123456"\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"NOTICE:")," ",(0,r.kt)("em",{parentName:"p"},"Each GPU UUID is unique in a cluster, so assign a certain UUID means assigning this task to certain node with that GPU"))))}p.isMDXComponent=!0}}]);