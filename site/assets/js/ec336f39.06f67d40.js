"use strict";(self.webpackChunk_project_hami_website=self.webpackChunk_project_hami_website||[]).push([[5140],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>v});var n=r(7294);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,c=e.mdxType,o=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=l(r),v=c,m=d["".concat(s,".").concat(v)]||d[v]||p[v]||o;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function v(e,t){var r=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var o=r.length,i=new Array(o);i[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:c,i[1]=a;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4501:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var n=r(7462),c=(r(7294),r(3905));const o={title:"Allocate device core usage"},i=void 0,a={unversionedId:"userguide/NVIDIA-device/specify-device-core-usage",id:"userguide/NVIDIA-device/specify-device-core-usage",title:"Allocate device core usage",description:"Allocate device core to container",source:"@site/docs/userguide/NVIDIA-device/specify-device-core-usage.md",sourceDirName:"userguide/NVIDIA-device",slug:"/userguide/NVIDIA-device/specify-device-core-usage",permalink:"/docs/next/userguide/NVIDIA-device/specify-device-core-usage",draft:!1,editUrl:"https://github.com/karmada-io/website/edit/main/docs/userguide/NVIDIA-device/specify-device-core-usage.md",tags:[],version:"current",lastUpdatedBy:"limengxuan",lastUpdatedAt:1713870135,formattedLastUpdatedAt:"Apr 23, 2024",frontMatter:{title:"Allocate device core usage"},sidebar:"docs",previous:{title:"Allocate device memory",permalink:"/docs/next/userguide/NVIDIA-device/specify-device-memory-usage"},next:{title:"Assign to certain device type",permalink:"/docs/next/userguide/NVIDIA-device/specify-device-type-to-use"}},s={},l=[{value:"Allocate device core to container",id:"allocate-device-core-to-container",level:2}],u={toc:l};function p(e){let{components:t,...r}=e;return(0,c.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h2",{id:"allocate-device-core-to-container"},"Allocate device core to container"),(0,c.kt)("p",null,"Allocate a percentage of device core resources by specify resource ",(0,c.kt)("inlineCode",{parentName:"p"},"nvidia.com/gpucores"),".\nOptional, each unit of ",(0,c.kt)("inlineCode",{parentName:"p"},"nvidia.com/gpucores")," equals to 1% device cores."),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"      resources:\n        limits:\n          nvidia.com/gpu: 1 # requesting 1 GPU\n          nvidia.com/gpucores: 50 # Each GPU allocates 50% device cores.\n")),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},(0,c.kt)("strong",{parentName:"p"},"NOTICE:")," ",(0,c.kt)("em",{parentName:"p"}," HAMi-core uses time-slice to limit device core usage. Therefore, there will be fluctuations when looking at GPU utilization through nvidia-smi"))))}p.isMDXComponent=!0}}]);