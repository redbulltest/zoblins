(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{219:function(e,t,n){},231:function(e,t,n){},245:function(e,t){},270:function(e,t){},272:function(e,t){},350:function(e,t){},352:function(e,t){},385:function(e,t){},390:function(e,t){},392:function(e,t){},399:function(e,t){},412:function(e,t){},435:function(e,t){},444:function(e,t){},446:function(e,t){},522:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(85),i=n.n(s),u=(n(231),n(16)),o=n(11),p=n.n(o),c=n(20),l=n(15),d=n(6),y=function(){var e=Object(c.a)(p.a.mark((function e(){var t,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.ethereum){e.next=14;break}return e.prev=1,e.next=4,window.ethereum.request({method:"eth_requestAccounts"});case 4:return t=e.sent,n={status:"",address:t[0]},e.abrupt("return",n);case 9:return e.prev=9,e.t0=e.catch(1),e.abrupt("return",{address:"",status:"\ud83d\ude25 "+e.t0.message});case 12:e.next=16;break;case 14:return alert("No Ethereum interface detected. You must install Metamask in your web browser, or open this site in a mobile wallet browser to mint."),e.abrupt("return",{address:"",status:Object(d.jsx)("span",{children:Object(d.jsxs)("p",{children:[" ","\ud83e\udd8a"," ",Object(d.jsx)("a",{target:"_blank",href:"https://metamask.io/download.html",children:"You must install Metamask, a virtual Ethereum wallet, in your browser."})]})})});case 16:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=Object(c.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.ethereum){e.next=17;break}return e.prev=1,e.next=4,window.ethereum.request({method:"eth_accounts"});case 4:if(!((t=e.sent).length>0)){e.next=9;break}return e.abrupt("return",{address:t[0],status:""});case 9:return e.abrupt("return",{address:"",status:"Connect your Metamask wallet to mint \ud83e\udd8a"});case 10:e.next=15;break;case 12:return e.prev=12,e.t0=e.catch(1),e.abrupt("return",{address:"",status:"\ud83d\ude25 "+e.t0.message});case 15:e.next=18;break;case 17:return e.abrupt("return",{address:"",status:Object(d.jsx)("span",{children:Object(d.jsxs)("p",{children:[" ","\ud83e\udd8a"," ",Object(d.jsx)("a",{target:"_blank",href:"https://metamask.io/download.html",children:"You must install Metamask, a virtual Ethereum wallet, in your browser."})]})})});case 18:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(){return e.apply(this,arguments)}}(),b=n(86),f=n.n(b),w="0x9945927095DB808C795F90B69020f7b50B477E23",h=[{inputs:[],stateMutability:"nonpayable",type:"constructor"},{inputs:[],name:"ApprovalCallerNotOwnerNorApproved",type:"error"},{inputs:[],name:"ApprovalQueryForNonexistentToken",type:"error"},{inputs:[],name:"ApprovalToCurrentOwner",type:"error"},{inputs:[],name:"ApproveToCaller",type:"error"},{inputs:[],name:"BalanceQueryForZeroAddress",type:"error"},{inputs:[],name:"MintToZeroAddress",type:"error"},{inputs:[],name:"MintZeroQuantity",type:"error"},{inputs:[],name:"OwnerIndexOutOfBounds",type:"error"},{inputs:[],name:"OwnerQueryForNonexistentToken",type:"error"},{inputs:[],name:"TokenIndexOutOfBounds",type:"error"},{inputs:[],name:"TransferCallerNotOwnerNorApproved",type:"error"},{inputs:[],name:"TransferFromIncorrectOwner",type:"error"},{inputs:[],name:"TransferToNonERC721ReceiverImplementer",type:"error"},{inputs:[],name:"TransferToZeroAddress",type:"error"},{inputs:[],name:"URIQueryForNonexistentToken",type:"error"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"approved",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!1,internalType:"bool",name:"approved",type:"bool"}],name:"ApprovalForAll",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[],name:"MAX_SUPPLY",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"approve",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"baseURI",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"flipSaleState",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getApproved",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"operator",type:"address"}],name:"isApprovedForAll",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"quantity",type:"uint256"}],name:"mint",outputs:[],stateMutability:"payable",type:"function"},{inputs:[],name:"mintRate",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"ownerOf",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"bytes",name:"_data",type:"bytes"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"saleIsActive",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"operator",type:"address"},{internalType:"bool",name:"approved",type:"bool"}],name:"setApprovalForAll",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"uri",type:"string"}],name:"setBaseURI",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_mintRate",type:"uint256"}],name:"setMintRate",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"index",type:"uint256"}],name:"tokenByIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"uint256",name:"index",type:"uint256"}],name:"tokenOfOwnerByIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"tokenURI",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"transferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"withdraw",outputs:[],stateMutability:"payable",type:"function"}],j=(n(219),function(e){var t=Object(a.useState)(""),n=Object(l.a)(t,2),r=(n[0],n[1]),s=Object(a.useState)(""),i=Object(l.a)(s,2),u=(i[0],i[1]),o=Object(a.useState)(null),y=Object(l.a)(o,2),b=(y[0],y[1]),j=Object(a.useState)(0),O=Object(l.a)(j,2),x=(O[0],O[1],Object(a.useState)(!1)),v=Object(l.a)(x,2),T=(v[0],v[1]),k=Object(a.useState)(0),g=Object(l.a)(k,2),M=(g[0],g[1]),S=Object(a.useState)(!1),N=Object(l.a)(S,2),I=(N[0],N[1]),A=Object(a.useState)(0),C=Object(l.a)(A,2),F=(C[0],C[1]),_=Object(a.useState)(1),B=Object(l.a)(_,2),E=(B[0],B[1],Object(a.useState)(!1)),R=Object(l.a)(E,2);R[0],R[1];Object(a.useEffect)(Object(c.a)(p.a.mark((function e(){var t,n,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m();case 2:t=e.sent,n=t.address,a=t.status,r(n),u(a),Y(),U(),Q(),F();case 11:case"end":return e.stop()}}),e)}))),[]);var P=function(){var e=Object(c.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:window.open("https://opensea.io/collection/zoblins");case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function Y(){return L.apply(this,arguments)}function L(){return(L=Object(c.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"undefined"!==typeof window.web3&&(window.web3=new f.a(window.ethereum)),window.ethereum.enable().then((function(e){window.web3.eth.net.getNetworkType().then((function(e){console.log(e),"main"!=e&&alert("You are on "+e+" network. Change network to mainnet or you won't be able to do anything here")}));var t=e[0];r(t),I(!0),U(t)})).catch((function(e){console.error(e)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function U(){return q.apply(this,arguments)}function q(){return(q=Object(c.a)(p.a.mark((function e(){var t,n,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new window.web3.eth.Contract(h,w),b(t),e.next=4,t.methods.saleIsActive().call();case 4:return n=e.sent,T(n),e.next=8,t.methods.mintRate().call();case 8:a=e.sent,M(a);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Q(){window.ethereum?window.ethereum.on("accountsChanged",(function(e){e.length>0?(r(e[0]),u("")):(r(""),u("Connect your Metamask wallet to mint \ud83e\udd8a"))})):u(Object(d.jsxs)("p",{children:[" ","\ud83e\udd8a"," ",Object(d.jsx)("a",{target:"_blank",href:"https://metamask.io/download.html",children:"You must install Metamask, a virtual Ethereum wallet, in your browser."})]}))}return Object(d.jsxs)("div",{className:"overflow",children:[Object(d.jsx)("section",{className:"mint",id:"mint",children:Object(d.jsxs)("div",{className:"cont",children:[Object(d.jsxs)("picture",{children:[Object(d.jsx)("source",{media:"(min-width: 1440px)",srcset:"/zoblin.jpg"}),Object(d.jsx)("source",{media:"(min-width: 768px)",srcset:"/zoblin.jpg"}),Object(d.jsx)("img",{src:"/zoblin.jpg",alt:"Zoblins"})]}),Object(d.jsx)("h1",{children:"Sold Out!"}),Object(d.jsx)("button",{id:"mintButton",onClick:P,className:"btn",children:"View On Opensea"})]})}),Object(d.jsx)("div",{className:"container"})]})}),O=n(536),x=function(e){var t=Object(a.useState)(""),n=Object(l.a)(t,2),r=n[0],s=n[1],i=Object(a.useState)(""),u=Object(l.a)(i,2),o=(u[0],u[1]),b=Object(a.useState)(1),j=Object(l.a)(b,2),x=j[0],v=j[1],T=Object(a.useState)(null),k=Object(l.a)(T,2),g=k[0],M=k[1],S=Object(a.useState)(0),N=Object(l.a)(S,2),I=(N[0],N[1]),A=Object(a.useState)(!1),C=Object(l.a)(A,2),F=(C[0],C[1]),_=Object(a.useState)(!1),B=Object(l.a)(_,2),E=B[0],R=B[1],P=Object(a.useState)(0),Y=Object(l.a)(P,2),L=Y[0],U=Y[1],q=Object(a.useState)(1),Q=Object(l.a)(q,2),Z=(Q[0],Q[1]),z=Object(a.useState)(!1),D=Object(l.a)(z,2),J=(D[0],D[1]);Object(a.useEffect)(Object(c.a)(p.a.mark((function e(){var t,n,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m();case 2:t=e.sent,n=t.address,a=t.status,s(n),o(a),W(),X(),$();case 10:case"end":return e.stop()}}),e)}))),[]);var V=function(){var e=Object(c.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y();case 2:t=e.sent,o(t.status),s(t.address);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),H=function(){var e=Object(c.a)(p.a.mark((function e(){var t,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!g){e.next=19;break}if(e.prev=1,E){e.next=5;break}return alert("Sale has not started"),e.abrupt("return");case 5:return t=Number(L)*x,e.next=8,g.methods.mintPresale(x).estimateGas({from:r,value:t});case 8:n=e.sent,console.log("estimated gas",n),console.log({from:r,value:L}),g.methods.mintPresale(x).send({from:r,value:t,gas:String(n)}).on("transactionHash",(function(e){console.log("transactionHash",e)})),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),alert(JSON.stringify(e.t0));case 17:e.next=20;break;case 19:console.log("Wallet not connected");case 20:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(){return e.apply(this,arguments)}}();function W(){return G.apply(this,arguments)}function G(){return(G=Object(c.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"undefined"!==typeof window.web3&&(window.web3=new f.a(window.ethereum)),window.ethereum.enable().then((function(e){window.web3.eth.net.getNetworkType().then((function(e){console.log(e),"main"!=e&&alert("You are on "+e+" network. Change network to mainnet or you won't be able to do anything here")}));var t=e[0];s(t),J(!0),X(t)})).catch((function(e){console.error(e)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function X(){return K.apply(this,arguments)}function K(){return(K=Object(c.a)(p.a.mark((function e(){var t,n,a,r,s,i;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new window.web3.eth.Contract(h,w),M(t),e.next=4,t.methods.totalSupply().call();case 4:return n=e.sent,I(n),e.next=8,t.methods.saleIsActive().call();case 8:return a=e.sent,F(a),e.next=12,t.methods.presaleIsActive().call();case 12:return r=e.sent,R(r),e.next=16,t.methods.PRESALE_SUPPLY().call();case 16:return s=e.sent,Z(s),e.next=20,t.methods.price().call();case 20:i=e.sent,U(i);case 22:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function $(){window.ethereum?window.ethereum.on("accountsChanged",(function(e){e.length>0?(s(e[0]),o("")):(s(""),o("Connect your Metamask wallet to mint \ud83e\udd8a"))})):o(Object(d.jsxs)("p",{children:[" ","\ud83e\udd8a"," ",Object(d.jsx)("a",{target:"_blank",href:"https://metamask.io/download.html",children:"You must install Metamask, a virtual Ethereum wallet, in your browser."})]}))}return Object(d.jsxs)("div",{className:"overflow minter-page",children:[Object(d.jsx)("header",{className:"header",children:Object(d.jsxs)("div",{className:"cont flex",children:[Object(d.jsx)("div",{className:"header__logo",children:Object(d.jsxs)("picture",{children:[Object(d.jsx)("source",{media:"(min-width: 1440px)",srcset:"/logo1.png"}),Object(d.jsx)("source",{media:"(min-width: 768px)",srcset:"/logo1440.png"}),Object(d.jsx)("img",{src:"/logo768.png",alt:"CryptoClowns"})]})}),Object(d.jsx)("button",{className:"btn header__btn",onClick:V,children:r.length>0?"Connected: "+String(r).substring(0,6)+"..."+String(r).substring(38):Object(d.jsx)("span",{children:"Connect Metamask Wallet"})})]})}),Object(d.jsx)("section",{className:"mint",id:"mint",children:Object(d.jsxs)("div",{className:"cont",children:[Object(d.jsx)("h2",{className:"slider__title",children:"mint"}),Object(d.jsx)("div",{className:"slider",children:Object(d.jsx)(O.a,{defaultValue:1,getAriaValueText:function(e){3===e&&(e=5),4===e&&(e=10),5===e&&(e=20),v(e)},"aria-labelledby":"discrete-slider",valueLabelDisplay:"auto",step:1,marks:[{value:1,label:"1"},{value:2,label:"2"},{value:3,label:"5"},{value:4,label:"10"},{value:5,label:"20"}],min:1,max:5})}),Object(d.jsx)("button",{id:"mintButton",onClick:H,className:"btn",children:"Mint"})]})}),Object(d.jsx)("div",{className:"container"})]})};var v=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)(u.c,{children:[Object(d.jsx)(u.a,{path:"/hxq3p6",children:Object(d.jsx)(x,{})}),Object(d.jsx)(u.a,{path:"/",children:Object(d.jsx)(j,{})})]})})},T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,537)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),s(e),i(e)}))},k=n(119);i.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(k.a,{children:Object(d.jsx)(v,{})})}),document.getElementById("root")),T()}},[[522,1,2]]]);
//# sourceMappingURL=main.7085b1da.chunk.js.map