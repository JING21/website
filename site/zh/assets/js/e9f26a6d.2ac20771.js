"use strict";(self.webpackChunk_project_hami_website=self.webpackChunk_project_hami_website||[]).push([[4571],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>v});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),p=u(r),v=i,m=p["".concat(s,".").concat(v)]||p[v]||d[v]||o;return r?n.createElement(m,c(c({ref:t},l),{},{components:r})):n.createElement(m,c({ref:t},l))}));function v(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,c=new Array(o);c[0]=p;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:i,c[1]=a;for(var u=2;u<o;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},8921:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>u});var n=r(7462),i=(r(7294),r(3905));const o={title:"Use exclusive GPU"},c=void 0,a={unversionedId:"userguide/NVIDIA-device/examples/use-exclusive-card",id:"version-v1.3.0/userguide/NVIDIA-device/examples/use-exclusive-card",title:"Use exclusive GPU",description:"Allocate device core to container",source:"@site/versioned_docs/version-v1.3.0/userguide/NVIDIA-device/examples/use-exclusive-card.md",sourceDirName:"userguide/NVIDIA-device/examples",slug:"/userguide/NVIDIA-device/examples/use-exclusive-card",permalink:"/zh/docs/userguide/NVIDIA-device/examples/use-exclusive-card",draft:!1,editUrl:"https://github.com/karmada-io/website/edit/main/docs/userguide/NVIDIA-device/examples/use-exclusive-card.md",tags:[],version:"v1.3.0",lastUpdatedBy:"limengxuan",lastUpdatedAt:1713177637,formattedLastUpdatedAt:"2024\u5e744\u670815\u65e5",frontMatter:{title:"Use exclusive GPU"},sidebar:"version-v1.3.0/docs",previous:{title:"Assign to certain device",permalink:"/zh/docs/userguide/NVIDIA-device/specify-device-uuid-to-use"},next:{title:"Allocate certain device memory",permalink:"/zh/docs/userguide/NVIDIA-device/examples/allocate-device-memory"}},s={},u=[{value:"Allocate device core to container",id:"allocate-device-core-to-container",level:2}],l={toc:u};function d(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"allocate-device-core-to-container"},"Allocate device core to container"),(0,i.kt)("p",null,"To use GPU in an exclusive mode, which is the default behaviour of nvidia-k8s-device-plugin, you need only to assign the ",(0,i.kt)("inlineCode",{parentName:"p"},"nvidia.com/gpu")," without other resource fields."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'apiVersion: v1\nkind: Pod\nmetadata:\n  name: gpu-pod\nspec:\n  containers:\n    - name: ubuntu-container\n      image: ubuntu:18.04\n      command: ["bash", "-c", "sleep 86400"]\n      resources:\n        limits:\n          nvidia.com/gpu: 2 # requesting 2 vGPUs\n')))}d.isMDXComponent=!0}}]);