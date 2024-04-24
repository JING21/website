"use strict";(self.webpackChunk_project_hami_website=self.webpackChunk_project_hami_website||[]).push([[5023],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>y});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},l=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),l=p(n),y=r,f=l["".concat(s,".").concat(y)]||l[y]||u[y]||o;return n?i.createElement(f,a(a({ref:t},d),{},{components:n})):i.createElement(f,a({ref:t},d))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=l;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var p=2;p<o;p++)a[p]=n[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}l.displayName="MDXCreateElement"},6375:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var i=n(7462),r=(n(7294),n(3905));const o={title:"Assign to certain device type"},a=void 0,c={unversionedId:"userguide/NVIDIA-device/specify-device-type-to-use",id:"version-v1.3.0/userguide/NVIDIA-device/specify-device-type-to-use",title:"Assign to certain device type",description:"Assign to certain device type",source:"@site/versioned_docs/version-v1.3.0/userguide/NVIDIA-device/specify-device-type-to-use.md",sourceDirName:"userguide/NVIDIA-device",slug:"/userguide/NVIDIA-device/specify-device-type-to-use",permalink:"/zh/docs/userguide/NVIDIA-device/specify-device-type-to-use",draft:!1,editUrl:"https://github.com/karmada-io/website/edit/main/docs/userguide/NVIDIA-device/specify-device-type-to-use.md",tags:[],version:"v1.3.0",lastUpdatedBy:"limengxuan",lastUpdatedAt:1713177637,formattedLastUpdatedAt:"2024\u5e744\u670815\u65e5",frontMatter:{title:"Assign to certain device type"},sidebar:"version-v1.3.0/docs",previous:{title:"Allocate device core usage",permalink:"/zh/docs/userguide/NVIDIA-device/specify-device-core-usage"},next:{title:"Assign to certain device",permalink:"/zh/docs/userguide/NVIDIA-device/specify-device-uuid-to-use"}},s={},p=[{value:"Assign to certain device type",id:"assign-to-certain-device-type",level:2}],d={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"assign-to-certain-device-type"},"Assign to certain device type"),(0,r.kt)("p",null,"Sometimes a task may wish to run on a certain type of GPU, it can fill the ",(0,r.kt)("inlineCode",{parentName:"p"},"nvidia.com/use-gputype")," field in pod annotation. HAMi scheduler will check if the device type returned from ",(0,r.kt)("inlineCode",{parentName:"p"},"nvidia-smi -L")," contains the content of annotation."),(0,r.kt)("p",null,"For example, a task with the following annotation will be assigned to A100 or V100 GPU"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'metadata:\n  annotations:\n    nvidia.com/use-gputype: "A100,V100" # Specify the card type for this job, use comma to seperate, will not launch job on non-specified card\n')),(0,r.kt)("p",null,"A task may use ",(0,r.kt)("inlineCode",{parentName:"p"},"nvidia.com/nouse-gputype")," to evade certain type of GPU. In this following example, that job won't be assigned to 1080(include 1080Ti) or 2080(include 2080Ti) type of card. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'metadata:\n  annotations:\n    nvidia.com/nouse-gputype: "1080,2080" # Specify the blacklist card type for this job, use comma to seperate, will not launch job on specified card\n')))}u.isMDXComponent=!0}}]);