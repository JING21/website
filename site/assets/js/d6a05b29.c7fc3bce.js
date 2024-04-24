"use strict";(self.webpackChunk_project_hami_website=self.webpackChunk_project_hami_website||[]).push([[7648],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},l=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),l=p(r),m=i,v=l["".concat(s,".").concat(m)]||l[m]||d[m]||o;return r?n.createElement(v,c(c({ref:t},u),{},{components:r})):n.createElement(v,c({ref:t},u))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,c=new Array(o);c[0]=l;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:i,c[1]=a;for(var p=2;p<o;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}l.displayName="MDXCreateElement"},3339:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>p});var n=r(7462),i=(r(7294),r(3905));const o={title:"Assign to certain device type"},c=void 0,a={unversionedId:"userguide/Cambricon-device/specify-device-type-to-use",id:"version-v1.3.0/userguide/Cambricon-device/specify-device-type-to-use",title:"Assign to certain device type",description:"Assign to certain device type",source:"@site/versioned_docs/version-v1.3.0/userguide/Cambricon-device/specify-device-type-to-use.md",sourceDirName:"userguide/Cambricon-device",slug:"/userguide/Cambricon-device/specify-device-type-to-use",permalink:"/docs/userguide/Cambricon-device/specify-device-type-to-use",draft:!1,editUrl:"https://github.com/karmada-io/website/edit/main/docs/userguide/Cambricon-device/specify-device-type-to-use.md",tags:[],version:"v1.3.0",lastUpdatedBy:"limengxuan",lastUpdatedAt:1713177637,formattedLastUpdatedAt:"Apr 15, 2024",frontMatter:{title:"Assign to certain device type"},sidebar:"version-v1.3.0/docs",previous:{title:"Allocate device core usage",permalink:"/docs/userguide/Cambricon-device/specify-device-core-usage"},next:{title:"globalview",permalink:"/docs/userguide/monitoring/globalview"}},s={},p=[{value:"Assign to certain device type",id:"assign-to-certain-device-type",level:2}],u={toc:p};function d(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"assign-to-certain-device-type"},"Assign to certain device type"),(0,i.kt)("p",null,"You need to add parameters ",(0,i.kt)("inlineCode",{parentName:"p"},"- --enable-device-type")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"cambricon-device-plugin")," in order to support device type specification.When this option is set, different types of MLUs will generate different resource names\uff0csuch as ",(0,i.kt)("inlineCode",{parentName:"p"},"cambricon.com/mlu370.smlu.vcore")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"cambricon.com/mlu370.smlu.vmemory"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'      resources:\n        limits:\n          cambricon.com/mlu: 1 # requesting 1 MLU\n          cambricon.com/mlu370.smlu.vmemory: "20" # Each GPU contains 20% device memory\n          cambricon.com/mlu370.smlu.vcore: "10" # Each GPU contains 10% compute cores\n')))}d.isMDXComponent=!0}}]);