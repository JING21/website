"use strict";(self.webpackChunk_project_hami_website=self.webpackChunk_project_hami_website||[]).push([[6356],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},l=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,c=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),l=p(r),m=i,y=l["".concat(s,".").concat(m)]||l[m]||d[m]||c;return r?n.createElement(y,o(o({ref:t},u),{},{components:r})):n.createElement(y,o({ref:t},u))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var c=r.length,o=new Array(c);o[0]=l;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:i,o[1]=a;for(var p=2;p<c;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}l.displayName="MDXCreateElement"},9687:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>c,metadata:()=>a,toc:()=>p});var n=r(7462),i=(r(7294),r(3905));const c={title:"Assign to certain device type"},o=void 0,a={unversionedId:"userguide/Cambricon-device/specify-device-type-to-use",id:"userguide/Cambricon-device/specify-device-type-to-use",title:"Assign to certain device type",description:"Assign to certain device type",source:"@site/docs/userguide/Cambricon-device/specify-device-type-to-use.md",sourceDirName:"userguide/Cambricon-device",slug:"/userguide/Cambricon-device/specify-device-type-to-use",permalink:"/zh/docs/next/userguide/Cambricon-device/specify-device-type-to-use",draft:!1,editUrl:"https://github.com/karmada-io/website/edit/main/docs/userguide/Cambricon-device/specify-device-type-to-use.md",tags:[],version:"current",lastUpdatedBy:"limengxuan",lastUpdatedAt:1713870135,formattedLastUpdatedAt:"2024\u5e744\u670823\u65e5",frontMatter:{title:"Assign to certain device type"},sidebar:"docs",previous:{title:"Allocate device core usage",permalink:"/zh/docs/next/userguide/Cambricon-device/specify-device-core-usage"},next:{title:"globalview",permalink:"/zh/docs/next/userguide/monitoring/globalview"}},s={},p=[{value:"Assign to certain device type",id:"assign-to-certain-device-type",level:2}],u={toc:p};function d(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"assign-to-certain-device-type"},"Assign to certain device type"),(0,i.kt)("p",null,"You need to add parameters ",(0,i.kt)("inlineCode",{parentName:"p"},"- --enable-device-type")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"cambricon-device-plugin")," in order to support device type specification.When this option is set, different types of MLUs will generate different resource names\uff0csuch as ",(0,i.kt)("inlineCode",{parentName:"p"},"cambricon.com/mlu370.smlu.vcore")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"cambricon.com/mlu370.smlu.vmemory"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'      resources:\n        limits:\n          cambricon.com/mlu: 1 # requesting 1 MLU\n          cambricon.com/mlu370.smlu.vmemory: "20" # Each GPU contains 20% device memory\n          cambricon.com/mlu370.smlu.vcore: "10" # Each GPU contains 10% compute cores\n')))}d.isMDXComponent=!0}}]);