"use strict";(self.webpackChunk_project_hami_website=self.webpackChunk_project_hami_website||[]).push([[8283],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>v});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=l(r),v=o,m=d["".concat(s,".").concat(v)]||d[v]||p[v]||i;return r?n.createElement(m,c(c({ref:t},u),{},{components:r})):n.createElement(m,c({ref:t},u))}));function v(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,c=new Array(i);c[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var l=2;l<i;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4085:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const i={title:"Allocate device core usage"},c=void 0,a={unversionedId:"userguide/NVIDIA-device/specify-device-core-usage",id:"version-v1.3.0/userguide/NVIDIA-device/specify-device-core-usage",title:"Allocate device core usage",description:"Allocate device core to container",source:"@site/versioned_docs/version-v1.3.0/userguide/NVIDIA-device/specify-device-core-usage.md",sourceDirName:"userguide/NVIDIA-device",slug:"/userguide/NVIDIA-device/specify-device-core-usage",permalink:"/docs/userguide/NVIDIA-device/specify-device-core-usage",draft:!1,editUrl:"https://github.com/karmada-io/website/edit/main/docs/userguide/NVIDIA-device/specify-device-core-usage.md",tags:[],version:"v1.3.0",lastUpdatedBy:"limengxuan",lastUpdatedAt:1713177637,formattedLastUpdatedAt:"Apr 15, 2024",frontMatter:{title:"Allocate device core usage"},sidebar:"version-v1.3.0/docs",previous:{title:"Allocate device memory",permalink:"/docs/userguide/NVIDIA-device/specify-device-memory-usage"},next:{title:"Assign to certain device type",permalink:"/docs/userguide/NVIDIA-device/specify-device-type-to-use"}},s={},l=[{value:"Allocate device core to container",id:"allocate-device-core-to-container",level:2}],u={toc:l};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"allocate-device-core-to-container"},"Allocate device core to container"),(0,o.kt)("p",null,"Allocate a percentage of device core resources by specify resource ",(0,o.kt)("inlineCode",{parentName:"p"},"nvidia.com/gpucores"),".\nOptional, each unit of ",(0,o.kt)("inlineCode",{parentName:"p"},"nvidia.com/gpucores")," equals to 1% device cores."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"      resources:\n        limits:\n          nvidia.com/gpu: 1 # requesting 1 GPU\n          nvidia.com/gpucores: 50 # Each GPU allocates 50% device cores.\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"NOTICE:")," ",(0,o.kt)("em",{parentName:"p"}," HAMi-core uses time-slice to limit device core usage. Therefore, there will be fluctuations when looking at GPU utilization through nvidia-smi"))))}p.isMDXComponent=!0}}]);