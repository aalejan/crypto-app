(this["webpackJsonpcrypto-app"]=this["webpackJsonpcrypto-app"]||[]).push([[0],{65:function(e,t,c){},66:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c(26),s=c.n(a),r=c(10),i=c(2),l=c(8),d=c.n(l),o=c(11),j=c(7),m=c(30),u=c(27),b=c.n(u),x={lineHeightAnnotation:{always:!0,hover:!1,lineWeight:1.5},animation:{duration:2e3},maintainAspectRatio:!1,responsive:!0,scales:{xAxes:[{type:"time",distribution:"linear"}]}},h=c(0),p=function(e){var t=e.data,c=Object(n.useRef)(),a=t.day,s=t.week,r=t.year,i=t.detail,l=Object(n.useState)("24h"),d=Object(j.a)(l,2),o=d[0],u=d[1],p=function(){switch(o){case"24h":return a;case"7d":return s;case"1y":return r;default:return a}};Object(n.useEffect)((function(){if(c&&c.current&&i)new b.a(c.current,{type:"line",data:{datasets:[{label:"".concat(i.name," price"),data:p(),backgroundColor:"rgba(174, 305, 194, 0.5)",borderColor:"rgba(174, 305, 194, 0.4)",pointRadius:0,borderWidth:1}]},options:Object(m.a)({},x)})}));return Object(h.jsxs)("div",{className:"bg-white border mt-2 rounded p-3",children:[Object(h.jsx)("div",{children:function(){if(i)return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("p",{className:"my-0",children:i.current_price.toFixed(2)}),Object(h.jsxs)("p",{className:i.price_change_percentage_24h<0?"text-danger my-0":"text-success my-0",children:[i.price_change_percentage_24h.toFixed(2),"%"]})]})}()}),Object(h.jsx)("div",{children:Object(h.jsx)("canvas",{ref:c,id:"my chart",width:"250",height:"250"})}),Object(h.jsxs)("div",{className:"chart-button mt-1",children:[Object(h.jsx)("div",{onClick:function(){return u("24h")},className:"btn btn-outline-secondary btn-sm",children:"24h"}),Object(h.jsx)("div",{onClick:function(){return u("7d")},className:"btn btn-outline-secondary btn-sm mx-1",children:"7d"}),Object(h.jsx)("div",{onClick:function(){return u("1y")},className:"btn btn-outline-secondary btn-sm",children:"1y"})]})]})},O=function(e){var t=e.data;return Object(h.jsx)("div",{children:function(){if(t)return Object(h.jsxs)("div",{className:"bg-white mt-3 p-2 rounded border row ",children:[Object(h.jsxs)("div",{className:"col-sm",children:[Object(h.jsxs)("div",{className:"d-flex flex-column",children:[Object(h.jsx)("span",{className:"text-muted coin-data-category",children:"Market Cap"}),Object(h.jsx)("span",{children:"$ ".concat(t.market_cap)})]}),Object(h.jsx)("hr",{}),Object(h.jsxs)("div",{className:"d-flex flex-column",children:[Object(h.jsx)("span",{className:"text-muted coin-data-category",children:"Total Supply"}),Object(h.jsx)("span",{children:t.total_supply})]})]}),Object(h.jsxs)("div",{className:"col-sm",children:[Object(h.jsxs)("div",{className:"d-flex flex-column",children:[Object(h.jsx)("span",{className:"text-muted coin-data-category",children:"Volume(24h)"}),Object(h.jsx)("span",{children:t.total_volume})]}),Object(h.jsx)("hr",{}),Object(h.jsxs)("div",{className:"d-flex flex-column",children:[Object(h.jsx)("span",{className:"text-muted coin-data-category",children:"High 24h"}),Object(h.jsx)("span",{children:"$ ".concat(t.high_24h)})]})]}),Object(h.jsxs)("div",{className:"col-sm",children:[Object(h.jsxs)("div",{className:"d-flex flex-column",children:[Object(h.jsx)("span",{className:"text-muted coin-data-category",children:"Circulating Supply"}),Object(h.jsx)("span",{children:t.circulating_supply})]}),Object(h.jsx)("hr",{}),Object(h.jsxs)("div",{className:"d-flex flex-column",children:[Object(h.jsx)("span",{className:"text-muted coin-data-category",children:"Low 24h"}),Object(h.jsx)("span",{children:"$ ".concat(t.low_24h)})]})]})]})}()})},f=c(28),g=c.n(f).a.create({baseURL:"https://api.coingecko.com/api/v3"}),v=function(){var e=Object(n.useState)({}),t=Object(j.a)(e,2),c=t[0],a=t[1],s=Object(i.e)().id,r=function(e){return e.map((function(e){return{t:e[0],y:e[1].toFixed(2)}}))};Object(n.useEffect)((function(){(function(){var e=Object(o.a)(d.a.mark((function e(){var t,c,n,i,l,o;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([g.get("/coins/".concat(s,"/market_chart/"),{params:{vs_currency:"usd",days:"1"}}),g.get("/coins/".concat(s,"/market_chart/"),{params:{vs_currency:"usd",days:"7"}}),g.get("/coins/".concat(s,"/market_chart/"),{params:{vs_currency:"usd",days:"365"}}),g.get("/coins/markets",{params:{vs_currency:"usd",ids:s}})]);case 2:t=e.sent,c=Object(j.a)(t,4),n=c[0],i=c[1],l=c[2],o=c[3],a({day:r(n.data.prices),week:r(i.data.prices),year:r(l.data.prices),detail:o.data[0]});case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);return Object(h.jsxs)("div",{className:"coinlist",children:[Object(h.jsx)(p,{data:c}),Object(h.jsx)(O,{data:c.detail})]})},N=function(){return Object(h.jsx)("div",{children:Object(h.jsxs)("h1",{className:"text-center text-warning mt-3 mb-5",children:[Object(h.jsx)("span",{className:"text-white",children:"Coin"}),Object(h.jsx)("span",{className:"bg-warning text-dark rounded p-1",children:"Hub"})]})})},y=(c(65),function(e){var t=e.coin;return Object(h.jsx)(r.b,{className:"text-decoration-none",to:"/coins/".concat(t.id),children:Object(h.jsx)("li",{className:"coilist-item list-group-item list-group-item-action d-flex justify-content-between align-items-center rounded ",children:Object(h.jsxs)("div",{className:"container row",children:[Object(h.jsxs)("span",{className:"col-sm",children:[Object(h.jsx)("img",{src:t.image,alt:"",className:"coinlist-image "}),"  ",t.name]}),Object(h.jsx)("span",{className:"text-decoration-none col-sm text-center",children:"$".concat(t.current_price)}),Object(h.jsxs)("span",{className:t.price_change_percentage_24h<0?"text-danger mr-2 col-sm d-flex justify-content-end":"text-success col-sm d-flex justify-content-end",children:[Object(h.jsx)("i",{className:t.price_change_percentage_24h<0?"fas fa-sort-down align-middle mr-1 col-sm d-flex justify-content-end":"fas fa-sort-up align-middle mr-1 col-sm d-flex justify-content-end"}),t.price_change_percentage_24h]})]})})})}),w=function(){var e=Object(n.useState)([]),t=Object(j.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(1),r=Object(j.a)(s,2),i=r[0],l=r[1];Object(n.useEffect)((function(){(function(){var e=Object(o.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.get("/coins/markets",{params:{vs_currency:"usd",order:"market_cap_desc",per_page:25,page:i}});case 2:t=e.sent,a(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[i]);var m=function(e){"back"===e&&i>1?l(i-1):"next"===e&&i<8&&l(i+1)};return Object(h.jsxs)("div",{className:"coinList shadow border p-2 rounded mt-2 bg-light mb-5",children:[Object(h.jsx)("ul",{className:"coinlist list-group mt-2",children:c.map((function(e){return Object(h.jsx)(y,{coin:e},e.id)}))}),Object(h.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(h.jsx)("button",{onClick:function(){return m("back")},className:"mr-3 mt-4 btn btn-warning",children:"Prev"}),Object(h.jsx)("button",{onClick:function(){return m("next")},className:" mt-4 ml-4 btn btn-warning",children:"Next"})]})]})},_=function(){return Object(h.jsx)("div",{className:"nav-bar",children:Object(h.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light ",children:Object(h.jsxs)("ul",{className:"navbar-nav ",children:[Object(h.jsx)("li",{className:"nav-item active",children:Object(h.jsx)(r.b,{to:"/Prices",className:"nav-link text-white ",href:"#",children:"Prices "})}),Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(r.b,{to:"/Trending",className:"nav-link text-white",href:"#",children:"Trending"})}),Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(r.b,{to:"/Exchanges",className:"nav-link text-white",href:"#",children:"Exchanges"})})]})})})},k=function(){var e=Object(n.useState)([]),t=Object(j.a)(e,2),c=t[0],a=t[1];Object(n.useEffect)((function(){(function(){var e=Object(o.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.get("/search/trending");case 2:t=e.sent,a(t.data.coins);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);return Object(h.jsxs)("div",{className:"coinList shadow border p-2 rounded mt-2 bg-light",children:[Object(h.jsx)("div",{className:"d-flex justify-content-end ",children:"Market Cap Rank"}),Object(h.jsx)("div",{children:c.map((function(e){return Object(h.jsx)(r.b,{className:"text-decoration-none ",to:"/coins/".concat(e.item.id),children:Object(h.jsxs)("li",{className:"coilist-item list-group-item list-group-item-action d-flex justify-content-between rounded ",children:[Object(h.jsxs)("span",{children:[Object(h.jsx)("img",{src:e.item.large,alt:"",className:"coinlist-image "}),"  ",e.item.id]}),Object(h.jsxs)("span",{className:"text-primary",children:[" ",e.item.market_cap_rank]})]})},e.item.id)}))})]})},C=function(e){var t=e.exchange;return Object(h.jsx)("div",{className:"container",children:Object(h.jsx)("li",{className:"exchanges list-group-item shadow mb-3 ",children:Object(h.jsxs)("div",{className:"row",children:[Object(h.jsxs)("span",{className:"col-sm",children:[Object(h.jsx)("img",{className:"rounded pr-2",src:t.image,alt:t.id})," ",t.name]}),Object(h.jsx)("span",{className:"col-sm text-center",children:t.trade_volume_24h_btc}),Object(h.jsx)("a",{className:"col-sm d-flex justify-content-end",href:t.url,children:Object(h.jsx)("span",{className:"btn btn-primary",children:"Visit Site"})})]})})})},E=function(){var e=Object(n.useState)([]),t=Object(j.a)(e,2),c=t[0],a=t[1];Object(n.useEffect)((function(){var e=function(){var e=Object(o.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.get("/exchanges",{params:{per_page:15,page:"1"}});case 2:t=e.sent,a(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();console.log(c),e()}),[]);return Object(h.jsxs)("div",{className:"exchangeList shadow border p-2 rounded mt-2 bg-light mb-4",children:[Object(h.jsx)("div",{className:"container mb-2",children:Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("div",{className:"col-sm",children:"Exchange"}),Object(h.jsx)("div",{className:"col-sm text-center",children:"Trade Volume 24h BTC"}),Object(h.jsx)("div",{className:"col-sm"})]})}),Object(h.jsx)("ul",{className:"list-group ",children:c.map((function(e){return Object(h.jsx)(C,{exchange:e},e.id)}))})]})};var S=function(){return Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)(r.a,{children:[Object(h.jsx)(N,{}),Object(h.jsx)(_,{}),Object(h.jsx)(i.a,{path:"/Exchanges",component:E}),Object(h.jsx)(i.a,{path:"/Trending",component:k}),Object(h.jsx)(i.a,{path:"/Prices",component:w}),Object(h.jsx)(i.a,{path:"/coins/:id",component:v})]})})};s.a.render(Object(h.jsx)(S,{}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.e30f2f87.chunk.js.map