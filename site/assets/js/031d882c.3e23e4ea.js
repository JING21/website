"use strict";(self.webpackChunk_project_hami_website=self.webpackChunk_project_hami_website||[]).push([[3146],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,y=d["".concat(c,".").concat(m)]||d[m]||l[m]||i;return n?r.createElement(y,o(o({ref:t},u),{},{components:n})):r.createElement(y,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2196:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>l,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={title:"Assign task to a certain type"},o=void 0,s={unversionedId:"userguide/NVIDIA-device/examples/specify-card-type-to-use",id:"userguide/NVIDIA-device/examples/specify-card-type-to-use",title:"Assign task to a certain type",description:"Assign task to a certain type",source:"@site/docs/userguide/NVIDIA-device/examples/specify-card-type-to-use.md",sourceDirName:"userguide/NVIDIA-device/examples",slug:"/userguide/NVIDIA-device/examples/specify-card-type-to-use",permalink:"/docs/next/userguide/NVIDIA-device/examples/specify-card-type-to-use",draft:!1,editUrl:"https://github.com/karmada-io/website/edit/main/docs/userguide/NVIDIA-device/examples/specify-card-type-to-use.md",tags:[],version:"current",lastUpdatedBy:"limengxuan",lastUpdatedAt:1713870135,formattedLastUpdatedAt:"Apr 23, 2024",frontMatter:{title:"Assign task to a certain type"},sidebar:"docs",previous:{title:"Allocate device core resource",permalink:"/docs/next/userguide/NVIDIA-device/examples/allocate-device-core"},next:{title:"Assign task to a certain GPU",permalink:"/docs/next/userguide/NVIDIA-device/examples/specify-certain-card"}},c={},p=[{value:"Assign task to a certain type",id:"assign-task-to-a-certain-type",level:2}],u={toc:p};function l(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"assign-task-to-a-certain-type"},"Assign task to a certain type"),(0,a.kt)("p",null,"To assign a task to a certain GPU type, you need only to assign the ",(0,a.kt)("inlineCode",{parentName:"p"},"nvidia.com/use-gputype")," in annotations field."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'apiVersion: v1\nkind: Pod\nmetadata:\n  name: gpu-pod\n  annotations:\n    nvidia.com/use-gputype: "A100,V100"\n    #In this example, we want to run this job on A100 or V100\nspec:\n  containers:\n    - name: ubuntu-container\n      image: ubuntu:18.04\n      command: ["bash", "-c", "sleep 86400"]\n      resources:\n        limits:\n          nvidia.com/gpu: 2 # requesting 2 vGPUs\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"NOTICE:")," ",(0,a.kt)("em",{parentName:"p"}," You can assign this task to multiple GPU types, use comma to seperate,In this example, we want to run this job on A100 or V100"))))}l.isMDXComponent=!0}}]);