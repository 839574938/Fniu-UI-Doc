var t=Object.defineProperty,a=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,e=(a,s,n)=>s in a?t(a,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[s]=n,o=(t,o)=>{for(var c in o||(o={}))s.call(o,c)&&e(t,c,o[c]);if(a)for(var c of a(o))n.call(o,c)&&e(t,c,o[c]);return t};import{V as c,r as p,o as u,c as l,a as k,w as i,d as r,e as d,b as g}from"./app.d03895fd.js";var m={name:"component-doc",components:{"render-demo-0":function(){const{createTextVNode:t,resolveComponent:a,withCtx:s,createVNode:n,openBlock:e,createElementBlock:p}=c,u=t("默认状态"),l=t("默认状态"),k=t("默认状态"),i=t("默认状态"),r=t("默认状态");return o({render:function(t,o){const c=a("c-status");return e(),p("div",null,[n(c,null,{default:s((()=>[u])),_:1}),n(c,{type:"info"},{default:s((()=>[l])),_:1}),n(c,{type:"warning"},{default:s((()=>[k])),_:1}),n(c,{type:"success"},{default:s((()=>[i])),_:1}),n(c,{type:"danger"},{default:s((()=>[r])),_:1})])}},{})}(),"render-demo-1":function(){const{createTextVNode:t,resolveComponent:a,withCtx:s,createVNode:n,openBlock:e,createElementBlock:p}=c,u=t("默认状态"),l=t("默认状态"),k=t("默认状态"),i=t("默认状态"),r=t("默认状态");return o({render:function(t,o){const c=a("c-status");return e(),p("div",null,[n(c,{shape:"dot"},{default:s((()=>[u])),_:1}),n(c,{shape:"dot",type:"info"},{default:s((()=>[l])),_:1}),n(c,{shape:"dot",type:"warning"},{default:s((()=>[k])),_:1}),n(c,{shape:"dot",type:"success"},{default:s((()=>[i])),_:1}),n(c,{shape:"dot",type:"danger"},{default:s((()=>[r])),_:1})])}},{})}(),"render-demo-2":function(){const{createTextVNode:t,resolveComponent:a,withCtx:s,createVNode:n,openBlock:e,createElementBlock:p}=c,u=t("默认状态"),l=t("默认状态"),k=t("默认状态"),i=t("默认状态"),r=t("默认状态");return o({render:function(t,o){const c=a("c-status");return e(),p("div",null,[n(c,{shape:"text"},{default:s((()=>[u])),_:1}),n(c,{shape:"text",type:"info"},{default:s((()=>[l])),_:1}),n(c,{shape:"text",type:"warning"},{default:s((()=>[k])),_:1}),n(c,{shape:"text",type:"success"},{default:s((()=>[i])),_:1}),n(c,{shape:"text",type:"danger"},{default:s((()=>[r])),_:1})])}},{})}(),"render-demo-3":function(){const{createTextVNode:t,resolveComponent:a,withCtx:s,createVNode:n,openBlock:e,createElementBlock:p}=c,u=t("默认状态");return o({render:function(t,o){const c=a("c-status");return e(),p("div",null,[n(c,{color:"#fff",closable:"",size:"large",onClose:t.onClose},{default:s((()=>[u])),_:1},8,["onClose"])])}},{setup:()=>({onClose:()=>{console.log("close")}})})}()}};const h='{"title":"C-Status 状态组件","description":"","frontmatter":{},"headers":[{"level":2,"title":"Tag 类型","slug":"tag-类型"},{"level":2,"title":"Dot 类型","slug":"dot-类型"},{"level":2,"title":"Text 类型","slug":"text-类型"},{"level":2,"title":"Element自带属性","slug":"element自带属性"},{"level":2,"title":"Status 属性","slug":"status-属性"}],"relativePath":"components/status.md","lastUpdated":1666097170005}',f=r("h1",{id:"c-status-状态组件"},"C-Status 状态组件",-1),v=r("p",null,[d("二次封装"),r("code",null,"Element-Plus"),d("tag组件。")],-1),y=r("h2",{id:"tag-类型"},"Tag 类型",-1),x=r("div",{class:"language-vue"},[r("pre",null,[r("code",null,[d("\n"),r("span",{class:"token tag"},[r("span",{class:"token tag"},[r("span",{class:"token punctuation"},"<"),d("template")]),r("span",{class:"token punctuation"},">")]),d("\n  "),r("span",{class:"token tag"},[r("span",{class:"token tag"},[r("span",{class:"token punctuation"},"<"),d("c-status")]),r("span",{class:"token punctuation"},">")]),d("默认状态"),r("span",{class:"token tag"},[r("span",{class:"token tag"},[r("span",{class:"token punctuation"},"</"),d("c-status")]),r("span",{class:"token punctuation"},">")]),d("\n  "),r("span",{class:"token tag"},[r("span",{class:"token tag"},[r("span",{class:"token punctuation"},"<"),d("c-status")]),d(),r("span",{class:"token attr-name"},"type"),r("span",{class:"token attr-value"},[r("span",{class:"token punctuation attr-equals"},"="),r("span",{class:"token punctuation"},'"'),d("info"),r("span",{class:"token punctuation"},'"')]),r("span",{class:"token punctuation"},">")]),d("默认状态"),r("span",{class:"token tag"},[r("span",{class:"token tag"},[r("span",{class:"token punctuation"},"</"),d("c-status")]),r("span",{class:"token punctuation"},">")]),d("\n  "),r("span",{class:"token tag"},[r("span",{class:"token tag"},[r("span",{class:"token punctuation"},"<"),d("c-status")]),d(),r("span",{class:"token attr-name"},"type"),r("span",{class:"token attr-value"},[r("span",{class:"token punctuation attr-equals"},"="),r("span",{class:"token punctuation"},'"'),d("warning"),r("span",{class:"token punctuation"},'"')]),r("span",{class:"token punctuation"},">")]),d("默认状态"),r("span",{class:"token tag"},[r("span",{class:"token tag"},[r("span",{class:"token punctuation"},"</"),d("c-status")]),r("span",{class:"token punctuation"},">")]),d("\n  "),r("span",{class:"token tag"},[r("span",{class:"token tag"},[r("span",{class:"token punctuation"},"<"),d("c-status")]),d(),r("span",{class:"token attr-name"},"type"),r("span",{class:"token attr-value"},[r("span",{class:"token punctuation attr-equals"},"="),r("span",{class:"token punctuation"},'"'),d("success"),r("span",{class:"token punctuation"},'"')]),r("span",{class:"token punctuation"},">")]),d("默认状态"),r("span",{class:"token tag"},[r("span",{class:"token tag"},[r("span",{class:"token punctuation"},"</"),d("c-status")]),r("span",{class:"token punctuation"},">")]),d("\n  "),r("span",{class:"token tag"},[r("span",{class:"token tag"},[r("span",{class:"token punctuation"},"<"),d("c-status")]),d(),r("span",{class:"token attr-name"},"type"),r("span",{class:"token attr-value"},[r("span",{class:"token punctuation attr-equals"},"="),r("span",{class:"token punctuation"},'"'),d("danger"),r("span",{class:"token punctuation"},'"')]),r("span",{class:"token punctuation"},">")]),d("默认状态"),r("span",{class:"token tag"},[r("span",{class:"token tag"},[r("span",{class:"token punctuation"},"</"),d("c-status")]),r("span",{class:"token punctuation"},">")]),d("\n"),r("span",{class:"token tag"},[r("span",{class:"token tag"},[r("span",{class:"token punctuation"},"</"),d("template")]),r("span",{class:"token punctuation"},">")]),d("\n")])])],-1),_=r("h2",{id:"dot-类型"},"Dot 类型",-1),C=r("div",{class:"language-vue"},[r("pre",null,[r("code",null,[d("\n"),r("span",{class:"token tag"},[r("span",{class:"token tag"},[r("span",{class:"token punctuation"},"<"),d("template")]),r("span",{class:"token punctuation"},">")]),d("\n  "),r("span",{class:"token tag"},[r("span",{class:"token tag"},[r("span",{class:"token punctuation"},"<"),d("c-status")]),d(),r("span",{class:"token attr-name"},"shape"),r("span",{class:"token attr-value"},[r("span",{class:"token punctuation attr-equals"},"="),r("span",{class:"token punctuation"},'"'),d("dot"),r("span",{class:"token punctuation"},'"')]),r("span",{class:"token punctuation"},">")]),d("默认状态"),r("span",{class:"token tag"},[r("span",{class:"token tag"},[r("span",{class:"token punctuation"},"</"),d("c-status")]),r("span",{class:"token punctuation"},">")]),d("\n  "),r("span",{class:"token tag"},[r("span",{class:"token tag"},[r("span",{class:"token punctuation"},"<"),d("c-status")]),d(),r("span",{class:"token attr-name"},"shape"),r("span",{class:"token attr-value"},[r("span",{class:"token punctuation attr-equals"},"="),r("span",{class:"token punctuation"},'"'),d("dot"),r("span",{class:"token punctuation"},'"')]),d(),r("span",{class:"token attr-name"},"type"),r("span",{class:"token attr-value"},[r("span",{class:"token punctuation attr-equals"},"="),r("span",{class:"token punctuation"},'"'),d("info"),r("span",{class:"token punctuation"},'"')]),r("span",{class:"token punctuation"},">")]),d("默认状态"),r("span",{class:"token tag"},[r("span",{class:"token tag"},[r("span",{class:"token punctuation"},"</"),d("c-status")]),r("span",{class:"token punctuation"},">")]),d("\n  "),r("span",{class:"token tag"},[r("span",{class:"token tag"},[r("span",{class:"token punctuation"},"<"),d("c-status")]),d(),r("span",{class:"token attr-name"},"shape"),r("span",{class:"token attr-value"},[r("span",{class:"token punctuation attr-equals"},"="),r("span",{class:"token punctuation"},'"'),d("dot"),r("span",{class:"token punctuation"},'"')]),d(),r("span",{class:"token attr-name"},"type"),r("span",{class:"token attr-value"},[r("span",{class:"token punctuation attr-equals"},"="),r("span",{class:"token punctuation"},'"'),d("warning"),r("span",{class:"token punctuation"},'"')]),r("span",{class:"token punctuation"},">")]),d("默认状态"),r("span",{class:"token tag"},[r("span",{class:"token tag"},[r("span",{class:"token punctuation"},"</"),d("c-status")]),r("span",{class:"token punctuation"},">")]),d("\n  "),r("span",{class:"token tag"},[r("span",{class:"token tag"},[r("span",{class:"token punctuation"},"<"),d("c-status")]),d(),r("span",{class:"token attr-name"},"shape"),r("span",{class:"token attr-value"},[r("span",{class:"token punctuation attr-equals"},"="),r("span",{class:"token punctuation"},'"'),d("dot"),r("span",{class:"token punctuation"},'"')]),d(),r("span",{class:"token attr-name"},"type"),r("span",{class:"token attr-value"},[r("span",{class:"token punctuation attr-equals"},"="),r("span",{class:"token punctuation"},'"'),d("success"),r("span",{class:"token punctuation"},'"')]),r("span",{class:"token punctuation"},">")]),d("默认状态"),r("span",{class:"token tag"},[r("span",{class:"token tag"},[r("span",{class:"token punctuation"},"</"),d("c-status")]),r("span",{class:"token punctuation"},">")]),d("\n  "),r("span",{class:"token tag"},[r("span",{class:"token tag"},[r("span",{class:"token punctuation"},"<"),d("c-status")]),d(),r("span",{class:"token attr-name"},"shape"),r("span",{class:"token attr-value"},[r("span",{class:"token punctuation attr-equals"},"="),r("span",{class:"token punctuation"},'"'),d("dot"),r("span",{class:"token punctuation"},'"')]),d(),r("span",{class:"token attr-name"},"type"),r("span",{class:"token attr-value"},[r("span",{class:"token punctuation attr-equals"},"="),r("span",{class:"token punctuation"},'"'),d("danger"),r("span",{class:"token punctuation"},'"')]),r("span",{class:"token punctuation"},">")]),d("默认状态"),r("span",{class:"token tag"},[r("span",{class:"token tag"},[r("span",{class:"token punctuation"},"</"),d("c-status")]),r("span",{class:"token punctuation"},">")]),d("\n"),r("span",{class:"token tag"},[r("span",{class:"token tag"},[r("span",{class:"token punctuation"},"</"),d("template")]),r("span",{class:"token punctuation"},">")]),d("\n")])])],-1),q=r("h2",{id:"text-类型"},"Text 类型",-1),w=r("div",{class:"language-vue"},[r("pre",null,[r("code",null,[d("\n"),r("span",{class:"token tag"},[r("span",{class:"token tag"},[r("span",{class:"token punctuation"},"<"),d("template")]),r("span",{class:"token punctuation"},">")]),d("\n  "),r("span",{class:"token tag"},[r("span",{class:"token tag"},[r("span",{class:"token punctuation"},"<"),d("c-status")]),d(),r("span",{class:"token attr-name"},"shape"),r("span",{class:"token attr-value"},[r("span",{class:"token punctuation attr-equals"},"="),r("span",{class:"token punctuation"},'"'),d("text"),r("span",{class:"token punctuation"},'"')]),r("span",{class:"token punctuation"},">")]),d("默认状态"),r("span",{class:"token tag"},[r("span",{class:"token tag"},[r("span",{class:"token punctuation"},"</"),d("c-status")]),r("span",{class:"token punctuation"},">")]),d("\n  "),r("span",{class:"token tag"},[r("span",{class:"token tag"},[r("span",{class:"token punctuation"},"<"),d("c-status")]),d(),r("span",{class:"token attr-name"},"shape"),r("span",{class:"token attr-value"},[r("span",{class:"token punctuation attr-equals"},"="),r("span",{class:"token punctuation"},'"'),d("text"),r("span",{class:"token punctuation"},'"')]),d(),r("span",{class:"token attr-name"},"type"),r("span",{class:"token attr-value"},[r("span",{class:"token punctuation attr-equals"},"="),r("span",{class:"token punctuation"},'"'),d("info"),r("span",{class:"token punctuation"},'"')]),r("span",{class:"token punctuation"},">")]),d("默认状态"),r("span",{class:"token tag"},[r("span",{class:"token tag"},[r("span",{class:"token punctuation"},"</"),d("c-status")]),r("span",{class:"token punctuation"},">")]),d("\n  "),r("span",{class:"token tag"},[r("span",{class:"token tag"},[r("span",{class:"token punctuation"},"<"),d("c-status")]),d(),r("span",{class:"token attr-name"},"shape"),r("span",{class:"token attr-value"},[r("span",{class:"token punctuation attr-equals"},"="),r("span",{class:"token punctuation"},'"'),d("text"),r("span",{class:"token punctuation"},'"')]),d(),r("span",{class:"token attr-name"},"type"),r("span",{class:"token attr-value"},[r("span",{class:"token punctuation attr-equals"},"="),r("span",{class:"token punctuation"},'"'),d("warning"),r("span",{class:"token punctuation"},'"')]),r("span",{class:"token punctuation"},">")]),d("默认状态"),r("span",{class:"token tag"},[r("span",{class:"token tag"},[r("span",{class:"token punctuation"},"</"),d("c-status")]),r("span",{class:"token punctuation"},">")]),d("\n  "),r("span",{class:"token tag"},[r("span",{class:"token tag"},[r("span",{class:"token punctuation"},"<"),d("c-status")]),d(),r("span",{class:"token attr-name"},"shape"),r("span",{class:"token attr-value"},[r("span",{class:"token punctuation attr-equals"},"="),r("span",{class:"token punctuation"},'"'),d("text"),r("span",{class:"token punctuation"},'"')]),d(),r("span",{class:"token attr-name"},"type"),r("span",{class:"token attr-value"},[r("span",{class:"token punctuation attr-equals"},"="),r("span",{class:"token punctuation"},'"'),d("success"),r("span",{class:"token punctuation"},'"')]),r("span",{class:"token punctuation"},">")]),d("默认状态"),r("span",{class:"token tag"},[r("span",{class:"token tag"},[r("span",{class:"token punctuation"},"</"),d("c-status")]),r("span",{class:"token punctuation"},">")]),d("\n  "),r("span",{class:"token tag"},[r("span",{class:"token tag"},[r("span",{class:"token punctuation"},"<"),d("c-status")]),d(),r("span",{class:"token attr-name"},"shape"),r("span",{class:"token attr-value"},[r("span",{class:"token punctuation attr-equals"},"="),r("span",{class:"token punctuation"},'"'),d("text"),r("span",{class:"token punctuation"},'"')]),d(),r("span",{class:"token attr-name"},"type"),r("span",{class:"token attr-value"},[r("span",{class:"token punctuation attr-equals"},"="),r("span",{class:"token punctuation"},'"'),d("danger"),r("span",{class:"token punctuation"},'"')]),r("span",{class:"token punctuation"},">")]),d("默认状态"),r("span",{class:"token tag"},[r("span",{class:"token tag"},[r("span",{class:"token punctuation"},"</"),d("c-status")]),r("span",{class:"token punctuation"},">")]),d("\n"),r("span",{class:"token tag"},[r("span",{class:"token tag"},[r("span",{class:"token punctuation"},"</"),d("template")]),r("span",{class:"token punctuation"},">")]),d("\n")])])],-1),b=r("h2",{id:"element自带属性"},"Element自带属性",-1),T=r("div",{class:"language-vue"},[r("pre",null,[r("code",null,[d("\n"),r("span",{class:"token tag"},[r("span",{class:"token tag"},[r("span",{class:"token punctuation"},"<"),d("template")]),r("span",{class:"token punctuation"},">")]),d("\n  "),r("span",{class:"token tag"},[r("span",{class:"token tag"},[r("span",{class:"token punctuation"},"<"),d("c-status")]),d(),r("span",{class:"token attr-name"},"color"),r("span",{class:"token attr-value"},[r("span",{class:"token punctuation attr-equals"},"="),r("span",{class:"token punctuation"},'"'),d("#fff"),r("span",{class:"token punctuation"},'"')]),d(),r("span",{class:"token attr-name"},"closable"),d(),r("span",{class:"token attr-name"},"size"),r("span",{class:"token attr-value"},[r("span",{class:"token punctuation attr-equals"},"="),r("span",{class:"token punctuation"},'"'),d("large"),r("span",{class:"token punctuation"},'"')]),d(),r("span",{class:"token attr-name"},"@close"),r("span",{class:"token attr-value"},[r("span",{class:"token punctuation attr-equals"},"="),r("span",{class:"token punctuation"},'"'),d("onClose"),r("span",{class:"token punctuation"},'"')]),r("span",{class:"token punctuation"},">")]),d("默认状态"),r("span",{class:"token tag"},[r("span",{class:"token tag"},[r("span",{class:"token punctuation"},"</"),d("c-status")]),r("span",{class:"token punctuation"},">")]),d("\n"),r("span",{class:"token tag"},[r("span",{class:"token tag"},[r("span",{class:"token punctuation"},"</"),d("template")]),r("span",{class:"token punctuation"},">")]),d("\n"),r("span",{class:"token tag"},[r("span",{class:"token tag"},[r("span",{class:"token punctuation"},"<"),d("script")]),r("span",{class:"token punctuation"},">")]),r("span",{class:"token script"},[r("span",{class:"token language-javascript"},[d("\n"),r("span",{class:"token keyword"},"export"),d(),r("span",{class:"token keyword"},"default"),d(),r("span",{class:"token punctuation"},"{"),d("\n  "),r("span",{class:"token function"},"setup"),r("span",{class:"token punctuation"},"("),r("span",{class:"token punctuation"},")"),d(),r("span",{class:"token punctuation"},"{"),d("\n    "),r("span",{class:"token keyword"},"const"),d(),r("span",{class:"token function-variable function"},"onClose"),d(),r("span",{class:"token operator"},"="),d(),r("span",{class:"token punctuation"},"("),r("span",{class:"token punctuation"},")"),d(),r("span",{class:"token operator"},"=>"),d(),r("span",{class:"token punctuation"},"{"),d("\n      console"),r("span",{class:"token punctuation"},"."),r("span",{class:"token function"},"log"),r("span",{class:"token punctuation"},"("),r("span",{class:"token string"},"'close'"),r("span",{class:"token punctuation"},")"),d("\n    "),r("span",{class:"token punctuation"},"}"),d("\n    "),r("span",{class:"token keyword"},"return"),d(),r("span",{class:"token punctuation"},"{"),d("onClose"),r("span",{class:"token punctuation"},"}"),d("\n  "),r("span",{class:"token punctuation"},"}"),d("\n"),r("span",{class:"token punctuation"},"}"),d("\n\n")])]),r("span",{class:"token tag"},[r("span",{class:"token tag"},[r("span",{class:"token punctuation"},"</"),d("script")]),r("span",{class:"token punctuation"},">")]),d("\n")])])],-1),V=g('',2);m.render=function(t,a,s,n,e,o){const c=p("render-demo-0"),r=p("demo"),d=p("render-demo-1"),g=p("render-demo-2"),m=p("render-demo-3");return u(),l("div",null,[f,v,y,k(r,{sourceCode:'\n<template>\n  <c-status>默认状态</c-status>\n  <c-status type="info">默认状态</c-status>\n  <c-status type="warning">默认状态</c-status>\n  <c-status type="success">默认状态</c-status>\n  <c-status type="danger">默认状态</c-status>\n</template>\n'},{highlight:i((()=>[x])),default:i((()=>[k(c)])),_:1}),_,k(r,{sourceCode:'\n<template>\n  <c-status shape="dot">默认状态</c-status>\n  <c-status shape="dot" type="info">默认状态</c-status>\n  <c-status shape="dot" type="warning">默认状态</c-status>\n  <c-status shape="dot" type="success">默认状态</c-status>\n  <c-status shape="dot" type="danger">默认状态</c-status>\n</template>\n'},{highlight:i((()=>[C])),default:i((()=>[k(d)])),_:1}),q,k(r,{sourceCode:'\n<template>\n  <c-status shape="text">默认状态</c-status>\n  <c-status shape="text" type="info">默认状态</c-status>\n  <c-status shape="text" type="warning">默认状态</c-status>\n  <c-status shape="text" type="success">默认状态</c-status>\n  <c-status shape="text" type="danger">默认状态</c-status>\n</template>\n'},{highlight:i((()=>[w])),default:i((()=>[k(g)])),_:1}),b,k(r,{sourceCode:'\n<template>\n  <c-status color="#fff" closable size="large" @close="onClose">默认状态</c-status>\n</template>\n<script>\nexport default {\n  setup() {\n    const onClose = () => {\n      console.log(\'close\')\n    }\n    return {onClose}\n  }\n}\n\n<\/script>\n'},{highlight:i((()=>[T])),default:i((()=>[k(m)])),_:1}),V])};export default m;export{h as __pageData};
