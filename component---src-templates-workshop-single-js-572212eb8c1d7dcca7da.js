(self.webpackChunkLayer5=self.webpackChunkLayer5||[]).push([[1941],{67228:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,A=new Array(t);n<t;n++)A[n]=e[n];return A},e.exports.default=e.exports,e.exports.__esModule=!0},23646:function(e,t,n){var A=n(67228);e.exports=function(e){if(Array.isArray(e))return A(e)},e.exports.default=e.exports,e.exports.__esModule=!0},69100:function(e,t,n){var A=n(99489),r=n(4043);function a(t,n,o){return r()?(e.exports=a=Reflect.construct,e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=a=function(e,t,n){var r=[null];r.push.apply(r,t);var a=new(Function.bind.apply(e,r));return n&&A(a,n.prototype),a},e.exports.default=e.exports,e.exports.__esModule=!0),a.apply(null,arguments)}e.exports=a,e.exports.default=e.exports,e.exports.__esModule=!0},59713:function(e){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},e.exports.default=e.exports,e.exports.__esModule=!0},4043:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.default=e.exports,e.exports.__esModule=!0},46860:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},98206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},319:function(e,t,n){var A=n(23646),r=n(46860),a=n(60379),o=n(98206);e.exports=function(e){return A(e)||r(e)||a(e)||o()},e.exports.default=e.exports,e.exports.__esModule=!0},60379:function(e,t,n){var A=n(67228);e.exports=function(e,t){if(e){if("string"==typeof e)return A(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?A(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},46725:function(e,t,n){var A=n(93395);e.exports={MDXRenderer:A}},93395:function(e,t,n){var A=n(69100),r=n(319),a=n(59713),o=n(37316),l=["scope","children"];function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var A=Object.getOwnPropertySymbols(e);t&&(A=A.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,A)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var c=n(67294),m=n(64983).mdx,u=n(89480).useMDXScope;e.exports=function(e){var t=e.scope,n=e.children,a=o(e,l),i=u(t),p=c.useMemo((function(){if(!n)return null;var e=s({React:c,mdx:m},i),t=Object.keys(e),a=t.map((function(t){return e[t]}));return A(Function,["_fn"].concat(r(t),[""+n])).apply(void 0,[{}].concat(r(a)))}),[n,t]);return c.createElement(p,s({},a))}},96371:function(e,t,n){"use strict";var A=n(63366),r=n(67294),a=(n(25444),n(2359)),o=["childImageSharp","extension","publicURL","alt"];t.Z=function(e){var t=e.childImageSharp,n=e.extension,l=e.publicURL,i=e.alt,s=(0,A.Z)(e,o);return t||"svg"!==n?r.createElement(a.G,Object.assign({image:t.gatsbyImageData},s,{alt:i})):r.createElement("div",{className:"old-gatsby-image-wrapper"},r.createElement("img",{src:l,alt:i}))}},35318:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var A=n(67294),r=n(25444),a=n(88449),o=n.n(a),l=n(70456).ZP.div.withConfig({displayName:"pageHeaderstyle__PageHeaderWrapper",componentId:"sc-bliqzc-0"})(["\n        position: relative;\n        overflow: hidden;\n        z-index:1;\n        .page-header {\n            text-align: center;\n            position: relative;\n            height: auto;\n            margin: 3rem auto;\n            padding: 0 1rem 0;\n            z-index: 99;\n            h1 {\n                padding-top: 3rem;\n            }\n        }\n        \n        .feature-image{\n            margin: 2rem auto;\n            max-height: 62.5rem;\n            max-width: 31rem;\n            object-fit: contain;    \n        }\n        .breadcrumbs {\n            display: flex;\n            justify-content: center;\n            margin-top: 1.5rem;  \n            h5 {\n                display: inline-block;\n                margin:0 0.4rem;\n                opacity: .7;\n            }\n            p{\n                margin: 0;\n                display: inline-block;\n            }\n        } \n    }\n"]),i=n(96371),s=function(e,t){return A.createElement(A.Fragment,null,t?A.createElement(r.Link,{to:"/community/members/"+o()(e.name)},A.createElement("span",null,e.name)):A.createElement("span",null,e.name))},c=function(e){var t=e.category,n=e.title,a=e.subtitle,c=e.author,m=e.thumbnail,u=!1;c&&(u=(0,r.useStaticQuery)("1485533831").allMdx.nodes.some((function(e){return e.frontmatter.name==c.name})));return A.createElement(l,null,A.createElement("div",{className:"page-header"},m&&A.createElement("div",{className:"feature-image"},A.createElement(i.Z,Object.assign({},m,{imgStyle:{objectFit:"contain"},alt:n}))),A.createElement("h1",{className:"page-title"},n),a&&A.createElement("h3",null,a),t&&A.createElement("div",{className:"breadcrumbs"},A.createElement("span",null,A.createElement("h5",null,"Category:"),A.createElement("p",{key:t},A.createElement(r.Link,{to:"/blog/category/"+o()(t)},A.createElement("span",null,t)))),c&&A.createElement(A.Fragment,null,A.createElement("span",null,A.createElement("h5",null,"By:"),A.createElement("p",null,s(c,u))))),!t&&c&&A.createElement("div",{className:"breadcrumbs post"},A.createElement("h5",null,"By:"),A.createElement("span",null,s(c,u)))))}},27497:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return g}});var A=n(67294),r=n(70456),a=n(20092),o=n(36179),l=n(97264),i=n(99043),s=n(97956),c=n(38155),m=n(46725),u=r.ZP.div.withConfig({displayName:"WorkshopSinglePageWrapperstyle__WorkshopSinglePageWrapper",componentId:"sc-1aoil9m-0"})(["\n    margin-bottom: 4rem;\n\tdisplay: block;\n\n\t.backBtn {\n\t\tposition: relative;\n\t\tleft: 0px;\n\t\tmargin-top: 3rem;\n\t\tmargin-left: 3rem;\n\t\tfont-weight: 600;\n\t\ta{\n\t\t\tdisplay: flex;\n\t\t    color: ",";\n\t\t    &:hover{\n\t\t        color: ",";\n\t\t\t}\n\t\t\t\n\t\t\th4 {\n\t\t\t\tline-height: 1.75rem;\n\t\t\t}\n\t\t\tsvg {\n\t\t\t\tfont-size: 1.75rem;\n\t\t\t}\n\t\t}\n\t\t\n\t}\n\n\t@media screen and (max-width: 992px) {\n\t\t.backBtn {\n\t\t\tmargin-top: 2rem;\n\t\t\tmargin-left: 2rem;\n\t\t}\n\t}\n\n\t.bottomBtn {\n\t\tpadding:4rem;\n\t\tpadding-top:5rem;\n\t\tbackground-color: #FAFAFA;\n\t\tdisplay: flex;\n\t\tjustify-content: space-evenly;\n\t\talign-items: center;\n\t\tflex-wrap: wrap;\n\t\t\n\t\tbutton{\n\t\t    margin-bottom: 1rem;\n\t\t}\n\t}\n\n\t@media only screen and (max-width: 25rem) {\n\t\t.backBtn {\n\t\t\tmargin-top: 1rem;\n\t\t\tmargin-left: 1rem;\n\t\t}\n\t}\n\n\t.links {\n\t\tdisplay: flex;\n\t\tcolor: ",";\n\t\tborder: none;\n\t\talign-items: center;\n\t\tpadding: 0.3125rem 0.9375rem;\n\t\tbackground-color: whitesmoke;\n\t\tmargin-right: 0.625rem;\n\t\tborder-radius: 0.3125rem;\n\t\tfont-size: 1.125rem;\n\t\tfont-weight: 400;\n\t\tbox-shadow: 0rem 0.0625rem 0.1875rem rgba(0, 0, 0, 0.1);\n\t\ttransition: 0.5s ease-in-out all;\n\n\t\t&:hover {\n\t\t\tcolor: ",";\n\t\t\tbox-shadow: 0 0.3125rem 0.9375rem rgba(0, 0, 0, 0.1);\n\n\t\t\timg {\n\t\t\t\tfilter: none;\n\t\t\t}\n\t\t}\n\n\t\timg {\n\t\t\theight: 1.25rem;\n\t\t\twidth: auto;\n\t\t\tdisplay: block;\n\t\t\tpadding-right: 0.625rem;\n\t\t\tfilter: grayscale(1);\n\t\t}\n\t}\n\n\t.social-icons {\n\t\tdisplay: flex;\n\t\tflex-wrap: wrap;\n\t\talign-items: center;\n\t}\n\n\t.btn-and-status {\n\t\tdisplay: block;\n\t\tmargin-bottom: 1.25rem;\n\t}\n"],(function(e){return e.theme.primaryColor}),(function(e){return e.theme.linkColor}),(function(e){return e.theme.primaryLightColorTwo}),(function(e){return e.theme.secondaryColor})),p=n(61424),j=n(25444),d=n(35318),f=n(57067),Q=n(22626),E=function(e){var t=e.frontmatter,n=e.body;return A.createElement(u,null,A.createElement("div",{className:"backBtn"},A.createElement(j.Link,{to:"/learn/service-mesh-workshops"},A.createElement(p.Oul,null),A.createElement("h4",null,"All Workshops"))),A.createElement(d.Z,{title:t.title,subtitle:t.abstract,thumbnail:t.thumbnail}),A.createElement(f.W2,null,A.createElement("div",{className:"cardContent"},A.createElement(m.MDXRenderer,null,n)),A.createElement("div",{className:"btn-and-status"},A.createElement("div",{className:"social-icons"},t.slack&&"delivered"===t.status?A.createElement("a",{href:t.slack,target:"_blank",rel:"noreferrer",className:"links"},A.createElement("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABcVBMVEUAAAAAv88Au9MAvNQAvdQAvNQAvdUAv9dQr1BMr1BLr1BMr1BOsVAAvdUAutRQr1BNr1BNr1BQr1AAvNRAr1AAvNNMr1AAvdZMr1AAv9QAvNRMr1BStVJKrVBNrlEAvNIAvdUAt88AutIAu9QAvNQAt88Au9NKr1BNr1BMrVBLrlBLr1AAvdQAvNVOsVBNr1AAvtZMr1AAvNRLrlBLrVBIr1AAvdRNr1AAvNYAvtUAv9cAr89NslHfIHDlHWPnHWLnIGTnIGjnHGT/lQD/lwD/mQD/lwDqH2PpHmPpHmPqHmP/lgD/lwD/mADqHmPnHWXnHGT/lwDmHmL/mAD/nwDpH2PpHmP/mQDvIGD/lwDkIGXoHmP/mgD/lwDqHmPnGGD/mQDqHmLpHGLpHmLqHWLpHWLpHmLoHGP/mADqIGDrIGHvIWP/mgD/mQDnIGDsHWTrHmLoHWPqHmLqG2DfEGD/mQAAvNRMr1DpHmP/mAD///+UWiKBAAAAdnRSTlMAEIC/78+fIBCA379f3zAw798g7xCQfx/vMF9QH2A/UH8gYI+fQEAwYICgz2DPb58/QN9fcCCPj29PXxA/EFBgQCBAMGBQIL+f319w75/vYICAcN8Qr+9/EEAwbzDPbyBfz3/fn5/Pb78wPx8/jyBPf7/vMBDPZt+gYQAAAAFiS0dEejjVhWoAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQflAhMWBijJdVs+AAACY0lEQVRIx8XV+VfTQBAH8ClFCy2N0KKioogHqHiAFW9NayEcFhRbLVW0CB71qAfqJvnvTTbXbLLZtI08vz91XvfzdpvMbAECSfQl+8mBgymnHhhMq2pmCDpJKktospJVHxpWaUZynVtC8nTvnG0NPRqJDxM3SbPOqG6OROKsh8lRY2PPqmNR9hiy5DjACYTV8S7xSYxPReBEHAzJOHgiDobTcTDSPWCYPHP2HM35HjDOfuNJaYqNlBDhgemcN7/9JJhkKgxfMGdl5KJvBn3p4+NLKprvMEvIFA8PutUMwOVQS65wMB7RIaaX/ZGC+CoqMyCwvA67xlwOsXBWgGcB5jAeZfEMHiJ/rptvZhj/RhYXIJEXnRrghrd4nsVpo5bC9E2rAW8xN6+Hx6ZpY3PfVv62Oxtpuo/Vmy7OzDtzceeuP7P30NzcLxScmZgrWBmH/58HD2Waol2XZPkR/r684M+i4ixd0uws07pI65VVhz6u6JysUV5a1xj8xKmeWnZD56dSNo68ojG45JXPTLugh6VaA1lj8XOvfGHiaijW67DE4k1UasZTa4RbvQrrLH6J8aro1Eb8uNgVxsd+FcRbAvsa3qDFzSAWPbBtgLfu2h3g4IbgeQE0d+2l74CHoR5maYs135v8w0fgY9hq8fqrXnPa99PnL/YnDgaoffWnzB0wLu40/xQ31mja20oP2OuwjTi4Ay3q7cU4uBUH67U4uByBv2H8vUvMXA7GiCq+MRLnh2d/mjWainYk3nQmVNtrmrVSQVdtZJz53vtl/9dU8fxGRjbutd2d306ptP/olVads+9fuLVduibrR54AAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEtMDItMTlUMjI6MDU6MDgrMDA6MDBhKTWbAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTAyLTE5VDIyOjA1OjA4KzAwOjAwEHSNJwAAAABJRU5ErkJggg==",alt:"Slack"}),"Slack"):"",t.slides&&"delivered"===t.status?A.createElement("a",{href:t.slides,target:"_blank",rel:"noreferrer",className:"links"},A.createElement("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEkAAAA8CAMAAAAdQmecAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAilBMVEUAAAAQjoERjYIRjYIQjYIQj38QjoMRjoMRjoIQjoMQjYIQj38QjYIQjYESjoERjoESjYEQjoEQi38QjIMQjIMQjYIQi4ERjoEQjYARjIERjYEQf38Qh38QjIEQjIQQjH8QjoEQioUQi4MRjoMQin8RjYIRjoEQjYIQjIMRjYIRjoIQjYIRjYL///9bclg6AAAALHRSTlMAP9/vnxBvv++/jyBwgJDPgL9AUG9gT79/oN8QIL8fUF8wQM8wr9+vX7DffxvU+BUAAAABYktHRC3N2kE9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH5QITFgYqJ3s6EgAAAR1JREFUWMPt19kSgiAUBmBEKBNb1VZszzbe//nKLDKcLjqHKZvxv/PmmxEO/wBRluIQqxJFx80lStBh35V4o+kpr+ULrBR4jyVt46ROYXe6HCH1Xja6D5eEMTMBWGoaksuBkigN8gAohSXJB0pRSWI/l2Jrf1de8SF0CkamBJ0CMjCgMfy0TF6g6Qwu8W4RkqhW8TWUSGTTSUazE5c4Ntp3Np9baF8ZL/IVW67AEl832Obave42+9qprMxDAZF0OaWiUJ4oSaU8UHYkVZgqpKRqqZZq6d+ka+dSg0ne1fDHN7EE3OPMeArsK3Kz/0Sq3quMWopDqp0wvkXgpftEH34vHU95WlpanyDZ6lNKnxJwnuJznkhL4gyJrOKKXwDG3efj+IihcAAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMS0wMi0xOVQyMjowNTowOCswMDowMGEpNZsAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjEtMDItMTlUMjI6MDU6MDgrMDA6MDAQdI0nAAAAAElFTkSuQmCC",alt:"Slide"}),"Slides"):"",t.eurl&&"delivered"===t.status?A.createElement("a",{href:t.eurl,target:"_blank",rel:"noreferrer",className:"links"},A.createElement("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAAA8CAMAAADsSTwRAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAflBMVEUAAAAQj38RjoMRjoMQjoERjoEQh38RjYIQj38QjoMRjYMRjoIQjYIRjoIQjIIQjYIQjoEQf38RjYIRjoEQjYISjYIRjIEQjIEQjIERjYIQj4UQin8Qi38Qi4MQjIMQjIEQj38Qi4IQioUQjYARjYEQjIEQioIRjIIRjYL///9JnhwEAAAAKHRSTlMAIL/Pv78g3xBvr99w76+fPxDvz2Cfz8+/rzAwQEBvXzBwMH/fb2CvSvIXEgAAAAFiS0dEKcq3hSQAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQflAhMWCAP7So/wAAABdUlEQVRYw+3X2VbCMBAG4J/FNhaUUoygCIob//s/oRdBbGmWGdJL56qnab8zWdsBNDEa0xeTkUrBhP6Y6hiGQsfcDMMUZZwxt9WMsZjGHdc6v2Mq4vkAgBmTUibgABjNqGD8DgBJLryPjzMwdxeLepkxXzAzkmxqxbSbVZ95IElmKkRFkotMhW631ZkK3W4zmcqJyVWUTEex5ZVMV2mvHw1zobTXoYLpKS1HzniUP0fMeJWzI2UCysl5FDJBBSjW3BQyJqK0Pz3ZioQRKAJGoqQZkZJkZEqKESoJRqrEGbESZeRKjAkoFcknBRPIxftGmHkO9EjJtH7RLDKY89hY5DC/jkUe4xyLXAZm1V8vVzDAFoMw+GcGYYxCMV6mJMkXBbMjyebybpU+krphSXJzeXdPXTo7kuRrr6sNSTZbofLmSqai13A4HQbvklSse/hDU0AG49NXpZhSqxT+wkaXzyZYMR3kCTVfkbFbfh/XAqM87v2p/ADcUeBjJanzXAAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMS0wMi0xOVQyMjowNTowOCswMDowMGEpNZsAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjEtMDItMTlUMjI6MDU6MDgrMDA6MDAQdI0nAAAAAElFTkSuQmCC",alt:"Link"}),"Link"):"",t.labs&&"delivered"===t.status?A.createElement("a",{href:t.labs,target:"_blank",rel:"noreferrer",className:"links"},A.createElement("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA8CAMAAAAEyYk6AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAqFBMVEUAAAAQj38RjoMRjoEQjoEQj38RjoIQi38QjIMQjYIQjYISjYIQjoERjoIRjYISjYIQjYAQi4IQjYIQjYIQjYIQjYIQj38QjYESjoEQjIERjYIQf38Qh38SjYERjYIQjH8RjoERjYEQjoEQjoEQi4MQjIEQjIMRjIESjYAQioIQjoMRjYMQjoMRjoEQjIEQin8QjIISjYIRjoMQjIQQjYIQjIERjYL///+mSDguAAAANnRSTlMAML/fXyDfQFCfYI+/7++ff3Cvj3B/EICQz68QIIDfUM/fTz9Av2/Pj2C/r1+/XzCvf88fL2/pLxLbAAAAAWJLR0Q3MLi4RwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB+UCExYHBOK2BpwAAAGdSURBVEjH7VbbdoIwEExVtLQVqAFalEIpSu/Sa/7/06rkBiGSjW89x3niLJlMdjPZBCEVZyOiYjxBZjhTosHMTDzX8YhrJl6ciCfiifj/iZda4pW55cybgZ5n23T8ZliA0LXS6EyCzajF/hN3mSFEMNJUyYvNgrQUvpJlNETkTfzGiW/Vwg5J6vcQIDkdJHrOcYKE+ADBJLG4ekIxYLlCKMVQ48n7bUkDGCh5J36nNBDDJB1ZPR7K+sz8kNlMxPGAoMjE0RU2PCxIyD0115IUD6VrMN66u6D1LjIiXqqpbQQw20L3mOhKcrNtqgpLzzxqffikEaQ7nz5nshKaZ4/TF0x5gNfk5XXOfhXVm9t3AZs1aK1ByjaJBTv3olw1HjNbseoWrGTpZrhkkfeuJE9j27fTqi7r1nRpV5LtfQF4IeK2JHfWFkCMWYOftAQ/EASfzFqxFKxBRC4ZSXcjGL7o6Ex8Qd7Ae/Bb7BspZ8kA0V9KMQUZ+5EJWL7zS+4GW8S8wJbYyALb4WeX7+wIHj1HeWbL+xVnL7FgZbg573/pDE8mw++SUgAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMS0wMi0xOVQyMjowNTowOCswMDowMGEpNZsAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjEtMDItMTlUMjI6MDU6MDgrMDA6MDAQdI0nAAAAAElFTkSuQmCC",alt:"Lab"}),"Labs"):"",t.video&&"delivered"===t.status?A.createElement("a",{href:t.video,target:"_blank",rel:"noreferrer",className:"links"},A.createElement("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAAA8CAMAAADVLo1KAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAt1BMVEUAAAD3QDjyQzbyQjX1Qjb1Qjb0QzX0Qjb0Qzb0QzX1Qzb2Qjf2QzXzQDTzRDj3QzbzQzX1Qzb3SDjyQzXzRDb0QjT1QzbvQDD0QDX0RTr1Qzf/Qjr1RDT0QjX0Qjb0Qzf3QTX0QjX1RDb0QzbvQDD0Qjf0QjXzQzX0RTX3RTnzQzX0Qzb1TkP2cWf54+L2h4D6+vr4tbH1Wk/2n5j54+H1cGf57+32npj0TkL4zMn0Wk70T0L////7Bb3jAAAAK3RSTlMAIFBgf5+/z9/vr49vQEBfkN8goIBwnxAwMK8fT8/fvz+Pf18gcJ/vMD9v2ZQqmwAAAAFiS0dEPKdqYc8AAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQflAhMWBzItDJMFAAABvklEQVRYw7WY6VbCMBBGR2hagriASxG0BVsFjWjdUd//vaQhRVAhM2Hy/U7vybntNJkBWGSnVg8CIUQ4S9QwUesizYKoXN4UYjdo1fbgb/aFVAwJD35xDxVX2p1l7pFSXsjHijPhgttRvDmpwKfMYBn72bBSLT8bXlhus4NVt+Se8XPnLloewNpFzwNYluBo85o7J3IfILYsmdw/OIDP7e9uUhSPTy5vr2YHF8UzFSzsH4UGF1QfTYAABab6uLAXdAWm+UgAUjSY5IMEpviIbfWxCsb76EODBsb6oIORProgyWCUjwEoBzDChyPY7sMZbPOxBXizj23AL69ewG/vUy8qPj69vLyNFgzYoUAsFgyYXtI2C6akqWC7BaefEMaCAZN+9CgL5gTp4cFICwaMPkzRFsxhOkSC8RbM8Y+7sFAsmHtsHQEmWdAZoi6FNAs6AeIaS7VQXWNtFfI1deDq7oa/GzOtgrfmxls7BpIfrBtIuGTnJvOWt8sOzsxYIfWzYYBc+tkwwJWn0Q3vsCnJl8dYfF9GmK8O3vLrhIE6Cgf/DAvHN5keQaZlqhnkaB2imlFG5erZU8PgNhvHP7RvuLlHMv78PiYAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEtMDItMTlUMjI6MDU6MDgrMDA6MDBhKTWbAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTAyLTE5VDIyOjA1OjA4KzAwOjAwEHSNJwAAAABJRU5ErkJggg==",alt:"Youtube video"}),"Video"):"")),A.createElement("div",{className:"bottomBtn"},A.createElement(Q.Z,{secondary:!0,title:"Request a Workshop",url:"mailto:training@layer5.io",external:!0}),A.createElement(Q.Z,{primary:!0,title:"Join this Workshop",url:t.eurl}))))},g=function(e){var t=e.data;return A.createElement(r.f6,{theme:c.Z},A.createElement(a.Z,null,A.createElement(s.Z,null),A.createElement(o.Z,{title:t.mdx.frontmatter.title,image:t.mdx.frontmatter.thumbnail.publicURL}),A.createElement(l.Z,null),A.createElement(E,{frontmatter:t.mdx.frontmatter,body:t.mdx.body}),A.createElement(i.Z,null)))}},88449:function(e){e.exports=function(e){return e.toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}}}]);
//# sourceMappingURL=component---src-templates-workshop-single-js-572212eb8c1d7dcca7da.js.map