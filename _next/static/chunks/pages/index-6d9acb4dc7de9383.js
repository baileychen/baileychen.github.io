(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{9361:function(e,t){"use strict";t.Z=function(e,t,i){t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i;return e}},5557:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(7462)}])},8010:function(e,t,i){"use strict";i.d(t,{Z:function(){return l}});var n=i(5893),o=i(1664),a=i.n(o),r=i(8690),s=i.n(r);function l(){return(0,n.jsxs)("nav",{className:s().navigation,children:[(0,n.jsx)(a(),{href:"/",children:"Work"}),(0,n.jsx)(a(),{href:"/about",children:"About"})]})}},8045:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(9361).Z,o=i(4941).Z,a=i(3929).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.src,i=e.sizes,s=e.unoptimized,l=void 0!==s&&s,m=e.priority,g=void 0!==m&&m,v=e.loading,S=e.lazyRoot,z=void 0===S?null:S,j=e.lazyBoundary,_=e.className,C=e.quality,B=e.width,P=e.height,Q=e.style,N=e.objectFit,D=e.objectPosition,T=e.onLoadingComplete,R=e.placeholder,L=void 0===R?"empty":R,M=e.blurDataURL,q=c(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","placeholder","blurDataURL"]),F=d.useContext(f.ImageConfigContext),V=d.useMemo((function(){var e=p||F||h.imageConfigDefault,t=a(e.deviceSizes).concat(a(e.imageSizes)).sort((function(e,t){return e-t})),i=e.deviceSizes.sort((function(e,t){return e-t}));return r({},e,{allSizes:t,deviceSizes:i})}),[F]),O=q,U=i?"responsive":"intrinsic";"layout"in O&&(O.layout&&(U=O.layout),delete O.layout);var W=I;if("loader"in O){if(O.loader){var H=O.loader;W=function(e){e.config;var t=c(e,["config"]);return H(t)}}delete O.loader}var K="";if(function(e){return"object"===typeof e&&(b(e)||function(e){return void 0!==e.src}(e))}(t)){var G=b(t)?t.default:t;if(!G.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(G)));if(M=M||G.blurDataURL,K=G.src,(!U||"fill"!==U)&&(P=P||G.height,B=B||G.width,!G.height||!G.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(G)))}var Z=!g&&("lazy"===v||"undefined"===typeof v);((t="string"===typeof t?t:K).startsWith("data:")||t.startsWith("blob:"))&&(l=!0,Z=!1);w.has(t)&&(Z=!1);V.unoptimized&&(l=!0);var J,Y=o(d.useState(!1),2),X=Y[0],$=Y[1],ee=o(A.useIntersection({rootRef:z,rootMargin:j||"200px",disabled:!Z}),3),te=ee[0],ie=ee[1],ne=ee[2],oe=!Z||ie,ae={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},re={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},se=!1,le={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:N,objectPosition:D},ce=k(B),de=k(P),ue=k(C);0;var he=Object.assign({},Q,le),Ae="blur"!==L||X?{}:{backgroundSize:N||"cover",backgroundPosition:D||"0% 0%",filter:"blur(20px)",backgroundImage:'url("'.concat(M,'")')};if("fill"===U)ae.display="block",ae.position="absolute",ae.top=0,ae.left=0,ae.bottom=0,ae.right=0;else if("undefined"!==typeof ce&&"undefined"!==typeof de){var fe=de/ce,me=isNaN(fe)?"100%":"".concat(100*fe,"%");"responsive"===U?(ae.display="block",ae.position="relative",se=!0,re.paddingTop=me):"intrinsic"===U?(ae.display="inline-block",ae.position="relative",ae.maxWidth="100%",se=!0,re.maxWidth="100%",J="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(ce,"%27%20height=%27").concat(de,"%27/%3e")):"fixed"===U&&(ae.display="inline-block",ae.position="relative",ae.width=ce,ae.height=de)}else 0;var ge={src:y,srcSet:void 0,sizes:void 0};oe&&(ge=x({config:V,src:t,unoptimized:l,layout:U,width:ce,quality:ue,sizes:i,loader:W}));var pe=t;0;var we;0;var ye=(n(we={},"imagesrcset",ge.srcSet),n(we,"imagesizes",ge.sizes),we),ve=d.default.useLayoutEffect,be=d.useRef(T),xe=d.useRef(t);d.useEffect((function(){be.current=T}),[T]),ve((function(){xe.current!==t&&(ne(),xe.current=t)}),[ne,t]);var ke=r({isLazy:Z,imgAttributes:ge,heightInt:de,widthInt:ce,qualityInt:ue,layout:U,className:_,imgStyle:he,blurStyle:Ae,loading:v,config:V,unoptimized:l,placeholder:L,loader:W,srcString:pe,onLoadingCompleteRef:be,setBlurComplete:$,setIntersection:te,isVisible:oe,noscriptSizes:i},O);return d.default.createElement(d.default.Fragment,null,d.default.createElement("span",{style:ae},se?d.default.createElement("span",{style:re},J?d.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:J}):null):null,d.default.createElement(E,Object.assign({},ke))),g?d.default.createElement(u.default,null,d.default.createElement("link",Object.assign({key:"__nimg-"+ge.src+ge.srcSet+ge.sizes,rel:"preload",as:"image",href:ge.srcSet?void 0:ge.src},ye))):null)};var r=i(6495).Z,s=i(2648).Z,l=i(1598).Z,c=i(7273).Z,d=l(i(7294)),u=s(i(5443)),h=i(9309),A=i(7190),f=i(9977),m=(i(3794),i(2392));function g(e){return"/"===e[0]?e.slice(1):e}var p={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/",loader:"akamai",dangerouslyAllowSVG:!1,unoptimized:!1},w=new Set,y=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var v=new Map([["default",function(e){var t=e.config,i=e.src,n=e.width,o=e.quality;return i.endsWith(".svg")&&!t.dangerouslyAllowSVG?i:"".concat(m.normalizePathTrailingSlash(t.path),"?url=").concat(encodeURIComponent(i),"&w=").concat(n,"&q=").concat(o||75)}],["imgix",function(e){var t=e.config,i=e.src,n=e.width,o=e.quality,a=new URL("".concat(t.path).concat(g(i))),r=a.searchParams;return r.set("auto",r.getAll("auto").join(",")||"format"),r.set("fit",r.get("fit")||"max"),r.set("w",r.get("w")||n.toString()),o&&r.set("q",o.toString()),a.href}],["cloudinary",function(e){var t=e.config,i=e.src,n=["f_auto","c_limit","w_"+e.width,"q_"+(e.quality||"auto")].join(",")+"/";return"".concat(t.path).concat(n).concat(g(i))}],["akamai",function(e){var t=e.config,i=e.src,n=e.width;return"".concat(t.path).concat(g(i),"?imwidth=").concat(n)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function b(e){return void 0!==e.default}function x(e){var t=e.config,i=e.src,n=e.unoptimized,o=e.layout,r=e.width,s=e.quality,l=e.sizes,c=e.loader;if(n)return{src:i,srcSet:void 0,sizes:void 0};var d=function(e,t,i,n){var o=e.deviceSizes,r=e.allSizes;if(n&&("fill"===i||"responsive"===i)){for(var s,l=/(^|\s)(1?\d?\d)vw/g,c=[];s=l.exec(n);s)c.push(parseInt(s[2]));if(c.length){var d,u=.01*(d=Math).min.apply(d,a(c));return{widths:r.filter((function(e){return e>=o[0]*u})),kind:"w"}}return{widths:r,kind:"w"}}return"number"!==typeof t||"fill"===i||"responsive"===i?{widths:o,kind:"w"}:{widths:a(new Set([t,2*t].map((function(e){return r.find((function(t){return t>=e}))||r[r.length-1]})))),kind:"x"}}(t,r,o,l),u=d.widths,h=d.kind,A=u.length-1;return{sizes:l||"w"!==h?l:"100vw",srcSet:u.map((function(e,n){return"".concat(c({config:t,src:i,quality:s,width:e})," ").concat("w"===h?e:n+1).concat(h)})).join(", "),src:c({config:t,src:i,quality:s,width:u[A]})}}function k(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function I(e){var t,i=(null==(t=e.config)?void 0:t.loader)||"default",n=v.get(i);if(n)return n(e);throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(h.VALID_LOADERS.join(", "),". Received: ").concat(i))}function S(e,t,i,n,o,a){e&&e.src!==y&&e["data-loaded-src"]!==t&&(e["data-loaded-src"]=t,("decode"in e?e.decode():Promise.resolve()).catch((function(){})).then((function(){if(e.parentNode&&(w.add(t),"blur"===n&&a(!0),null==o?void 0:o.current)){var i=e.naturalWidth,r=e.naturalHeight;o.current({naturalWidth:i,naturalHeight:r})}})))}var E=function(e){var t=e.imgAttributes,i=(e.heightInt,e.widthInt),n=e.qualityInt,o=e.layout,a=e.className,s=e.imgStyle,l=e.blurStyle,u=e.isLazy,h=e.placeholder,A=e.loading,f=e.srcString,m=e.config,g=e.unoptimized,p=e.loader,w=e.onLoadingCompleteRef,y=e.setBlurComplete,v=e.setIntersection,b=e.onLoad,k=e.onError,I=(e.isVisible,e.noscriptSizes),E=c(e,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onLoad","onError","isVisible","noscriptSizes"]);return A=u?"lazy":A,d.default.createElement(d.default.Fragment,null,d.default.createElement("img",Object.assign({},E,t,{decoding:"async","data-nimg":o,className:a,style:r({},s,l),ref:d.useCallback((function(e){v(e),(null==e?void 0:e.complete)&&S(e,f,0,h,w,y)}),[v,f,o,h,w,y]),onLoad:function(e){S(e.currentTarget,f,0,h,w,y),b&&b(e)},onError:function(e){"blur"===h&&y(!0),k&&k(e)}})),(u||"blur"===h)&&d.default.createElement("noscript",null,d.default.createElement("img",Object.assign({},E,x({config:m,src:f,unoptimized:g,layout:o,width:i,quality:n,sizes:I,loader:p}),{decoding:"async","data-nimg":o,style:s,className:a,loading:A}))))};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7462:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return k}});var n=i(5893),o=i(5734),a=i.n(o),r=function(){return(0,n.jsxs)("nav",{className:a().nav,children:[(0,n.jsx)("a",{className:a().link,href:"mailto:baileychen@berkeley.edu",children:"baileychen@berkeley.edu"}),(0,n.jsx)("a",{className:a().link,href:"https://www.linkedin.com/in/bailey-chen-bc",children:"LinkedIn"})]})},s=i(5675),l=i.n(s),c=i(1664),d=i.n(c),u=i(8112),h=i.n(u),A=(0,n.jsx)("div",{className:h().image,style:{width:"10%"},children:(0,n.jsx)(l(),{src:{src:"/_next/static/media/veeva-short-logo.6f195953.jpeg",height:369,width:369,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABwEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAAK0Jf//EAB0QAAECBwAAAAAAAAAAAAAAABIAAgQRExQhM3H/2gAIAQEAAT8AGIutr6IzHA8X/8QAGBEAAgMAAAAAAAAAAAAAAAAAAREAIUH/2gAIAQIBAT8AATvZ/8QAGREAAQUAAAAAAAAAAAAAAAAAEQABAiFB/9oACAEDAQE/AJORWL//2Q==",blurWidth:8,blurHeight:8},width:"50px",height:"50px",layout:"responsive",alt:"Veeva Logo"})}),f=function(e){var t=e.title,i=e.descriptions,o=void 0===i?[]:i,a=e.linkPath,r=e.isRight,s=void 0===r||r,l=(0,n.jsxs)("section",{className:h().description,children:[(0,n.jsx)("h2",{children:t}),o.map((function(e,t){return(0,n.jsx)("p",{children:e},t)})),a?(0,n.jsx)(d(),{href:a,children:"Read case ".concat(o.length>1?"studies":"study"," \u21e2")}):""]});return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{className:h().caseStudy,children:s?(0,n.jsxs)(n.Fragment,{children:[l,A]}):(0,n.jsxs)(n.Fragment,{children:[A,l]})},a)})},m=i(8010),g={introBlurbs:["Software engineer building intuitive and streamlined solutions to Clinical Trial processes. Modernizing user-experience for clinical trial management. React enthusiast and Java sipper."],veevaOverview:{title:"Optimizing user experience for Life Sciences tools",introVeeva:"Veeva Systems provides cloud software solutions for the Life Sciences industry.",introMe:"For the past 2.5 years, I have optimized the front-end user experience for various clinical trial management and admin tools."},workExperience:{veeva:[{title:"Modernized user experience for clinical trial oversight",intro:"Monitoring and overseeing clinical trials ensures compliance with important protocols and regulations. I modernized the frontend component of this process using React.",linkPath:"/cases/oversight"},{title:"One-click clinical study archival",intro:"When a clinical trial is finished, it is vital to archive all sensitive documents and related data. I created a one-click action to automate this time-consuming process.",linkPath:"/cases/archive"},{title:"Increased access for process management tools",intro:"Built portal to enable users to navigate and troubleshoot the setup of all versions of a process workflow.",linkPath:"/cases/workflow",wow:"oo",introMoreDetailed:'Built a full-stack feature to create a "Version Controller" that enables users to navigate and explore the setup of all versions of a process workflow. This feature addressed a common source of confusion for customers and reduced production costs by ~15%.',background:'Documents are numerous and important in the healthcare industry - from keeping track of clinical trials to promotional material and these documents need to follow numerous, stringent compliance rules. To streamline this complexity, we want to organize and formalize the process of various events like: sending notifications, assigning tasks for people to complete, finalizing document drafts, etc., and we do so by grouping these events into "workflows". For example, a biopharmaceutical company might want to create a workflow on a promotional document to get certain people to verify that the document makes accurate claims about a drug.',problem:{painPoint:"Before the Version Controller, whenever someone wanted to examine the setup of a workflow, they would only see the latest version of a workflow, which could be different from the workflow version running on the document. So clearly, this doesn't always help the user see how the running workflow is setup. This mismatch in workflow versions is actually a major source of confusion for customers and this underlying 'workflow' logic runs across multiple applications on Veeva's 'Vault' platform (user: does this setup actually reflect what is running on my document? how do I know? Send help!).",productionImpact:"For my team, around half of the production issues were related to document workflows. To resolve the issue, customers would need to contact Veeva employees who would need to go through the Java backend and query to the MySQL database to find the version of the workflow running on a document. And even then, it would be inconvenient to try viewing the setup of past workflow versions."},fix:"Now, with the Version Controller, users can access an enhanced menu-widget option to navigate through the setup of all versions of a workflow. They can also see the version of a workflow a document is running against so that there is no version mismatch. All this information is extracted at runtime. This would let customers examine and resolve these document workflow related issues themselves and spare the process of contacting support altogether!",whatILearned:"A lot of what I learned over the summer was working with JavaScript and UI in general, along with learning how to communicate effectively at different technical levels (talking to product managers vs. developers). The iterative process of discussing the plan for API changes and working towards the best customer user-experience was also something I delved into and learned about!",screenshotCaptions:{dialog:["Pop-up Dialog that provides contextual information on workflows (version number, last modified, etc)","Navigation links to all workflow versions"],workflowView:"Read-only view of past workflow versions setup (it would be bad if a user could bring back an old broken workflow version. Yikes!)"}}],berkeleySummer2016:{title:"",intro:"The summer after my freshman year, I interned at the Rio Lab at University of California, Berkeley. During my time there, I got to learn and used various molecular laboratory techniques such as in vivo Excision Assays, transfections, cell transformations, and more! All this was to explore the ability of the THAP9 gene of different species (human, fruit fly, zebrafish) to mobilize the fruit fly P-element DNA sequence.",summary:"For the summer after my freshman year, I mainly worked on studying the P-element in Drosophila (fruit fly), which is a well-known transposable element \u2013 meaning this DNA sequence can have its position be changed in the genome. P-elements are mainly moved by a transposase, an enzyme that moves transposable elements via a cut-and-paste mechanism.",techniquesAndSpecificArea:"During the summer, I used various molecular laboratory techniques such as: in vivo Excision Assays, transfections, cell transformations, and more to explore and quantify the ability of transposase gene (THAP9) in different species: human, drosophila, and zebrafish transposase gene (THAP9 gene) to mobilize and move drosophila P-element.",details:["The experiment to quantity the ability of a THAP9 gene to mobilize a P-element was designed by having two plasmids: one with Ampicillin resistance gene and a transposase gene, the other with Ampicillin resistance gene and Kanamycin resistance gene. The Kanamycin resistance gene, however, was inactive because it was split into two sections because a P-element was interjected in the middle.","Later, these two plasmids were inserted into drosophila L2 cells via transformation. If the transposase enzyme successfully moved the P-element and the Kanamycin resistance gene was properly repaired, then the bacteria colonies formed by those drosophila L2 cells would be both Kanamycin and Ampicillin resistant! If the transposition/moving of the P-element was not successful, then the bacteria colonies would only be Ampicillin resistant. Due to this experimental design, I was able to quantify the ability of transposase gene belonging to different species to mobilize drosophila P-element."],figureCaption:"Figure: Min, B., Weinert, B. T. & Rio, D. C. Interplay between Drosophila Blooms syndrome helicase and Ku autoantigen during nonhomologous end joining repair of P element-induced DNA breaks. Proceedings of the National Academy of Sciences 101, 8906\u20138911 (2004)."},stanfordSummer2015:{title:"",intro:"The summer before my freshman year, I interned at the Sidow Lab at Stanford University. I had the opportunity to work on genomic and cancer research using modern laboratory technology like next-generation high-throughput sequencing!",summary:"To explore the causes and roots of cancer development, I compared the differences between cancer tissue and control normal tissue. Two ways I did this were by comparing cancer and normal tissue by examining differences in the genome and gene expression profile.",details:"By looking at the genome of a tissue, I examined both the genes and non-coding DNA, and more. Through this, I examined what a cell\u2019s sequence could possibly do. By looking at the gene expression profile, I examined the functionality of the genome (what genes were being transcribed into RNA) and what a cell\u2019s sequence was actually doing at a point in time. Technology like next-generation high-throughput sequencing (NGS) facilitated this work and allowed the parallelization of DNA and RNA sequencing to greatly increase the number of sequences read each run."}}},p=i(9008),w=i.n(p),y={src:"/_next/static/media/sf_pofa.ce5f3804.jpg",height:1808,width:1808,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAAAwEBAQAAAAAAAAAAAAAAAAAAAwT/2gAMAwEAAhADEAAAAKCVf//EAB0QAAIBBAMAAAAAAAAAAAAAAAECBAMFERIAMYH/2gAIAQEAAT8ArXSMb6kSjKfV5Jo57QDTIK+8/8QAGBEBAQADAAAAAAAAAAAAAAAAAQIAAyH/2gAIAQIBAT8A3iUBScz/xAAWEQADAAAAAAAAAAAAAAAAAAAAASH/2gAIAQMBAT8AVP/Z",blurWidth:8,blurHeight:8},v=i(2614),b=i.n(v),x="Bailey Chen";function k(){var e,t=g.introBlurbs,i=g.workExperience.veeva;return(0,n.jsxs)("div",{className:"container",children:[(0,n.jsxs)(w(),{children:[(0,n.jsx)("title",{children:x}),(0,n.jsx)("meta",{name:"description",content:"Bailey's Website"})]}),(0,n.jsxs)("main",{className:b().main,children:[(0,n.jsxs)("header",{className:b().header,children:[(0,n.jsx)("p",{className:b().title,children:x}),(0,n.jsx)(m.Z,{})]}),(0,n.jsx)("p",{className:b().description,children:t}),(e=(0,n.jsx)(l(),{className:b().baileyProfilePic,src:y,width:500,height:500,alt:"Bailey in San Francisco"}),(0,n.jsx)("div",{style:{display:"flex",justifyContent:"center",margin:"10rem"},children:e})),i.map((function(e,t){var i=e.title,o=e.intro,a=e.linkPath;return(0,n.jsx)(f,{title:i,descriptions:[o],linkPath:a,isRight:t%2===0},i)})),(0,n.jsx)(r,{})]})]})}},8112:function(e){e.exports={caseStudy:"CaseStudy_caseStudy__EaNSO",description:"CaseStudy_description__8papw",image:"CaseStudy_image__NtTVq"}},5734:function(e){e.exports={nav:"Contact_nav__q8eSM",link:"Contact_link__Qy3Dz"}},8690:function(e){e.exports={navigation:"Navbar_navigation__2aKZ_"}},2614:function(e){e.exports={main:"Index_main__Svfh8",header:"Index_header__fkufC",title:"Index_title__rSB65",description:"Index_description__p0GDX",veevaOverview:"Index_veevaOverview__nzTAo",baileyProfilePic:"Index_baileyProfilePic__HcgHK"}},9008:function(e,t,i){e.exports=i(5443)},5675:function(e,t,i){e.exports=i(8045)}},function(e){e.O(0,[664,774,888,179],(function(){return t=5557,e(e.s=t);var t}));var t=e.O();_N_E=t}]);