(self.webpackChunkLayer5=self.webpackChunkLayer5||[]).push([[9916],{96371:function(e,n,t){"use strict";var a=t(63366),r=t(67294),i=(t(25444),t(2359)),l=["childImageSharp","extension","publicURL","alt"];n.Z=function(e){var n=e.childImageSharp,t=e.extension,m=e.publicURL,c=e.alt,s=(0,a.Z)(e,l);return n||"svg"!==t?r.createElement(i.G,Object.assign({image:n.gatsbyImageData},s,{alt:c})):r.createElement("div",{className:"old-gatsby-image-wrapper"},r.createElement("img",{src:m,alt:c}))}},35318:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var a=t(67294),r=t(25444),i=t(88449),l=t.n(i),m=t(70456).ZP.div.withConfig({displayName:"pageHeaderstyle__PageHeaderWrapper",componentId:"sc-bliqzc-0"})(["\n        position: relative;\n        overflow: hidden;\n        z-index:1;\n        .page-header {\n            text-align: center;\n            position: relative;\n            height: auto;\n            margin: 3rem auto;\n            padding: 0 1rem 0;\n            z-index: 99;\n            h1 {\n                padding-top: 3rem;\n            }\n        }\n        \n        .feature-image{\n            margin: 2rem auto;\n            max-height: 62.5rem;\n            max-width: 31rem;\n            object-fit: contain;    \n        }\n        .breadcrumbs {\n            display: flex;\n            justify-content: center;\n            margin-top: 1.5rem;  \n            h5 {\n                display: inline-block;\n                margin:0 0.4rem;\n                opacity: .7;\n            }\n            p{\n                margin: 0;\n                display: inline-block;\n            }\n        } \n    }\n"]),c=t(96371),s=function(e,n){return a.createElement(a.Fragment,null,n?a.createElement(r.Link,{to:"/community/members/"+l()(e.name)},a.createElement("span",null,e.name)):a.createElement("span",null,e.name))},o=function(e){var n=e.category,t=e.title,i=e.subtitle,o=e.author,d=e.thumbnail,u=!1;o&&(u=(0,r.useStaticQuery)("1485533831").allMdx.nodes.some((function(e){return e.frontmatter.name==o.name})));return a.createElement(m,null,a.createElement("div",{className:"page-header"},d&&a.createElement("div",{className:"feature-image"},a.createElement(c.Z,Object.assign({},d,{imgStyle:{objectFit:"contain"},alt:t}))),a.createElement("h1",{className:"page-title"},t),i&&a.createElement("h3",null,i),n&&a.createElement("div",{className:"breadcrumbs"},a.createElement("span",null,a.createElement("h5",null,"Category:"),a.createElement("p",{key:n},a.createElement(r.Link,{to:"/blog/category/"+l()(n)},a.createElement("span",null,n)))),o&&a.createElement(a.Fragment,null,a.createElement("span",null,a.createElement("h5",null,"By:"),a.createElement("p",null,s(o,u))))),!n&&o&&a.createElement("div",{className:"breadcrumbs post"},a.createElement("h5",null,"By:"),a.createElement("span",null,s(o,u)))))}},67814:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return P}});var a=t(67294),r=t(20092),i=t(36179),l=t(97264),m=t(99043),c=t(97956),s=t(38155),o=t(70456),d=t(57067),u=t(35318),p=o.ZP.div.withConfig({displayName:"coursesliststyle__CoursesListWrapper",componentId:"sc-1rs2x9t-0"})(["\n\n  .page-header {\n    margin: 3rem auto 5rem;\n  }\n  .course-list {\n    display: flex;\n    margin: 2rem 0;\n  }\n  .course-list-cont {\n    padding: 3rem 0;\n    margin: 1rem;\n  }\n  .learning-path-cards {\n    a {\n      color: black;\n    }\n  }\n  @media(max-width: 1200px)\n  {\n    .course-list-cont {\n      margin: 0;\n    }\n\n  }\n"]),g=o.ZP.div.withConfig({displayName:"content-cardstyle__ContentCardWrapper",componentId:"sc-1payae2-0"})(["\n  padding: 2rem;\n  margin: 2rem 0;\n  background-color: #fafafa;\n  display: flex;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  justify-content: space-between;\n  :hover {\n    border-color: black;\n    transition: background 150ms ease-out 0s, border 150ms ease-out 0s,\n      transform 150ms ease-out 0s;\n    transform: translate3d(0px, -3px, 0px);\n    box-shadow: rgba(0, 0, 0, 0.08) 0px 3px 10px 0px;\n  }\n\n  .chapter-info {\n    display: flex;\n    width: 60%;\n    justify-content: space-between;\n    .info {\n      display: flex;\n      align-items: center;\n      span {\n        margin: 0 0.5rem;\n      }\n    }\n  }\n\n  .chapter-content {\n    h2 {\n      margin: 1rem 0;\n    }\n    p {\n      width: 85%;\n    }\n  }\n\n  .bookmark-btn-div {\n    display: flex;\n    align-items: end;\n  }\n\n  .bookmark-btn {\n    background-color: #fafafa;\n    min-width: auto;\n    :hover {\n      color: black;\n      background-color: #fafafa;\n    }\n  }\n  @media screen and (max-width: 1200px) {\n    .chapter-info {\n      width: 60%;\n    }\n  }\n  @media screen and (max-width: 768px) {\n    flex-direction: column;\n    .chapter-content-div {\n      padding: 1rem 0;\n    }\n    .bookmark-btn-div {\n      justify-content: end;\n    }\n\n    .chapter-info {\n      width: 80%;\n    }\n    .chapter-content {\n      p {\n        width: 100%;\n      }\n    }\n  }\n  @media screen and (max-width: 400px) {\n    padding: 1rem 1rem;\n    .chapter-info {\n      width: 100%;\n    }\n  }\n"]),h=t(26199),f=t(22626),E=function(e){var n=e.chapter;return a.createElement(g,null,a.createElement("div",{className:"chapter-content-div",id:n.frontmatter.courseTitle?n.frontmatter.courseTitle:null},a.createElement("div",{className:"chapter-content"},a.createElement("h2",null,n.frontmatter.chapterTitle?n.frontmatter.chapterTitle:n.frontmatter.courseTitle),a.createElement("p",null,n.frontmatter.description))),a.createElement("div",{className:"bookmark-btn-div"},a.createElement(f.Z,{className:"bookmark-btn"},a.createElement(h.t7r,null))))},y=t(25444),b=o.ZP.div.withConfig({displayName:"setup-pre-reqstyle__SetupPreReqWrapper",componentId:"sc-1am7ghm-0"})(["\n    padding: 1rem 0;\n    h2{\n        margin: 1rem 0;\n    }\n    .get-started-desc{\n        margin: 1rem;\n    }\n    .container-card {\n        display: flex;\n        a {\n            color: black;\n            margin: 1rem;\n        }\n        .card {\n            padding: 2rem;\n            background-color: #eee;\n            max-width: 350px;\n            min-height: 200px;\n            .card-header {\n                display: flex;\n                flex: auto;\n                img {\n                    height: 3rem;\n                    align-self: center;\n                    flex: 0 0 25%;\n                    margin: 0 0.5rem;\n                }\n                svg {\n                    font-size: 4.15rem;\n                    align-self: center;\n                    flex: 0 0 25%;\n                    margin: 0 0.5rem;\n                }\n                h2 {\n                    font-size: 1.75rem;\n                    margin: 1rem 0;\n                }\n            }\n        }\n    }\n    \n    @media (max-width: 1200px)\n    {\n        padding: 1rem 0;\n        .get-started-desc{\n            margin: 0;\n        }\n        .container-card {\n            flex-wrap: wrap;\n            justify-content: center;\n            align-items: center;\n            .card{\n                margin: 0;\n                max-width: none;\n                .card-header {\n                    img {\n                        height: 2rem;\n                        flex: 0 0 10%;\n                    }\n                    svg {\n                        font-size: 2.15rem;\n                        flex: 0 0 10%;\n                    }\n                }\n            }\n            a{\n                margin: 1rem 0rem;\n            }  \n        } \n    }\n    @media (max-width: 400px)\n    {\n        .container-card {\n            .card {\n                padding: 2rem 1rem;\n            }\n        }\n\n    }\n"]),v=t(76208),x=t(51852),k=t(11773),w=function(){return a.createElement(b,null,a.createElement("div",{className:"get-started-desc",id:"pre-requisites"},a.createElement("h2",null,"Pre-requisites"),a.createElement("p",null,"In this learning path, we will be using Meshery as the management plane to manage the service meshes. Meshery is the service mesh management plane which offers lifecycle, configuration, and performance management of service meshes and their workloads.")),a.createElement("div",{className:"container-card",id:"Set up"},a.createElement(y.Link,{to:"/service-mesh-management/meshery"},a.createElement("div",{className:"card"},a.createElement("div",{className:"card-header"},a.createElement("h2",null,"Install Meshery"),a.createElement(x.$Sq,null)),a.createElement("p",null,"lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id sem id magna tempus fringilla. Suspendisse posuere nibh et dictum varius."))),a.createElement(y.Link,{to:"/service-mesh-management/meshery/getting-started",id:"Run Meshery"},a.createElement("div",{className:"card"},a.createElement("div",{className:"card-header"},a.createElement("h2",null,"Run Meshery"),a.createElement("img",{src:v.Z})),a.createElement("p",null,"lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id sem id magna tempus fringilla. Suspendisse posuere nibh et dictum varius."))),a.createElement(y.Link,{to:"/service-mesh-management/meshery/operating-service-meshes",id:"Manage Meshery"},a.createElement("div",{className:"card"},a.createElement("div",{className:"card-header"},a.createElement("h2",null,"Manage Meshery"),a.createElement("img",{src:k.Z})),a.createElement("p",null,"lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id sem id magna tempus fringilla. Suspendisse posuere nibh et dictum varius.")))))},N=t(11521),C=o.ZP.div.withConfig({displayName:"tocstyle__TOCWrapper",componentId:"sc-8yb0qe-0"})(["\n\n    position: sticky;\n    top: 10rem;\n    left: 0;\n    margin-left: -3rem;\n\n    .go-back {\n        margin: 1rem 0;\n        display:flex;\n        justify-content:space-between;\n        align-items:center; \n        a {\n            display: inline-flex;\n            svg {\n                align-self: center;\n                font-size: 1.5rem;\n                color: rgb(177, 182, 184);\n                width: 100%;\n                max-width: 1.5rem;\n            }\n            h4 {\n                font-weight: 500;\n                text-transform: capitalize;\n                font-size: 1.25rem;\n                white-space: nowrap;\n            }\n            &:hover {\n                svg, h4 {\n                    color: #3C494F;\n                }\n            }\n        }\n    }\n\n  .toc-toggle-btn{\n    display:none;\n  }\n \n  .toc-ul-open{\n    display: flex;\n    flex-direction: column;\n    margin-top: 0rem;\n    list-style: none;\n    height:auto !important;\n    opacity:1 !important;\n    transition:all .4s !important;\n  }\n  .toc-menu-icon{\n    width: 1.5rem; \n    height: 1.5rem; \n    cursor: pointer;\n    fill: ",";\n  }\n\n  .toc-sub-heading {\n        margin-top: 1rem;\n        font-weight: 500;\n        font-size: 1.15rem;\n  }\n    \n  .toc-item {\n        line-height: 1.5rem;\n    }\n    .toc-list {\n  \n        ul {\n            position: relative;\n            padding-inline-start: 1.5rem;\n            list-style-type: none;\n            \n            li {\n                margin: 1rem 0 1rem 0.5rem;\n                width: fit-content;\n\n                &::marker {\n                    color: rgba(177, 182, 184, 0.75);\n                }\n                p {\n                    margin: 0;\n                    font-size: 1rem;\n\n                    a {\n                        color: rgba(0, 0, 0, 0.65);\n                    }\n                }\n                &:hover {\n                    &::marker, p, a {\n                        color: ",";\n                    }\n                }\n\n            }\n            .active-link {\n                &::marker, p, a {\n                    color: ",";\n                }\n            }\n        }\n    }\n    \n    @media only screen and (max-width: 991px){\n        position: initial;\n        margin-left: -0.5rem;\n        width: auto;\n        .toc-toggle-btn{\n           display: flex;\n        }\n        .go-back{\n           margin-left:0;\n        }\n        .toc-ul{\n           opacity:0;\n           height:0;\n           transition:none;\n           padding-left: .8rem !important;\n        }\n\t.toc-item {\n           line-height: .8rem;\n        }\n    }\n"],(function(e){return e.theme.menuColor}),(function(e){return e.theme.secondaryColor}),(function(e){return e.theme.secondaryColor})),Z=t(61424),L=[{name:"Set up",link:"/service-mesh-management/meshery"},{name:"Run Meshery",link:"/service-mesh-management/meshery/getting-started"},{name:"Manage Meshery",link:"/service-mesh-management/meshery/operating-service-meshes"}],M=function(e){var n=e.coursesData,t=(0,a.useState)(!1),r=t[0],i=t[1];return a.createElement(C,null,a.createElement("div",{className:"go-back"},a.createElement(y.Link,{to:"/learn-ng"},a.createElement(N.PSe,null),a.createElement("h4",null,"Learning Paths")),a.createElement("div",{className:"toc-toggle-btn"},r?a.createElement(Z.QAE,{className:"toc-menu-icon",onClick:function(){i(!r)}}):a.createElement(Z.Ejh,{className:"toc-menu-icon",onClick:function(){i(!r)}}))),a.createElement("div",{className:"toc-list"},a.createElement("ul",{className:"toc-ul "+(r?"toc-ul-open":"")},a.createElement(y.Link,{to:"#pre-requisites"},a.createElement("h5",{className:"toc-sub-heading"},"Pre-requisites")),L.map((function(e,n){return a.createElement("li",{key:n},a.createElement("p",{className:"toc-item"},a.createElement("a",{href:"#"+e.name},e.name)))})),a.createElement(y.Link,{to:"#courses-list"},a.createElement("h5",{className:"toc-sub-heading"},"Courses")),n.map((function(e,n){return a.createElement("li",{key:n},a.createElement("p",{className:"toc-item"},a.createElement("a",{href:"#"+e.frontmatter.courseTitle},e.frontmatter.courseTitle)))})))))},S=function(e){var n=e.coursesData,t=e.learnPath;return a.createElement(p,null,a.createElement(u.Z,{title:t}),a.createElement(d.W2,null,a.createElement(d.X2,{className:"course-list"},a.createElement(d.JX,{sm:0,lg:3,xl:3},a.createElement(M,{coursesData:n})),a.createElement(d.JX,{sm:12,lg:9,xl:9},a.createElement(w,null),a.createElement("div",{className:"course-list-cont",id:"courses-list"},a.createElement("h2",null,"Courses"),a.createElement(d.X2,{className:"learning-path-cards"},n.map((function(e){return a.createElement(d.JX,{sm:12,key:e.id,name:e.frontmatter.courseTitle},a.createElement(y.Link,{to:e.fields.course},a.createElement(E,{chapter:e})))}))))))))},P=function(e){var n,t,d=e.data,u=e.pageContext,p=(n=u.learnpath,(t=n.split("-")).reduce((function(e,n,a){return a==t.length-1?e+n.charAt(0).toUpperCase()+n.slice(1):e+n.charAt(0).toUpperCase()+n.slice(1)+" "}),""));return a.createElement(o.f6,{theme:s.Z},a.createElement(r.Z,null,a.createElement(c.Z,null),a.createElement(i.Z,{title:""+p,description:"Learn Service Meshes: Istio, Linkerd, Envoy, Consul, Maesh, Kuma, App Mesh, Citrix, Tanzu Service Mesh"}),a.createElement(l.Z,null),a.createElement(S,{coursesData:d.allMdx.nodes,learnPath:p}),a.createElement(m.Z,null)))}},88449:function(e){e.exports=function(e){return e.toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}},11773:function(e,n,t){"use strict";n.Z=t.p+"static/meshery-operator-dark-aabaafd987b887ca9b60c9322b365cf6.svg"}}]);
//# sourceMappingURL=component---src-templates-courses-list-js-ff4db3a3721b0a620002.js.map