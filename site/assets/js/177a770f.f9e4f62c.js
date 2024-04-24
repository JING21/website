"use strict";(self.webpackChunk_project_hami_website=self.webpackChunk_project_hami_website||[]).push([[3235],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>d});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=p(a),d=o,h=m["".concat(c,".").concat(d)]||m[d]||u[d]||l;return a?n.createElement(h,r(r({ref:t},s),{},{components:a})):n.createElement(h,r({ref:t},s))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=a.length,r=new Array(l);r[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,r[1]=i;for(var p=2;p<l;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3042:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=a(7462),o=(a(7294),a(3905));const l={title:"Bash auto-completion on Linux"},r=void 0,i={unversionedId:"developers/bash-auto-completion-on-linux",id:"version-v1.3.0/developers/bash-auto-completion-on-linux",title:"Bash auto-completion on Linux",description:"Introduction",source:"@site/versioned_docs/version-v1.3.0/developers/bash-auto-completion-on-linux.md",sourceDirName:"developers",slug:"/developers/bash-auto-completion-on-linux",permalink:"/docs/developers/bash-auto-completion-on-linux",draft:!1,editUrl:"https://github.com/karmada-io/website/edit/main/docs/developers/bash-auto-completion-on-linux.md",tags:[],version:"v1.3.0",lastUpdatedBy:"limengxuan",lastUpdatedAt:1713177637,formattedLastUpdatedAt:"Apr 15, 2024",frontMatter:{title:"Bash auto-completion on Linux"}},c={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Install bash-completion",id:"install-bash-completion",level:2},{value:"Enable karmadactl autocompletion",id:"enable-karmadactl-autocompletion",level:2},{value:"Enable kubectl-karmada autocompletion",id:"enable-kubectl-karmada-autocompletion",level:2}],s={toc:p};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"The karmadactl completion script for Bash can be generated with the command karmadactl completion bash. Sourcing the completion script in your shell enables karmadactl autocompletion."),(0,o.kt)("p",null,"However, the completion script depends on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/scop/bash-completion"},"bash-completion"),", which means that you have to install this software first (you can test if you have bash-completion already installed by running ",(0,o.kt)("inlineCode",{parentName:"p"},"type _init_completion"),")."),(0,o.kt)("h2",{id:"install-bash-completion"},"Install bash-completion"),(0,o.kt)("p",null,"bash-completion is provided by many package managers (see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/scop/bash-completion#installation"},"here"),"). You can install it with ",(0,o.kt)("inlineCode",{parentName:"p"},"apt-get install bash-completion")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"yum install bash-completion"),", etc."),(0,o.kt)("p",null,"The above commands create ",(0,o.kt)("inlineCode",{parentName:"p"},"/usr/share/bash-completion/bash_completion"),", which is the main script of bash-completion. Depending on your package manager, you have to manually source this file in your ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.bashrc")," file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"source /usr/share/bash-completion/bash_completion\n")),(0,o.kt)("p",null,"Reload your shell and verify that bash-completion is correctly installed by typing ",(0,o.kt)("inlineCode",{parentName:"p"},"type _init_completion"),"."),(0,o.kt)("h2",{id:"enable-karmadactl-autocompletion"},"Enable karmadactl autocompletion"),(0,o.kt)("p",null,"You now need to ensure that the karmadactl completion script gets sourced in all your shell sessions. There are two ways in which you can do this:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Source the completion script in your ~/.bashrc file:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"echo 'source <(karmadactl completion bash)' >>~/.bashrc\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Add the completion script to the /etc/bash_completion.d directory:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"karmadactl completion bash >/etc/bash_completion.d/karmadactl\n")),(0,o.kt)("p",null,"If you have an alias for karmadactl, you can extend shell completion to work with that alias:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"echo 'alias km=karmadactl' >>~/.bashrc\necho 'complete -F __start_karmadactl km' >>~/.bashrc\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")," bash-completion sources all completion scripts in /etc/bash_completion.d.")),(0,o.kt)("p",null,"Both approaches are equivalent. After reloading your shell, karmadactl autocompletion should be working."),(0,o.kt)("h2",{id:"enable-kubectl-karmada-autocompletion"},"Enable kubectl-karmada autocompletion"),(0,o.kt)("p",null,"Currently, kubectl plugins do not support autocomplete, but it is already planned in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kubernetes/kubernetes/issues/74178"},"Command line completion for kubectl plugins"),". "),(0,o.kt)("p",null,"We will update the documentation as soon as it does."))}u.isMDXComponent=!0}}]);