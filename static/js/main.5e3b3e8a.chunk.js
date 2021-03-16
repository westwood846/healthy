(this.webpackJsonphealthy=this.webpackJsonphealthy||[]).push([[0],{44:function(e,n,t){},60:function(e,n,t){"use strict";t.r(n);var c,r,i,a,o,d,s,l,u,j,b,f=t(1),O=t.n(f),h=t(25),m=t.n(h),p=(t(44),t(2)),g=t(6),x=t(5),v=t(7),y=t(3),N=t(4),I=t(30),S=t(15),w=function(e,n){var t=Object(f.useMemo)((function(){return n}),[]),c=localStorage.getItem(e),r=c?JSON.parse(c):t,i=Object(f.useState)(r),a=Object(x.a)(i,2),o=a[0],d=a[1];return Object(f.useEffect)((function(){var n=localStorage.getItem(e);d(n?JSON.parse(n):t)}),[t,e]),[o,Object(f.useCallback)((function(n){d(n),localStorage.setItem(e,JSON.stringify(n))}),[e])]},C=t(0),k="EXKD4pinV1LPdlzNNnGWnI4IBh0GvmycfTVMJexP",E=O.a.createContext({key:k,setKey:function(){}}),F=function(e){var n=w("API_KEY",k),t=Object(x.a)(n,2),c=t[0],r={key:void 0===c?"":c,setKey:t[1]};return Object(C.jsx)(E.Provider,Object(N.a)({value:r},e))},T=function(e){return{name:e.nutrientName,id:e.nutrientId,value:e.value,unit:e.unitName,group:"lol"}},P=function(e){return{name:e.description,brand:e.brandOwner,id:e.fdcId,nutrients:e.foodNutrients.map(T).filter(D).sort(L)}},M=function(e){var n;return{name:e.nutrient.name,id:e.nutrient.id,unit:e.nutrient.unitName,value:e.amount,group:null===(n=W.find((function(n){return n.fdcId===e.nutrient.id})))||void 0===n?void 0:n.group}},A=function(e){return{name:e.description,brand:e.brandOwner,id:e.fdcId,nutrients:e.foodNutrients.map(M).filter(D).sort(L)}},D=function(e){return K.includes(e.name)},L=function(e,n){return K.indexOf(e.name)-K.indexOf(n.name)},W=[{fdcId:1051,fdcName:"Water",group:"macro"},{fdcId:1008,fdcName:"Energy",group:"macro"},{fdcId:1003,fdcName:"Protein",group:"macro"},{fdcId:1004,fdcName:"Total lipid (fat)",group:"lipid"},{fdcId:2039,fdcName:"Carbohydrates",group:"macro"},{fdcId:1079,fdcName:"Fiber, total dietary",group:"macro"},{fdcId:1063,fdcName:"Sugars, Total NLEA",group:"macro"},{fdcId:1087,fdcName:"Calcium, Ca",group:"mineral"},{fdcId:1089,fdcName:"Iron, Fe",group:"mineral"},{fdcId:1090,fdcName:"Magnesium, Mg",group:"mineral"},{fdcId:1091,fdcName:"Phosphorus, P",group:"mineral"},{fdcId:1092,fdcName:"Potassium, K",group:"mineral"},{fdcId:1093,fdcName:"Sodium, Na",group:"mineral"},{fdcId:1095,fdcName:"Zinc, Zn",group:"mineral"},{fdcId:1098,fdcName:"Copper, Cu",group:"mineral"},{fdcId:1101,fdcName:"Manganese, Mn",group:"mineral"},{fdcId:1103,fdcName:"Selenium, Se",group:"mineral"},{fdcId:1162,fdcName:"Vitamin C, total ascorbic acid",group:"vitamin"},{fdcId:1165,fdcName:"Thiamin",group:"vitamin"},{fdcId:1166,fdcName:"Riboflavin",group:"vitamin"},{fdcId:1167,fdcName:"Niacin",group:"vitamin"},{fdcId:1170,fdcName:"Pantothenic acid",group:"vitamin"},{fdcId:1175,fdcName:"Vitamin B-6",group:"vitamin"},{fdcId:1106,fdcName:"Vitamin A, RAE",group:"vitamin"},{fdcId:1107,fdcName:"Carotene, beta",group:"vitamin"},{fdcId:1109,fdcName:"Vitamin E (alpha-tocopherol)",group:"vitamin"},{fdcId:1185,fdcName:"Vitamin K (phylloquinone)",group:"vitamin"},{fdcId:1258,fdcName:"Fatty acids, total saturated",group:"lipid"},{fdcId:1292,fdcName:"Fatty acids, total monounsaturated",group:"lipid"},{fdcId:1293,fdcName:"Fatty acids, total polyunsaturated",group:"lipid"}],K=Object.values(W).map((function(e){return e.fdcName})),R=function(e,n){return e&&n?"https://api.nal.usda.gov/fdc/v1/food/".concat(n,"?api_key=").concat(e):null},B=function(e){if(e&&"fdcId"in e)return e},J=function(e){if(e&&!("fdcId"in e))return e},U=function(e){var n=Object(f.useContext)(E).key,t=R(n,e),c=Object(S.b)(t),r=c.data,i=c.error,a=B(r);return{food:a&&A(a),data:r,apiError:J(r),error:i,isLoading:t&&!i&&!r}},_=function(e){var n=e.morsel,t=Object(I.a)(e,["morsel"]),c=U(n.id),r=c.food,i=c.error;return Object(C.jsxs)("div",Object(N.a)(Object(N.a)({},t),{},{children:[i&&i.toString(),!r&&!i&&"loading...",r&&"".concat(n.amount).concat(n.unit," ").concat(null===r||void 0===r?void 0:r.name," (").concat(null===r||void 0===r?void 0:r.brand,")")]}))},V=y.a.ul(c||(c=Object(p.a)(["\n  margin: 0;\n  padding: 0;\n  li {\n    list-style: none;\n  }\n"]))),z=function(e){var n=e.meal,t=Object(I.a)(e,["meal"]),c=function(e){var n=Object(f.useContext)(E).key,t=e.map(Object(v.partial)(R,n)),c=Object(S.c)((function(e){return t[e]})),r=c.data,i=c.error,a=c.setSize;Object(f.useEffect)((function(){a(e.length)}),[a,e.length]);var o=Object(v.compact)(null===r||void 0===r?void 0:r.map(B)).map(A),d=Object(v.compact)(null===r||void 0===r?void 0:r.map(J));return{foods:o,responses:r,errors:d,error:i}}(Object(v.map)(n.foods,"id")).foods;if(!c)return null;var r=W.map((function(e){var n,t;return{name:e.fdcName,value:c.reduce((function(n,t){var c,r;return n+(null!==(c=null===(r=Object(v.find)(t.nutrients,{name:e.fdcName}))||void 0===r?void 0:r.value)&&void 0!==c?c:0)}),0),unit:null===(n=Object(v.find)(null===(t=Object(v.first)(c))||void 0===t?void 0:t.nutrients,{name:e.fdcName}))||void 0===n?void 0:n.unit,group:e.group}})),i=Object(v.groupBy)(r,"group");return Object(C.jsxs)("div",Object(N.a)(Object(N.a)({},t),{},{children:[Object(C.jsx)("h3",{children:n.date}),Object(C.jsx)(V,{children:n.foods.map((function(e){return Object(C.jsx)("li",{children:Object(C.jsx)(_,{morsel:e})},e.id)}))}),Object(C.jsxs)("table",{children:[Object(C.jsx)("thead",{children:Object(C.jsxs)("tr",{children:[Object(C.jsx)("th",{children:"Nutrient"}),Object(C.jsx)("th",{children:"Amount"})]})}),Object(C.jsx)("tbody",{children:Object.keys(i).map((function(e){return Object(C.jsxs)(O.a.Fragment,{children:[Object(C.jsx)("h4",{children:e}),i[e].map((function(e){return Object(C.jsxs)("tr",{children:[Object(C.jsx)("td",{children:e.name}),Object(C.jsxs)("td",{children:[Math.round(e.value)," ",e.unit]})]})}))]},e)}))})]})]}))},Y=y.a.main.attrs({id:"main"})(r||(r=Object(p.a)(["\n  padding: 4px;\n"]))),q=O.a.createContext({meals:[],setMeals:function(){}}),G=function(e){var n=w("meals",[]),t=Object(x.a)(n,2),c={meals:t[0],setMeals:t[1]};return Object(C.jsx)(q.Provider,Object(N.a)({value:c},e))},H=y.a.div(i||(i=Object(p.a)(["\n  display: flex;\n  justify-content: space-between;\n"]))),X=function(){var e=Object(f.useContext)(q).meals,n=void 0===e?[]:e,t=Object(f.useMemo)((function(){return Object(v.orderBy)(n,["date"],["desc"])}),[n]),c=Object(f.useState)(0),r=Object(x.a)(c,2),i=r[0],a=r[1];Object(f.useEffect)((function(){a(0)}),[n]);var o=i<t.length-1,d=i>0,s=t[i];return Object(C.jsxs)(Y,{children:[Object(C.jsx)("h2",{children:"Meals"}),Object(C.jsxs)(H,{children:[Object(C.jsx)("button",{onClick:function(){o&&a(i+1)},disabled:!o,children:"< Prev"}),Object(C.jsx)("button",{onClick:function(){d&&a(i-1)},disabled:!d,children:"Next >"})]}),s&&Object(C.jsx)(z,{meal:s})]})},Z=t(13),Q=y.a.nav(a||(a=Object(p.a)(["\n  background-color: #eeeeee;\n  border-top: 1px solid #777777;\n  box-sizing: border-box;\n\n  ul {\n    padding: 0;\n    margin: 0;\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    list-style: none;\n\n    li {\n      margin: 0;\n    }\n\n    li:not(:last-child) {\n      border-right: 1px solid black;\n    }\n  }\n"]))),$=Object(y.a)(Z.b)(o||(o=Object(p.a)(["\n  padding: 1rem 0;\n  display: flex;\n  justify-content: center;\n"]))),ee=t(12),ne=y.a.button(d||(d=Object(p.a)([""]))),te=y.a.input(s||(s=Object(p.a)([""]))),ce=t(28),re=t.n(ce);re.a.setAppElement("#root");var ie,ae,oe,de,se,le=Object(y.a)(re.a)(l||(l=Object(p.a)(["\n  margin: 1rem;\n  background-color: white;\n  border: 1px solid black;\n"]))),ue=y.a.div(u||(u=Object(p.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 8px 1rem;\n  border-bottom: 1px solid grey;\n  background-color: lightgrey;\n"]))),je=y.a.h1(j||(j=Object(p.a)(["\n  margin: 0;\n"]))),be=y.a.div(b||(b=Object(p.a)(["\n  margin-top: 1rem;\n  padding: 1rem;\n"]))),fe=function(e){var n=e.isOpen,t=e.onClose,c=e.title,r=e.children;return Object(C.jsxs)(le,{isOpen:n,onRequestClose:t,contentLabel:c,children:[Object(C.jsxs)(ue,{children:[Object(C.jsx)(je,{children:c}),Object(C.jsx)("button",{onClick:t,children:"close"})]}),Object(C.jsx)(be,{children:r})]})},Oe=t(39),he=t.n(Oe),me=t(21),pe=function(e){var n=e.id,t=e.onDone,c=U(n),r=c.food,i=c.error,a=Object(f.useState)(100),o=Object(x.a)(a,2),d=o[0],s=o[1],l=Object(f.useState)(he()().format("YYYY-MM-DD")),u=Object(x.a)(l,2),j=u[0],b=u[1],O=Object(f.useContext)(q),h=O.meals,m=O.setMeals,p=function(){s(100)};Object(f.useEffect)((function(){return p(),p}),[]);var g=function(e,n,t){var c,r,i,a=Object(v.findIndex)(h||[],{date:t}),o={id:e,amount:n,unit:"g"};if(console.log({existingMealIndex:a}),-1===a)m([].concat(Object(ee.a)(h||[]),[{date:t,foods:[o]}]));else{var d=h[a];m((c=h,r=a,i=Object(N.a)(Object(N.a)({},d),{},{foods:[].concat(Object(ee.a)(d.foods),[o])}),Object.assign(Object(ee.a)(c),Object(me.a)({},r,i))))}};return Object(C.jsxs)(C.Fragment,{children:[i&&Object(C.jsx)("code",{children:JSON.stringify(i)}),!r&&"loading...",Object(C.jsxs)("label",{children:["Which meal?",Object(C.jsx)(te,{type:"date",onChange:function(e){return b(e.target.value)},value:j})]}),Object(C.jsxs)("label",{children:["How Much ",null===r||void 0===r?void 0:r.name,"?",Object(C.jsx)(te,{type:"number",onChange:function(e){return s(Number(e.target.value))},value:d})]}),Object(C.jsx)(ne,{onClick:function(){t()},children:"Cancel"}),Object(C.jsx)(ne,{onClick:function(){g(n,d,j),t()},children:"Do it baby!"})]})},ge=function(e){var n=e.id,t=e.isOpen,c=e.onClose;return Object(C.jsx)(fe,{isOpen:t,onClose:c,title:"Add Food To Meal",children:Object(C.jsx)(pe,{id:n,onDone:c})})},xe=y.a.div(ie||(ie=Object(p.a)(["\n  max-width: 400px;\n"]))),ve=y.a.div(ae||(ae=Object(p.a)(["\n  display: grid;\n  grid-template-columns: 1fr auto;\n  margin-bottom: 4px;\n"]))),ye=y.a.div(oe||(oe=Object(p.a)(["\n  overflow: hidden;\n  text-overflow: ellipsis;\n"]))),Ne=(y.a.ul(de||(de=Object(p.a)(["\n  margin: 0;\n  padding: 0;\n  li {\n    list-style: none;\n  }\n"]))),function(e){var n=e.food,t=e.actions;return Object(C.jsx)(xe,{children:Object(C.jsxs)(ve,{children:[Object(C.jsxs)(ye,{children:[n.name," ",n.brand&&"(".concat(n.brand,")")]}),Object(C.jsx)("div",{children:t})]})})}),Ie=O.a.createContext({starred:[],setStarred:function(){}}),Se=function(e){var n=w("starred",[]),t=Object(x.a)(n,2),c=t[0],r={starred:void 0===c?[]:c,setStarred:t[1]};return Object(C.jsx)(Ie.Provider,Object(N.a)({value:r},e))},we=function(e,n){var t=Object(S.b)(function(e,n){return e&&0!==e.trim().length&&n&&0!==n.length?"https://api.nal.usda.gov/fdc/v1/foods/search?api_key=".concat("EXKD4pinV1LPdlzNNnGWnI4IBh0GvmycfTVMJexP","&query=").concat(encodeURIComponent(e.trim()),"&dataType=").concat(encodeURIComponent(n.join(","))):null}(e,n));return{data:t.data,error:t.error}};!function(e){e.BRANDED="Branded",e.SURVEY="Survey (FNDDS)",e.LEGACY="SR Legacy",e.FOUNDATION="Foundation"}(se||(se={}));var Ce,ke,Ee,Fe,Te,Pe,Me,Ae,De,Le=Object(y.a)(te).attrs({type:"text"})(Ce||(Ce=Object(p.a)(["\n  box-sizing: border-box;\n  width: 100%;\n  font-size: 1rem;\n  padding: 0.5rem;\n"]))),We=y.a.ul(ke||(ke=Object(p.a)(["\n  padding: 0;\n  margin: 0;\n  margin-top: 1rem;\n  display: grid;\n  gap: 1rem;\n  li {\n    list-style: none;\n  }\n"]))),Ke=y.a.div(Ee||(Ee=Object(p.a)(["\n  margin-top: 8px;\n  display: grid;\n  grid-template-rows: 1fr 1fr;\n  grid-template-columns: 1fr 1fr;\n"]))),Re=function(){var e,n=w("searchQuery",""),t=Object(x.a)(n,2),c=t[0],r=t[1],i=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:50,t=Object(f.useState)(e),c=Object(x.a)(t,2),r=c[0],i=c[1];return Object(f.useEffect)((function(){var t=setTimeout((function(){return i(e)}),n);return function(){return clearTimeout(t)}}),[e,n]),r}(c),a=w("dataTypes",[se.FOUNDATION]),o=Object(x.a)(a,2),d=o[0],s=o[1],l=we(i,d),u=l.data,j=l.error,b=(null===u||void 0===u||null===(e=u.foods)||void 0===e?void 0:e.map(P))||[],O=Object(f.useContext)(Ie),h=O.starred,m=O.setStarred,p=function(e){s(Object(v.uniq)([].concat(Object(ee.a)(d),[e])))},g=function(e){return s(Object(v.without)(d,e))},y=Object(f.useState)(),N=Object(x.a)(y,2),I=N[0],S=N[1],k=Object(f.useState)(!1),E=Object(x.a)(k,2),F=E[0],T=E[1];return Object(C.jsxs)(Y,{children:[I&&Object(C.jsx)(ge,{id:I,isOpen:F,onClose:function(){T(!1),S(void 0)}}),Object(C.jsx)(Le,{value:c,onChange:function(e){return r(e.target.value)},placeholder:"Search For Food"}),Object(C.jsx)(Ke,{children:Object.values(se).map((function(e){return Object(C.jsxs)("label",{style:{marginRight:"10px"},children:[Object(C.jsx)("input",{type:"checkbox",name:e,defaultChecked:d.includes(e),onChange:function(n){return(n.target.checked?p:g)(e)}},e),e]})}))}),Object(C.jsx)(We,{children:b.map((function(e){return Object(C.jsx)("li",{children:Object(C.jsx)(Ne,{food:e,actions:Object(C.jsxs)("div",{children:[Object(C.jsx)(ne,{onClick:function(){return m([].concat(Object(ee.a)(h||[]),[e.id]))},children:(null===h||void 0===h?void 0:h.includes(e.id))?"Unstar":"Star"}),Object(C.jsx)(ne,{onClick:function(){return n=e.id,S(n),void T(!0);var n},children:"Log"})]})})},e.id)}))}),Object(C.jsx)("pre",{children:Object(C.jsx)("code",{children:JSON.stringify(j,null,2)})})]})},Be=function(e){var n=e.id,t=U(n),c=t.food,r=t.error,i=Object(f.useContext)(Ie),a=i.starred,o=i.setStarred,d=!c&&!r,s=null===a||void 0===a?void 0:a.includes(n);return Object(C.jsxs)(C.Fragment,{children:[d&&Object(C.jsx)("span",{children:"Loading..."}),c&&Object(C.jsx)(Ne,{food:c,actions:Object(C.jsx)(C.Fragment,{children:Object(C.jsx)("button",{onClick:s?function(){return o(Object(v.without)(a,n))}:function(){return o(Object(v.uniq)([].concat(Object(ee.a)(a||[]),[n])))},children:s?"Unstar":"Star"})})}),JSON.stringify(r)]})},Je=function(){var e=w("starred",[]),n=Object(x.a)(e,2),t=n[0],c=n[1];return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)("ul",{children:(t||[]).map((function(e){return Object(C.jsx)("li",{children:Object(C.jsx)(Be,{id:e})},e)}))}),Object(C.jsx)("button",{onClick:function(){return c([])},children:"Clear Starred Items"})]})},Ue=y.a.span(Fe||(Fe=Object(p.a)(['\n  margin-left: 4px;\n  &[data-status="loading"] {\n    color: blue;\n  }\n  &[data-status="valid"] {\n    color: green;\n  }\n  &[data-status="invalid"] {\n    color: red;\n  }\n']))),_e=function(e){var n=Object(f.useContext)(E),t=n.key,c=n.setKey,r=U(747447),i=r.food,a=r.apiError,o=r.error,d=r.isLoading,s=Boolean(i),l=Boolean(a||o);return Object(C.jsxs)(Y,Object(N.a)(Object(N.a)({},e),{},{children:[Object(C.jsx)("h2",{children:"Settings"}),Object(C.jsx)("p",{children:"You can change some settings here :)"}),Object(C.jsx)("h3",{children:Object(C.jsx)("label",{htmlFor:"apiKey",children:"API Key"})}),Object(C.jsx)("p",{children:"This app comes with a default API key. If that one ever gets invalidated or starts hitting the rate-limit too often, you can request your own from the FDA website and paste it below."}),Object(C.jsx)(te,{id:"apiKey",type:"text",value:t,onChange:function(e){return c(e.target.value)}}),Object(C.jsxs)(Ue,{"data-status":(d?"loading":s&&"valid")||l&&"invalid",children:[d&&"loading...",i&&"\u2714\ufe0f valid",l&&"\u274c invalid"]})]}))},Ve=y.a.nav(Te||(Te=Object(p.a)(["\n  color: white;\n  background-color: salmon;\n  border-bottom: 1px solid violet;\n\n  width: 100%;\n  padding: 4px;\n  box-sizing: border-box;\n\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n\n  a {\n    color: white;\n  }\n"]))),ze=function(e){return Object(C.jsxs)(Ve,Object(N.a)(Object(N.a)({},e),{},{children:[Object(C.jsx)(Z.b,{to:"/",children:Object(C.jsx)("h1",{children:"Healthy"})}),Object(C.jsx)("div",{children:Object(C.jsx)(Z.b,{to:"/settings",children:"Settings"})})]}))},Ye=function(e){var n=Object.assign({},e);return Object(C.jsx)(Y,Object(N.a)(Object(N.a)({},n),{},{children:Object(C.jsx)("pre",{children:Object(C.jsx)("code",{children:JSON.stringify(Object({NODE_ENV:"production",PUBLIC_URL:"/healthy",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}),null,2)})})}))},qe=y.a.a(Pe||(Pe=Object(p.a)(["\n  left: -999px;\n  position: absolute;\n  top: auto;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  z-index: -999;\n  &:focus,\n  &:active {\n    color: #fff;\n    background-color: #000;\n    left: auto;\n    top: auto;\n    width: 30%;\n    height: auto;\n    overflow: auto;\n    margin: 10px 35%;\n    padding: 5px;\n    border-radius: 15px;\n    border: 4px solid yellow;\n    text-align: center;\n    font-size: 1.2em;\n    z-index: 999;\n  }\n"]))),Ge=y.a.div(Me||(Me=Object(p.a)(["\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n"]))),He=Object(y.a)((function(e){return Object(C.jsx)(Q,Object(N.a)(Object(N.a)({},e),{},{children:Object(C.jsxs)("ul",{children:[Object(C.jsx)("li",{children:Object(C.jsx)($,{to:"/",children:"Search"})}),Object(C.jsx)("li",{children:Object(C.jsx)($,{to:"/starred",children:"Starred"})}),Object(C.jsx)("li",{children:Object(C.jsx)($,{to:"/meals",children:"My Meals"})})]})}))}))(Ae||(Ae=Object(p.a)(["\n  order: 1;\n"]))),Xe=y.a.div(De||(De=Object(p.a)(["\n  flex-grow: 1;\n  overflow: auto;\n"]))),Ze=function(){return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(qe,{href:"#main",children:"Jump to Main Content"}),Object(C.jsxs)(Ge,{children:[Object(C.jsx)(He,{}),Object(C.jsxs)(Xe,{children:[Object(C.jsx)(ze,{}),Object(C.jsxs)(g.c,{children:[Object(C.jsx)(g.a,{path:"/",exact:!0,children:Object(C.jsx)(Re,{})}),Object(C.jsx)(g.a,{path:"/starred",children:Object(C.jsx)(Je,{})}),Object(C.jsx)(g.a,{path:"/meals",children:Object(C.jsx)(X,{})}),Object(C.jsx)(g.a,{path:"/settings",children:Object(C.jsx)(_e,{})}),Object(C.jsx)(g.a,{path:"/debug",children:Object(C.jsx)(Ye,{})})]})]})]})]})},Qe=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function $e(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var en=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,61)).then((function(n){var t=n.getCLS,c=n.getFID,r=n.getFCP,i=n.getLCP,a=n.getTTFB;t(e),c(e),r(e),i(e),a(e)}))},nn=function(e,n){return fetch(e,n).then((function(e){return e.json()}))},tn=function(e){var n=e.children;return Object(C.jsx)(S.a,{value:{refreshInterval:0,revalidateOnFocus:!1,dedupingInterval:6e5,fetcher:nn},children:n})};m.a.render(Object(C.jsx)(O.a.StrictMode,{children:Object(C.jsx)(tn,{children:Object(C.jsx)(F,{children:Object(C.jsx)(Se,{children:Object(C.jsx)(G,{children:Object(C.jsx)(Z.a,{basename:"/healthy",children:Object(C.jsx)(Ze,{})})})})})})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/healthy",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/healthy","/service-worker.js");Qe?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var c=t.headers.get("content-type");404===t.status||null!=c&&-1===c.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):$e(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):$e(n,e)}))}}(),en()}},[[60,1,2]]]);
//# sourceMappingURL=main.5e3b3e8a.chunk.js.map