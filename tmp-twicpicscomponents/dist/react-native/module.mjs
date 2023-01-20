import e,{useRef as t,useState as r,useEffect as i,Component as o}from"react";import{Easing as n,Platform as a,PixelRatio as s,Image as c,Animated as l,ImageBackground as d,StyleSheet as h,View as u}from"react-native";const p=e=>`twicpics-components ${e}`,m=()=>{},f=(e,t)=>r=>{let i;return r&&`${r}`.replace(e,((e,t)=>i=t)),t?t(i):i},g=e=>{throw new Error(p(e))},$=(e,t="\\s")=>new RegExp(`^(?:${t})*(${Array.isArray(e)?e.join("|"):e})(?:${t})*$`),v=["center"];for(const e of["","bottom","top"])for(const t of["","left","right"])(t||e)&&v.push(e?t?`${e}-${t}`:e:t);$(v),$("\\s*(\\d+)\\s*[x]\\s*(\\d+)\\s*");const w=$(["contain","cover"]),b=$(["maincolor","meancolor","none","preview"]),y=$("(\\d+(?:\\.\\d+)?)(?:\\s*[\\/:]\\s*(\\d+(?:\\.\\d+)?))?|(none)"),x=$(["debug","offline","production"]),S={debug:!1,class:"twic",domain:void 0,env:"production",handleShadowDom:m,maxDPR:void 0,path:"",step:void 0},O=/\?|^\/*$/,z=/(^https?:\/\/[^/]+)\/*$/,D=/^(image:)?\/*/,N=e=>!isNaN(e)&&e>0,R=f($(".+?")),M=$(".+?","[\\s\\/]"),j=/\b(?:(left|right)|(bottom|top))\b/g,E=R,P=R,q=f(w),T=f(M,(e=>e&&`${e}/`)),V={true:"fade",false:"none",fade:"fade",zoom:"zoom",none:"none"},A=R,I=R,L=/^(?:(auth|placeholder|rel)|(image|media|video)|[^:]*):(\/*)((v[0-9]+(?=[/?]))?[^?]*(\?.*)?)$/,k=({x:e,y:t},r,i,o,n=!1)=>{const a="contain"!==i&&(r||(t?e?`${t}-${e}`:t:e));return`${n?"debug/":""}${o||""}${a?`focus=${a}/`:""}`},C=/\/?([^/?#.]+)(?:\.[^/?#]*)?(?:[?#].*)?$/;var F=e=>{(e=>{e||g("install options not provided"),S&&S.domain;const{domain:t,class:r,env:i,handleShadowDom:o,path:n}=e;t&&z.test(t)||g(`install domain "${t}" is invalid`),n&&O.test(n)&&g(`install path "${n}" is invalid`),i&&!x.test(i)&&g(`install env "${i}" is invalid`),S.class=r||"twic",S.domain=t.replace(z,"$1"),S.env=i,S.path=n?n.replace(/^\/*(.+?)\/*$/,"$1/"):"",S.handleShadowDom=m;{const{debug:t,maxDPR:r,step:i}=e;S.debug=t,S.maxDPR=r,S.step=i}})(Object.assign({maxDPR:2,step:10},e))};const J={center:"contain-max",cover:"cover",contain:"contain",stretch:"resize",repeat:"contain-max"},_=({anchor:e,focus:t,lqip:r=!1,mode:i,placeholder:o,preTransform:n,src:c,step:l,viewSize:d})=>{if(r&&/^placeholder:.*$/.test(c))return;const{debug:h,domain:u,path:p}=S,{width:m,height:f}=((e,t,r)=>{const i=Math.min(Math.max(1,s.get()),S.maxDPR);let o=(t=>{const r=e||S.step;return Math.max(r,r*Math.floor(t/r))})(r.width*i),n=r.ratio?o*r.ratio:r.height*i;if(S.debug&&console.debug("size and pixelRatio",r,i,{_actualWidth:o,_actualHeight:n}),t){const e=o/n;o=n=1e3,e>1?n=Math.floor(n/e):o=Math.floor(o*e)}return{width:Math.round(o),height:Math.round(n)}})(l,r,d);return(({debug:e,domain:t,path:r,output:i,quality:o,src:n,transform:a})=>{const s=`${t}/`,c=n.slice(0,s.length)===s,l=c?`media:${n.slice(s.length)}`:n,d=L.exec(l),h=d&&d[2],u=e?"/debug":"",p=i?`/output=${i}`:"",m=h?r&&!c?`${r}${d[3]?d[3][0]:""}${d[4]}`:d[4]:l,f=o?`/quality=${o}`:"",g=a?`/${a}`:"";return`${s}${d&&(d[1]||d[5])?`v1${u}${g}${p}/${h?`${d[2]}:${m}`:m}${f}`:`${m}${d&&d[6]?"&":"?"}twic=v1${u}${g}${p}${f}`}`})({debug:h&&"web"===a.OS,domain:u,path:p,src:c,transform:`${k(e,t,i,n,!1)}${J[i]}=${m}x${f}`,output:r?o:""})},H=(e,t)=>{if(t){let r=e||{};return Array.isArray(e)&&(r=e.reduce(((e,t)=>Object.assign(Object.assign({},e),t)),{})),r=JSON.parse(JSON.stringify(r)),r.height=void 0,r.aspectRatio=1/t,r}return e},W={left:"flex-start",right:"flex-end",top:"flex-start",bottom:"flex-end"},B=(e,t)=>{if("contain"===t){const{x:t,y:r}=e;return{alignItems:W[t]||"center",justifyContent:W[r]||"center"}}return{}},G=(e,t,r,i)=>({delay:Number(t||0),duration:Number(r||200),easing:i||n.ease,toValue:e,useNativeDriver:!0}),K=(e,t)=>{if(e){const{ratioIntrinsic:r}=e,i=t.width/t.height;return Math.max(1,Math.round(r>i?t.width:t.height*r))}return 0},Q=(e,t,r)=>({height:r?e*r:t,ratio:r||(e?t/e:void 0),width:e}),U=/(?:(?:width="([0-9]*)").*(?:height="([0-9]*)").*)(?:(?:background:(#[0-9a-fA-F]*)")|(?:href="([^"]*)))/,X=e.memo((o=>{const{viewSize:s}=o,h=E(o.alt),u=(e=>{const t=R(e);let r,i;if(t){let e;for(;e=j.exec(t);)e[1]?r=e[1]:i=e[2]}return{x:r,y:i}})(o.anchor),m=P(o.focus),f=q(o.mode)||"cover",g=((e,t)=>{if("offline"!==S.env&&R(t)&&"none"!==e)return b.test(e)?e:"preview"})(o.placeholder,o.src),$=T(o.preTransform),v=(F=o.src,(F=R(F))||console.warn(p("src is not provided")),(e=>e?e.replace(D,`image:${S.path}`):"placeholder:red")(F)),w=(e=>{if("number"!=typeof e){const t=R(e);e=t&&Number(t)}return N(e)?e:void 0})(o.step),y=(e=>{"boolean"!=typeof e&&(e=R(e)||!0);const t={};return String(e).split(/\s*\+\s*|\s+/).forEach((e=>t[`${V[e]||"fade"}`]=!0)),t})(o.transition),x=A(o.transitionDelay),O=I(o.transitionDuration),z=o.transitionTimingFunction||n.ease,M=((e,t)=>{if(!e){const r=C.exec(t);e=r&&r[1]||"image"}return e})(h,v),{media:L,lqip:k}={media:_(J={anchor:u,focus:m,mode:f,placeholder:g,preTransform:$,src:v,step:w,viewSize:s}),lqip:_(Object.assign(Object.assign({},J),{lqip:!0}))};var F,J;const H=t(((e,t)=>{let r;const i=Object.assign({leading:!0,ms:0,trailing:!0},{leading:!1,ms:100});return(...t)=>{!r&&i.leading&&e(...t),clearTimeout(r),r=setTimeout((()=>{r=void 0,i.trailing&&e(...t)}),i.ms)}})((async(e,t,r)=>{const i=await(async(e,t,r)=>{const i=t=>{const{height:i,width:o,placeholder:n}=t;return{placeholder:n,ratioIntrinsic:i?o/i:1/r.ratio,src:e}};return t?i(await(async e=>{const t=await fetch(e),r=await t.text(),i=U.exec(r);return{placeholder:{blurRadius:"web"===a.OS?0:5,color:i&&i[3],uri:"web"===a.OS?e:i&&i[4]},height:i&&Number(i[2])||void 0,width:i&&Number(i[1])||void 0}})(t)):new Promise((t=>{c.getSize(e,((e,r)=>{t(i({width:e,height:r}))}))}))})(e,t,r);Y(i)}))).current,W=t(new l.Value(0)),Q=t(new l.Value(y.hasOwnProperty("zoom")?0:1)),[X,Y]=r(void 0);return i((()=>{W.current.setValue(y.hasOwnProperty("fade")?1:0),H(L,k,s)}),[L,k]),e.createElement(l.View,{style:[Z.layout,B(u,f),{transform:[{scale:Q.current}]}]},e.createElement(d,{accessibilityLabel:M,onLoad:()=>{y.hasOwnProperty("none")?W.current.setValue(0):(l.timing(W.current,G(0,x,O,z)).start(),l.timing(Q.current,G(1,x,O,z)).start())},source:{uri:null==X?void 0:X.src},style:{aspectRatio:null==X?void 0:X.ratioIntrinsic,width:K(X,s)}},(null==X?void 0:X.placeholder)&&e.createElement(l.Image,{accessibilityLabel:`${M}-placeholder`,blurRadius:X.placeholder.blurRadius||0,source:{uri:X.placeholder.uri},style:[Z.placeholder,{backgroundColor:X.placeholder.color,opacity:W.current}]})))}));class Y extends o{constructor(e){super(e),this.state={viewSize:void 0,ready:!1}}render(){const{props:t}=this,r=(e=>{if("none"===e)return 0;let t;if("number"==typeof e)t=e;else if(e){const r=y.exec(e);if(r){const[,,e,i]=r;t=(i?Number(i):1)/Number(e)}else t=1}return N(t)?t:void 0})(t.ratio||1);return e.createElement(u,{style:h.flatten([Z.container,H(t.style,r)]),onLayout:e=>{const{width:t,height:i}=e.nativeEvent.layout;this.setState({viewSize:Q(t,i,r),ready:t>0&&i>0})}},this.state.ready?e.createElement(X,Object.assign({},t,{viewSize:this.state.viewSize})):void 0)}}const Z=h.create({container:{overflow:"hidden",width:"100%"},layout:{flex:1,flexDirection:"column",overflow:"hidden"},placeholder:{height:"100%",width:"100%"},wrapper:{overflow:"hidden",width:"100%",height:"100%"}}),ee=F;export{Y as TwicImg,F as installTwicPics,ee as installTwicpics};
//# sourceMappingURL=module.mjs.map