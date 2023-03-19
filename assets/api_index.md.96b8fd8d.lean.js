var n=Object.defineProperty,a=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,o=(a,t,s)=>t in a?n(a,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[t]=s;import{V as p,r as e,o as l,c,a as r,w as u,b as k,d as i,e as g}from"./app.d03895fd.js";var d={name:"component-doc",components:{"render-demo-0":function(){const{createTextVNode:n,resolveComponent:e,withCtx:l,createVNode:c,openBlock:r,createElementBlock:u}=p,k=n("默认按钮"),i=n("主要按钮"),g=n("成功按钮"),d=n("信息按钮"),b=n("警告按钮"),x=n("危险按钮");return((n,p)=>{for(var e in p||(p={}))t.call(p,e)&&o(n,e,p[e]);if(a)for(var e of a(p))s.call(p,e)&&o(n,e,p[e]);return n})({render:function(n,a){const t=e("xl-button");return r(),u("div",null,[c(t,null,{default:l((()=>[k])),_:1}),c(t,{type:"primary"},{default:l((()=>[i])),_:1}),c(t,{type:"success"},{default:l((()=>[g])),_:1}),c(t,{type:"info"},{default:l((()=>[d])),_:1}),c(t,{type:"warning"},{default:l((()=>[b])),_:1}),c(t,{type:"danger"},{default:l((()=>[x])),_:1})])}},{})}()}};const b='{"title":"Vitepress Demo","description":"","frontmatter":{},"headers":[{"level":2,"title":"已实现","slug":"已实现"}],"relativePath":"api/index.md","lastUpdated":1639743942000}',x=k('',6),m=i("div",null,[g("使用"),i("code",null,"type"),g("、"),i("code",null,"plain"),g("、"),i("code",null,"round"),g("和"),i("code",null,"circle"),g("属性来定义 Button 的样式。")],-1),y=i("div",{class:"language-vue"},[i("pre",null,[i("code",null,[i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"<"),g("xl-button")]),i("span",{class:"token punctuation"},">")]),g("默认按钮"),i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"</"),g("xl-button")]),i("span",{class:"token punctuation"},">")]),g("\n"),i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"<"),g("xl-button")]),g(),i("span",{class:"token attr-name"},"type"),i("span",{class:"token attr-value"},[i("span",{class:"token punctuation attr-equals"},"="),i("span",{class:"token punctuation"},'"'),g("primary"),i("span",{class:"token punctuation"},'"')]),i("span",{class:"token punctuation"},">")]),g("主要按钮"),i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"</"),g("xl-button")]),i("span",{class:"token punctuation"},">")]),g("\n"),i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"<"),g("xl-button")]),g(),i("span",{class:"token attr-name"},"type"),i("span",{class:"token attr-value"},[i("span",{class:"token punctuation attr-equals"},"="),i("span",{class:"token punctuation"},'"'),g("success"),i("span",{class:"token punctuation"},'"')]),i("span",{class:"token punctuation"},">")]),g("成功按钮"),i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"</"),g("xl-button")]),i("span",{class:"token punctuation"},">")]),g("\n"),i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"<"),g("xl-button")]),g(),i("span",{class:"token attr-name"},"type"),i("span",{class:"token attr-value"},[i("span",{class:"token punctuation attr-equals"},"="),i("span",{class:"token punctuation"},'"'),g("info"),i("span",{class:"token punctuation"},'"')]),i("span",{class:"token punctuation"},">")]),g("信息按钮"),i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"</"),g("xl-button")]),i("span",{class:"token punctuation"},">")]),g("\n"),i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"<"),g("xl-button")]),g(),i("span",{class:"token attr-name"},"type"),i("span",{class:"token attr-value"},[i("span",{class:"token punctuation attr-equals"},"="),i("span",{class:"token punctuation"},'"'),g("warning"),i("span",{class:"token punctuation"},'"')]),i("span",{class:"token punctuation"},">")]),g("警告按钮"),i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"</"),g("xl-button")]),i("span",{class:"token punctuation"},">")]),g("\n"),i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"<"),g("xl-button")]),g(),i("span",{class:"token attr-name"},"type"),i("span",{class:"token attr-value"},[i("span",{class:"token punctuation attr-equals"},"="),i("span",{class:"token punctuation"},'"'),g("danger"),i("span",{class:"token punctuation"},'"')]),i("span",{class:"token punctuation"},">")]),g("危险按钮"),i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"</"),g("xl-button")]),i("span",{class:"token punctuation"},">")]),g("\n")])])],-1),v=i("p",null,[i("img",{src:"https://tva1.sinaimg.cn/large/008i3skNly1grj6qx0v0nj31r40nsdkn.jpg",alt:"image-20210615194046416"})],-1);d.render=function(n,a,t,s,o,p){const k=e("render-demo-0"),i=e("demo");return l(),c("div",null,[x,r(i,{sourceCode:'<xl-button>默认按钮</xl-button>\n<xl-button type="primary">主要按钮</xl-button>\n<xl-button type="success">成功按钮</xl-button>\n<xl-button type="info">信息按钮</xl-button>\n<xl-button type="warning">警告按钮</xl-button>\n<xl-button type="danger">危险按钮</xl-button>\n'},{description:u((()=>[m])),highlight:u((()=>[y])),default:u((()=>[r(k)])),_:1}),v])};export default d;export{b as __pageData};
