!function(t){function e(e){for(var c,i,d=e[0],r=e[1],l=e[2],m=0,u=[];m<d.length;m++)i=d[m],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&u.push(o[i][0]),o[i]=0;for(c in r)Object.prototype.hasOwnProperty.call(r,c)&&(t[c]=r[c]);for(s&&s(e);u.length;)u.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],c=!0,d=1;d<n.length;d++){var r=n[d];0!==o[r]&&(c=!1)}c&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var c={},o={7:0},a=[];function i(e){if(c[e])return c[e].exports;var n=c[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=c,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var c in t)i.d(n,c,function(e){return t[e]}.bind(null,c));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var d=window.webpackJsonp=window.webpackJsonp||[],r=d.push.bind(d);d.push=e,d=d.slice();for(var l=0;l<d.length;l++)e(d[l]);var s=r;a.push([124,0]),n()}({124:function(t,e,n){"use strict";n.r(e);n(86),n(14);var c=n(0),o=n(16);n.p=window.mdxPublicPath;const a=new o.a("document"),i=new o.a(Object(c.a)("#left-drawer",null,"single"));let d="true"===mdx_show_preview.preview,r=!1,l=[],s=!0,m=!1,u=void 0,p=!1;window.addEventListener("DOMContentLoaded",()=>{let t=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:6;const n=document.querySelectorAll([...Array(e).keys()].map(t=>"article > h".concat(t+1)).join(","));if(n.length<=1)return s=!1,!1;const o=document.createElement("div");o.classList.add("mdui-list"),o.id="mdx-toc",o.style.transform="translateX(0)";let a="",i=0,d=[...Array(e)].map(()=>0);for(const e of n){e.dataset.mdxtoc="mdx-toc-"+i,l.push("mdx-toc-"+i);const n=Number(Object(c.a)(e).tagName[1]);d[n-1]++,d.forEach((t,e)=>e>=n?d[e]=0:0===d[e]&&(d[e]=1));const r=document.createElement("a");r.id="mdx-toc-".concat(i,"-item"),r.title=e.textContent,r.classList.add("mdui-list-item","mdui-ripple","mdx-toc-item"),n>1&&r.classList.add("mdx-toc-item-h".concat(n));const s=document.createElement("span");s.textContent=d.filter((e,c)=>c+1>=t&&c<n).join(".");const m=document.createElement("div");m.textContent=e.textContent,r.appendChild(s),r.appendChild(m),o.appendChild(r),a+='<div class="mdx-toc-preview-h'.concat(n,' mdx-toc-preview-item mdui-color-theme" id="mdx-toc-').concat(i,'-preview"></div>'),i++}return[o,a]}();if(function(t){if(!t)return;const e=document.querySelector("#mdx_menu");e.parentNode.append(t),Object(c.a)("#left-drawer nav").insertAdjacentHTML("beforebegin",'<div class="mdui-tab mdui-tab-full-width" id="mdx-toc-select"><a href="#" id="mdx-toc-menu" class="mdui-ripple"><i class="mdui-icon material-icons">&#xe241;</i><label>'.concat(mdx_toc_i18n_1,'</label></a><a href="#" id="mdx-toc-toc" class="mdui-ripple"><i class="mdui-icon material-icons">&#xe86d;</i><label>').concat(mdx_toc_i18n_2,"</label></a></div>")),u=new mdui.Tab("#mdx-toc-select",{}),u.next(),e.style.transform="translateX(-".concat(e.clientWidth,"px)")}(t[0]),s){if(d){const e=document.createElement("div");e.id="mdx-toc-preview",e.setAttribute("mdui-drawer",document.getElementById("menu").getAttribute("mdui-drawer")),e.innerHTML=t[1],Object(c.a)(".PostMain").appendChild(e),mdui.mutation()}p=!0,x()}Object(c.a)(".PostMain").addEventListener("click",(function(t){"mdx-toc-preview"===t.target.id&&"translateX(0px)"!==Object(c.a)("#mdx-toc").style.transform&&d&&(u.next(),Object(c.a)("#mdx-toc").style.transform="translateX(0)",Object(c.a)("#mdx_menu").style.transform="translateX(-".concat(Object(c.a)("#mdx_menu").getBoundingClientRect().width,"px)"),r=!0,x())})),Object(c.a)("#left-drawer").addEventListener("change.mdui.tab",(function(t){return 0===t._detail.index?(t.preventDefault(),Object(c.a)("#mdx_menu").style.transform="translateX(0)",Object(c.a)("#mdx-toc").style.transform="translateX(".concat(Object(c.a)("#mdx-toc").getBoundingClientRect().width,"px)"),void(r=!1)):1===t._detail.index?(t.preventDefault(),r=!0,x(),Object(c.a)("#mdx-toc").style.transform="translateX(0)",void(Object(c.a)("#mdx_menu").style.transform="translateX(-".concat(Object(c.a)("#mdx_menu").getBoundingClientRect().width,"px)"))):void 0})),Object(c.a)("#left-drawer").addEventListener("click",(function(t){return t.target.classList.contains("mdx-toc-item")?(t.preventDefault(),void a.to(Object(c.a)('article *[data-mdxtoc="mdx-toc-'.concat(t.target.getAttribute("id").split("-")[2],'"]')).getBoundingClientRect().top+window.pageYOffset-75,500)):null!==t.target.closest(".mdx-toc-item")?(t.preventDefault(),void a.to(Object(c.a)('article *[data-mdxtoc="mdx-toc-'.concat(t.target.closest(".mdx-toc-item").getAttribute("id").split("-")[2],'"]')).getBoundingClientRect().top+window.pageYOffset-75,500)):void 0})),document.getElementById("left-drawer").addEventListener("open.mdui.drawer",(function(){r="translateX(0px)"===Object(c.a)("#mdx-toc").style.transform,x()})),document.getElementById("left-drawer").addEventListener("close.mdui.drawer",(function(){r=!1}))}),window.addEventListener("resize",(function(){s&&("translateX(0px)"===Object(c.a)("#mdx-toc").style.transform?(Object(c.a)("#mdx-toc").style.transform="translateX(0)",Object(c.a)("#mdx_menu").style.transform="translateX(-".concat(Object(c.a)("#mdx_menu").getBoundingClientRect().width,"px)")):(Object(c.a)("#mdx_menu").style.transform="translateX(0)",Object(c.a)("#mdx-toc").style.transform="translateX(".concat(Object(c.a)("#mdx-toc").getBoundingClientRect().width,"px)")),x())}));let f=!1;function x(){if(p){if(r||d){let t=document.documentElement.scrollTop||document.body.scrollTop;Object(c.a)(".mdx-toc-item",t=>{t.classList.remove("mdx-toc-read","mdui-list-item-active")}),Object(c.a)("#mdx-toc-preview > *",t=>{t.classList.remove("mdx-toc-preview-item-active")});let e=0;if(t>=Object(c.a)("article").getBoundingClientRect().top+window.pageYOffset+Object(c.a)("article").clientHeight-80)Object(c.a)(".mdx-toc-item",t=>{t.classList.add("mdx-toc-read")}),m&&d&&(document.getElementById("mdx-toc-preview").classList.remove("mdx-toc-preview-show"),m=!1);else{for(let n=1;n<l.length&&t>=Object(c.a)('article *[data-mdxtoc="'.concat(l[n],'"]')).getBoundingClientRect().top+window.pageYOffset-80;n++)document.getElementById("".concat(l[n-1],"-item")).classList.add("mdx-toc-read"),e++;if(t>Object(c.a)("article").getBoundingClientRect().top+window.pageYOffset-140){!m&&d&&(document.getElementById("mdx-toc-preview").classList.add("mdx-toc-preview-show"),m=!0);let t=Object(c.a)("#".concat(l[e],"-item"));if(t.classList.add("mdui-list-item-active"),Object(c.a)("#".concat(l[e],"-preview")).classList.add("mdx-toc-preview-item-active"),d&&(Object(c.a)("#mdx-toc-preview").style.transform="translateY(-".concat(20*(e+1)-4,"px)")),null!==t&&r){let e=t.getBoundingClientRect().top;e+48>window.innerHeight?i.to(document.getElementById("left-drawer").scrollTop+(e+48-window.innerHeight)+8,200):e<8&&i.to(document.getElementById("left-drawer").scrollTop+e-8,200)}}else m&&d&&(document.getElementById("mdx-toc-preview").classList.remove("mdx-toc-preview-show"),m=!1)}}f=!1}}window.addEventListener("scroll",(function(){s&&p&&(f||(requestAnimationFrame((function(){x()})),f=!0))}))}});