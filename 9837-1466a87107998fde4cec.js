(self.webpackChunkLayer5=self.webpackChunkLayer5||[]).push([[9837],{935:function(e,t,n){var r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,c=/^0o[0-7]+$/i,l=parseInt,o="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,u="object"==typeof self&&self&&self.Object===Object&&self,s=o||u||Function("return this")(),f=Object.prototype.toString,m=Math.max,d=Math.min,h=function(){return s.Date.now()};function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function p(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==f.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=a.test(e);return n||c.test(e)?l(e.slice(2),n?2:8):i.test(e)?NaN:+e}e.exports=function(e,t,n){var r,i,a,c,l,o,u=0,s=!1,f=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=r,a=i;return r=i=void 0,u=t,c=e.apply(a,n)}function E(e){return u=e,l=setTimeout(b,t),s?y(e):c}function x(e){var n=e-o;return void 0===o||n>=t||n<0||f&&e-u>=a}function b(){var e=h();if(x(e))return S(e);l=setTimeout(b,function(e){var n=t-(e-o);return f?d(n,a-(e-u)):n}(e))}function S(e){return l=void 0,v&&r?y(e):(r=i=void 0,c)}function N(){var e=h(),n=x(e);if(r=arguments,i=this,o=e,n){if(void 0===l)return E(o);if(f)return l=setTimeout(b,t),y(o)}return void 0===l&&(l=setTimeout(b,t)),c}return t=p(t)||0,g(n)&&(s=!!n.leading,a=(f="maxWait"in n)?m(p(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),N.cancel=function(){void 0!==l&&clearTimeout(l),u=0,r=o=i=l=void 0},N.flush=function(){return void 0===l?c:S(h())},N}},21554:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return m}});var r=n(67294),i=n(71082),a=n(17596),c=n(91988),l=n(60580),o=n(44279),u=n(64423).default.div.withConfig({displayName:"Honeycombstyle__HoneycombGrid",componentId:"sc-10xoxm9-0"})(["\n  display: flex;\n  text-align: left;\n  ul {\n    font-size: 0;\n    line-height: 0;\n    height: ",';\n    li {\n      width: 150px;\n      margin: 3px;\n      height: calc(150px * 1.1547);\n      display: inline-block;\n      font-size: initial;\n      margin-bottom: calc(3px - 150px * 0.2885);\n      filter: drop-shadow(rgba(0, 0, 0, 0.1) 0px 4px 20px);\n    }\n\n    ::before {\n      content: "";\n      width: calc(150px / 2 + 3px);\n      float: left;\n      height: 100%;\n      shape-outside: repeating-linear-gradient(\n        #0000 0 calc(calc(1.732 * 150px + 4 * 3px - 1px) - 3px),\n        #000 0 calc(1.732 * 150px + 4 * 3px - 1px)\n      );\n    }\n  }\n'],(function(e){return 0===e.height?"unset":"calc("+e.height+"px + 46px)"})),s=function(e){var t=e.items,n=e.renderItem,i=(0,r.useState)(0),a=i[0],c=i[1],l=(0,r.useRef)(null),o=function(){var e=l?l.current.offsetWidth:window.innerWidth,n=Math.floor((e-100)/156),r=Math.floor((e-178)/156),i=Math.floor(t.length/(n+r));if(i*(n+r)<t.length){var a=t.length-i*(n+r);c(a<=n?272*i+130:272*i+272)}else c(272*i)};return(0,r.useEffect)((function(){return window.addEventListener("resize",o),o(),function(){window.removeEventListener("resize",o)}}),[t]),r.createElement("div",null,r.createElement(u,{height:a},r.createElement("ul",{ref:l},t.map((function(e,t){return r.createElement("li",{key:t},n(e))})))))},f=function(e){return r.createElement("div",e,e.children)},m=function(e){var t=e.category,n=e.theme,u=e.count,m=(0,i.useStaticQuery)("961506260"),d=(0,r.useState)(""),h=d[0],g=d[1],p=(0,c.Z)(m.allMdx.nodes,g,h,["frontmatter","title"],["frontmatter","title"]),v=p.queryResults,y=p.searchData,E=(0,r.useState)([]),x=E[0],b=E[1],S=(0,r.useState)(!1),N=S[0],w=S[1],M=(0,r.useRef)(m.allMdx.nodes),k=M.current.reduce((function(e,t){return e.includes(t.frontmatter.category)||e.push(t.frontmatter.category),e}),[]),A=function(e){return M.current.reduce((function(t,n){return n.frontmatter.category===e&&(t+=1),t}),0)},I=(0,r.useState)([{id:-1,name:"All",isSelected:!1,count:M.current.length},...k.map((function(e){return{id:e,name:e,isSelected:!1,count:A(e)}}))]),L=I[0],j=I[1];(0,r.useEffect)((function(){return O()}),[]),(0,r.useEffect)((function(){v&&b([...v]),0==h.length&&T()}),[v]);var T=function(){var e=[...L],n=null!=t?t:"All";e.forEach((function(e){e.name!=n?e.isSelected=!1:e.isSelected=!0})),j([...e]),R()},O=function(){var e=[...L];void 0!==t?e.forEach((function(e){e.name===t&&(e.isSelected=!0)})):e[0].isSelected=!0,j([...e]),R()},H=function(e){var t=0,n=[...L],r=e.target.innerHTML.includes("&amp;")?e.target.innerHTML.replace("&amp;","&"):e.target.innerHTML;"All"===(r=r.split("(")[0].trim())&&n.forEach((function(e){e.isSelected&"All"!=e.name&&(e.isSelected=!1)})),n.forEach((function(e){e.name==r&&(e.isSelected=!e.isSelected),e.isSelected&&"All"!=e.name&&t++})),n[0].isSelected=0===t,j([...n]),R()},R=function(){if(L[0].isSelected)b([...m.allMdx.nodes]);else{var e=[];L.forEach((function(t){t.isSelected&&m.allMdx.nodes.forEach((function(n){n.frontmatter.category==t.name&&(e=[...e,n])}))})),b([...e])}};return r.createElement(a.gv,null,r.createElement("section",{className:"heading"},r.createElement("h1",null,10*Math.ceil(m.allMdx.nodes.length/10),"+ Built-In Integrations"),r.createElement("h2",null,"Support for your Cloud Native Infrastructure and Apps")),r.createElement(l.Z,{searchQuery:h,searchData:y,hideFilter:N,setHideFilter:w,classnames:["integration-search"]}),r.createElement("section",{className:"category"},!N&&L.map((function(e){return r.createElement("p",{key:e.id,className:e.isSelected?"items selected":"items",onClick:H},e.name+" ("+e.count+")")}))),h.length>0&&v.length<1?r.createElement(o.Z,{errorMessage:"No matching integrations",errorSubtitle:"Try searching again."}):r.createElement(s,{items:"All"==u?x:x.slice(0,u),renderItem:function(e){var t="InProgress"===e.frontmatter.status,a=e.frontmatter.integrationIcon.publicURL,c=e.frontmatter.darkModeIntegrationIcon;return t?r.createElement(f,{className:"container-inactive",style:{background:"#A0AAAA"}},r.createElement("span",{className:"integration-container"},r.createElement("img",{className:"integration-icon",src:"dark"===n&&null!==c?c.publicURL:a,alt:e.frontmatter.title,height:70,width:70,style:{filter:"brightness(0) invert(1)"}}),r.createElement("div",{className:"integration-content"},r.createElement("div",{className:"title",style:{marginBottom:0}},e.frontmatter.title)))):r.createElement(i.Link,{to:"/cloud-native-management/meshery"+e.fields.slug},r.createElement(f,{className:"container-active"},r.createElement("span",{className:"integration-container"},r.createElement("img",{className:"integration-icon",src:"dark"===n&&null!==c?c.publicURL:a,alt:e.frontmatter.title,height:70,width:70,style:{filter:"dark"===n&&null==c?"brightness(0) invert(1)":"none"}}),r.createElement("div",{className:"integration-content"},r.createElement("div",{className:"title"},e.frontmatter.title)))))}}))}}}]);
//# sourceMappingURL=9837-1466a87107998fde4cec.js.map