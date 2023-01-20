"use strict";var e=require("react"),t=require("prop-types");const n=e=>{if(!e)return;const{attributes:t,element:o,elementName:i,value:r}=e,s=o||document.createElement(i||"div");if(t&&s instanceof HTMLElement)for(const[e,n]of Object.entries(t))s.setAttribute(e,String(n));if(r)if("string"==typeof r)s.innerHTML=r;else for(const e of Array.isArray(r)?r:[r]){const t=n(e);t&&s.appendChild(t)}return s},o=/px$/,i=e=>Number(e.replace(o,"")),r=e=>`twicpics-components ${e}`,s="undefined"!=typeof document,a=e=>{console.warn(r(e))},c=()=>{},l=(e,t)=>n=>{let o;return n&&`${n}`.replace(e,((e,t)=>o=t)),t?t(o):o},d=e=>{throw new Error(r(e))},p=(e,t="\\s")=>new RegExp(`^(?:${t})*(${Array.isArray(e)?e.join("|"):e})(?:${t})*$`),m=["center"];for(const e of["","bottom","top"])for(const t of["","left","right"])(t||e)&&m.push(e?t?`${e}-${t}`:e:t);p(m);const u=p("\\s*(\\d+)\\s*[x]\\s*(\\d+)\\s*"),h=["contain","cover"],f=p(h),v=["maincolor","meancolor","none","preview"],g=p(v),$=p("(\\d+(?:\\.\\d+)?)(?:\\s*[\\/:]\\s*(\\d+(?:\\.\\d+)?))?|(none)"),b=p(["debug","offline","production"]),w={debug:!1,class:"twic",domain:void 0,env:"production",handleShadowDom:c,maxDPR:void 0,path:"",step:void 0},y=()=>`.twic-w>.${w.class}-done+div,.twic-w>.${w.class}-poster-done+div{opacity:0 !important}.twic-w>.${w.class}-done,.twic-w>.${w.class}-poster-done{transform:none !important}`,x=e=>`data-${w.class}-${e}`,O=/\?|^\/*$/,S=/(^https?:\/\/[^/]+)\/*$/,T=[["anticipation","anticipation"],["class","class"],["maxDPR","max-dpr"],["step","step"]];var D=e=>{e||d("install options not provided");const t=w&&w.domain,{domain:o,class:i,env:r,handleShadowDom:l,path:p}=e;if(o&&S.test(o)||d(`install domain "${o}" is invalid`),p&&O.test(p)&&d(`install path "${p}" is invalid`),r&&!b.test(r)&&d(`install env "${r}" is invalid`),w.class=i||"twic",w.domain=o.replace(S,"$1"),w.env=r,w.path=p?p.replace(/^\/*(.+?)\/*$/,"$1/"):"",w.handleShadowDom=l&&s?(e=>{const t=new WeakSet;return o=>{for(;o&&!t.has(o);){t.add(o);const{parentNode:i}=o;if(!i&&o instanceof ShadowRoot){if("closed"===o.mode)throw new Error("cannot use TwicPics components in closed ShadowRoot");n({element:o,value:{elementName:"style",value:`.twic-i{overflow:hidden}.twic-w,.twic-w *{border:none;margin:0;overflow:hidden;padding:0}.twic-w{overflow:hidden;position:relative;padding-top:100%;width:100%;padding-top:calc(100% / var(--twic-ratio,1))}.twic-w>*{display:block;left:0;height:100%;position:absolute;top:0;width:100%;transition-property:opacity,transform;will-change:opacity,transform;object-fit:cover;object-position:center;transition-delay:0s;transition-duration:.4s;transition-timing-function:ease;object-fit:var(--twic-mode,cover);object-position:var(--twic-position,center);transition-delay:var(--twic-transition-delay,0s);transition-duration:var(--twic-transition-duration,400ms);transition-timing-function:var(--twic-transition-timing-function,ease)}.twic-w>div{background-repeat:no-repeat;background-size:cover;background-position:center;background-size:var(--twic-mode,cover);background-position:var(--twic-position,center);font-size:calc(1px / var(--twic-ratio,1))}.twic-w>img:not([src]),.twic-w>img[src=\"\"]{visibility:hidden}.twic-w.twic-tz>img{transform:scale(0)}.twic-w.twic-tf>div{opacity:1}.twic-d{display:block;width:100%}.twic-offline{background-color:#ccc}.twic-offline.twic-nosrc{background-color:#fd0016}.twic-offline>*{display:none}${y()}`}}),(o=o.host)&&o.setAttribute(e,"")}else o=i}}})(x("component")):c,s){if(t)return void a("install function called multiple times");const i=[`${w.domain}/?v1`];T.forEach((t=>{const[n,o]=t;e.hasOwnProperty(n)&&e[n]&&i.push(`${o}=${e[n]}`)})),n({element:document.head,value:[{attributes:{rel:"preconnect",href:o},elementName:"link"},{attributes:{async:"",defer:"",src:i.join("&")},elementName:"script"},{value:y(),elementName:"style"}]})}};const E=/^(image:)?\/*/,N=e=>!isNaN(e)&&e>0,P=l(p(".+?")),j=p(".+?","[\\s\\/]"),M=/\b(?:(left|right)|(bottom|top))\b/g,k=P,z=P,R=P,C={true:!0,false:!1,"":!0},H=l(f),A=P,F=l(j,(e=>e&&`${e}/`)),B={true:"fade",false:"none",fade:"fade",zoom:"zoom",none:"none"},W=P,q=P,I=P,L=/^(?:(auth|placeholder|rel)|(image|media|video)|[^:]*):(\/*)((v[0-9]+(?=[/?]))?[^?]*(\?.*)?)$/,V=({x:e,y:t},n,o)=>"contain"===n&&(o||(t?e?`${e} ${t}`:t:e)),J=({x:e,y:t},n,o,i,r=!1)=>{const s="contain"!==o&&(n||(t?e?`${t}-${e}`:t:e));return`${r?"debug/":""}${i||""}${s?`focus=${s}/`:""}`},U=(e,t,n)=>{const o={};return t&&(o.transitionDuration=t),e&&(o.transitionDelay=e),n&&(o.transitionTimingFunction=n),o},Y=/\/?([^/?#.]+)(?:\.[^/?#]*)?(?:[?#].*)?$/,G=(e,t)=>{if(!e){const n=Y.exec(t);e=n&&n[1]||"image"}return e},K=(e,t,n,o,i,r,s,a,c,l,d,p,m)=>{const u=U(l,d,p);m({anchor:e,focus:t,mode:n,placeholder:o,preTransform:r,ratio:s,src:a,transitions:c}),n&&(u.backgroundSize=n);const h=V(e,n,i);return h&&(u.backgroundPosition=h),u},Q=(e,t,n,o,i,r)=>{const s=U(o,i,r),a=V(e,t,n);return a&&(s.objectPosition=a),t&&(s.objectFit=t),s},X=(e,t)=>{const n=["twic-w"];return t.hasOwnProperty("none")||(t.hasOwnProperty("fade")&&n.push("twic-tf"),t.hasOwnProperty("zoom")&&n.push("twic-tz")),"offline"===w.env&&(n.push("twic-offline"),e||n.push("twic-nosrc")),n.join(" ")},Z=e=>0===e?{height:"100%",paddingTop:"0"}:{paddingTop:void 0===e?"":100*e+"%"},_=new WeakMap,ee=s&&"undefined"!=typeof MutationObserver&&new MutationObserver((e=>{for(const{target:t}of e){const e=_.get(t);e&&e.handleState()}})),te=s&&"undefined"!=typeof ResizeObserver&&new ResizeObserver((e=>{for(const{target:t}of e){const e=_.get(t);e&&e.refreshBackground()}})),ne=new RegExp(`(?:\\s*)(?:${w.class}-)(done|error|loading)`);class oe{constructor(e){this.handleState=()=>{if(this.stateHandler){let e="new";const{className:t}=this.media,n=ne.exec(t);n&&([,e]=n),this.stateHandler(e)}},this.refreshBackground=((e,t)=>{let n;const o=Object.assign({leading:!0,ms:0,trailing:!0},{ms:100});return(...t)=>{!n&&o.leading&&e(...t),clearTimeout(n),n=setTimeout((()=>{n=void 0,o.trailing&&e(...t)}),o.ms)}})((()=>{if(this.placeholderData){const e=((e,{anchor:t,focus:n,mode:o,placeholder:r,preTransform:s,src:a,ratio:c,transitions:l})=>{if(!r||!a||l.hasOwnProperty("zoom")||!w.domain)return"";const d=getComputedStyle(e),p=o||H(d.backgroundSize)||"cover";let m;m=0===c?"contain"===p?1:i(d.height)/Math.max(1,i(d.width)):null!=c?c:i(d.fontSize);let u=1e3,h=1e3;return m<1?u*=m:h/=m,u=Math.max(1,Math.round(u)),h=Math.max(1,Math.round(h)),(({debug:e,domain:t,path:n,output:o,quality:i,src:r,transform:s})=>{const a=`${t}/`,c=r.slice(0,a.length)===a,l=c?`media:${r.slice(a.length)}`:r,d=L.exec(l),p=d&&d[2],m=e?"/debug":"",u=o?`/output=${o}`:"",h=p?n&&!c?`${n}${d[3]?d[3][0]:""}${d[4]}`:d[4]:l,f=i?`/quality=${i}`:"",v=s?`/${s}`:"";return`${a}${d&&(d[1]||d[5])?`v1${m}${v}${u}/${p?`${d[2]}:${h}`:h}${f}`:`${h}${d&&d[6]?"&":"?"}twic=v1${m}${v}${u}${f}`}`})({domain:w.domain,path:w.path,src:a,transform:`${J(t,n,o,s)}${p}=${h}x${u}`,output:r})})(this.placeHolderElement,this.placeholderData);e&&e!==this.savedWrapperBackground&&(this.savedWrapperBackground=e,this.placeHolderElement.style.backgroundImage=`url(${JSON.stringify(e)})`)}})),this.setMedia=e=>{e&&(w.handleShadowDom(e),this.media=e,_.set(this.media,this),this.placeHolderElement=e.nextElementSibling,ee&&(ee.observe(this.media,{attributes:!0,attributeFilter:["class"]}),this.handleState()),te&&te.observe(this.media))},this.setPlaceholderData=e=>{this.placeholderData=e,this.media&&this.refreshBackground()},this.destroy=()=>{this.media&&this.media&&te&&te.unobserve(this.media)},this.stateHandler=e}}const ie={alt:void 0,anchor:void 0,bot:void 0,className:void 0,focus:void 0,intrinsic:void 0,mode:void 0,eager:void 0,onStateChange:void 0,placeholder:void 0,position:void 0,preTransform:void 0,ratio:void 0,src:void 0,step:void 0,transition:void 0,transitionDelay:void 0,transitionDuration:void 0,transitionTimingFunction:void 0},{oneOf:re,string:se}=t,ae=t.oneOfType([t.number,se]),ce={alt:se,anchor:re(m),bot:se,className:se,focus:se,intrinsic:se,mode:re(h),eager:t.oneOfType([t.bool,t.string]),onStateChange:t.func,placeholder:re(v),position:se,preTransform:se,ratio:se,src:se,step:ae,transition:t.oneOfType([t.bool,t.string]),transitionDelay:se,transitionDuration:se,transitionTimingFunction:se};var le=(t,n)=>{class o extends e.Component{constructor(t){super(t),this.observer=new oe((e=>{this.props.onStateChange&&this.props.onStateChange({target:this,state:e})})),this.media=e.createRef()}componentDidMount(){this.observer.setMedia(this.media.current)}componentWillUnmount(){this.observer.destroy()}render(){const{props:o}=this,i=n&&k(o.alt),r=(e=>{const t=P(e);let n,o;if(t){let e;for(;e=M.exec(t);)e[1]?n=e[1]:o=e[2]}return{x:n,y:o}})(o.anchor),s="string"==typeof(c=o.bot)?c.trim():void 0;var c;const l=z(o.className)||"",d=(e=>"boolean"==typeof e?e:void 0!==e&&(C[e.trim()]||!1))(o.eager),p=R(o.focus),m=(e=>{if(!e)return;let t;const n=u.exec(e);if(n){const[,,e,o]=n;t=`${e}x${o}`}return t})(o.intrinsic),h="video"===t,f=H(o.mode),v=((e,t)=>{if("offline"!==w.env&&P(t)&&"none"!==e)return g.test(e)?e:"preview"})(o.placeholder,o.src),b=A(o.position),y=F(o.preTransform),O=(e=>{if("none"===e)return 0;let t;if("number"==typeof e)t=e;else if(e){const n=$.exec(e);if(n){const[,,e,o]=n;t=(o?Number(o):1)/Number(e)}else t=1}return N(t)?t:void 0})(o.ratio),S=(e=>((e=P(e))||a("src is not provided"),"offline"===w.env?"":(e=>e?e.replace(E,`image:${w.path}`):"placeholder:red")(e)))(o.src),T=(e=>{if("number"!=typeof e){const t=P(e);e=t&&Number(t)}return N(e)?e:void 0})(o.step),D=(e=>{"boolean"!=typeof e&&(e=P(e)||!0);const t={};return String(e).split(/\s*\+\s*|\s+/).forEach((e=>t[`${B[e]||"fade"}`]=!0)),t})(o.transition),j=W(o.transitionDelay),L=q(o.transitionDuration),V=I(o.transitionTimingFunction);return e.createElement("div",{className:`twic-i ${l}`},e.createElement("div",{className:X(o.src,D),style:Z(O)},e.createElement(t,Object.assign({ref:this.media,alt:n?G(i,S):void 0,style:Q(r,f,b,j,L,V)},((e,t,n,o,i,r,s,a,c,l)=>{const d={},p=J(e,o,s,a,"debug"===w.env);return"string"==typeof t&&(d[x("bot")]=t||"/"),n&&(d[x("eager")]=""),i&&(d[x("intrinsic")]=i),r&&(d[x("poster")]=c,d[x("poster-transform")]=`${p}*/output=image`),c&&(d[x("src")]=c),void 0!==l&&(d[x("step")]=String(l)),p&&(d[x("transform")]=`${p}*`),d})(r,s,d,p,m,h,f,y,S,T))),e.createElement("div",{style:K(r,p,f,v,b,y,O,S,D,j,L,V,this.observer.setPlaceholderData)})))}}return o.defaultProps=ie,o.propTypes=ce,o};class de extends e.Component{render(){const t=this.props,{children:n}=t,o=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(e);i<o.length;i++)t.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(n[o[i]]=e[o[i]])}return n}(t,["children"]);return e.createElement("div",Object.assign({},Object.assign({[x("view")]:""},o)),n)}}const pe=D,me=le("img",!0),ue=le("video");exports.TwicImg=me,exports.TwicVideo=ue,exports.TwicView=de,exports.installTwicPics=D,exports.installTwicpics=pe;
//# sourceMappingURL=index.js.map
