import{_ as m,e as E,z as y,H as c,j as n,g as t,aA as C,E as h,o as b,aB as F}from"./plugin-vue_export-helper.f0bfa91e.js";const B={name:"component-doc",components:{"render-demo-0":function(){const{createElementVNode:s,resolveComponent:l,withCtx:r,createVNode:i,openBlock:k,createElementBlock:d}=F,p=s("div",null,[s("h3",null,"Family"),s("div",null,"66666")],-1);function u(a,g){const e=l("c-table");return k(),d("div",null,[s("div",null,[i(e,{border:"",columns:a.columns,data:a.data,pagination:a.pagination,onPaginationChange:a.handlePaginationChanged},{expand:r(()=>[p]),_:1},8,["columns","data","pagination","onPaginationChange"])])])}return{render:u,...{setup(){const a=[{label:"\u5E8F\u53F7",type:"index",align:"center",width:60},{label:"\u8BE6\u60C5",type:"expand",width:60},{label:"date",prop:"date",renderText:o=>o.row.date,width:"196"},{label:"name",prop:"name"},{label:"empty text"},{label:"\u72B6\u6001",type:"status",renderText:()=>"\u6210\u529F",status:"danger",statusType:"dot"},{label:"\u72B6\u6001",type:"status",renderText:()=>"\u6210\u529F",status:()=>"transparent",statusType:"tag"},{type:"operate",label:"\u64CD\u4F5C",width:250,btnList:[{name:"\u67E5\u770B0",onClick:()=>{console.log(0)}},{name:"\u67E5\u770B1",onClick:()=>{console.log(1)}},{name:"\u67E5\u770B2",onClick:()=>{console.log(2)}},{name:"\u67E5\u770B3",onClick:()=>{console.log(3)}}]}],g=[{id:1,date:"2016-05-02",name:"wangxiaohu"},{id:2,date:"2016-05-04",name:"wangxiaohu"},{id:3,date:"2016-05-01",name:"wangxiaohu",children:[{id:31,date:"2016-05-01",name:"wangxiaohu"},{id:32,date:"2016-05-01",name:"wangxiaohu"}]},{id:4,date:"2016-05-03",name:"wangxiaohu"}],e={currentPage:2,pageSize:20,total:100};return{columns:a,data:g,handlePaginationChanged:o=>{console.log(o),e.currentPage=o.currentPage,e.pageSize=o.pageSize},pagination:e}}}}}()}},N='{"title":"C-Table \u7EC4\u4EF6","description":"","frontmatter":{},"headers":[{"level":2,"title":"OverStep","slug":"overstep"},{"level":2,"title":"Operate\u5C5E\u6027","slug":"operate\u5C5E\u6027"},{"level":2,"title":"Operate\u4E8B\u4EF6","slug":"operate\u4E8B\u4EF6"},{"level":2,"title":"columns\u5C5E\u6027","slug":"columns\u5C5E\u6027"}],"relativePath":"components/table.md","lastUpdated":1666411949000}',x=n("h1",{id:"c-table-\u7EC4\u4EF6"},"C-Table \u7EC4\u4EF6",-1),v=n("p",null,[t("\u4E8C\u6B21\u5C01\u88C5"),n("code",null,"Element-Plus"),t("\u8868\u683C\u7EC4\u4EF6\uFF0C\u53EF\u901A\u8FC7column\u76F4\u63A5\u914D\u7F6E\uFF0C\u65B0\u589E\u8868\u683C\u5206\u9875\u53EF\u901A\u8FC7pagination\u914D\u7F6E")],-1),w=n("p",null,[t("\u7531\u4E8E"),n("code",null,"vitepress"),t("\u9ED8\u8BA4\u6837\u5F0F\u5BFC\u81F4 \u9ED8\u8BA4\u6837\u5F0F\u8BF7\u53C2\u8003"),n("code",null,"el-table")],-1),f=n("h2",{id:"overstep"},"OverStep",-1),_=n("div",null,[t("\u9ED8\u8BA4\u8D85\u8FC7\u4E09\u4E2A\u540E\u663E\u793A\u66F4\u591A\u64CD\u4F5C\uFF0C\u4E2A\u6570\u53EF\u901A\u8FC7"),n("code",null,"over-step-count"),t("\u914D\u5236")],-1),A=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("c-table")]),t(`
      `),n("span",{class:"token attr-name"},"border"),t(`
      `),n("span",{class:"token attr-name"},":columns"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("columns"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("data"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":pagination"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("pagination"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"@paginationChange"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handlePaginationChanged"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#expand"),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("h3")]),n("span",{class:"token punctuation"},">")]),t("Family"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("h3")]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t("66666"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("c-table")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" columns "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u5E8F\u53F7'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'index'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"align"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},'"center"'),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"60"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u8BE6\u60C5'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'expand'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"60"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'date'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'date'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token function-variable function"},"renderText"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"scope"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
          `),n("span",{class:"token keyword"},"return"),t(" scope"),n("span",{class:"token punctuation"},"."),t("row"),n("span",{class:"token punctuation"},"."),t(`date
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'196'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'name'"),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'empty text'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u72B6\u6001'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'status'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token function-variable function"},"renderText"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
          `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token string"},"'\u6210\u529F'"),n("span",{class:"token punctuation"},";"),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"status"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'danger'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"statusType"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'dot'"),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u72B6\u6001'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'status'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token function-variable function"},"renderText"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
          `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token string"},"'\u6210\u529F'"),n("span",{class:"token punctuation"},";"),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token function-variable function"},"status"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token string"},"'transparent'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"statusType"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'tag'"),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'operate'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u64CD\u4F5C'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"250"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"btnList"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
          `),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u67E5\u770B0'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token function-variable function"},"onClick"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
              console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),t(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u67E5\u770B1'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token function-variable function"},"onClick"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
              console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),t(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u67E5\u770B2'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token function-variable function"},"onClick"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
              console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),t(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u67E5\u770B3'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token function-variable function"},"onClick"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
              console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},")"),t(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"}"),t(`
        `),n("span",{class:"token punctuation"},"]"),t(`
      `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token punctuation"},"]"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" data "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"date"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'2016-05-02'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'wangxiaohu'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"date"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'2016-05-04'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'wangxiaohu'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"date"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'2016-05-01'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'wangxiaohu'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
          `),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"31"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"date"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'2016-05-01'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'wangxiaohu'"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"32"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"date"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'2016-05-01'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'wangxiaohu'"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"date"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'2016-05-03'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'wangxiaohu'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"]"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" pagination "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token literal-property property"},"currentPage"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token literal-property property"},"pageSize"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"20"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token literal-property property"},"total"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"100"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`

    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"handlePaginationChanged"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"data"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),t("data"),n("span",{class:"token punctuation"},")"),t(`
      pagination`),n("span",{class:"token punctuation"},"."),t("currentPage "),n("span",{class:"token operator"},"="),t(" data"),n("span",{class:"token punctuation"},"."),t(`currentPage
      pagination`),n("span",{class:"token punctuation"},"."),t("pageSize "),n("span",{class:"token operator"},"="),t(" data"),n("span",{class:"token punctuation"},"."),t(`pageSize
    `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      columns`),n("span",{class:"token punctuation"},","),t(`
      data`),n("span",{class:"token punctuation"},","),t(`
      handlePaginationChanged`),n("span",{class:"token punctuation"},","),t(`
      pagination
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),P=C('<h2 id="operate\u5C5E\u6027">Operate\u5C5E\u6027</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>columns</td><td><a href="#columns%E5%B1%9E%E6%80%A7">\u914D\u7F6E\u9879</a></td><td>Array</td><td>-</td><td>[]</td></tr><tr><td>data</td><td>\u6570\u636E</td><td>Array</td><td>-</td><td>[]</td></tr><tr><td>pagination</td><td>\u53C2\u8003element-plus <a href="https://element-plus.gitee.io/zh-CN/component/pagination.html#%E5%B1%9E%E6%80%A7" target="_blank" rel="noopener noreferrer">pagination</a></td><td>Object</td><td>Boolean</td><td>-</td></tr><tr><td>align</td><td>\u8868\u683C\u4E2D\u6240\u6709\u7684\u9664\u4E86\u5355\u72EC\u914D\u7F6Ealign\u5916\u7684\u4F1A\u4FEE\u6539\u5BF9\u5176\u65B9\u5F0F</td><td>string</td><td>left / center / right</td><td>left</td></tr><tr><td>empty-text</td><td>\u6570\u636E\u4E3A\u7A7A\u503C\u6240\u663E\u793A\u7684\u6587\u672C</td><td>string</td><td>-</td><td>&#39;--&#39;</td></tr></tbody></table><h2 id="operate\u4E8B\u4EF6">Operate\u4E8B\u4EF6</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>paginationChange</td><td>pagination\u5207\u6362 \u8FD4\u56DE {currentPage, pageSize}</td><td>Function</td><td>-</td><td>-</td></tr><tr><td>el-table\u81EA\u5E26\u4E8B\u4EF6</td><td><a href="https://element-plus.gitee.io/zh-CN/component/table.html#table-%E6%96%B9%E6%B3%95" target="_blank" rel="noopener noreferrer">el-table</a></td><td>Function</td><td>-</td><td>-</td></tr></tbody></table><h2 id="columns\u5C5E\u6027">columns\u5C5E\u6027</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>prop</td><td>\u6570\u636E\u5BF9\u5E94\u7684key</td><td>string</td><td>-</td><td>-</td></tr><tr><td>renderText</td><td>\u53EF\u81EA\u5B9A\u4E49\u8F93\u51FA\u7ED3\u679C\uFF0C \u4F18\u5148\u4E8Eprop</td><td>Function(scope): string</td><td>-</td><td>-</td></tr><tr><td>label</td><td>\u6807\u9898</td><td>string</td><td>-</td><td>-</td></tr><tr><td>width</td><td>\u5BBD\u5EA6</td><td>string</td><td>-</td><td>-</td></tr><tr><td>type</td><td>\u7C7B\u578B</td><td>string</td><td>expand / operate / status / index / selection</td><td>-</td></tr><tr><td>fixed</td><td>\u56FA\u5B9A</td><td>boolean / string</td><td>true / &#39;left&#39; / &#39;right&#39;</td><td>-</td></tr><tr><td>align</td><td>\u5BF9\u9F50\u65B9\u5F0F</td><td>string</td><td>&#39;left&#39; / &#39;center&#39; / &#39;right&#39;</td><td>-</td></tr><tr><td>btnList</td><td>c-operate columns</td><td>Array</td><td>-</td><td>-</td></tr><tr><td>status</td><td>\u72B6\u6001</td><td>string / Function(scope): string</td><td>info, success, warning, danger</td><td>-</td></tr><tr><td>statusType</td><td>\u72B6\u6001\u7C7B\u578B</td><td>string</td><td>dot / tag / text</td><td>tag</td></tr><tr><td>...el-table-column</td><td>el-table-column\u81EA\u5E26\u53C2\u6570</td><td>any</td><td>-</td><td>-</td></tr></tbody></table>',6);function D(s,l,r,i,k,d){const p=h("render-demo-0"),u=h("demo");return b(),E("div",null,[x,v,w,f,y(u,{sourceCode:`<template>
  <div>
    <c-table
      border
      :columns="columns"
      :data="data"
      :pagination="pagination"
      @paginationChange="handlePaginationChanged"
    >
      <template #expand>
        <div>
          <h3>Family</h3>
          <div>66666</div>
        </div>
      </template>
    </c-table>
  </div>
</template>
<script>
export default {
  setup() {
    const columns = [
      {
        label: '\u5E8F\u53F7',
        type: 'index',
        align: "center",
        width: 60,
      },
      {
        label: '\u8BE6\u60C5',
        type: 'expand',
        width: 60,
      },
      {
        label: 'date',
        prop: 'date',
        renderText: (scope) => {
          return scope.row.date
        },
        width: '196',
      },
      {
        label: 'name',
        prop: 'name'
      },
      {
        label: 'empty text',
      },
      {
        label: '\u72B6\u6001',
        type: 'status',
        renderText: () => {
          return '\u6210\u529F';
        },
        status: 'danger',
        statusType: 'dot'
      },
      {
        label: '\u72B6\u6001',
        type: 'status',
        renderText: () => {
          return '\u6210\u529F';
        },
        status: () => 'transparent',
        statusType: 'tag'
      },
      {
        type: 'operate',
        label: '\u64CD\u4F5C',
        width: 250,
        btnList: [
          {
            name: '\u67E5\u770B0',
            onClick: () => {
              console.log(0)
            },
          },
          {
            name: '\u67E5\u770B1',
            onClick: () => {
              console.log(1)
            },
          },
          {
            name: '\u67E5\u770B2',
            onClick: () => {
              console.log(2)
            },
          },
          {
            name: '\u67E5\u770B3',
            onClick: () => {
              console.log(3)
            },
          }
        ]
      }
    ]
    const data = [
      {
        id: 1,
        date: '2016-05-02',
        name: 'wangxiaohu',
      },
      {
        id: 2,
        date: '2016-05-04',
        name: 'wangxiaohu',
      },
      {
        id: 3,
        date: '2016-05-01',
        name: 'wangxiaohu',
        children: [
          {
            id: 31,
            date: '2016-05-01',
            name: 'wangxiaohu',
          },
          {
            id: 32,
            date: '2016-05-01',
            name: 'wangxiaohu',
          },
        ],
      },
      {
        id: 4,
        date: '2016-05-03',
        name: 'wangxiaohu',
      },
    ]
    const pagination = {
      currentPage: 2,
      pageSize: 20,
      total: 100,
    }

    const handlePaginationChanged = (data) => {
      console.log(data)
      pagination.currentPage = data.currentPage
      pagination.pageSize = data.pageSize
    }
    return {
      columns,
      data,
      handlePaginationChanged,
      pagination
    }
  }
}
<\/script>
`},{description:c(()=>[_]),highlight:c(()=>[A]),default:c(()=>[y(p)]),_:1}),P])}var V=m(B,[["render",D]]);export{N as __pageData,V as default};
