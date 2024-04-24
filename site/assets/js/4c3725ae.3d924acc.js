"use strict";(self.webpackChunk_project_hami_website=self.webpackChunk_project_hami_website||[]).push([[6221],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=i.createContext({}),d=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=d(e.components);return i.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},p=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(t),m=r,k=p["".concat(s,".").concat(m)]||p[m]||c[m]||a;return t?i.createElement(k,o(o({ref:n},u),{},{components:t})):i.createElement(k,o({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=p;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<a;d++)o[d]=t[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}p.displayName="MDXCreateElement"},6459:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var i=t(7462),r=(t(7294),t(3905));const a={title:"Deploy HAMi using helm"},o=void 0,l={unversionedId:"get-started/nginx-example",id:"get-started/nginx-example",title:"Deploy HAMi using helm",description:"This guide will cover:",source:"@site/docs/get-started/nginx-example.md",sourceDirName:"get-started",slug:"/get-started/nginx-example",permalink:"/docs/next/get-started/nginx-example",draft:!1,editUrl:"https://github.com/karmada-io/website/edit/main/docs/get-started/nginx-example.md",tags:[],version:"current",lastUpdatedBy:"limengxuan",lastUpdatedAt:1713870135,formattedLastUpdatedAt:"Apr 23, 2024",frontMatter:{title:"Deploy HAMi using helm"},sidebar:"docs",previous:{title:"Key Features",permalink:"/docs/next/key-features/features"},next:{title:"Prequisities",permalink:"/docs/next/installation/prequisities"}},s={},d=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"Installation",id:"installation",level:3},{value:"1. Configure nvidia-container-toolkit",id:"1-configure-nvidia-container-toolkit",level:4},{value:"Example for debian-based systems with <code>Docker</code> and <code>containerd</code>",id:"example-for-debian-based-systems-with-docker-and-containerd",level:4},{value:"Install the <code>nvidia-container-toolkit</code>",id:"install-the-nvidia-container-toolkit",level:5},{value:"Configure <code>Docker</code>",id:"configure-docker",level:5},{value:"Configure <code>containerd</code>",id:"configure-containerd",level:5},{value:"2. Label your nodes",id:"2-label-your-nodes",level:4},{value:"3. Deploy HAMi using helm:",id:"3-deploy-hami-using-helm",level:4},{value:"Demo",id:"demo",level:3},{value:"1. Submit demo task:",id:"1-submit-demo-task",level:4},{value:"Verify in container resouce control",id:"verify-in-container-resouce-control",level:4}],u={toc:d};function c(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,i.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This guide will cover:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Configure nvidia container runtime in each GPU nodes"),(0,r.kt)("li",{parentName:"ul"},"Install HAMi using helm"),(0,r.kt)("li",{parentName:"ul"},"Launch a vGPU task"),(0,r.kt)("li",{parentName:"ul"},"Check if the corresponding device resources are limited inside container")),(0,r.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://helm.sh/zh/docs/"},"Helm")," version v3+"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/tools/install-kubectl/"},"kubectl")," version v1.16+"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.nvidia.com/cuda-toolkit"},"CUDA")," version v10.2+"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.nvidia.cn/drivers/unix/"},"NvidiaDriver")," v440+")),(0,r.kt)("h3",{id:"installation"},"Installation"),(0,r.kt)("h4",{id:"1-configure-nvidia-container-toolkit"},"1. Configure nvidia-container-toolkit"),(0,r.kt)("summary",null," Configure nvidia-container-toolkit "),(0,r.kt)("p",null,"Execute the following steps on all your GPU nodes."),(0,r.kt)("p",null,"This README assumes pre-installation of NVIDIA drivers and the ",(0,r.kt)("inlineCode",{parentName:"p"},"nvidia-container-toolkit"),". Additionally, it assumes configuration of the ",(0,r.kt)("inlineCode",{parentName:"p"},"nvidia-container-runtime")," as the default low-level runtime."),(0,r.kt)("p",null,"Please see: ",(0,r.kt)("a",{parentName:"p",href:"https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/install-guide.html"},"https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/install-guide.html")),(0,r.kt)("h4",{id:"example-for-debian-based-systems-with-docker-and-containerd"},"Example for debian-based systems with ",(0,r.kt)("inlineCode",{parentName:"h4"},"Docker")," and ",(0,r.kt)("inlineCode",{parentName:"h4"},"containerd")),(0,r.kt)("h5",{id:"install-the-nvidia-container-toolkit"},"Install the ",(0,r.kt)("inlineCode",{parentName:"h5"},"nvidia-container-toolkit")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"distribution=$(. /etc/os-release;echo $ID$VERSION_ID)\ncurl -s -L https://nvidia.github.io/libnvidia-container/gpgkey | sudo apt-key add -\ncurl -s -L https://nvidia.github.io/libnvidia-container/$distribution/libnvidia-container.list | sudo tee /etc/apt/sources.list.d/libnvidia-container.list\n\nsudo apt-get update && sudo apt-get install -y nvidia-container-toolkit\n")),(0,r.kt)("h5",{id:"configure-docker"},"Configure ",(0,r.kt)("inlineCode",{parentName:"h5"},"Docker")),(0,r.kt)("p",null,"When running ",(0,r.kt)("inlineCode",{parentName:"p"},"Kubernetes")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"Docker"),", edit the configuration file, typically located at ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/docker/daemon.json"),", to set up ",(0,r.kt)("inlineCode",{parentName:"p"},"nvidia-container-runtime")," as the default low-level runtime:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "default-runtime": "nvidia",\n    "runtimes": {\n        "nvidia": {\n            "path": "/usr/bin/nvidia-container-runtime",\n            "runtimeArgs": []\n        }\n    }\n}\n')),(0,r.kt)("p",null,"And then restart ",(0,r.kt)("inlineCode",{parentName:"p"},"Docker"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo systemctl daemon-reload && systemctl restart docker\n")),(0,r.kt)("h5",{id:"configure-containerd"},"Configure ",(0,r.kt)("inlineCode",{parentName:"h5"},"containerd")),(0,r.kt)("p",null,"When running ",(0,r.kt)("inlineCode",{parentName:"p"},"Kubernetes")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"containerd"),", modify the configuration file typically located at ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/containerd/config.toml"),", to set up\n",(0,r.kt)("inlineCode",{parentName:"p"},"nvidia-container-runtime")," as the default low-level runtime:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'version = 2\n[plugins]\n  [plugins."io.containerd.grpc.v1.cri"]\n    [plugins."io.containerd.grpc.v1.cri".containerd]\n      default_runtime_name = "nvidia"\n\n      [plugins."io.containerd.grpc.v1.cri".containerd.runtimes]\n        [plugins."io.containerd.grpc.v1.cri".containerd.runtimes.nvidia]\n          privileged_without_host_devices = false\n          runtime_engine = ""\n          runtime_root = ""\n          runtime_type = "io.containerd.runc.v2"\n          [plugins."io.containerd.grpc.v1.cri".containerd.runtimes.nvidia.options]\n            BinaryName = "/usr/bin/nvidia-container-runtime"\n')),(0,r.kt)("p",null,"And then restart ",(0,r.kt)("inlineCode",{parentName:"p"},"containerd"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo systemctl daemon-reload && systemctl restart containerd\n")),(0,r.kt)("h4",{id:"2-label-your-nodes"},"2. Label your nodes"),(0,r.kt)("p",null,'Label your GPU nodes for scheduling with HAMi by adding the label "gpu=on". Without this label, the nodes cannot be managed by our scheduler.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl label nodes {nodeid} gpu=on\n")),(0,r.kt)("h4",{id:"3-deploy-hami-using-helm"},"3. Deploy HAMi using helm:"),(0,r.kt)("p",null,"First, you need to check your Kubernetes version by using the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl version\n")),(0,r.kt)("p",null,"Then, add our repo in helm"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"helm repo add hami-charts https://project-hami.github.io/HAMi/\n")),(0,r.kt)("p",null,"During installation, set the Kubernetes scheduler image version to match your Kubernetes server version. For instance, if your cluster server version is 1.16.8, use the following command for deployment:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"helm install hami hami-charts/hami --set scheduler.kubeScheduler.imageTag=v1.16.8 -n kube-system\n")),(0,r.kt)("p",null,"If everything goes well, you will see both vgpu-device-plugin and vgpu-scheduler pods are in the Running state"),(0,r.kt)("h3",{id:"demo"},"Demo"),(0,r.kt)("h4",{id:"1-submit-demo-task"},"1. Submit demo task:"),(0,r.kt)("p",null,"Containers can now request NVIDIA vGPUs using the `nvidia.com/gpu`` resource type."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'apiVersion: v1\nkind: Pod\nmetadata:\n  name: gpu-pod\nspec:\n  containers:\n    - name: ubuntu-container\n      image: ubuntu:18.04\n      command: ["bash", "-c", "sleep 86400"]\n      resources:\n        limits:\n          nvidia.com/gpu: 1 # requesting 1 vGPUs\n          nvidia.com/gpumem: 10240 # Each vGPU contains 3000m device memory \uff08Optional,Integer\uff09\n')),(0,r.kt)("h4",{id:"verify-in-container-resouce-control"},"Verify in container resouce control"),(0,r.kt)("p",null,"Execute the following query command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl exec -it gpu-pod nvidia-smi\n")),(0,r.kt)("p",null,"The result should be "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[HAMI-core Msg(28:140561996502848:libvgpu.c:836)]: Initializing.....\nWed Apr 10 09:28:58 2024       \n+-----------------------------------------------------------------------------------------+\n| NVIDIA-SMI 550.54.15              Driver Version: 550.54.15      CUDA Version: 12.4     |\n|-----------------------------------------+------------------------+----------------------+\n| GPU  Name                 Persistence-M | Bus-Id          Disp.A | Volatile Uncorr. ECC |\n| Fan  Temp   Perf          Pwr:Usage/Cap |           Memory-Usage | GPU-Util  Compute M. |\n|                                         |                        |               MIG M. |\n|=========================================+========================+======================|\n|   0  Tesla V100-PCIE-32GB           On  |   00000000:3E:00.0 Off |                    0 |\n| N/A   29C    P0             24W /  250W |       0MiB /  10240MiB |      0%      Default |\n|                                         |                        |                  N/A |\n+-----------------------------------------+------------------------+----------------------+\n                                                                                         \n+-----------------------------------------------------------------------------------------+\n| Processes:                                                                              |\n|  GPU   GI   CI        PID   Type   Process name                              GPU Memory |\n|        ID   ID                                                               Usage      |\n|=========================================================================================|\n|  No running processes found                                                             |\n+-----------------------------------------------------------------------------------------+\n[HAMI-core Msg(28:140561996502848:multiprocess_memory_limit.c:434)]: Calling exit handler 28\n")))}c.isMDXComponent=!0}}]);