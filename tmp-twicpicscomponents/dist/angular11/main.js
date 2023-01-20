!function(global,factory){"object"==typeof exports&&"undefined"!=typeof module?factory(exports,require("@angular/core"),require("@angular/common")):"function"==typeof define&&define.amd?define("lib",["exports","@angular/core","@angular/common"],factory):factory((global="undefined"!=typeof globalThis?globalThis:global||self).lib={},global.ng.core,global.ng.common)}(this,function(exports,core,common){"use strict";var extendStatics=function(d,b){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b}||function(d,b){for(var p in b)b.hasOwnProperty(p)&&(d[p]=b[p])})(d,b)};function __extends(d,b){function __(){this.constructor=d}extendStatics(d,b),d.prototype=null===b?Object.create(b):(__.prototype=b.prototype,new __)}Object.create;function __values(o){var s="function"==typeof Symbol&&Symbol.iterator,m=s&&o[s],i=0;if(m)return m.call(o);if(o&&"number"==typeof o.length)return{next:function(){return{value:(o=o&&i>=o.length?void 0:o)&&o[i++],done:!o}}};throw new TypeError(s?"Object is not iterable.":"Symbol.iterator is not defined.")}function __read(o,n){var m="function"==typeof Symbol&&o[Symbol.iterator];if(!m)return o;var r,e,i=m.call(o),ar=[];try{for(;(void 0===n||0<n--)&&!(r=i.next()).done;)ar.push(r.value)}catch(error){e={error:error}}finally{try{r&&!r.done&&(m=i.return)&&m.call(i)}finally{if(e)throw e.error}}return ar}function __spread(){for(var ar=[],i=0;i<arguments.length;i++)ar=ar.concat(__read(arguments[i]));return ar}Object.create;function logWarning(message){console.warn(buildErrorMessage(message))}function noop(){}function regExpFinderFactory(regExp,filter){return void 0===filter&&(filter=void 0),function(value){var found;return value&&(""+value).replace(regExp,function(_,v){return found=v}),filter?filter(found):found}}function throwError(message){throw new Error(buildErrorMessage(message))}function trimRegExpFactory(items,border){return void 0===border&&(border="\\s"),new RegExp("^(?:"+border+")*("+(Array.isArray(items)?items.join("|"):items)+")(?:"+border+")*$")}var e_2,_b,createElement=function(data){var e_1,_a,e_2,_b;if(data){var attributes=data.attributes,_element=data.element,elementName=data.elementName,data=data.value,element=_element||document.createElement(elementName||"div");if(attributes&&element instanceof HTMLElement)try{for(var _c=__values(Object.entries(attributes)),_d=_c.next();!_d.done;_d=_c.next()){var _e=__read(_d.value,2),n=_e[0],v=_e[1];element.setAttribute(n,String(v))}}catch(e_1_1){e_1={error:e_1_1}}finally{try{_d&&!_d.done&&(_a=_c.return)&&_a.call(_c)}finally{if(e_1)throw e_1.error}}if(data)if("string"==typeof data)element.innerHTML=data;else try{for(var _f=__values(Array.isArray(data)?data:[data]),_g=_f.next();!_g.done;_g=_f.next()){var child=_g.value,actualChild=createElement(child);actualChild&&element.appendChild(actualChild)}}catch(e_2_1){e_2={error:e_2_1}}finally{try{_g&&!_g.done&&(_b=_f.return)&&_b.call(_f)}finally{if(e_2)throw e_2.error}}return element}},rPx=/px$/,cssWithoutPx=function(css){return Number(css.replace(rPx,""))},buildErrorMessage=function(message){return"twicpics-components "+message},isBrowser="undefined"!=typeof document,validAnchors=["center"];try{for(var _c=__values(["","bottom","top"]),_d=_c.next();!_d.done;_d=_c.next()){var y=_d.value;try{e_2=void 0;for(var _e=__values(["","left","right"]),_f=_e.next();!_f.done;_f=_e.next()){var x=_f.value;(x||y)&&validAnchors.push(y?x?y+"-"+x:y:x)}}catch(e_2_1){e_2={error:e_2_1}}finally{try{_f&&!_f.done&&(_b=_e.return)&&_b.call(_e)}finally{if(e_2)throw e_2.error}}}}catch(e_1_1){e_1={error:e_1_1}}finally{try{_d&&!_d.done&&(_a=_c.return)&&_a.call(_c)}finally{if(e_1)throw e_1.error}}trimRegExpFactory(validAnchors);function configBasedStyle(){return".twic-w>."+config.class+"-done+div,.twic-w>."+config.class+"-poster-done+div{opacity:0 !important}.twic-w>."+config.class+"-done,.twic-w>."+config.class+"-poster-done{transform:none !important}"}function handleShadowDomFactory(attributeName){var marked=new WeakSet;return function(item){for(;item&&!marked.has(item);){marked.add(item);var parentNode=item.parentNode;if(!parentNode&&item instanceof ShadowRoot){if("closed"===item.mode)throw new Error("cannot use TwicPics components in closed ShadowRoot");createElement({element:item,value:{elementName:"style",value:"*STYLE*"+configBasedStyle()}}),(item=item.host)&&item.setAttribute(attributeName,"")}else item=parentNode}}}function installTwicPics(options){options||throwError("install options not provided");var parts_1,hasPreviousInstall=config&&config.domain,domain=options.domain,_class=options.class,env=options.env,handleShadowDom=options.handleShadowDom,path=options.path;domain&&rValidDomain.test(domain)||throwError('install domain "'+domain+'" is invalid'),path&&rInvalidPath.test(path)&&throwError('install path "'+path+'" is invalid'),env&&!rValidEnvironment.test(env)&&throwError('install env "'+env+'" is invalid'),config.class=_class||"twic",config.domain=domain.replace(rValidDomain,"$1"),config.env=env,config.path=path?path.replace(/^\/*(.+?)\/*$/,"$1/"):"",config.handleShadowDom=handleShadowDom&&isBrowser?handleShadowDomFactory("data-"+config.class+"-component"):noop,isBrowser&&(hasPreviousInstall?logWarning("install function called multiple times"):(parts_1=[config.domain+"/?v1"],parametersMap.forEach(function(p){var p=__read(p,2),key=p[0],p=p[1];options.hasOwnProperty(key)&&options[key]&&parts_1.push(p+"="+options[key])}),createElement({element:document.head,value:[{attributes:{rel:"preconnect",href:domain},elementName:"link"},{attributes:{async:"",defer:"",src:parts_1.join("&")},elementName:"script"},{value:configBasedStyle(),elementName:"style"}]})))}function isPositiveNumber(value){return!isNaN(value)&&0<value}function computeSrc(value){return value?value.replace(rImage,"image:"+config.path):"placeholder:red"}function computePosition(_a,mode,position){var x=_a.x,_a=_a.y;return"contain"===mode&&(position||(_a?x?x+" "+_a:_a:x))}function preComputeStyle(transitionDelay,transitionDuration,transitionTimingFunction){var preComputedStyle={};return transitionDuration&&(preComputedStyle.transitionDuration=transitionDuration),transitionDelay&&(preComputedStyle.transitionDelay=transitionDelay),transitionTimingFunction&&(preComputedStyle.transitionTimingFunction=transitionTimingFunction),preComputedStyle}var rValidIntrinsic=trimRegExpFactory("\\s*(\\d+)\\s*[x]\\s*(\\d+)\\s*"),_a=trimRegExpFactory(["contain","cover"]),rValidPlaceholder=trimRegExpFactory(["maincolor","meancolor","none","preview"]),rValidRatio=trimRegExpFactory("(\\d+(?:\\.\\d+)?)(?:\\s*[\\/:]\\s*(\\d+(?:\\.\\d+)?))?|(none)"),rValidEnvironment=trimRegExpFactory(["debug","offline","production"]),config={debug:!1,class:"twic",domain:void 0,env:"production",handleShadowDom:noop,maxDPR:void 0,path:"",step:void 0},rInvalidPath=/\?|^\/*$/,rValidDomain=/(^https?:\/\/[^/]+)\/*$/,parametersMap=[["anticipation","anticipation"],["class","class"],["maxDPR","max-dpr"],["step","step"]],rImage=/^(image:)?\/*/,trimOrUndefined=regExpFinderFactory(trimRegExpFactory(".+?")),e_1=trimRegExpFactory(".+?","[\\s\\/]"),rAnchor=/\b(?:(left|right)|(bottom|top))\b/g,parseAlt=trimOrUndefined,parseFocus=trimOrUndefined,mappingEager={true:!0,false:!1,"":!0},parseMode=regExpFinderFactory(_a),parsePosition=trimOrUndefined,parsePreTransform=regExpFinderFactory(e_1,function(p){return p&&p+"/"}),mappingTransition={true:"fade",false:"none",fade:"fade",zoom:"zoom",none:"none"},parseTransitionDelay=trimOrUndefined,parseTransitionDuration=trimOrUndefined,parseTransitionTimingFunction=trimOrUndefined,rPath=/^(?:(auth|placeholder|rel)|(image|media|video)|[^:]*):(\/*)((v[0-9]+(?=[/?]))?[^?]*(\?.*)?)$/,createUrl=function(_a){var debug=_a.debug,domain=_a.domain,path=_a.path,output=_a.output,quality=_a.quality,src=_a.src,_a=_a.transform,domain=domain+"/",isAbsolute=src.slice(0,domain.length)===domain,src=isAbsolute?"media:"+src.slice(domain.length):src,parsed=rPath.exec(src),isMedia=parsed&&parsed[2],debug=debug?"/debug":"",output=output?"/output="+output:"",isAbsolute=isMedia?path&&!isAbsolute?""+path+(parsed[3]?parsed[3][0]:"")+parsed[4]:parsed[4]:src,path=quality?"/quality="+quality:"",src=_a?"/"+_a:"";return domain+(parsed&&(parsed[1]||parsed[5])?"v1"+debug+src+output+"/"+(isMedia?parsed[2]+":"+isAbsolute:isAbsolute)+path:""+isAbsolute+(parsed&&parsed[6]?"&":"?")+"twic=v1"+debug+src+output+path)},computePreTransform=function(_a,focus,mode,preTransform,withDebug){var x=_a.x,_a=_a.y,mode="contain"!==mode&&(focus||(_a?x?_a+"-"+x:_a:x));return((withDebug=void 0===withDebug?!1:withDebug)?"debug/":"")+(preTransform||"")+(mode?"focus="+mode+"/":"")},rAlt=/\/?([^/?#.]+)(?:\.[^/?#]*)?(?:[?#].*)?$/,PLACEHOLDER_DIM=1e3,elementToObserver=new WeakMap,mutationObserver=isBrowser&&"undefined"!=typeof MutationObserver&&new MutationObserver(function(records){var e_1,_a;try{for(var records_1=__values(records),records_1_1=records_1.next();!records_1_1.done;records_1_1=records_1.next()){var target=records_1_1.value.target,observer=elementToObserver.get(target);observer&&observer.handleState()}}catch(e_1_1){e_1={error:e_1_1}}finally{try{records_1_1&&!records_1_1.done&&(_a=records_1.return)&&_a.call(records_1)}finally{if(e_1)throw e_1.error}}}),resizeObserver=isBrowser&&"undefined"!=typeof ResizeObserver&&new ResizeObserver(function(records){var e_2,_a;try{for(var records_2=__values(records),records_2_1=records_2.next();!records_2_1.done;records_2_1=records_2.next()){var target=records_2_1.value.target,observer=elementToObserver.get(target);observer&&observer.refreshBackground()}}catch(e_2_1){e_2={error:e_2_1}}finally{try{records_2_1&&!records_2_1.done&&(_a=records_2.return)&&_a.call(records_2)}finally{if(e_2)throw e_2.error}}}),rTwicClasses=new RegExp("(?:\\s*)(?:"+config.class+"-)(done|error|loading)"),Observer=function(stateHandler){var fn,options,timer,_options,_this=this;void 0===stateHandler&&(stateHandler=void 0),this.handleState=function(){var state,className;_this.stateHandler&&(state="new",className=_this.media.className,(className=rTwicClasses.exec(className))&&(state=__read(className,2)[1]),_this.stateHandler(state))},this.refreshBackground=(fn=function(){var wrapperBackground;_this.placeholderData&&(wrapperBackground=function(element,_a){var anchor=_a.anchor,focus=_a.focus,mode=_a.mode,placeholder=_a.placeholder,preTransform=_a.preTransform,src=_a.src,ratio=_a.ratio,_a=_a.transitions;if(!placeholder||!src||_a.hasOwnProperty("zoom")||!config.domain)return"";var _a=getComputedStyle(element),element=mode||parseMode(_a.backgroundSize)||"cover",ratio=0===ratio?"contain"===element?1:cssWithoutPx(_a.height)/Math.max(1,cssWithoutPx(_a.width)):null!=ratio?ratio:cssWithoutPx(_a.fontSize),_a=PLACEHOLDER_DIM,width=PLACEHOLDER_DIM;return ratio<1?_a*=ratio:width/=ratio,_a=Math.max(1,Math.round(_a)),width=Math.max(1,Math.round(width)),createUrl({domain:config.domain,path:config.path,src:src,transform:""+computePreTransform(anchor,focus,mode,preTransform)+element+"="+width+"x"+_a,output:placeholder})}(_this.placeHolderElement,_this.placeholderData))&&wrapperBackground!==_this.savedWrapperBackground&&(_this.savedWrapperBackground=wrapperBackground,_this.placeHolderElement.style.backgroundImage="url("+JSON.stringify(wrapperBackground)+")")},options={ms:100},_options=Object.assign({leading:!0,ms:0,trailing:!0},options),function(){for(var args=[],_i=0;_i<arguments.length;_i++)args[_i]=arguments[_i];!timer&&_options.leading&&fn.apply(void 0,__spread(args)),clearTimeout(timer),timer=setTimeout(function(){timer=void 0,_options.trailing&&fn.apply(void 0,__spread(args))},_options.ms)}),this.setMedia=function(media){media&&(config.handleShadowDom(media),_this.media=media,elementToObserver.set(_this.media,_this),_this.placeHolderElement=media.nextElementSibling,mutationObserver&&(mutationObserver.observe(_this.media,{attributes:!0,attributeFilter:["class"]}),_this.handleState()),resizeObserver&&resizeObserver.observe(_this.media))},this.setPlaceholderData=function(data){_this.placeholderData=data,_this.media&&_this.refreshBackground()},this.destroy=function(){_this.media&&_this.media&&resizeObserver&&resizeObserver.unobserve(_this.media)},this.stateHandler=stateHandler},_a=function(){function TwicBaseComponent(){var _this=this;this.alt=void 0,this.anchor=void 0,this.bot=void 0,this.class=void 0,this.focus=void 0,this.intrinsic=void 0,this.mode=void 0,this.placeholder=void 0,this.position=void 0,this.preTransform=void 0,this.ratio=void 0,this.step=void 0,this.transitionDelay=void 0,this.transitionDuration=void 0,this.transitionTimingFunction=void 0,this.stateChangeEvent=new core.EventEmitter,this._alt=void 0,this._anchor=void 0,this._bot=void 0,this._focus=void 0,this._intrinsic=void 0,this._mode=void 0,this._placeholder=void 0,this._position=void 0,this._preTransform=void 0,this._ratio=void 0,this._step=void 0,this._transitionDelay=void 0,this._transitionDuration=void 0,this._transitionTimingFunct=void 0,this.observer=new Observer(function(state){_this.stateChangeEvent.emit({target:_this,state:state})})}return TwicBaseComponent.prototype.ngOnInit=function(){var _a;this.observer.setMedia((null==(_a=this.mediaRef)?void 0:_a.nativeElement)||void 0)},TwicBaseComponent.prototype.ngOnChanges=function(){var value,src;this._alt=parseAlt(this.alt),this._anchor=function(anchor){var x,y,trimmed=trimOrUndefined(anchor);if(trimmed)for(var tmp;tmp=rAnchor.exec(trimmed);)tmp[1]?x=tmp[1]:y=tmp[2];return{x:x,y:y}}(this.anchor),this._bot="string"==typeof(value=this.bot)?value.trim():void 0,this._focus=parseFocus(this.focus),this._intrinsic=function(value){var parsedIntrinsic;if(value)return value=rValidIntrinsic.exec(value),value?(value=__read(value,4))[2]+"x"+value[3]:parsedIntrinsic}(this.intrinsic),this._mode=parseMode(this.mode),this._eager=function(value){return"boolean"==typeof value?value:void 0!==value&&mappingEager[value.trim()]||!1}(this.eager),this._placeholder=function(placeholder,src){if("offline"!==config.env&&trimOrUndefined(src)&&"none"!==placeholder)return rValidPlaceholder.test(placeholder)?placeholder:"preview"}(this.placeholder,this.src),this._position=parsePosition(this.position),this._preTransform=parsePreTransform(this.preTransform),this._ratio=function(value){return"none"===value?0:("number"==typeof value?number=value:value&&(number=(value=rValidRatio.exec(value))?(width=(value=__read(value,4))[2],((value=value[3])?Number(value):1)/Number(width)):1),isPositiveNumber(number)?number:void 0);var width,number}(this.ratio),this._src=function(value){return(value=trimOrUndefined(value))||logWarning("src is not provided"),"offline"===config.env?"":computeSrc(value)}(this.src),this._step=function(value){var trimmed;return"number"!=typeof value&&(value=(trimmed=trimOrUndefined(value))&&Number(trimmed)),isPositiveNumber(value)?value:void 0}(this.step),this._transition=function(value){"boolean"!=typeof value&&(value=trimOrUndefined(value)||!0);var parsedTransition={};return String(value).split(/\s*\+\s*|\s+/).forEach(function(t){return parsedTransition[""+(mappingTransition[t]||"fade")]=!0}),parsedTransition}(this.transition),this._transitionDelay=parseTransitionDelay(this.transitionDelay),this._transitionDuration=parseTransitionDuration(this.transitionDuration),this._transitionTimingFunct=parseTransitionTimingFunction(this.transitionTimingFunction),this.description=(value=this._alt,src=this._src,value=value||(src=rAlt.exec(src))&&src[1]||"image"),this.mediaAttributs=Object.assign({},function(anchor,bot,eager,focus,intrinsic,isVideo,mode,preTransform,src,step){var attributes={},anchor=computePreTransform(anchor,focus,mode,preTransform,"debug"===config.env);return"string"==typeof bot&&(attributes["data-"+config.class+"-bot"]=bot||"/"),eager&&(attributes["data-"+config.class+"-eager"]=""),intrinsic&&(attributes["data-"+config.class+"-intrinsic"]=intrinsic),isVideo&&(attributes["data-"+config.class+"-poster"]=src,attributes["data-"+config.class+"-poster-transform"]=anchor+"*/output=image"),src&&(attributes["data-"+config.class+"-src"]=src),void 0!==step&&(attributes["data-"+config.class+"-step"]=String(step)),anchor&&(attributes["data-"+config.class+"-transform"]=anchor+"*"),attributes}(this._anchor,this._bot,this._eager,this._focus,this._intrinsic,this._isVideo,this._mode,this._preTransform,this._src,this._step)),this.mediaStyle=function(anchor,mode,position,transitionDelay,transitionDuration,transitionTimingFunction){transitionDelay=preComputeStyle(transitionDelay,transitionDuration,transitionTimingFunction),transitionDuration=computePosition(anchor,mode,position);return transitionDuration&&(transitionDelay.objectPosition=transitionDuration),mode&&(transitionDelay.objectFit=mode),transitionDelay}(this._anchor,this._mode,this._position,this._transitionDelay,this._transitionDuration,this._transitionTimingFunct),this.placeholderStyle=function(anchor,focus,mode,placeholder,position,preTransform,ratio,src,transitions,transitionDelay,transitionDuration,transitionTimingFunction,placeholderDataHandler){transitionDelay=preComputeStyle(transitionDelay,transitionDuration,transitionTimingFunction),placeholderDataHandler({anchor:anchor,focus:focus,mode:mode,placeholder:placeholder,preTransform:preTransform,ratio:ratio,src:src,transitions:transitions}),mode&&(transitionDelay.backgroundSize=mode),transitionDuration=computePosition(anchor,mode,position);return transitionDuration&&(transitionDelay.backgroundPosition=transitionDuration),transitionDelay}(this._anchor,this._focus,this._mode,this._placeholder,this._position,this._preTransform,this._ratio,this._src,this._transition,this._transitionDelay,this._transitionDuration,this._transitionTimingFunct,this.observer.setPlaceholderData),this.wrapperClass=function(src,transitions){var wrapperClass=["twic-w"];return transitions.hasOwnProperty("none")||(transitions.hasOwnProperty("fade")&&wrapperClass.push("twic-tf"),transitions.hasOwnProperty("zoom")&&wrapperClass.push("twic-tz")),"offline"===config.env&&(wrapperClass.push("twic-offline"),src||wrapperClass.push("twic-nosrc")),wrapperClass.join(" ")}(this.src,this._transition),this.wrapperStyle=0===(src=this._ratio)?{height:"100%",paddingTop:"0"}:{paddingTop:void 0===src?"":100*src+"%"}},TwicBaseComponent.prototype.ngOnDestroy=function(){this.observer.destroy()},TwicBaseComponent}(),e_1=(_a.decorators=[{type:core.Component,args:[{selector:"lib-twic-base",template:"<p>To implement in child class</p>",host:{class:"twic-i twic-d"}}]}],_a.ctorParameters=function(){return[]},_a.propDecorators={alt:[{type:core.Input}],anchor:[{type:core.Input}],bot:[{type:core.Input}],class:[{type:core.Input}],focus:[{type:core.Input}],intrinsic:[{type:core.Input}],mode:[{type:core.Input}],eager:[{type:core.Input}],placeholder:[{type:core.Input}],position:[{type:core.Input}],preTransform:[{type:core.Input}],ratio:[{type:core.Input}],src:[{type:core.Input}],step:[{type:core.Input}],transition:[{type:core.Input}],transitionDelay:[{type:core.Input}],transitionDuration:[{type:core.Input}],transitionTimingFunction:[{type:core.Input}],stateChangeEvent:[{type:core.Output}],mediaRef:[{type:core.ViewChild,args:["media",{static:!0}]}]},function(_super){function TwicImgComponent(){var _this=_super.call(this)||this;return _this._isVideo=!1,_this}return __extends(TwicImgComponent,_super),TwicImgComponent}(_a)),TwicVideoComponent=(e_1.decorators=[{type:core.Component,args:[{selector:"TwicImg",template:'\n        <div [ngClass]="wrapperClass" [ngStyle]="wrapperStyle">\n            <img #media\n                [attr.alt]="description"\n                [twicPicsAttributes]="mediaAttributs"\n                [ngStyle]="mediaStyle"\n            >\n            <div [ngStyle]="placeholderStyle"></div>\n        </div>\n    ',changeDetection:core.ChangeDetectionStrategy.OnPush,encapsulation:core.ViewEncapsulation.None,styles:['.twic-i{overflow:hidden}.twic-w,.twic-w *{border:none;margin:0;overflow:hidden;padding:0}.twic-w{overflow:hidden;padding-top:100%;padding-top:calc(100%/var(--twic-ratio, 1));position:relative;width:100%}.twic-w>*{-o-object-fit:cover;-o-object-fit:var(--twic-mode,cover);-o-object-position:center;-o-object-position:var(--twic-position,center);display:block;height:100%;left:0;object-fit:cover;object-fit:var(--twic-mode,cover);object-position:center;object-position:var(--twic-position,center);position:absolute;top:0;transition-delay:0s;transition-delay:var(--twic-transition-delay,0s);transition-duration:.4s;transition-duration:var(--twic-transition-duration,.4s);transition-property:opacity,transform;transition-timing-function:ease;transition-timing-function:var(--twic-transition-timing-function,ease);width:100%;will-change:opacity,transform}.twic-w>div{background-position:50%;background-position:var(--twic-position,center);background-repeat:no-repeat;background-size:cover;background-size:var(--twic-mode,cover);font-size:calc(1px/var(--twic-ratio, 1))}.twic-w>img:not([src]),.twic-w>img[src=""]{visibility:hidden}.twic-w.twic-tz>img{transform:scale(0)}.twic-w.twic-tf>div{opacity:1}.twic-d{display:block;width:100%}.twic-offline{background-color:#ccc}.twic-offline.twic-nosrc{background-color:#fd0016}.twic-offline>*{display:none}']}]}],e_1.ctorParameters=function(){return[]},function(_super){function TwicVideoComponent(){var _this=_super.call(this)||this;return _this._isVideo=!0,_this}return __extends(TwicVideoComponent,_super),TwicVideoComponent}(_a)),TwicViewComponent=(TwicVideoComponent.decorators=[{type:core.Component,args:[{selector:"TwicVideo",template:'\n        <div [ngClass]="wrapperClass" [ngStyle]="wrapperStyle">\n            <video #media\n                [twicPicsAttributes]="mediaAttributs"\n                [ngStyle]="mediaStyle"\n            >\n            </video>\n            <div [ngStyle]="placeholderStyle"></div>\n        </div>\n    ',changeDetection:core.ChangeDetectionStrategy.OnPush,encapsulation:core.ViewEncapsulation.None,styles:['.twic-i{overflow:hidden}.twic-w,.twic-w *{border:none;margin:0;overflow:hidden;padding:0}.twic-w{overflow:hidden;padding-top:100%;padding-top:calc(100%/var(--twic-ratio, 1));position:relative;width:100%}.twic-w>*{-o-object-fit:cover;-o-object-fit:var(--twic-mode,cover);-o-object-position:center;-o-object-position:var(--twic-position,center);display:block;height:100%;left:0;object-fit:cover;object-fit:var(--twic-mode,cover);object-position:center;object-position:var(--twic-position,center);position:absolute;top:0;transition-delay:0s;transition-delay:var(--twic-transition-delay,0s);transition-duration:.4s;transition-duration:var(--twic-transition-duration,.4s);transition-property:opacity,transform;transition-timing-function:ease;transition-timing-function:var(--twic-transition-timing-function,ease);width:100%;will-change:opacity,transform}.twic-w>div{background-position:50%;background-position:var(--twic-position,center);background-repeat:no-repeat;background-size:cover;background-size:var(--twic-mode,cover);font-size:calc(1px/var(--twic-ratio, 1))}.twic-w>img:not([src]),.twic-w>img[src=""]{visibility:hidden}.twic-w.twic-tz>img{transform:scale(0)}.twic-w.twic-tf>div{opacity:1}.twic-d{display:block;width:100%}.twic-offline{background-color:#ccc}.twic-offline.twic-nosrc{background-color:#fd0016}.twic-offline>*{display:none}']}]}],TwicVideoComponent.ctorParameters=function(){return[]},function(){function TwicViewComponent(renderer,elementRef){this.renderer=renderer,this.elementRef=elementRef}return TwicViewComponent.prototype.ngOnInit=function(){this.renderer.setAttribute(this.elementRef.nativeElement,"data-"+config.class+"-view","")},TwicViewComponent}()),AttributesDirective=(TwicViewComponent.decorators=[{type:core.Component,args:[{selector:"TwicView",template:"<ng-content></ng-content>"}]}],TwicViewComponent.ctorParameters=function(){return[{type:core.Renderer2},{type:core.ElementRef}]},function(){function AttributesDirective(renderer,elementRef){this.renderer=renderer,this.elementRef=elementRef}return AttributesDirective.prototype.manageAttributes=function(){var _this=this;Object.entries(this.twicPicsAttributes||[]).forEach(function(_a){var _a=__read(_a,2),attributName=_a[0],_a=_a[1];void 0!==_a?_this.renderer.setAttribute(_this.elementRef.nativeElement,attributName,_a):_this.renderer.removeAttribute(_this.elementRef.nativeElement,attributName)})},AttributesDirective.prototype.ngOnChanges=function(){this.manageAttributes()},AttributesDirective}()),TwicPicsComponentsModule=(AttributesDirective.decorators=[{type:core.Directive,args:[{selector:"[twicPicsAttributes]"}]}],AttributesDirective.ctorParameters=function(){return[{type:core.Renderer2},{type:core.ElementRef}]},AttributesDirective.propDecorators={twicPicsAttributes:[{type:core.Input}]},function(){}),common=(TwicPicsComponentsModule.decorators=[{type:core.NgModule,args:[{declarations:[_a,e_1,TwicVideoComponent,TwicViewComponent,AttributesDirective],imports:[common.CommonModule],exports:[e_1,TwicVideoComponent,TwicViewComponent]}]}],installTwicPics);exports.TwicImgComponent=e_1,exports.TwicPicsComponentsModule=TwicPicsComponentsModule,exports.TwicVideoComponent=TwicVideoComponent,exports.TwicViewComponent=TwicViewComponent,exports.installTwicPics=installTwicPics,exports.installTwicpics=common,exports["ɵa"]=_a,exports["ɵb"]=AttributesDirective,Object.defineProperty(exports,"__esModule",{value:!0})});
//# sourceMappingURL=main.js.map