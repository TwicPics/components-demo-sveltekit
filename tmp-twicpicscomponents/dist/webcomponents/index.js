"use strict";const t=e=>{if(!e)return;const{attributes:n,element:i,elementName:s,value:r}=e,o=i||document.createElement(s||"div");if(n&&o instanceof HTMLElement)for(const[t,e]of Object.entries(n))o.setAttribute(t,String(e));if(r)if("string"==typeof r)o.innerHTML=r;else for(const e of Array.isArray(r)?r:[r]){const n=t(e);n&&o.appendChild(n)}return o},e=/px$/,n=t=>Number(t.replace(e,"")),i=t=>`twicpics-components ${t}`,s=t=>{console.warn(i(t))},r=()=>{},o=(t,e)=>n=>{let i;return n&&`${n}`.replace(t,((t,e)=>i=e)),e?e(i):i},a=t=>{throw new Error(i(t))},c=(t,e="\\s")=>new RegExp(`^(?:${e})*(${Array.isArray(t)?t.join("|"):t})(?:${e})*$`),$=["center"];for(const t of["","bottom","top"])for(const e of["","left","right"])(e||t)&&$.push(t?e?`${t}-${e}`:t:e);c($);const u=c("\\s*(\\d+)\\s*[x]\\s*(\\d+)\\s*"),l=c(["contain","cover"]),d=c(["maincolor","meancolor","none","preview"]),h=c("(\\d+(?:\\.\\d+)?)(?:\\s*[\\/:]\\s*(\\d+(?:\\.\\d+)?))?|(none)"),p=c(["debug","offline","production"]),f={debug:!1,class:"twic",domain:void 0,env:"production",handleShadowDom:r,maxDPR:void 0,path:"",step:void 0},m=()=>`.twic-w>.${f.class}-done+div,.twic-w>.${f.class}-poster-done+div{opacity:0 !important}.twic-w>.${f.class}-done,.twic-w>.${f.class}-poster-done{transform:none !important}`,g=t=>`data-${f.class}-${t}`,y=/\?|^\/*$/,b=/(^https?:\/\/[^/]+)\/*$/,x=[["anticipation","anticipation"],["class","class"],["maxDPR","max-dpr"],["step","step"]];var v=e=>{e||a("install options not provided");const n=f&&f.domain,{domain:i,class:o,env:c,handleShadowDom:$,path:u}=e;i&&b.test(i)||a(`install domain "${i}" is invalid`),u&&y.test(u)&&a(`install path "${u}" is invalid`),c&&!p.test(c)&&a(`install env "${c}" is invalid`),f.class=o||"twic",f.domain=i.replace(b,"$1"),f.env=c,f.path=u?u.replace(/^\/*(.+?)\/*$/,"$1/"):"",f.handleShadowDom=$?(e=>{const n=new WeakSet;return i=>{for(;i&&!n.has(i);){n.add(i);const{parentNode:s}=i;if(!s&&i instanceof ShadowRoot){if("closed"===i.mode)throw new Error("cannot use TwicPics components in closed ShadowRoot");t({element:i,value:{elementName:"style",value:`.twic-i{overflow:hidden}.twic-w,.twic-w *{border:none;margin:0;overflow:hidden;padding:0}.twic-w{overflow:hidden;position:relative;padding-top:100%;width:100%;padding-top:calc(100% / var(--twic-ratio,1))}.twic-w>*{display:block;left:0;height:100%;position:absolute;top:0;width:100%;transition-property:opacity,transform;will-change:opacity,transform;object-fit:cover;object-position:center;transition-delay:0s;transition-duration:.4s;transition-timing-function:ease;object-fit:var(--twic-mode,cover);object-position:var(--twic-position,center);transition-delay:var(--twic-transition-delay,0s);transition-duration:var(--twic-transition-duration,400ms);transition-timing-function:var(--twic-transition-timing-function,ease)}.twic-w>div{background-repeat:no-repeat;background-size:cover;background-position:center;background-size:var(--twic-mode,cover);background-position:var(--twic-position,center);font-size:calc(1px / var(--twic-ratio,1))}.twic-w>img:not([src]),.twic-w>img[src=\"\"]{visibility:hidden}.twic-w.twic-tz>img{transform:scale(0)}.twic-w.twic-tf>div{opacity:1}.twic-d{display:block;width:100%}.twic-offline{background-color:#ccc}.twic-offline.twic-nosrc{background-color:#fd0016}.twic-offline>*{display:none}${m()}`}}),(i=i.host)&&i.setAttribute(e,"")}else i=s}}})(g("component")):r;{if(n)return void s("install function called multiple times");const r=[`${f.domain}/?v1`];x.forEach((t=>{const[n,i]=t;e.hasOwnProperty(n)&&e[n]&&r.push(`${i}=${e[n]}`)})),t({element:document.head,value:[{attributes:{rel:"preconnect",href:i},elementName:"link"},{attributes:{async:"",defer:"",src:r.join("&")},elementName:"script"},{value:m(),elementName:"style"}]})}};const w=/^(image:)?\/*/,E=t=>!isNaN(t)&&t>0,_=o(c(".+?")),T=c(".+?","[\\s\\/]"),N=/\b(?:(left|right)|(bottom|top))\b/g,k=_,S=_,O=_,A={true:!0,false:!1,"":!0},M=o(l),P=_,j=o(T,(t=>t&&`${t}/`)),D={true:"fade",false:"none",fade:"fade",zoom:"zoom",none:"none"},z=_,C=_,H=_,R=/^(?:(auth|placeholder|rel)|(image|media|video)|[^:]*):(\/*)((v[0-9]+(?=[/?]))?[^?]*(\?.*)?)$/,B=({x:t,y:e},n,i)=>"contain"===n&&(i||(e?t?`${t} ${e}`:e:t)),L=({x:t,y:e},n,i,s,r=!1)=>{const o="contain"!==i&&(n||(e?t?`${e}-${t}`:e:t));return`${r?"debug/":""}${s||""}${o?`focus=${o}/`:""}`},F=(t,e,n)=>{const i={};return e&&(i.transitionDuration=e),t&&(i.transitionDelay=t),n&&(i.transitionTimingFunction=n),i},W=/\/?([^/?#.]+)(?:\.[^/?#]*)?(?:[?#].*)?$/,q=(t,e)=>{const n=["twic-w"];return e.hasOwnProperty("none")||(e.hasOwnProperty("fade")&&n.push("twic-tf"),e.hasOwnProperty("zoom")&&n.push("twic-tz")),"offline"===f.env&&(n.push("twic-offline"),t||n.push("twic-nosrc")),n.join(" ")},I=new WeakMap,V="undefined"!=typeof MutationObserver&&new MutationObserver((t=>{for(const{target:e}of t){const t=I.get(e);t&&t.handleState()}})),Z="undefined"!=typeof ResizeObserver&&new ResizeObserver((t=>{for(const{target:e}of t){const t=I.get(e);t&&t.refreshBackground()}})),J=new RegExp(`(?:\\s*)(?:${f.class}-)(done|error|loading)`);class Y{constructor(t){this.handleState=()=>{if(this.stateHandler){let t="new";const{className:e}=this.media,n=J.exec(e);n&&([,t]=n),this.stateHandler(t)}},this.refreshBackground=((t,e)=>{let n;const i=Object.assign({leading:!0,ms:0,trailing:!0},{ms:100});return(...e)=>{!n&&i.leading&&t(...e),clearTimeout(n),n=setTimeout((()=>{n=void 0,i.trailing&&t(...e)}),i.ms)}})((()=>{if(this.placeholderData){const t=((t,{anchor:e,focus:i,mode:s,placeholder:r,preTransform:o,src:a,ratio:c,transitions:$})=>{if(!r||!a||$.hasOwnProperty("zoom")||!f.domain)return"";const u=getComputedStyle(t),l=s||M(u.backgroundSize)||"cover";let d;d=0===c?"contain"===l?1:n(u.height)/Math.max(1,n(u.width)):null!=c?c:n(u.fontSize);let h=1e3,p=1e3;return d<1?h*=d:p/=d,h=Math.max(1,Math.round(h)),p=Math.max(1,Math.round(p)),(({debug:t,domain:e,path:n,output:i,quality:s,src:r,transform:o})=>{const a=`${e}/`,c=r.slice(0,a.length)===a,$=c?`media:${r.slice(a.length)}`:r,u=R.exec($),l=u&&u[2],d=t?"/debug":"",h=i?`/output=${i}`:"",p=l?n&&!c?`${n}${u[3]?u[3][0]:""}${u[4]}`:u[4]:$,f=s?`/quality=${s}`:"",m=o?`/${o}`:"";return`${a}${u&&(u[1]||u[5])?`v1${d}${m}${h}/${l?`${u[2]}:${p}`:p}${f}`:`${p}${u&&u[6]?"&":"?"}twic=v1${d}${m}${h}${f}`}`})({domain:f.domain,path:f.path,src:a,transform:`${L(e,i,s,o)}${l}=${p}x${h}`,output:r})})(this.placeHolderElement,this.placeholderData);t&&t!==this.savedWrapperBackground&&(this.savedWrapperBackground=t,this.placeHolderElement.style.backgroundImage=`url(${JSON.stringify(t)})`)}})),this.setMedia=t=>{t&&(f.handleShadowDom(t),this.media=t,I.set(this.media,this),this.placeHolderElement=t.nextElementSibling,V&&(V.observe(this.media,{attributes:!0,attributeFilter:["class"]}),this.handleState()),Z&&Z.observe(this.media))},this.setPlaceholderData=t=>{this.placeholderData=t,this.media&&this.refreshBackground()},this.destroy=()=>{this.media&&this.media&&Z&&Z.unobserve(this.media)},this.stateHandler=t}}const G=t=>Object.entries(t).flatMap((([t,e])=>e?[`${t.replace(/([a-z]|(?=[A-Z]))([A-Z])/g,"$1-$2").toLowerCase()}:${e};`]:[])).join("");function K(){}function Q(t,e){for(const n in e)t[n]=e[n];return t}function U(t){return t()}function X(){return Object.create(null)}function tt(t){t.forEach(U)}function et(t){return"function"==typeof t}function nt(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function it(t,e){const n={};e=new Set(e);for(const i in t)e.has(i)||"$"===i[0]||(n[i]=t[i]);return n}function st(t,e){t.appendChild(e)}function rt(t,e,n){t.insertBefore(e,n||null)}function ot(t){t.parentNode&&t.parentNode.removeChild(t)}function at(t){return document.createElement(t)}function ct(t){return document.createTextNode(t)}function $t(){return ct("")}function ut(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function lt(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)null==e[i]?t.removeAttribute(i):"style"===i?t.style.cssText=e[i]:"__value"===i?t.value=t[i]=e[i]:n[i]&&n[i].set?t[i]=e[i]:ut(t,i,e[i])}function dt(t,e){Object.keys(e).forEach((n=>{!function(t,e,n){e in t?t[e]="boolean"==typeof t[e]&&""===n||n:ut(t,e,n)}(t,n,e[n])}))}function ht(t){const e={};for(const n of t)e[n.name]=n.value;return e}let pt;function ft(t){pt=t}function mt(){if(!pt)throw new Error("Function called outside component initialization");return pt}function gt(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach((t=>t.call(this,e)))}const yt=[],bt=[],xt=[],vt=[],wt=Promise.resolve();let Et=!1;function _t(t){xt.push(t)}function Tt(t){vt.push(t)}const Nt=new Set;let kt=0;function St(){if(0!==kt)return;const t=pt;do{try{for(;kt<yt.length;){const t=yt[kt];kt++,ft(t),Ot(t.$$)}}catch(t){throw yt.length=0,kt=0,t}for(ft(null),yt.length=0,kt=0;bt.length;)bt.pop()();for(let t=0;t<xt.length;t+=1){const e=xt[t];Nt.has(e)||(Nt.add(e),e())}xt.length=0}while(yt.length);for(;vt.length;)vt.pop()();Et=!1,Nt.clear(),ft(t)}function Ot(t){if(null!==t.fragment){t.update(),tt(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(_t)}}const At=new Set;let Mt;function Pt(t,e){t&&t.i&&(At.delete(t),t.i(e))}function jt(t,e,n,i){if(t&&t.o){if(At.has(t))return;At.add(t),(void 0).c.push((()=>{At.delete(t),i&&(n&&t.d(1),i())})),t.o(e)}else i&&i()}function Dt(t,e){const n={},i={},s={$$scope:1};let r=t.length;for(;r--;){const o=t[r],a=e[r];if(a){for(const t in o)t in a||(i[t]=1);for(const t in a)s[t]||(n[t]=a[t],s[t]=1);t[r]=a}else for(const t in o)s[t]=1}for(const t in i)t in n||(n[t]=void 0);return n}function zt(t){return"object"==typeof t&&null!==t?t:{}}function Ct(t,e,n){const i=t.$$.props[e];void 0!==i&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function Ht(t){t&&t.c()}function Rt(t,e,n,i){const{fragment:s,after_update:r}=t.$$;s&&s.m(e,n),i||_t((()=>{const e=t.$$.on_mount.map(U).filter(et);t.$$.on_destroy?t.$$.on_destroy.push(...e):tt(e),t.$$.on_mount=[]})),r.forEach(_t)}function Bt(t,e){const n=t.$$;null!==n.fragment&&(tt(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Lt(t,e,n,i,s,r,o,a=[-1]){const c=pt;ft(t);const $=t.$$={fragment:null,ctx:[],props:r,update:K,not_equal:s,bound:X(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:X(),dirty:a,skip_bound:!1,root:e.target||c.$$.root};o&&o($.root);let u=!1;if($.ctx=n?n(t,e.props||{},((e,n,...i)=>{const r=i.length?i[0]:n;return $.ctx&&s($.ctx[e],$.ctx[e]=r)&&(!$.skip_bound&&$.bound[e]&&$.bound[e](r),u&&function(t,e){-1===t.$$.dirty[0]&&(yt.push(t),Et||(Et=!0,wt.then(St)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(t,e)),n})):[],$.update(),u=!0,tt($.before_update),$.fragment=!!i&&i($.ctx),e.target){if(e.hydrate){const t=function(t){return Array.from(t.childNodes)}(e.target);$.fragment&&$.fragment.l(t),t.forEach(ot)}else $.fragment&&$.fragment.c();e.intro&&Pt(t.$$.fragment),Rt(t,e.target,e.anchor,e.customElement),St()}ft(c)}function Ft(t){let e,n=[{alt:t[9]},{style:t[6]},t[8]],i={};for(let t=0;t<n.length;t+=1)i=Q(i,n[t]);return{c(){e=at(t[1]),/-/.test(t[1])?dt(e,i):lt(e,i)},m(n,i){rt(n,e,i),t[44](e)},p(t,s){i=Dt(n,[512&s[0]&&{alt:t[9]},64&s[0]&&{style:t[6]},256&s[0]&&t[8]]),/-/.test(t[1])?dt(e,i):lt(e,i)},d(n){n&&ot(e),t[44](null)}}}function Wt(t){let e,n=function(t){let e,n,i,s,r=t[1],o=t[1]&&Ft(t);return{c(){e=at("div"),o&&o.c(),n=ct(" "),i=at("div"),ut(i,"style",t[7]),ut(e,"class",s=q(t[2],t[3])),ut(e,"style",t[5])},m(t,s){rt(t,e,s),o&&o.m(e,null),st(e,n),st(e,i)},p(t,a){t[1]?r?nt(r,t[1])?(o.d(1),o=Ft(t),o.c(),o.m(e,n)):o.p(t,a):(o=Ft(t),o.c(),o.m(e,n)):r&&(o.d(1),o=null),r=t[1],128&a[0]&&ut(i,"style",t[7]),12&a[0]&&s!==(s=q(t[2],t[3]))&&ut(e,"class",s),32&a[0]&&ut(e,"style",t[5])},d(t){t&&ot(e),o&&o.d(t)}}}(t);return{c(){n.c(),e=$t(),this.c=K},m(t,i){n.m(t,i),rt(t,e,i)},p(t,e){n.p(t,e)},i:K,o:K,d(t){n.d(t),t&&ot(e)}}}function qt(t,e,n){let i,r,o,a,c,$,l,p,m,y,b,x,v,T,R,q,I,V,Z,J,K,Q,U,X,{alt:tt}=e,{anchor:et}=e,{bot:nt}=e,{className:it}=e,{focus:st}=e,{intrinsic:rt}=e,{mediaTag:ot}=e,{mode:at}=e,{eager:ct=!1}=e,{placeholder:$t}=e,{position:ut}=e,{pretransform:lt}=e,{ratio:dt}=e,{src:ht}=e,{step:pt}=e,{state:ft}=e,{transition:gt}=e,{transitiondelay:yt}=e,{transitionduration:xt}=e,{transitiontimingfunction:vt}=e;const wt=new Y((t=>{n(10,ft=t)})),Et=function(){const t=mt();return(e,n,{cancelable:i=!1}={})=>{const s=t.$$.callbacks[e];if(s){const r=function(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,i,e),s}(e,n,{cancelable:i});return s.slice().forEach((e=>{e.call(t,r)})),!r.defaultPrevented}return!0}}();var _t;return _t=()=>{wt.setMedia(X)},mt().$$.on_mount.push(_t),mt().$$.on_destroy.push((()=>{wt.destroy()})),t.$$set=t=>{"alt"in t&&n(11,tt=t.alt),"anchor"in t&&n(12,et=t.anchor),"bot"in t&&n(13,nt=t.bot),"className"in t&&n(0,it=t.className),"focus"in t&&n(14,st=t.focus),"intrinsic"in t&&n(15,rt=t.intrinsic),"mediaTag"in t&&n(1,ot=t.mediaTag),"mode"in t&&n(16,at=t.mode),"eager"in t&&n(17,ct=t.eager),"placeholder"in t&&n(18,$t=t.placeholder),"position"in t&&n(19,ut=t.position),"pretransform"in t&&n(20,lt=t.pretransform),"ratio"in t&&n(21,dt=t.ratio),"src"in t&&n(2,ht=t.src),"step"in t&&n(22,pt=t.step),"state"in t&&n(10,ft=t.state),"transition"in t&&n(23,gt=t.transition),"transitiondelay"in t&&n(24,yt=t.transitiondelay),"transitionduration"in t&&n(25,xt=t.transitionduration),"transitiontimingfunction"in t&&n(26,vt=t.transitiontimingfunction)},t.$$.update=()=>{var e;1024&t.$$.dirty[0]&&Et("statechange",{state:ft}),2&t.$$.dirty[0]&&n(39,i="video"===ot),2048&t.$$.dirty[0]&&n(43,r=k(tt)),4096&t.$$.dirty[0]&&n(33,o=(t=>{const e=_(t);let n,i;if(e){let t;for(;t=N.exec(e);)t[1]?n=t[1]:i=t[2]}return{x:n,y:i}})(et)),8192&t.$$.dirty[0]&&n(42,a="string"==typeof(e=nt)?e.trim():void 0),131072&t.$$.dirty[0]&&n(41,c=(t=>"boolean"==typeof t?t:void 0!==t&&(A[t.trim()]||!1))(ct)),16384&t.$$.dirty[0]&&n(37,$=O(st)),32768&t.$$.dirty[0]&&n(40,l=(t=>{if(!t)return;let e;const n=u.exec(t);if(n){const[,,t,i]=n;e=`${t}x${i}`}return e})(rt)),65536&t.$$.dirty[0]&&n(32,p=M(at)),262148&t.$$.dirty[0]&&n(36,m=((t,e)=>{if("offline"!==f.env&&_(e)&&"none"!==t)return d.test(t)?t:"preview"})($t,ht)),524288&t.$$.dirty[0]&&n(31,y=P(ut)),1048576&t.$$.dirty[0]&&n(35,b=j(lt)),2097152&t.$$.dirty[0]&&n(27,x=(t=>{if("none"===t)return 0;let e;if("number"==typeof t)e=t;else if(t){const n=h.exec(t);if(n){const[,,t,i]=n;e=(i?Number(i):1)/Number(t)}else e=1}return E(e)?e:void 0})(dt)),6&t.$$.dirty[0]&&n(34,v=ot&&(t=>((t=_(t))||s("src is not provided"),"offline"===f.env?"":(t=>t?t.replace(w,`image:${f.path}`):"placeholder:red")(t)))(ht)),4194304&t.$$.dirty[0]&&n(38,T=(t=>{if("number"!=typeof t){const e=_(t);t=e&&Number(e)}return E(t)?t:void 0})(pt)),8388608&t.$$.dirty[0]&&n(3,R=(t=>{"boolean"!=typeof t&&(t=_(t)||!0);const e={};return String(t).split(/\s*\+\s*|\s+/).forEach((t=>e[`${D[t]||"fade"}`]=!0)),e})(gt)),16777216&t.$$.dirty[0]&&n(30,q=z(yt)),33554432&t.$$.dirty[0]&&n(29,I=C(xt)),67108864&t.$$.dirty[0]&&n(28,V=H(vt)),4360&t.$$.dirty[1]&&n(9,Z=i?void 0:((t,e)=>{if(!t){const n=W.exec(e);t=n&&n[1]||"image"}return t})(r,v)),4062&t.$$.dirty[1]&&n(8,J=((t,e,n,i,s,r,o,a,c,$)=>{const u={},l=L(t,i,o,a,"debug"===f.env);return"string"==typeof e&&(u[g("bot")]=e||"/"),n&&(u[g("eager")]=""),s&&(u[g("intrinsic")]=s),r&&(u[g("poster")]=c,u[g("poster-transform")]=`${l}*/output=image`),c&&(u[g("src")]=c),void 0!==$&&(u[g("step")]=String($)),l&&(u[g("transform")]=`${l}*`),u})(o,a,c,$,l,i,p,b,v,T)),2013265928&t.$$.dirty[0]|127&t.$$.dirty[1]&&n(7,K=G(((t,e,n,i,s,r,o,a,c,$,u,l,d)=>{const h=F($,u,l);d({anchor:t,focus:e,mode:n,placeholder:i,preTransform:r,ratio:o,src:a,transitions:c}),n&&(h.backgroundSize=n);const p=B(t,n,s);return p&&(h.backgroundPosition=p),h})(o,$,p,m,y,b,x,v,R,q,I,V,wt.setPlaceholderData))),1879048192&t.$$.dirty[0]|7&t.$$.dirty[1]&&n(6,Q=G(((t,e,n,i,s,r)=>{const o=F(i,s,r),a=B(t,e,n);return a&&(o.objectPosition=a),e&&(o.objectFit=e),o})(o,p,y,q,I,V))),134217728&t.$$.dirty[0]&&n(5,U=G((t=>0===t?{height:"100%",paddingTop:"0"}:{paddingTop:void 0===t?"":100*t+"%"})(x))),1&t.$$.dirty[0]&&(mt().className=`${S(it)||""} twic-d twic-i`)},[it,ot,ht,R,X,U,Q,K,J,Z,ft,tt,et,nt,st,rt,at,ct,$t,ut,lt,dt,pt,gt,yt,xt,vt,x,V,I,q,y,p,o,v,b,m,$,T,i,l,c,a,r,function(t){bt[t?"unshift":"push"]((()=>{X=t,n(4,X)}))},function(t){bt[t?"unshift":"push"]((()=>{X=t,n(4,X)}))}]}"function"==typeof HTMLElement&&(Mt=class extends HTMLElement{constructor(){super()}connectedCallback(){const{on_mount:t}=this.$$;this.$$.on_disconnect=t.map(U).filter(et);for(const t in this.$$.slotted)this.appendChild(this.$$.slotted[t])}attributeChangedCallback(t,e,n){this[t]=n}disconnectedCallback(){tt(this.$$.on_disconnect)}$destroy(){Bt(this,1),this.$destroy=K}$on(t,e){if(!et(e))return K;const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}});class It extends Mt{constructor(t){super(),Lt(this,{target:this,props:ht(this.attributes),customElement:!0},qt,Wt,nt,{alt:11,anchor:12,bot:13,className:0,focus:14,intrinsic:15,mediaTag:1,mode:16,eager:17,placeholder:18,position:19,pretransform:20,ratio:21,src:2,step:22,state:10,transition:23,transitiondelay:24,transitionduration:25,transitiontimingfunction:26},null,[-1,-1]),t&&(t.target&&rt(t.target,this,t.anchor),t.props&&(this.$set(t.props),St()))}static get observedAttributes(){return["alt","anchor","bot","className","focus","intrinsic","mediaTag","mode","eager","placeholder","position","pretransform","ratio","src","step","state","transition","transitiondelay","transitionduration","transitiontimingfunction"]}get alt(){return this.$$.ctx[11]}set alt(t){this.$$set({alt:t}),St()}get anchor(){return this.$$.ctx[12]}set anchor(t){this.$$set({anchor:t}),St()}get bot(){return this.$$.ctx[13]}set bot(t){this.$$set({bot:t}),St()}get className(){return this.$$.ctx[0]}set className(t){this.$$set({className:t}),St()}get focus(){return this.$$.ctx[14]}set focus(t){this.$$set({focus:t}),St()}get intrinsic(){return this.$$.ctx[15]}set intrinsic(t){this.$$set({intrinsic:t}),St()}get mediaTag(){return this.$$.ctx[1]}set mediaTag(t){this.$$set({mediaTag:t}),St()}get mode(){return this.$$.ctx[16]}set mode(t){this.$$set({mode:t}),St()}get eager(){return this.$$.ctx[17]}set eager(t){this.$$set({eager:t}),St()}get placeholder(){return this.$$.ctx[18]}set placeholder(t){this.$$set({placeholder:t}),St()}get position(){return this.$$.ctx[19]}set position(t){this.$$set({position:t}),St()}get pretransform(){return this.$$.ctx[20]}set pretransform(t){this.$$set({pretransform:t}),St()}get ratio(){return this.$$.ctx[21]}set ratio(t){this.$$set({ratio:t}),St()}get src(){return this.$$.ctx[2]}set src(t){this.$$set({src:t}),St()}get step(){return this.$$.ctx[22]}set step(t){this.$$set({step:t}),St()}get state(){return this.$$.ctx[10]}set state(t){this.$$set({state:t}),St()}get transition(){return this.$$.ctx[23]}set transition(t){this.$$set({transition:t}),St()}get transitiondelay(){return this.$$.ctx[24]}set transitiondelay(t){this.$$set({transitiondelay:t}),St()}get transitionduration(){return this.$$.ctx[25]}set transitionduration(t){this.$$set({transitionduration:t}),St()}get transitiontimingfunction(){return this.$$.ctx[26]}set transitiontimingfunction(t){this.$$set({transitiontimingfunction:t}),St()}}function Vt(t){let e,n,i;const s=[{mediaTag:"img"},t[1]];function r(e){t[20](e)}let o={};for(let t=0;t<s.length;t+=1)o=Q(o,s[t]);return void 0!==t[0]&&(o.state=t[0]),e=new It({props:o}),bt.push((()=>Ct(e,"state",r))),e.$on("statechange",t[21]),{c(){Ht(e.$$.fragment),this.c=K},m(t,n){Rt(e,t,n),i=!0},p(t,[i]){const r=2&i?Dt(s,[s[0],zt(t[1])]):{};!n&&1&i&&(n=!0,r.state=t[0],Tt((()=>n=!1))),e.$set(r)},i(t){i||(Pt(e.$$.fragment,t),i=!0)},o(t){jt(e.$$.fragment,t),i=!1},d(t){Bt(e,t)}}}function Zt(t,e,n){let i,{alt:s}=e,{anchor:r}=e,{bot:o}=e,{class:a}=e,{focus:c}=e,{intrinsic:$}=e,{mode:u}=e,{eager:l=!1}=e,{placeholder:d}=e,{position:h}=e,{pretransform:p}=e,{ratio:f}=e,{src:m}=e,{step:g}=e,{state:y}=e,{transition:b}=e,{transitiondelay:x}=e,{transitionduration:v}=e,{transitiontimingfunction:w}=e;return t.$$set=t=>{"alt"in t&&n(2,s=t.alt),"anchor"in t&&n(3,r=t.anchor),"bot"in t&&n(4,o=t.bot),"class"in t&&n(5,a=t.class),"focus"in t&&n(6,c=t.focus),"intrinsic"in t&&n(7,$=t.intrinsic),"mode"in t&&n(8,u=t.mode),"eager"in t&&n(9,l=t.eager),"placeholder"in t&&n(10,d=t.placeholder),"position"in t&&n(11,h=t.position),"pretransform"in t&&n(12,p=t.pretransform),"ratio"in t&&n(13,f=t.ratio),"src"in t&&n(14,m=t.src),"step"in t&&n(15,g=t.step),"state"in t&&n(0,y=t.state),"transition"in t&&n(16,b=t.transition),"transitiondelay"in t&&n(17,x=t.transitiondelay),"transitionduration"in t&&n(18,v=t.transitionduration),"transitiontimingfunction"in t&&n(19,w=t.transitiontimingfunction)},t.$$.update=()=>{1048572&t.$$.dirty&&n(1,i={alt:s,anchor:r,bot:o,className:a,focus:c,intrinsic:$,mode:u,eager:l,placeholder:d,position:h,pretransform:p,ratio:f,src:m,step:g,transition:b,transitiondelay:x,transitionduration:v,transitiontimingfunction:w})},[y,i,s,r,o,a,c,$,u,l,d,h,p,f,m,g,b,x,v,w,function(t){y=t,n(0,y)},function(e){gt.call(this,t,e)}]}function Jt(t){let e,n,i;const s=[{mediaTag:"video"},t[1]];function r(e){t[19](e)}let o={};for(let t=0;t<s.length;t+=1)o=Q(o,s[t]);return void 0!==t[0]&&(o.state=t[0]),e=new It({props:o}),bt.push((()=>Ct(e,"state",r))),e.$on("statechange",t[20]),{c(){Ht(e.$$.fragment),this.c=K},m(t,n){Rt(e,t,n),i=!0},p(t,[i]){const r=2&i?Dt(s,[s[0],zt(t[1])]):{};!n&&1&i&&(n=!0,r.state=t[0],Tt((()=>n=!1))),e.$set(r)},i(t){i||(Pt(e.$$.fragment,t),i=!0)},o(t){jt(e.$$.fragment,t),i=!1},d(t){Bt(e,t)}}}function Yt(t,e,n){let i,{anchor:s}=e,{bot:r}=e,{class:o}=e,{focus:a}=e,{intrinsic:c}=e,{mode:$}=e,{eager:u=!1}=e,{placeholder:l}=e,{position:d}=e,{pretransform:h}=e,{ratio:p}=e,{src:f}=e,{step:m}=e,{state:g}=e,{transition:y}=e,{transitiondelay:b}=e,{transitionduration:x}=e,{transitiontimingfunction:v}=e;return t.$$set=t=>{"anchor"in t&&n(2,s=t.anchor),"bot"in t&&n(3,r=t.bot),"class"in t&&n(4,o=t.class),"focus"in t&&n(5,a=t.focus),"intrinsic"in t&&n(6,c=t.intrinsic),"mode"in t&&n(7,$=t.mode),"eager"in t&&n(8,u=t.eager),"placeholder"in t&&n(9,l=t.placeholder),"position"in t&&n(10,d=t.position),"pretransform"in t&&n(11,h=t.pretransform),"ratio"in t&&n(12,p=t.ratio),"src"in t&&n(13,f=t.src),"step"in t&&n(14,m=t.step),"state"in t&&n(0,g=t.state),"transition"in t&&n(15,y=t.transition),"transitiondelay"in t&&n(16,b=t.transitiondelay),"transitionduration"in t&&n(17,x=t.transitionduration),"transitiontimingfunction"in t&&n(18,v=t.transitiontimingfunction)},t.$$.update=()=>{524284&t.$$.dirty&&n(1,i={anchor:s,bot:r,className:o,focus:a,intrinsic:c,mode:$,eager:u,placeholder:l,position:d,pretransform:h,ratio:p,src:f,step:m,transition:y,transitiondelay:b,transitionduration:x,transitiontimingfunction:v})},[g,i,s,r,o,a,c,$,u,l,d,h,p,f,m,y,b,x,v,function(t){g=t,n(0,g)},function(e){gt.call(this,t,e)}]}function Gt(t){let e,n=function(t){let e;return{c(){e=at("slot")},m(t,n){rt(t,e,n)},p:K,d(t){t&&ot(e)}}}();return{c(){n.c(),e=$t(),this.c=K},m(t,i){n.m(t,i),rt(t,e,i)},p(t,[e]){n.p(t,e)},i:K,o:K,d(t){n.d(t),t&&ot(e)}}}function Kt(t,e,n){const i=[];let s=it(e,i);return mt().setAttribute(g("view"),""),t.$$set=t=>{e=Q(Q({},e),function(t){const e={};for(const n in t)"$"!==n[0]&&(e[n]=t[n]);return e}(t)),n(0,s=it(e,i))},[s]}customElements.define("twic-media",It);const Qt=v;exports.TwicImg=class extends Mt{constructor(t){super(),Lt(this,{target:this,props:ht(this.attributes),customElement:!0},Zt,Vt,nt,{alt:2,anchor:3,bot:4,class:5,focus:6,intrinsic:7,mode:8,eager:9,placeholder:10,position:11,pretransform:12,ratio:13,src:14,step:15,state:0,transition:16,transitiondelay:17,transitionduration:18,transitiontimingfunction:19},null),t&&(t.target&&rt(t.target,this,t.anchor),t.props&&(this.$set(t.props),St()))}static get observedAttributes(){return["alt","anchor","bot","class","focus","intrinsic","mode","eager","placeholder","position","pretransform","ratio","src","step","state","transition","transitiondelay","transitionduration","transitiontimingfunction"]}get alt(){return this.$$.ctx[2]}set alt(t){this.$$set({alt:t}),St()}get anchor(){return this.$$.ctx[3]}set anchor(t){this.$$set({anchor:t}),St()}get bot(){return this.$$.ctx[4]}set bot(t){this.$$set({bot:t}),St()}get class(){return this.$$.ctx[5]}set class(t){this.$$set({class:t}),St()}get focus(){return this.$$.ctx[6]}set focus(t){this.$$set({focus:t}),St()}get intrinsic(){return this.$$.ctx[7]}set intrinsic(t){this.$$set({intrinsic:t}),St()}get mode(){return this.$$.ctx[8]}set mode(t){this.$$set({mode:t}),St()}get eager(){return this.$$.ctx[9]}set eager(t){this.$$set({eager:t}),St()}get placeholder(){return this.$$.ctx[10]}set placeholder(t){this.$$set({placeholder:t}),St()}get position(){return this.$$.ctx[11]}set position(t){this.$$set({position:t}),St()}get pretransform(){return this.$$.ctx[12]}set pretransform(t){this.$$set({pretransform:t}),St()}get ratio(){return this.$$.ctx[13]}set ratio(t){this.$$set({ratio:t}),St()}get src(){return this.$$.ctx[14]}set src(t){this.$$set({src:t}),St()}get step(){return this.$$.ctx[15]}set step(t){this.$$set({step:t}),St()}get state(){return this.$$.ctx[0]}set state(t){this.$$set({state:t}),St()}get transition(){return this.$$.ctx[16]}set transition(t){this.$$set({transition:t}),St()}get transitiondelay(){return this.$$.ctx[17]}set transitiondelay(t){this.$$set({transitiondelay:t}),St()}get transitionduration(){return this.$$.ctx[18]}set transitionduration(t){this.$$set({transitionduration:t}),St()}get transitiontimingfunction(){return this.$$.ctx[19]}set transitiontimingfunction(t){this.$$set({transitiontimingfunction:t}),St()}},exports.TwicVideo=class extends Mt{constructor(t){super(),Lt(this,{target:this,props:ht(this.attributes),customElement:!0},Yt,Jt,nt,{anchor:2,bot:3,class:4,focus:5,intrinsic:6,mode:7,eager:8,placeholder:9,position:10,pretransform:11,ratio:12,src:13,step:14,state:0,transition:15,transitiondelay:16,transitionduration:17,transitiontimingfunction:18},null),t&&(t.target&&rt(t.target,this,t.anchor),t.props&&(this.$set(t.props),St()))}static get observedAttributes(){return["anchor","bot","class","focus","intrinsic","mode","eager","placeholder","position","pretransform","ratio","src","step","state","transition","transitiondelay","transitionduration","transitiontimingfunction"]}get anchor(){return this.$$.ctx[2]}set anchor(t){this.$$set({anchor:t}),St()}get bot(){return this.$$.ctx[3]}set bot(t){this.$$set({bot:t}),St()}get class(){return this.$$.ctx[4]}set class(t){this.$$set({class:t}),St()}get focus(){return this.$$.ctx[5]}set focus(t){this.$$set({focus:t}),St()}get intrinsic(){return this.$$.ctx[6]}set intrinsic(t){this.$$set({intrinsic:t}),St()}get mode(){return this.$$.ctx[7]}set mode(t){this.$$set({mode:t}),St()}get eager(){return this.$$.ctx[8]}set eager(t){this.$$set({eager:t}),St()}get placeholder(){return this.$$.ctx[9]}set placeholder(t){this.$$set({placeholder:t}),St()}get position(){return this.$$.ctx[10]}set position(t){this.$$set({position:t}),St()}get pretransform(){return this.$$.ctx[11]}set pretransform(t){this.$$set({pretransform:t}),St()}get ratio(){return this.$$.ctx[12]}set ratio(t){this.$$set({ratio:t}),St()}get src(){return this.$$.ctx[13]}set src(t){this.$$set({src:t}),St()}get step(){return this.$$.ctx[14]}set step(t){this.$$set({step:t}),St()}get state(){return this.$$.ctx[0]}set state(t){this.$$set({state:t}),St()}get transition(){return this.$$.ctx[15]}set transition(t){this.$$set({transition:t}),St()}get transitiondelay(){return this.$$.ctx[16]}set transitiondelay(t){this.$$set({transitiondelay:t}),St()}get transitionduration(){return this.$$.ctx[17]}set transitionduration(t){this.$$set({transitionduration:t}),St()}get transitiontimingfunction(){return this.$$.ctx[18]}set transitiontimingfunction(t){this.$$set({transitiontimingfunction:t}),St()}},exports.TwicView=class extends Mt{constructor(t){super(),Lt(this,{target:this,props:ht(this.attributes),customElement:!0},Kt,Gt,nt,{},null),t&&(t.target&&rt(t.target,this,t.anchor),t.props&&(this.$set(t.props),St()))}},exports.installTwicPics=v,exports.installTwicpics=Qt;
//# sourceMappingURL=index.js.map
