(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{3454:function(e,t,r){"use strict";var n,a;e.exports=(null==(n=r.g.process)?void 0:n.env)&&"object"==typeof(null==(a=r.g.process)?void 0:a.env)?r.g.process:r(7663)},5557:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(3678)}])},8045:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(6495).Z,a=r(2648).Z,i=r(1598).Z,o=r(7273).Z,s=i(r(7294)),c=a(r(5443)),l=r(2730),u=r(9309),d=r(9977);r(5086);var f=a(r(1479));let m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"nextjs/",loader:"akamai",dangerouslyAllowSVG:!1,unoptimized:!1};function p(e){return void 0!==e.default}function h(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function g(e,t,r,a,i,o,s){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let c="decode"in e?e.decode():Promise.resolve();c.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("blur"===r&&o(!0),null==a?void 0:a.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let r=!1,i=!1;a.current(n({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>r,isPropagationStopped:()=>i,persist:()=>{},preventDefault:()=>{r=!0,t.preventDefault()},stopPropagation:()=>{i=!0,t.stopPropagation()}}))}(null==i?void 0:i.current)&&i.current(e)}})}let _=s.forwardRef((e,t)=>{var{imgAttributes:r,heightInt:a,widthInt:i,qualityInt:c,className:l,imgStyle:u,blurStyle:d,isLazy:f,fill:m,placeholder:p,loading:h,srcString:_,config:v,unoptimized:x,loader:w,onLoadRef:y,onLoadingCompleteRef:b,setBlurComplete:j,setShowAltText:N,onLoad:E,onError:S}=e,C=o(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return h=f?"lazy":h,s.default.createElement(s.default.Fragment,null,s.default.createElement("img",Object.assign({},C,{loading:h,width:i,height:a,decoding:"async","data-nimg":m?"fill":"1",className:l,style:n({},u,d)},r,{ref:s.useCallback(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(S&&(e.src=e.src),e.complete&&g(e,_,p,y,b,j,x))},[_,p,y,b,j,S,x,t]),onLoad:e=>{let t=e.currentTarget;g(t,_,p,y,b,j,x)},onError:e=>{N(!0),"blur"===p&&j(!0),S&&S(e)}})))}),v=s.forwardRef((e,t)=>{let r,a;var i,{src:g,sizes:v,unoptimized:x=!1,priority:w=!1,loading:y,className:b,quality:j,width:N,height:E,fill:S,style:C,onLoad:k,onLoadingComplete:L,placeholder:T="empty",blurDataURL:z,layout:R,objectFit:I,objectPosition:A,lazyBoundary:O,lazyRoot:P}=e,M=o(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let F=s.useContext(d.ImageConfigContext),H=s.useMemo(()=>{let e=m||F||u.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return n({},e,{allSizes:t,deviceSizes:r})},[F]),D=M,B=D.loader||f.default;delete D.loader;let V="__next_img_default"in B;if(V){if("custom"===H.loader)throw Error('Image with src "'.concat(g,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let e=B;B=t=>{let{config:r}=t,n=o(t,["config"]);return e(n)}}if(R){"fill"===R&&(S=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[R];e&&(C=n({},C,e));let t={responsive:"100vw",fill:"100vw"}[R];t&&!v&&(v=t)}let G="",W=h(N),q=h(E);if("object"==typeof(i=g)&&(p(i)||void 0!==i.src)){let e=p(g)?g.default:g;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(e)));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(e)));if(r=e.blurWidth,a=e.blurHeight,z=z||e.blurDataURL,G=e.src,!S){if(W||q){if(W&&!q){let t=W/e.width;q=Math.round(e.height*t)}else if(!W&&q){let t=q/e.height;W=Math.round(e.width*t)}}else W=e.width,q=e.height}}let Z=!w&&("lazy"===y||void 0===y);((g="string"==typeof g?g:G).startsWith("data:")||g.startsWith("blob:"))&&(x=!0,Z=!1),H.unoptimized&&(x=!0),V&&g.endsWith(".svg")&&!H.dangerouslyAllowSVG&&(x=!0);let[U,X]=s.useState(!1),[J,Q]=s.useState(!1),Y=h(j),$=Object.assign(S?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:I,objectPosition:A}:{},J?{}:{color:"transparent"},C),K="blur"===T&&z&&!U?{backgroundSize:$.objectFit||"cover",backgroundPosition:$.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(l.getImageBlurSvg({widthInt:W,heightInt:q,blurWidth:r,blurHeight:a,blurDataURL:z,objectFit:$.objectFit}),'")')}:{},ee=function(e){let{config:t,src:r,unoptimized:n,width:a,quality:i,sizes:o,loader:s}=e;if(n)return{src:r,srcSet:void 0,sizes:void 0};let{widths:c,kind:l}=function(e,t,r){let{deviceSizes:n,allSizes:a}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(r);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:a.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:a,kind:"w"}}if("number"!=typeof t)return{widths:n,kind:"w"};let i=[...new Set([t,2*t].map(e=>a.find(t=>t>=e)||a[a.length-1]))];return{widths:i,kind:"x"}}(t,a,o),u=c.length-1;return{sizes:o||"w"!==l?o:"100vw",srcSet:c.map((e,n)=>"".concat(s({config:t,src:r,quality:i,width:e})," ").concat("w"===l?e:n+1).concat(l)).join(", "),src:s({config:t,src:r,quality:i,width:c[u]})}}({config:H,src:g,unoptimized:x,width:W,quality:Y,sizes:v,loader:B}),et=g,er={imageSrcSet:ee.srcSet,imageSizes:ee.sizes,crossOrigin:D.crossOrigin},en=s.useRef(k);s.useEffect(()=>{en.current=k},[k]);let ea=s.useRef(L);s.useEffect(()=>{ea.current=L},[L]);let ei=n({isLazy:Z,imgAttributes:ee,heightInt:q,widthInt:W,qualityInt:Y,className:b,imgStyle:$,blurStyle:K,loading:y,config:H,fill:S,unoptimized:x,placeholder:T,loader:B,srcString:et,onLoadRef:en,onLoadingCompleteRef:ea,setBlurComplete:X,setShowAltText:Q},D);return s.default.createElement(s.default.Fragment,null,s.default.createElement(_,Object.assign({},ei,{ref:t})),w?s.default.createElement(c.default,null,s.default.createElement("link",Object.assign({key:"__nimg-"+ee.src+ee.srcSet+ee.sizes,rel:"preload",as:"image",href:ee.srcSet?void 0:ee.src},er))):null)});t.default=v,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2730:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:r,blurWidth:n,blurHeight:a,blurDataURL:i,objectFit:o}=e,s=n||t,c=a||r,l=i.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return s&&c?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(s," ").concat(c,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(n&&a?"1":"20","'/%3E").concat(l,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(i,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='".concat("contain"===o?"xMidYMid":"cover"===o?"xMidYMid slice":"none","' x='0' y='0' height='100%25' width='100%25' href='").concat(i,"'/%3E%3C/svg%3E")}},1479:function(e,t){"use strict";function r(e){let{config:t,src:r,width:n,quality:a}=e;return"".concat(t.path,"?url=").concat(encodeURIComponent(r),"&w=").concat(n,"&q=").concat(a||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r.__next_img_default=!0,t.default=r},3678:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return m}});var n=r(5893),a=r(6487),i=r.n(a),o=r(9008),s=r.n(o),c=r(5675),l=r.n(c),u=r(8122),d=r.n(u),f=r(3454);function m(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s(),{children:[(0,n.jsx)("title",{children:"Create Next App"}),(0,n.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,n.jsxs)("main",{className:d().main,children:[(0,n.jsxs)("div",{className:d().description,children:[(0,n.jsxs)("p",{children:["Get started by editing\xa0",(0,n.jsx)("code",{className:d().code,children:"pages/index.js"})]}),(0,n.jsx)("div",{children:(0,n.jsxs)("a",{href:"https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",target:"_blank",rel:"noopener noreferrer",children:["By"," ",(0,n.jsx)(l(),{src:"".concat(f.env.VERCEL_ASSETS,"/vercel.svg"),alt:"Vercel Logo",className:d().vercelLogo,width:100,height:24,priority:!0})]})})]}),(0,n.jsxs)("div",{className:d().center,children:[(0,n.jsx)(l(),{className:d().logo,src:"".concat(f.env.VERCEL_ASSETS,"/next.svg"),alt:"Next.js Logo",width:180,height:37,priority:!0}),(0,n.jsx)("div",{className:d().thirteen,children:(0,n.jsx)(l(),{src:"".concat(f.env.VERCEL_ASSETS,"/thirteen.svg"),alt:"13",width:40,height:31,priority:!0})})]}),(0,n.jsxs)("div",{className:d().grid,children:[(0,n.jsxs)("a",{href:"https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",className:d().card,target:"_blank",rel:"noopener noreferrer",children:[(0,n.jsxs)("h2",{className:i().className,children:["Docs ",(0,n.jsx)("span",{children:"->"})]}),(0,n.jsx)("p",{className:i().className,children:"Find in-depth information about Next.js features and\xa0API."})]}),(0,n.jsxs)("a",{href:"https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",className:d().card,target:"_blank",rel:"noopener noreferrer",children:[(0,n.jsxs)("h2",{className:i().className,children:["Learn ",(0,n.jsx)("span",{children:"->"})]}),(0,n.jsx)("p",{className:i().className,children:"Learn about Next.js in an interactive course with\xa0quizzes!"})]}),(0,n.jsxs)("a",{href:"https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",className:d().card,target:"_blank",rel:"noopener noreferrer",children:[(0,n.jsxs)("h2",{className:i().className,children:["Templates ",(0,n.jsx)("span",{children:"->"})]}),(0,n.jsx)("p",{className:i().className,children:"Discover and deploy boilerplate example Next.js\xa0projects."})]}),(0,n.jsxs)("a",{href:"https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",className:d().card,target:"_blank",rel:"noopener noreferrer",children:[(0,n.jsxs)("h2",{className:i().className,children:["Deploy ",(0,n.jsx)("span",{children:"->"})]}),(0,n.jsx)("p",{className:i().className,children:"Instantly deploy your Next.js site to a shareable URL with\xa0Vercel."})]})]})]})]})}},6487:function(e){e.exports={style:{fontFamily:"'__Inter_96c536', '__Inter_Fallback_96c536'",fontStyle:"normal"},className:"__className_96c536"}},8122:function(e){e.exports={main:"Home_main__nLjiQ",description:"Home_description__41Owk",code:"Home_code__suPER",grid:"Home_grid__GxQ85",card:"Home_card___LpL1",center:"Home_center__4BFgC",logo:"Home_logo__27_tb",thirteen:"Home_thirteen__cMI_k",rotate:"Home_rotate____XsI",content:"Home_content__Zy02X",vercelLogo:"Home_vercelLogo__dtSk9"}},7663:function(e){!function(){var t={229:function(e){var t,r,n,a=e.exports={};function i(){throw Error("setTimeout has not been defined")}function o(){throw Error("clearTimeout has not been defined")}function s(e){if(t===setTimeout)return setTimeout(e,0);if((t===i||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:i}catch(e){t=i}try{r="function"==typeof clearTimeout?clearTimeout:o}catch(e){r=o}}();var c=[],l=!1,u=-1;function d(){l&&n&&(l=!1,n.length?c=n.concat(c):u=-1,c.length&&f())}function f(){if(!l){var e=s(d);l=!0;for(var t=c.length;t;){for(n=c,c=[];++u<t;)n&&n[u].run();u=-1,t=c.length}n=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===o||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function p(){}a.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];c.push(new m(e,t)),1!==c.length||l||s(f)},m.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=p,a.addListener=p,a.once=p,a.off=p,a.removeListener=p,a.removeAllListeners=p,a.emit=p,a.prependListener=p,a.prependOnceListener=p,a.listeners=function(e){return[]},a.binding=function(e){throw Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(e){throw Error("process.chdir is not supported")},a.umask=function(){return 0}}},r={};function n(e){var a=r[e];if(void 0!==a)return a.exports;var i=r[e]={exports:{}},o=!0;try{t[e](i,i.exports,n),o=!1}finally{o&&delete r[e]}return i.exports}n.ab="//";var a=n(229);e.exports=a}()},9008:function(e,t,r){e.exports=r(5443)},5675:function(e,t,r){e.exports=r(8045)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);