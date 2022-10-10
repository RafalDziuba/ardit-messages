(function(){"use strict";var t={928:function(t,n,e){var a=e(3862),o=e(3396),c=e(2578),r=e(948),s=e(9585);const l=(0,c.Q_)("contract",{state:()=>({contractState:[],contractId:"48G_IllU9G-PRyl4Ods88STtQ1h0Eo8zHQUHdNlHKZw",messages:[],warp:null,contract:null,wallet:null,connectingError:!1}),actions:{async getContract(){this.warp=await r.Co.forMainnet(),this.contract=await this.warp.contract(this.contractId);const{cachedValue:t}=await this.contract.readState();this.contractState=t.state,console.log(this.contractState)},async connectWallet(){this.wallet=new s.Z({name:"Ardit"}),await this.wallet.setUrl("arweave.app"),await this.wallet.connect(),await this.contract.connect("use_wallet")},async voteInteraction(t,n){try{await this.contract.writeInteraction({function:t,id:n})}catch(e){console.log(e),alert("hi from vote error")}},async addContent(t){try{await this.contract.writeInteraction({function:"postMessage",content:t})}catch(n){console.log(n),alert("hi from error")}}}});var i=e(4870),u=e(7139);const A=t=>((0,o.dD)("data-v-d3facfdc"),t=t(),(0,o.Cn)(),t),d=A((()=>(0,o._)("p",null,"Contract id:",-1))),v=["href"];var f={__name:"TheHeader",setup(t){const n=l();return(t,e)=>((0,o.wg)(),(0,o.iD)("header",null,[(0,o._)("h1",null,[d,(0,o._)("a",{href:`https://sonar.warp.cc/#/app/contract/${(0,i.SU)(n).contractId}`},(0,u.zw)((0,i.SU)(n).contractId),9,v)])]))}},g=e(89);const p=(0,g.Z)(f,[["__scopeId","data-v-d3facfdc"]]);var h=p;const w=t=>((0,o.dD)("data-v-dfa63a26"),t=t(),(0,o.Cn)(),t),m={class:"wallet-menu"},B={class:"form__group field"},C=w((()=>(0,o._)("label",{for:"message",class:"form__label"},"Message",-1))),S=["onClick"];var b={__name:"MessageForm",setup(t){let n=(0,i.iH)("");const e=l(),c=async()=>{""!=n.value&&(await e.addContent(n.value),n.value="",e.getContract())};return(t,r)=>((0,o.wg)(),(0,o.iD)("section",null,[(0,o._)("div",m,[(0,o._)("button",{onClick:r[0]||(r[0]=t=>(0,i.SU)(e).connectWallet())},"CONNECT WALLET")]),(0,o._)("form",null,[(0,o._)("div",B,[(0,o.wy)((0,o._)("input",{type:"input","onUpdate:modelValue":r[1]||(r[1]=t=>(0,i.dq)(n)?n.value=t:n=t),class:"form__field",placeholder:"Message",name:"message",id:"message",required:""},null,512),[[a.nr,(0,i.SU)(n)]]),C]),(0,o._)("button",{onClick:(0,a.iM)(c,["prevent"])},"Send",8,S)])]))}};const I=(0,g.Z)(b,[["__scopeId","data-v-dfa63a26"]]);var U=I,y="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA7AAAAOwBeShxvQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAQnSURBVFiFvZdbbFRVFIa/fa5TZwYolSKFCFZCbTFtxaBcIsVSxRuakGhqSEQlgcRosCQm4gPeosGHokESY3wgRp9AJER8MBLAAg1Y21gkxbRKU3uTy0hLO+3MmTNn+zAXz7SdTjPt+CcrZ++119rrP+vsvVYO5AYdQNlUDJUcEVgKFP4fBLzAU1O0XQkUTzPeOJQAIeC9MfpBYIVr/kTcbutME3Bv/rpLl+car2JikjOK9cCmNGtlwLZcBh+LImAzU7wF2UIB7iJ2qIpc+nWaqo768zyWECKqKMou11p+3L6Y1E+UFbYB0iVLAfIMo/Glx6ujzslD8svdr0pVUcKAGffpdtl/ldhIy5LAQeAkIIgdsD4AhCyuqihVhBCsKy8j6jgGsBhoB8qJZQGgf7oEHKBzjE4PR+yCRfMKAJBSJvSh+PNmXFIwk5WwRhFCKS9eDIBl2wn94GRO2WZgLG4zdb2+dsNaZ96cWQpAZ/81hBCOlPLWZI4zkQGfaWhHC/NnF+97ZWvyhdq6evAYRiexQ5czAqtMQ28pKpi7/uS+t825fl9y4djZJtuKRE5l2iDBWAfWMvEnCQPNwIhL96ChqW9Gos4zz1atdva/9rKa7/fyZ99VOvuvErIinL30u+I4Tj9Q4/KTwB9A19ggtaTe6xRRDaMbqAY+Mg29S4DcuLLSajzwgZSnDiel5v7ytHu4xdTVTxOBRfz5om/e/M92nmn1jHv94SH2V1XakWBQK128KPzcw2vMLTUPsXThHenzOgl+am2juu4d6Uj5APBLxltg+vx4fH5n/44t7Nj0iJnJPhPW3luCxzTskVD4zkkJBAPX6f21mWUbHosR0fWsAh498zPtPbFC6TiSH5sv2hHbHgFOwSR1IBi4QW9rS5JAtrhwuYPm9itYti0vtLVLy45el1JuIF4V0xIoXFZK4a7SaQUH2Lt9S2Iovj/fIja9tXc+0JNQpq0DV86d5usXNk+bgBuu/pAcpM3A8LWrDPR2Zx0sZEV4/v1PGB4NIaWUwdFQqLnjiqGq4oBty+GMBKYLQ9NYs7yEwK0hLNsWXxw/oUXs6LdAndsuZwQURfBG7dPJeVFBvr7n4KH7RsPhlN6Qqx+TFARDYU63ttnSccaV4LQZ0AwTzTCyCthwsY3quneJOk5Sp2vaQMS268bapiVwz8YnWbRiZVYEVpeVcKJ+D3Y0Sn9ggO31n0dClrUb+G3KBBRNZ9aChcn5pc6/uDE4xO2z/RkJ6JrK+srlyfmRhvPi2LmmyolskwRsK6x0NjaMM7BGggT/Cagff3M8su/Qd/qSBYWhqooys+LuJSLf72WOz4vXk75F9AVu8kNTqwQaJyP9KEJEmaB1CkWxVcM4DHiI/WDuNDTtiM9jXvbmef7WNTU4kV9CDE0bVBTlQ/7rvCn4FydihXm9IHnbAAAAAElFTkSuQmCC",Q="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA7AAAAOwBeShxvQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAQ1SURBVFiF7ZddbBVFFMd/szt7995eaKOlSm0tgghEWlELDSEEKD744AMhhmhUIuJHIho1NkpIMYoaQURRSlQSJUoQoyIfGpCqQPgoIBREgmjUAIlQ5LaXFmhv997dmfEBW+gttbSFvuj/abPnnJnfmXN2Zhb+6xIXPBcAgwErzccAR4DDVwogQwp7eWDU5H9zdG17bVKpewEvzWQBI4AJwLBLnDcFbATWCAsWRp3QE4vH3umMv74AS4g2ntoY9sRO8Njm9easn3on0PpZoAgoFUKU2pZVGiiVGY2E/RFDByKl3ensp043qoO/H3WBMuFaduyZopKcJwtHkhV1Owx6+6fdzNm93XccO+ml/D7RSNgfWzxclI66RY4rLqRoyA3YVnr1Olb5oo9ZvOLrOpnUKicvo2+nAQP6ZqGMdl6aNtkZP7qY2wqHOl2ZMF0ZYRdjkLKrgTPuvoNQ36u6lO2FqonFef6tpWbt5l1GKb24+yl0U17Kp7b+TKC1EcBfvQ4wKL8/lUtecWY9MkW4ITm71wFalBEJQ3d6oKeqicUpr1hmvvyuSmttKloBDKZXALyUT03sVKCUlsaYeGsJtO4dgLQeKG8FCLTptVWAcz2gNc75EhhDyte4TudbaU84a2JxZlcsMyu/rdKBUovafAVNXgqA2uYEkypXMeSzD5i7b2e7QVSQ7DaAl/I5ejymlNYW0NQGwFeaRi/Fmz/+wC/NTdzz4EPMra5if93J8xnUNaC8BMmzpzBadRlgUH5/Ni2dK59+YJJwpJzVbh9o8nxOe0lCTojsq3POvfP9Vvuo6S+aBZ+sJ3G2kWRDLUEy0WUIgGgkDBgpbSGSngraHIOPDruVPVWVzHl5NlOHFTEmN59Pf/sZSwjtJf3nFqz45rV1Ow64n786gxxjwBhkOArAsZN1zF+6Em06bpRYvEFt2F4tAqUrhGPbVSX9cks+HHeXtEXbBdHG4DoS24b7v//K7K07sb/J928HCiJuaFP/7KxBq+Y9JQquzcbNysaSIXYd+JWJ02chpXVQCCt+MQDfD+qBSmCJAEbaQmzLj2Zao3JyQzINIjCa6toT/p9NZwJlzARg9z+m7EjY3VE4MG/I+oVlyJCLm5lNoBTXlU4NGhPNLwDzOitFy/XnRuBxKcQIYVnOhQ5G4wdG7QeWAH+kxY8Ftr0/cxpTJpbgZvbDchzumzlfr9uyZ4sfBBM7A+ixQlJuuHlgno5XvmsatnxkEtWrzRtlDxvbtpppf8Ftpx6fhqkgKD905Lg4ePgYKuWBMRQPH4xSOgzkXXEAYG+fjPCxtVv3gdYoP8mA3GtabDf1BgCNCW/5mq37DEDQ3EjKD1pMQcdRlxEA+OLw8ZjYWH2I2ng9Za+/Z1xH1gHVl2n8zpURcVdz7pgykZBTD4y5lDjRucslSwCjgTCwk/Z/UP/rovobHI66HqOtETUAAAAASUVORK5CYII=";const z=t=>((0,o.dD)("data-v-84e4cc88"),t=t(),(0,o.Cn)(),t),V={key:0,class:"content"},E=["href"],O={class:"votes-container"},K={class:"score"},k={class:"icons"},R=["onClick"],D=z((()=>(0,o._)("img",{src:y,alt:"upvote icon"},null,-1))),W=[D],F=["onClick"],L=z((()=>(0,o._)("img",{src:Q,alt:"downvote icon"},null,-1))),M=[L];var N={__name:"MessagesList",setup(t){const n=l(),e=async(t,e)=>{await n.voteInteraction(t,e)};return(t,c)=>(0,i.SU)(n).contractState.messages?((0,o.wg)(),(0,o.iD)("div",V,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)((0,i.SU)(n).contractState.messages.slice().reverse(),(t=>((0,o.wg)(),(0,o.iD)("div",{class:"message",key:t.id},[(0,o._)("p",null,(0,u.zw)(t.content),1),(0,o._)("h3",null,[(0,o._)("a",{href:`https://viewblock.io/arweave/address/${t.creator}`},(0,u.zw)(t.creator),9,E)]),(0,o._)("div",O,[(0,o._)("div",K,[(0,o._)("p",null,(0,u.zw)(t.votes.status),1)]),(0,o._)("div",k,[(0,o._)("div",{class:"upvote",onClick:(0,a.iM)((n=>e("upvoteMessage",t.messageId)),["prevent"])},W,8,R),(0,o._)("div",{class:"downvote",onClick:(0,a.iM)((n=>e("downvoteMessage",t.messageId)),["prevent"])},M,8,F)])])])))),128))])):(0,o.kq)("",!0)}};const Z=(0,g.Z)(N,[["__scopeId","data-v-84e4cc88"]]);var P=Z;const _={class:"wrapper"};var x={__name:"App",setup(t){const n=l();return n.getContract(),(t,n)=>((0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("div",null,[(0,o.Wm)(h)]),(0,o._)("div",_,[(0,o.Wm)(U),(0,o.Wm)(P)])],64))}};const H=x;var Y=H;const J=(0,a.ri)(Y),T=(0,c.WB)();J.use(T),J.mount("#app")}},n={};function e(a){var o=n[a];if(void 0!==o)return o.exports;var c=n[a]={id:a,loaded:!1,exports:{}};return t[a](c,c.exports,e),c.loaded=!0,c.exports}e.m=t,function(){e.amdO={}}(),function(){var t=[];e.O=function(n,a,o,c){if(!a){var r=1/0;for(u=0;u<t.length;u++){a=t[u][0],o=t[u][1],c=t[u][2];for(var s=!0,l=0;l<a.length;l++)(!1&c||r>=c)&&Object.keys(e.O).every((function(t){return e.O[t](a[l])}))?a.splice(l--,1):(s=!1,c<r&&(r=c));if(s){t.splice(u--,1);var i=o();void 0!==i&&(n=i)}}return n}c=c||0;for(var u=t.length;u>0&&t[u-1][2]>c;u--)t[u]=t[u-1];t[u]=[a,o,c]}}(),function(){e.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(n,{a:n}),n}}(),function(){e.d=function(t,n){for(var a in n)e.o(n,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:n[a]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.hmd=function(t){return t=Object.create(t),t.children||(t.children=[]),Object.defineProperty(t,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+t.id)}}),t}}(),function(){e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){var t={143:0};e.O.j=function(n){return 0===t[n]};var n=function(n,a){var o,c,r=a[0],s=a[1],l=a[2],i=0;if(r.some((function(n){return 0!==t[n]}))){for(o in s)e.o(s,o)&&(e.m[o]=s[o]);if(l)var u=l(e)}for(n&&n(a);i<r.length;i++)c=r[i],e.o(t,c)&&t[c]&&t[c][0](),t[c]=0;return e.O(u)},a=self["webpackChunkcontract_messages"]=self["webpackChunkcontract_messages"]||[];a.forEach(n.bind(null,0)),a.push=n.bind(null,a.push.bind(a))}();var a=e.O(void 0,[998],(function(){return e(928)}));a=e.O(a)})();
//# sourceMappingURL=app.b38c3c95.js.map