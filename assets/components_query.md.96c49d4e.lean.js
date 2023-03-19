var n=Object.defineProperty,t=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,o=(t,s,a)=>s in t?n(t,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[s]=a;import{V as e,r as p,o as c,c as l,a as u,w as r,d as k,e as i,b as d}from"./app.d03895fd.js";var m={name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:n,createVNode:p,withCtx:c,createTextVNode:l,createElementVNode:u,openBlock:r,createElementBlock:k}=e,i=l("重置"),d=l("提交");return((n,e)=>{for(var p in e||(e={}))s.call(e,p)&&o(n,p,e[p]);if(t)for(var p of t(e))a.call(e,p)&&o(n,p,e[p]);return n})({render:function(t,s){const a=n("el-input"),o=n("el-form-item"),e=n("c-query"),l=n("el-button");return r(),k("div",null,[u("div",null,[p(e,{modelValue:t.queryData,"onUpdate:modelValue":s[1]||(s[1]=n=>t.queryData=n),columns:t.columns,"label-position":"top",ref:"queryForm"},{password:c((()=>[p(o,{label:"密码"},{default:c((()=>[p(a,{modelValue:t.queryData.password,"onUpdate:modelValue":s[0]||(s[0]=n=>t.queryData.password=n),placeholder:"请输入密码"},null,8,["modelValue"])])),_:1})])),_:1},8,["modelValue","columns"]),p(l,{onClick:t.resetForm},{default:c((()=>[i])),_:1},8,["onClick"]),p(l,{onClick:t.submitForm,type:"primary"},{default:c((()=>[d])),_:1},8,["onClick"])])])}},{setup(){const n=[{value:"0",label:"text0"},{value:"1",label:"text1"},{value:"2",label:"text2",disabled:!0}],t=null;return{queryData:{name:"",password:"",select:null,switch:!1,date:null},columns:[{type:"input",key:"name",attrsFormItem:{label:"姓名777"},attrsCol:{span:6},required:!0,rules:[{min:3,max:5,message:"Length should be 3 to 5",trigger:"blur"}]},{type:"input",key:"password",label:"密码",attrsCol:{span:6}},{type:"select",key:"select",label:"选择框",options:n,required:!0,attrs:{onChange:n=>{console.log(n)}}},{type:"switch",key:"switch",label:"及时配送",attrs:{activeValue:"100",inactiveValue:"0"}},{type:"checkbox",key:"checkbox",label:"checkbox",options:n},{type:"radio",key:"radio",label:"单选按钮",options:n},{type:"date",key:"date",label:"日期",attrs:{valueFormat:"YYYY-MM-DD",format:"YYYY 年 MM 月 DD 日"}}],submitForm:async()=>{if(t.value){const n=t.value.ruleFormRef;await n.validate(((n,t)=>{n?console.log("submit!"):console.log("error submit!",t)}))}},resetForm:()=>{if(t.value){t.value.ruleFormRef.resetFields()}}}}})}()}};const y='{"title":"C-Qurty 组件","description":"","frontmatter":{},"headers":[{"level":2,"title":"Form表单","slug":"form表单"},{"level":2,"title":"Operate属性","slug":"operate属性"},{"level":2,"title":"columns属性","slug":"columns属性"},{"level":2,"title":"Form Expose","slug":"form-expose"}],"relativePath":"components/query.md","lastUpdated":1679228415870}',b=k("h1",{id:"c-qurty-组件"},"C-Qurty 组件",-1),g=k("p",null,[i("二次封装"),k("code",null,"el-form"),i("表格组件，可通过column直接配置，不同的组件")],-1),f=k("h2",{id:"form表单"},"Form表单",-1),h=k("h4",{id:"由于vite-press不能使用reactive-ref等引用，下面组件目前渲染不了，容我研究一下"},"由于vite-press不能使用reactive, ref等引用，下面组件目前渲染不了，容我研究一下",-1),v=k("div",{class:"language-vue"},[k("pre",null,[k("code",null,[k("span",{class:"token tag"},[k("span",{class:"token tag"},[k("span",{class:"token punctuation"},"<"),i("template")]),k("span",{class:"token punctuation"},">")]),i("\n  "),k("span",{class:"token tag"},[k("span",{class:"token tag"},[k("span",{class:"token punctuation"},"<"),i("div")]),k("span",{class:"token punctuation"},">")]),i("\n    "),k("span",{class:"token tag"},[k("span",{class:"token tag"},[k("span",{class:"token punctuation"},"<"),i("c-query")]),i(),k("span",{class:"token attr-name"},"v-model"),k("span",{class:"token attr-value"},[k("span",{class:"token punctuation attr-equals"},"="),k("span",{class:"token punctuation"},'"'),i("queryData"),k("span",{class:"token punctuation"},'"')]),i(),k("span",{class:"token attr-name"},":columns"),k("span",{class:"token attr-value"},[k("span",{class:"token punctuation attr-equals"},"="),k("span",{class:"token punctuation"},'"'),i("columns"),k("span",{class:"token punctuation"},'"')]),i(),k("span",{class:"token attr-name"},"label-position"),k("span",{class:"token attr-value"},[k("span",{class:"token punctuation attr-equals"},"="),k("span",{class:"token punctuation"},'"'),i("top"),k("span",{class:"token punctuation"},'"')]),i(),k("span",{class:"token attr-name"},"ref"),k("span",{class:"token attr-value"},[k("span",{class:"token punctuation attr-equals"},"="),k("span",{class:"token punctuation"},'"'),i("queryForm"),k("span",{class:"token punctuation"},'"')]),k("span",{class:"token punctuation"},">")]),i("\n      "),k("span",{class:"token tag"},[k("span",{class:"token tag"},[k("span",{class:"token punctuation"},"<"),i("template")]),i(),k("span",{class:"token attr-name"},"#password"),k("span",{class:"token punctuation"},">")]),i("\n        "),k("span",{class:"token tag"},[k("span",{class:"token tag"},[k("span",{class:"token punctuation"},"<"),i("el-form-item")]),i(),k("span",{class:"token attr-name"},"label"),k("span",{class:"token attr-value"},[k("span",{class:"token punctuation attr-equals"},"="),k("span",{class:"token punctuation"},'"'),i("密码"),k("span",{class:"token punctuation"},'"')]),k("span",{class:"token punctuation"},">")]),i("\n          "),k("span",{class:"token tag"},[k("span",{class:"token tag"},[k("span",{class:"token punctuation"},"<"),i("el-input")]),i(),k("span",{class:"token attr-name"},"v-model"),k("span",{class:"token attr-value"},[k("span",{class:"token punctuation attr-equals"},"="),k("span",{class:"token punctuation"},'"'),i("queryData.password"),k("span",{class:"token punctuation"},'"')]),i(),k("span",{class:"token attr-name"},"placeholder"),k("span",{class:"token attr-value"},[k("span",{class:"token punctuation attr-equals"},"="),k("span",{class:"token punctuation"},'"'),i("请输入密码"),k("span",{class:"token punctuation"},'"')]),k("span",{class:"token punctuation"},">")]),k("span",{class:"token tag"},[k("span",{class:"token tag"},[k("span",{class:"token punctuation"},"</"),i("el-input")]),k("span",{class:"token punctuation"},">")]),i("\n        "),k("span",{class:"token tag"},[k("span",{class:"token tag"},[k("span",{class:"token punctuation"},"</"),i("el-form-item")]),k("span",{class:"token punctuation"},">")]),i("\n      "),k("span",{class:"token tag"},[k("span",{class:"token tag"},[k("span",{class:"token punctuation"},"</"),i("template")]),k("span",{class:"token punctuation"},">")]),i("\n    "),k("span",{class:"token tag"},[k("span",{class:"token tag"},[k("span",{class:"token punctuation"},"</"),i("c-query")]),k("span",{class:"token punctuation"},">")]),i("\n    "),k("span",{class:"token tag"},[k("span",{class:"token tag"},[k("span",{class:"token punctuation"},"<"),i("el-button")]),i(),k("span",{class:"token attr-name"},"@click"),k("span",{class:"token attr-value"},[k("span",{class:"token punctuation attr-equals"},"="),k("span",{class:"token punctuation"},'"'),i("resetForm"),k("span",{class:"token punctuation"},'"')]),k("span",{class:"token punctuation"},">")]),i("重置"),k("span",{class:"token tag"},[k("span",{class:"token tag"},[k("span",{class:"token punctuation"},"</"),i("el-button")]),k("span",{class:"token punctuation"},">")]),i("\n    "),k("span",{class:"token tag"},[k("span",{class:"token tag"},[k("span",{class:"token punctuation"},"<"),i("el-button")]),i(),k("span",{class:"token attr-name"},"@click"),k("span",{class:"token attr-value"},[k("span",{class:"token punctuation attr-equals"},"="),k("span",{class:"token punctuation"},'"'),i("submitForm"),k("span",{class:"token punctuation"},'"')]),i(),k("span",{class:"token attr-name"},"type"),k("span",{class:"token attr-value"},[k("span",{class:"token punctuation attr-equals"},"="),k("span",{class:"token punctuation"},'"'),i("primary"),k("span",{class:"token punctuation"},'"')]),k("span",{class:"token punctuation"},">")]),i("提交"),k("span",{class:"token tag"},[k("span",{class:"token tag"},[k("span",{class:"token punctuation"},"</"),i("el-button")]),k("span",{class:"token punctuation"},">")]),i("\n  "),k("span",{class:"token tag"},[k("span",{class:"token tag"},[k("span",{class:"token punctuation"},"</"),i("div")]),k("span",{class:"token punctuation"},">")]),i("\n"),k("span",{class:"token tag"},[k("span",{class:"token tag"},[k("span",{class:"token punctuation"},"</"),i("template")]),k("span",{class:"token punctuation"},">")]),i("\n"),k("span",{class:"token tag"},[k("span",{class:"token tag"},[k("span",{class:"token punctuation"},"<"),i("script")]),k("span",{class:"token punctuation"},">")]),k("span",{class:"token script"},[k("span",{class:"token language-javascript"},[i("\n"),k("span",{class:"token comment"},'// import {reactive, ref} from "@vue";'),i("\n"),k("span",{class:"token keyword"},"export"),i(),k("span",{class:"token keyword"},"default"),i(),k("span",{class:"token punctuation"},"{"),i("\n  "),k("span",{class:"token function"},"setup"),k("span",{class:"token punctuation"},"("),k("span",{class:"token punctuation"},")"),i(),k("span",{class:"token punctuation"},"{"),i("\n    "),k("span",{class:"token comment"},"// const queryData = reactive({"),i("\n    "),k("span",{class:"token comment"},"//   name: '',"),i("\n    "),k("span",{class:"token comment"},"//   password: '',"),i("\n    "),k("span",{class:"token comment"},"//   select: null,"),i("\n    "),k("span",{class:"token comment"},"//   switch: false,"),i("\n    "),k("span",{class:"token comment"},"//   date: null"),i("\n    "),k("span",{class:"token comment"},"// })"),i("\n\n    "),k("span",{class:"token keyword"},"const"),i(" queryData "),k("span",{class:"token operator"},"="),i(),k("span",{class:"token punctuation"},"{"),i("\n        name"),k("span",{class:"token operator"},":"),i(),k("span",{class:"token string"},"''"),k("span",{class:"token punctuation"},","),i("\n        password"),k("span",{class:"token operator"},":"),i(),k("span",{class:"token string"},"''"),k("span",{class:"token punctuation"},","),i("\n        select"),k("span",{class:"token operator"},":"),i(),k("span",{class:"token keyword"},"null"),k("span",{class:"token punctuation"},","),i("\n        "),k("span",{class:"token keyword"},"switch"),k("span",{class:"token operator"},":"),i(),k("span",{class:"token boolean"},"false"),k("span",{class:"token punctuation"},","),i("\n        date"),k("span",{class:"token operator"},":"),i(),k("span",{class:"token keyword"},"null"),i("\n    "),k("span",{class:"token punctuation"},"}"),i("\n    "),k("span",{class:"token keyword"},"const"),i(" options "),k("span",{class:"token operator"},"="),i(),k("span",{class:"token punctuation"},"["),i("\n      "),k("span",{class:"token punctuation"},"{"),i("value"),k("span",{class:"token operator"},":"),i(),k("span",{class:"token string"},"'0'"),k("span",{class:"token punctuation"},","),i(" label"),k("span",{class:"token operator"},":"),i(),k("span",{class:"token string"},"'text0'"),k("span",{class:"token punctuation"},"}"),k("span",{class:"token punctuation"},","),i("\n      "),k("span",{class:"token punctuation"},"{"),i("value"),k("span",{class:"token operator"},":"),i(),k("span",{class:"token string"},"'1'"),k("span",{class:"token punctuation"},","),i(" label"),k("span",{class:"token operator"},":"),i(),k("span",{class:"token string"},"'text1'"),k("span",{class:"token punctuation"},"}"),k("span",{class:"token punctuation"},","),i("\n      "),k("span",{class:"token punctuation"},"{"),i("value"),k("span",{class:"token operator"},":"),i(),k("span",{class:"token string"},"'2'"),k("span",{class:"token punctuation"},","),i(" label"),k("span",{class:"token operator"},":"),i(),k("span",{class:"token string"},"'text2'"),k("span",{class:"token punctuation"},","),i(" disabled"),k("span",{class:"token operator"},":"),i(),k("span",{class:"token boolean"},"true"),k("span",{class:"token punctuation"},"}"),i("\n    "),k("span",{class:"token punctuation"},"]"),i("\n    "),k("span",{class:"token keyword"},"const"),i(" columns "),k("span",{class:"token operator"},"="),i(),k("span",{class:"token punctuation"},"["),i("\n      "),k("span",{class:"token punctuation"},"{"),i("\n        type"),k("span",{class:"token operator"},":"),i(),k("span",{class:"token string"},"'input'"),k("span",{class:"token punctuation"},","),i("\n        key"),k("span",{class:"token operator"},":"),i(),k("span",{class:"token string"},"'name'"),k("span",{class:"token punctuation"},","),i("\n        attrsFormItem"),k("span",{class:"token operator"},":"),i(),k("span",{class:"token punctuation"},"{"),i("label"),k("span",{class:"token operator"},":"),i(),k("span",{class:"token string"},"'姓名777'"),k("span",{class:"token punctuation"},","),k("span",{class:"token punctuation"},"}"),k("span",{class:"token punctuation"},","),i("\n        attrsCol"),k("span",{class:"token operator"},":"),i(),k("span",{class:"token punctuation"},"{"),i("span"),k("span",{class:"token operator"},":"),i(),k("span",{class:"token number"},"6"),k("span",{class:"token punctuation"},"}"),k("span",{class:"token punctuation"},","),i("\n        required"),k("span",{class:"token operator"},":"),i(),k("span",{class:"token boolean"},"true"),k("span",{class:"token punctuation"},","),i("\n        rules"),k("span",{class:"token operator"},":"),i(),k("span",{class:"token punctuation"},"["),i("\n          "),k("span",{class:"token punctuation"},"{"),i("min"),k("span",{class:"token operator"},":"),i(),k("span",{class:"token number"},"3"),k("span",{class:"token punctuation"},","),i(" max"),k("span",{class:"token operator"},":"),i(),k("span",{class:"token number"},"5"),k("span",{class:"token punctuation"},","),i(" message"),k("span",{class:"token operator"},":"),i(),k("span",{class:"token string"},"'Length should be 3 to 5'"),k("span",{class:"token punctuation"},","),i(" trigger"),k("span",{class:"token operator"},":"),i(),k("span",{class:"token string"},"'blur'"),k("span",{class:"token punctuation"},"}"),k("span",{class:"token punctuation"},","),i("\n        "),k("span",{class:"token punctuation"},"]"),i("\n      "),k("span",{class:"token punctuation"},"}"),k("span",{class:"token punctuation"},","),i("\n      "),k("span",{class:"token punctuation"},"{"),i("\n        type"),k("span",{class:"token operator"},":"),i(),k("span",{class:"token string"},"'input'"),k("span",{class:"token punctuation"},","),i("\n        key"),k("span",{class:"token operator"},":"),i(),k("span",{class:"token string"},"'password'"),k("span",{class:"token punctuation"},","),i("\n        label"),k("span",{class:"token operator"},":"),i(),k("span",{class:"token string"},"'密码'"),k("span",{class:"token punctuation"},","),i("\n        attrsCol"),k("span",{class:"token operator"},":"),i(),k("span",{class:"token punctuation"},"{"),i("span"),k("span",{class:"token operator"},":"),i(),k("span",{class:"token number"},"6"),k("span",{class:"token punctuation"},"}"),k("span",{class:"token punctuation"},","),i("\n      "),k("span",{class:"token punctuation"},"}"),k("span",{class:"token punctuation"},","),i("\n      "),k("span",{class:"token punctuation"},"{"),i("\n        type"),k("span",{class:"token operator"},":"),i(),k("span",{class:"token string"},"'select'"),k("span",{class:"token punctuation"},","),i("\n        key"),k("span",{class:"token operator"},":"),i(),k("span",{class:"token string"},"'select'"),k("span",{class:"token punctuation"},","),i("\n        label"),k("span",{class:"token operator"},":"),i(),k("span",{class:"token string"},"'选择框'"),k("span",{class:"token punctuation"},","),i("\n        options"),k("span",{class:"token operator"},":"),i(" options"),k("span",{class:"token punctuation"},","),i("\n        required"),k("span",{class:"token operator"},":"),i(),k("span",{class:"token boolean"},"true"),k("span",{class:"token punctuation"},","),i("\n        attrs"),k("span",{class:"token operator"},":"),i(),k("span",{class:"token punctuation"},"{"),i("\n          "),k("span",{class:"token function-variable function"},"onChange"),k("span",{class:"token operator"},":"),i(),k("span",{class:"token punctuation"},"("),k("span",{class:"token parameter"},"value"),k("span",{class:"token punctuation"},")"),i(),k("span",{class:"token operator"},"=>"),i(),k("span",{class:"token punctuation"},"{"),i("\n            console"),k("span",{class:"token punctuation"},"."),k("span",{class:"token function"},"log"),k("span",{class:"token punctuation"},"("),i("value"),k("span",{class:"token punctuation"},")"),i("\n          "),k("span",{class:"token punctuation"},"}"),i("\n        "),k("span",{class:"token punctuation"},"}"),k("span",{class:"token punctuation"},","),i("\n      "),k("span",{class:"token punctuation"},"}"),k("span",{class:"token punctuation"},","),i("\n      "),k("span",{class:"token punctuation"},"{"),i("\n        type"),k("span",{class:"token operator"},":"),i(),k("span",{class:"token string"},"'switch'"),k("span",{class:"token punctuation"},","),i("\n        key"),k("span",{class:"token operator"},":"),i(),k("span",{class:"token string"},"'switch'"),k("span",{class:"token punctuation"},","),i("\n        label"),k("span",{class:"token operator"},":"),i(),k("span",{class:"token string"},"'及时配送'"),k("span",{class:"token punctuation"},","),i("\n        attrs"),k("span",{class:"token operator"},":"),i(),k("span",{class:"token punctuation"},"{"),i("activeValue"),k("span",{class:"token operator"},":"),i(),k("span",{class:"token string"},'"100"'),k("span",{class:"token punctuation"},","),i(" inactiveValue"),k("span",{class:"token operator"},":"),i(),k("span",{class:"token string"},'"0"'),k("span",{class:"token punctuation"},"}"),i("\n      "),k("span",{class:"token punctuation"},"}"),k("span",{class:"token punctuation"},","),i("\n      "),k("span",{class:"token punctuation"},"{"),i("\n        type"),k("span",{class:"token operator"},":"),i(),k("span",{class:"token string"},"'checkbox'"),k("span",{class:"token punctuation"},","),i("\n        key"),k("span",{class:"token operator"},":"),i(),k("span",{class:"token string"},"'checkbox'"),k("span",{class:"token punctuation"},","),i("\n        label"),k("span",{class:"token operator"},":"),i(),k("span",{class:"token string"},"'checkbox'"),k("span",{class:"token punctuation"},","),i("\n        options"),k("span",{class:"token operator"},":"),i(" options"),k("span",{class:"token punctuation"},","),i("\n      "),k("span",{class:"token punctuation"},"}"),k("span",{class:"token punctuation"},","),i("\n      "),k("span",{class:"token punctuation"},"{"),i("\n        type"),k("span",{class:"token operator"},":"),i(),k("span",{class:"token string"},"'radio'"),k("span",{class:"token punctuation"},","),i("\n        key"),k("span",{class:"token operator"},":"),i(),k("span",{class:"token string"},"'radio'"),k("span",{class:"token punctuation"},","),i("\n        label"),k("span",{class:"token operator"},":"),i(),k("span",{class:"token string"},"'单选按钮'"),k("span",{class:"token punctuation"},","),i("\n        options"),k("span",{class:"token operator"},":"),i(" options"),k("span",{class:"token punctuation"},","),i("\n      "),k("span",{class:"token punctuation"},"}"),k("span",{class:"token punctuation"},","),i("\n      "),k("span",{class:"token punctuation"},"{"),i("\n        type"),k("span",{class:"token operator"},":"),i(),k("span",{class:"token string"},"'date'"),k("span",{class:"token punctuation"},","),i("\n        key"),k("span",{class:"token operator"},":"),i(),k("span",{class:"token string"},"'date'"),k("span",{class:"token punctuation"},","),i("\n        label"),k("span",{class:"token operator"},":"),i(),k("span",{class:"token string"},"'日期'"),k("span",{class:"token punctuation"},","),i("\n        attrs"),k("span",{class:"token operator"},":"),i(),k("span",{class:"token punctuation"},"{"),i("\n          valueFormat"),k("span",{class:"token operator"},":"),i(),k("span",{class:"token string"},'"YYYY-MM-DD"'),k("span",{class:"token punctuation"},","),i("\n          format"),k("span",{class:"token operator"},":"),i(),k("span",{class:"token string"},'"YYYY 年 MM 月 DD 日"'),k("span",{class:"token punctuation"},","),i("\n        "),k("span",{class:"token punctuation"},"}"),i("\n      "),k("span",{class:"token punctuation"},"}"),i("\n    "),k("span",{class:"token punctuation"},"]"),k("span",{class:"token punctuation"},";"),i("\n    "),k("span",{class:"token comment"},"// const queryForm = ref();"),i("\n    "),k("span",{class:"token keyword"},"const"),i(" queryForm "),k("span",{class:"token operator"},"="),i(),k("span",{class:"token keyword"},"null"),k("span",{class:"token punctuation"},";"),i("\n    "),k("span",{class:"token keyword"},"const"),i(),k("span",{class:"token function-variable function"},"submitForm"),i(),k("span",{class:"token operator"},"="),i(),k("span",{class:"token keyword"},"async"),i(),k("span",{class:"token punctuation"},"("),k("span",{class:"token punctuation"},")"),i(),k("span",{class:"token operator"},"=>"),i(),k("span",{class:"token punctuation"},"{"),i("\n      "),k("span",{class:"token keyword"},"if"),i(),k("span",{class:"token punctuation"},"("),i("queryForm"),k("span",{class:"token punctuation"},"."),i("value"),k("span",{class:"token punctuation"},")"),i(),k("span",{class:"token punctuation"},"{"),i("\n        "),k("span",{class:"token keyword"},"const"),i(" from "),k("span",{class:"token operator"},"="),i(" queryForm"),k("span",{class:"token punctuation"},"."),i("value"),k("span",{class:"token punctuation"},"."),i("ruleFormRef\n        "),k("span",{class:"token keyword"},"await"),i(" from"),k("span",{class:"token punctuation"},"."),k("span",{class:"token function"},"validate"),k("span",{class:"token punctuation"},"("),k("span",{class:"token punctuation"},"("),k("span",{class:"token parameter"},[i("valid"),k("span",{class:"token punctuation"},","),i(" fields")]),k("span",{class:"token punctuation"},")"),i(),k("span",{class:"token operator"},"=>"),i(),k("span",{class:"token punctuation"},"{"),i("\n          "),k("span",{class:"token keyword"},"if"),i(),k("span",{class:"token punctuation"},"("),i("valid"),k("span",{class:"token punctuation"},")"),i(),k("span",{class:"token punctuation"},"{"),i("\n            console"),k("span",{class:"token punctuation"},"."),k("span",{class:"token function"},"log"),k("span",{class:"token punctuation"},"("),k("span",{class:"token string"},"'submit!'"),k("span",{class:"token punctuation"},")"),i("\n          "),k("span",{class:"token punctuation"},"}"),i(),k("span",{class:"token keyword"},"else"),i(),k("span",{class:"token punctuation"},"{"),i("\n            console"),k("span",{class:"token punctuation"},"."),k("span",{class:"token function"},"log"),k("span",{class:"token punctuation"},"("),k("span",{class:"token string"},"'error submit!'"),k("span",{class:"token punctuation"},","),i(" fields"),k("span",{class:"token punctuation"},")"),i("\n          "),k("span",{class:"token punctuation"},"}"),i("\n        "),k("span",{class:"token punctuation"},"}"),k("span",{class:"token punctuation"},")"),i("\n      "),k("span",{class:"token punctuation"},"}"),i("\n    "),k("span",{class:"token punctuation"},"}"),i("\n    "),k("span",{class:"token keyword"},"const"),i(),k("span",{class:"token function-variable function"},"resetForm"),i(),k("span",{class:"token operator"},"="),i(),k("span",{class:"token punctuation"},"("),k("span",{class:"token punctuation"},")"),i(),k("span",{class:"token operator"},"=>"),i(),k("span",{class:"token punctuation"},"{"),i("\n      "),k("span",{class:"token keyword"},"if"),i(),k("span",{class:"token punctuation"},"("),i("queryForm"),k("span",{class:"token punctuation"},"."),i("value"),k("span",{class:"token punctuation"},")"),i(),k("span",{class:"token punctuation"},"{"),i("\n        "),k("span",{class:"token keyword"},"const"),i(" from "),k("span",{class:"token operator"},"="),i(" queryForm"),k("span",{class:"token punctuation"},"."),i("value"),k("span",{class:"token punctuation"},"."),i("ruleFormRef\n        from"),k("span",{class:"token punctuation"},"."),k("span",{class:"token function"},"resetFields"),k("span",{class:"token punctuation"},"("),k("span",{class:"token punctuation"},")"),k("span",{class:"token punctuation"},";"),i("\n      "),k("span",{class:"token punctuation"},"}"),i("\n    "),k("span",{class:"token punctuation"},"}"),i("\n    \n    "),k("span",{class:"token keyword"},"return"),i(),k("span",{class:"token punctuation"},"{"),i("\n      queryData"),k("span",{class:"token punctuation"},","),i("\n      columns"),k("span",{class:"token punctuation"},","),i("\n      submitForm"),k("span",{class:"token punctuation"},","),i("\n      resetForm\n    "),k("span",{class:"token punctuation"},"}"),i("\n  "),k("span",{class:"token punctuation"},"}"),i("\n"),k("span",{class:"token punctuation"},"}"),i("\n")])]),k("span",{class:"token tag"},[k("span",{class:"token tag"},[k("span",{class:"token punctuation"},"</"),i("script")]),k("span",{class:"token punctuation"},">")]),i("\n")])])],-1),q=d('',6);m.render=function(n,t,s,a,o,e){const k=p("render-demo-0"),i=p("demo");return c(),l("div",null,[b,g,f,h,u(i,{sourceCode:"<template>\n  <div>\n    <c-query v-model=\"queryData\" :columns=\"columns\" label-position=\"top\" ref=\"queryForm\">\n      <template #password>\n        <el-form-item label=\"密码\">\n          <el-input v-model=\"queryData.password\" placeholder=\"请输入密码\"></el-input>\n        </el-form-item>\n      </template>\n    </c-query>\n    <el-button @click=\"resetForm\">重置</el-button>\n    <el-button @click=\"submitForm\" type=\"primary\">提交</el-button>\n  </div>\n</template>\n<script>\n// import {reactive, ref} from \"@vue\";\nexport default {\n  setup() {\n    // const queryData = reactive({\n    //   name: '',\n    //   password: '',\n    //   select: null,\n    //   switch: false,\n    //   date: null\n    // })\n\n    const queryData = {\n        name: '',\n        password: '',\n        select: null,\n        switch: false,\n        date: null\n    }\n    const options = [\n      {value: '0', label: 'text0'},\n      {value: '1', label: 'text1'},\n      {value: '2', label: 'text2', disabled: true}\n    ]\n    const columns = [\n      {\n        type: 'input',\n        key: 'name',\n        attrsFormItem: {label: '姓名777',},\n        attrsCol: {span: 6},\n        required: true,\n        rules: [\n          {min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur'},\n        ]\n      },\n      {\n        type: 'input',\n        key: 'password',\n        label: '密码',\n        attrsCol: {span: 6},\n      },\n      {\n        type: 'select',\n        key: 'select',\n        label: '选择框',\n        options: options,\n        required: true,\n        attrs: {\n          onChange: (value) => {\n            console.log(value)\n          }\n        },\n      },\n      {\n        type: 'switch',\n        key: 'switch',\n        label: '及时配送',\n        attrs: {activeValue: \"100\", inactiveValue: \"0\"}\n      },\n      {\n        type: 'checkbox',\n        key: 'checkbox',\n        label: 'checkbox',\n        options: options,\n      },\n      {\n        type: 'radio',\n        key: 'radio',\n        label: '单选按钮',\n        options: options,\n      },\n      {\n        type: 'date',\n        key: 'date',\n        label: '日期',\n        attrs: {\n          valueFormat: \"YYYY-MM-DD\",\n          format: \"YYYY 年 MM 月 DD 日\",\n        }\n      }\n    ];\n    // const queryForm = ref();\n    const queryForm = null;\n    const submitForm = async () => {\n      if (queryForm.value) {\n        const from = queryForm.value.ruleFormRef\n        await from.validate((valid, fields) => {\n          if (valid) {\n            console.log('submit!')\n          } else {\n            console.log('error submit!', fields)\n          }\n        })\n      }\n    }\n    const resetForm = () => {\n      if (queryForm.value) {\n        const from = queryForm.value.ruleFormRef\n        from.resetFields();\n      }\n    }\n    \n    return {\n      queryData,\n      columns,\n      submitForm,\n      resetForm\n    }\n  }\n}\n<\/script>\n"},{highlight:r((()=>[v])),default:r((()=>[u(k)])),_:1}),q])};export default m;export{y as __pageData};
