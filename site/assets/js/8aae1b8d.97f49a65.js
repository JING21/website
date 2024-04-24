"use strict";(self.webpackChunk_project_hami_website=self.webpackChunk_project_hami_website||[]).push([[6319],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(r),m=o,v=d["".concat(l,".").concat(m)]||d[m]||p[m]||c;return r?n.createElement(v,a(a({ref:t},u),{},{components:r})):n.createElement(v,a({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,a=new Array(c);a[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var s=2;s<c;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8314:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>c,metadata:()=>i,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const c={title:"Allocate device core resource"},a=void 0,i={unversionedId:"userguide/NVIDIA-device/examples/allocate-device-core",id:"version-v1.3.0/userguide/NVIDIA-device/examples/allocate-device-core",title:"Allocate device core resource",description:"Allocate device core to container",source:"@site/versioned_docs/version-v1.3.0/userguide/NVIDIA-device/examples/allocate-device-core.md",sourceDirName:"userguide/NVIDIA-device/examples",slug:"/userguide/NVIDIA-device/examples/allocate-device-core",permalink:"/docs/userguide/NVIDIA-device/examples/allocate-device-core",draft:!1,editUrl:"https://github.com/karmada-io/website/edit/main/docs/userguide/NVIDIA-device/examples/allocate-device-core.md",tags:[],version:"v1.3.0",lastUpdatedBy:"limengxuan",lastUpdatedAt:1713177637,formattedLastUpdatedAt:"Apr 15, 2024",frontMatter:{title:"Allocate device core resource"},sidebar:"version-v1.3.0/docs",previous:{title:"Allocate device memory by percentage",permalink:"/docs/userguide/NVIDIA-device/examples/allocate-device-memory2"},next:{title:"Assign task to a certain type",permalink:"/docs/userguide/NVIDIA-device/examples/specify-card-type-to-use"}},l={},s=[{value:"Allocate device core to container",id:"allocate-device-core-to-container",level:2}],u={toc:s};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"allocate-device-core-to-container"},"Allocate device core to container"),(0,o.kt)("p",null,"To allocate a certain part of device core resource, you need only to assign the ",(0,o.kt)("inlineCode",{parentName:"p"},"nvidia.com/gpucores")," without other resource fields."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'apiVersion: v1\nkind: Pod\nmetadata:\n  name: gpu-pod\nspec:\n  containers:\n    - name: ubuntu-container\n      image: ubuntu:18.04\n      command: ["bash", "-c", "sleep 86400"]\n      resources:\n        limits:\n          nvidia.com/gpu: 2 # requesting 2 vGPUs\n      nvidia.com/gpucores: 50 # requesting 50% of each vGPU\'s core resources\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"NOTICE:")," ",(0,o.kt)("em",{parentName:"p"},"HAMi implements ",(0,o.kt)("inlineCode",{parentName:"em"},"nvidia.com/gpucores")," using time-slice, Therefore, when the core utilization is queried through the nvidia-smi command, there will be fluctuations"))))}p.isMDXComponent=!0}}]);