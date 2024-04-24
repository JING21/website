"use strict";(self.webpackChunk_project_hami_website=self.webpackChunk_project_hami_website||[]).push([[1757],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>d});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var m=n.createContext({}),l=function(e){var r=n.useContext(m),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=l(e.components);return n.createElement(m.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,c=e.originalType,m=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),p=l(t),d=o,v=p["".concat(m,".").concat(d)]||p[d]||u[d]||c;return t?n.createElement(v,i(i({ref:r},s),{},{components:t})):n.createElement(v,i({ref:r},s))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var c=t.length,i=new Array(c);i[0]=p;var a={};for(var m in r)hasOwnProperty.call(r,m)&&(a[m]=r[m]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var l=2;l<c;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},9926:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>m,contentTitle:()=>i,default:()=>u,frontMatter:()=>c,metadata:()=>a,toc:()=>l});var n=t(7462),o=(t(7294),t(3905));const c={title:"Allocate device memory"},i=void 0,a={unversionedId:"userguide/Cambricon-device/specify-device-memory-usage",id:"version-v1.3.0/userguide/Cambricon-device/specify-device-memory-usage",title:"Allocate device memory",description:"Allocate device memory to container",source:"@site/versioned_docs/version-v1.3.0/userguide/Cambricon-device/specify-device-memory-usage.md",sourceDirName:"userguide/Cambricon-device",slug:"/userguide/Cambricon-device/specify-device-memory-usage",permalink:"/docs/userguide/Cambricon-device/specify-device-memory-usage",draft:!1,editUrl:"https://github.com/karmada-io/website/edit/main/docs/userguide/Cambricon-device/specify-device-memory-usage.md",tags:[],version:"v1.3.0",lastUpdatedBy:"limengxuan",lastUpdatedAt:1713177637,formattedLastUpdatedAt:"Apr 15, 2024",frontMatter:{title:"Allocate device memory"},sidebar:"version-v1.3.0/docs",previous:{title:"Enable cambricon MLU sharing",permalink:"/docs/userguide/Cambricon-device/enable-cambricon-mlu-sharing"},next:{title:"Allocate device core usage",permalink:"/docs/userguide/Cambricon-device/specify-device-core-usage"}},m={},l=[{value:"Allocate device memory to container",id:"allocate-device-memory-to-container",level:2}],s={toc:l};function u(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"allocate-device-memory-to-container"},"Allocate device memory to container"),(0,o.kt)("p",null,"Allocate a percentage size of device memory by specify resources such as ",(0,o.kt)("inlineCode",{parentName:"p"},"cambricon.com/mlu.smlu.vmemory"),".\nOptional, Each unit of ",(0,o.kt)("inlineCode",{parentName:"p"},"cambricon.com/mlu.smlu.vmemory")," equals to 1% of device memory."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'      resources:\n        limits:\n          cambricon.com/mlu: 1 # requesting 1 MLU\n          cambricon.com/mlu.smlu.vmemory: "20" # Each GPU contains 20% device memory\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"NOTICE:")," ",(0,o.kt)("em",{parentName:"p"},"Depending on the parameters of cambricon-device-plugin, resource name can be ",(0,o.kt)("inlineCode",{parentName:"em"},"cambricon.com/mlu370.smlu.vmemory")," or other types"))))}u.isMDXComponent=!0}}]);