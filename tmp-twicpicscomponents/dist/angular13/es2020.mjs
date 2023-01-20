import*as i0 from"@angular/core";import{EventEmitter,Component,Input,Output,ViewChild,Directive,ChangeDetectionStrategy,ViewEncapsulation,NgModule}from"@angular/core";import*as i1 from"@angular/common";import{CommonModule}from"@angular/common";const createElement=data=>{if(data){var{attributes:data,element:_element,elementName,value}=data;const element=_element||document.createElement(elementName||"div");if(data&&element instanceof HTMLElement)for(var[n,v]of Object.entries(data))element.setAttribute(n,String(v));if(value)if("string"==typeof value)element.innerHTML=value;else for(const child of Array.isArray(value)?value:[value]){var actualChild=createElement(child);actualChild&&element.appendChild(actualChild)}return element}},rPx=/px$/,cssWithoutPx=css=>Number(css.replace(rPx,"")),buildErrorMessage=message=>"twicpics-components "+message,debounce=(fn,options)=>{let timer;const _options={leading:!0,ms:0,trailing:!0,...options};return(...args)=>{!timer&&_options.leading&&fn(...args),clearTimeout(timer),timer=setTimeout(()=>{timer=void 0,_options.trailing&&fn(...args)},_options.ms)}},isWebComponents=!1,isBrowser=isWebComponents||"undefined"!=typeof document,isReactNative=!1,logError=message=>{console.error(buildErrorMessage(message))},logWarning=message=>{console.warn(buildErrorMessage(message))},noop=()=>{},regExpFinderFactory=(regExp,filter=void 0)=>value=>{let found;return value&&(""+value).replace(regExp,(_,v)=>found=v),filter?filter(found):found},throwError=message=>{throw new Error(buildErrorMessage(message))},trimRegExpFactory=(items,border="\\s")=>new RegExp(`^(?:${border})*(${Array.isArray(items)?items.join("|"):items})(?:${border})*$`),validAnchors=["center"];for(const y of["","bottom","top"])for(const x of["","left","right"])(x||y)&&validAnchors.push(y?x?y+"-"+x:y:x);const rValidAnchor=trimRegExpFactory(validAnchors),rValidIntrinsic=trimRegExpFactory("\\s*(\\d+)\\s*[x]\\s*(\\d+)\\s*"),validModes=["contain","cover"],rValidMode=trimRegExpFactory(validModes),validPlaceholders=["maincolor","meancolor","none","preview"],rValidPlaceholder=trimRegExpFactory(validPlaceholders),rValidRatio=trimRegExpFactory("(\\d+(?:\\.\\d+)?)(?:\\s*[\\/:]\\s*(\\d+(?:\\.\\d+)?))?|(none)"),validEnvironment=["debug","offline","production"],rValidEnvironment=trimRegExpFactory(validEnvironment),VERSION$1="v1",defaultClass="twic",config={debug:!1,class:defaultClass,domain:void 0,env:"production",handleShadowDom:noop,maxDPR:void 0,path:"",step:void 0},configBasedStyle=()=>`.twic-w>.${config.class}-done+div,.twic-w>.${config.class}-poster-done+div{opacity:0 !important}.twic-w>.${config.class}-done,.twic-w>.${config.class}-poster-done{transform:none !important}`,getDataAttributeName=baseName=>`data-${config.class}-`+baseName,rInvalidPath=/\?|^\/*$/,rValidDomain=/(^https?:\/\/[^/]+)\/*$/,handleShadowDomFactory=attributeName=>{const marked=new WeakSet;return item=>{for(;item&&!marked.has(item);){marked.add(item);var parentNode=item["parentNode"];if(!parentNode&&item instanceof ShadowRoot){if("closed"===item.mode)throw new Error("cannot use TwicPics components in closed ShadowRoot");createElement({element:item,value:{elementName:"style",value:"*STYLE*"+configBasedStyle()}}),(item=item.host)&&item.setAttribute(attributeName,"")}else item=parentNode}}},parametersMap=[["anticipation","anticipation"],["class","class"],["maxDPR","max-dpr"],["step","step"]];var installTwicPics=options=>{options||throwError("install options not provided");var debug,maxDPR,step,hasPreviousInstall=config&&config.domain;const{domain,class:_class,env,handleShadowDom,path}=options;if(domain&&rValidDomain.test(domain)||throwError(`install domain "${domain}" is invalid`),path&&rInvalidPath.test(path)&&throwError(`install path "${path}" is invalid`),env&&!rValidEnvironment.test(env)&&throwError(`install env "${env}" is invalid`),config.class=_class||defaultClass,config.domain=domain.replace(rValidDomain,"$1"),config.env=env,config.path=path?path.replace(/^\/*(.+?)\/*$/,"$1/"):"",config.handleShadowDom=handleShadowDom&&isBrowser&&!isReactNative?handleShadowDomFactory(getDataAttributeName("component")):noop,isReactNative&&({debug,maxDPR,step}=options,config.debug=debug,config.maxDPR=maxDPR,config.step=step),isBrowser&&!isReactNative)if(hasPreviousInstall)logWarning("install function called multiple times");else{const parts=[config.domain+"/?"+VERSION$1];parametersMap.forEach(p=>{var[p,actualKey]=p;options.hasOwnProperty(p)&&options[p]&&parts.push(actualKey+"="+options[p])}),createElement({element:document.head,value:[{attributes:{rel:"preconnect",href:domain},elementName:"link"},{attributes:{async:"",defer:"",src:parts.join("&")},elementName:"script"},{value:configBasedStyle(),elementName:"style"}]})}};const rImage=/^(image:)?\/*/,isPositiveNumber=value=>!isNaN(value)&&0<value,trimOrUndefined=regExpFinderFactory(trimRegExpFactory(".+?")),trimTransformOrUndefined=trimRegExpFactory(".+?","[\\s\\/]"),rAnchor=/\b(?:(left|right)|(bottom|top))\b/g,parseAnchor=anchor=>{var tmp,trimmed=trimOrUndefined(anchor);let x,y;if(trimmed)for(;tmp=rAnchor.exec(trimmed);)tmp[1]?x=tmp[1]:y=tmp[2];return{x:x,y:y}},parseAlt=trimOrUndefined,parseBot=value=>"string"==typeof value?value.trim():void 0,parseClassName=trimOrUndefined,parseFocus=trimOrUndefined,parseIntrinsic=value=>{if(value){let parsedIntrinsic;var height,value=rValidIntrinsic.exec(value);return value&&([,,value,height]=value,parsedIntrinsic=value+"x"+height),parsedIntrinsic}},mappingEager={true:!0,false:!1,"":!0},parseEager=value=>"boolean"==typeof value?value:void 0!==value&&mappingEager[value.trim()]||!1,parseMode=regExpFinderFactory(rValidMode),parsePlaceholder=(placeholder,src)=>{if("offline"!==config.env&&trimOrUndefined(src)&&"none"!==placeholder)return rValidPlaceholder.test(placeholder)?placeholder:"preview"},parsePosition=trimOrUndefined,parsePreTransform=regExpFinderFactory(trimTransformOrUndefined,p=>p&&p+"/"),parseRatio=value=>{if("none"===value)return 0;let number;var height;return"number"==typeof value?number=value:value&&(value=rValidRatio.exec(value),number=value?([,,value,height]=value,(height?Number(height):1)/Number(value)):1),isPositiveNumber(number)?number:void 0},parseStep=value=>{var trimmed;return"number"!=typeof value&&(value=(trimmed=trimOrUndefined(value))&&Number(trimmed)),isPositiveNumber(value)?value:void 0},computeSrc=value=>value?value.replace(rImage,"image:"+config.path):"placeholder:red",parseSrc=value=>((value=trimOrUndefined(value))||logWarning("src is not provided"),!isReactNative&&"offline"===config.env?"":computeSrc(value)),mappingTransition={true:"fade",false:"none",fade:"fade",zoom:"zoom",none:"none"},parseTransition=value=>{"boolean"!=typeof value&&(value=trimOrUndefined(value)||!0);const parsedTransition={};return String(value).split(/\s*\+\s*|\s+/).forEach(t=>parsedTransition[""+(mappingTransition[t]||"fade")]=!0),parsedTransition},parseTransitionDelay=trimOrUndefined,parseTransitionDuration=trimOrUndefined,parseTransitionTimingFunction=trimOrUndefined,rPath=/^(?:(auth|placeholder|rel)|(image|media|video)|[^:]*):(\/*)((v[0-9]+(?=[/?]))?[^?]*(\?.*)?)$/,FULL_PATH=4,MEDIA=2,QUERY=6,RESERVED=5,SLASHES=3,SPECIAL=1,VERSION="v1",createUrl=({debug,domain,path,output,quality,src,transform})=>{var domain=domain+"/",isAbsolute=src.slice(0,domain.length)===domain,src=isAbsolute?"media:"+src.slice(domain.length):src,parsed=rPath.exec(src),isMedia=parsed&&parsed[MEDIA],debug=debug?"/debug":"",output=output?"/output="+output:"",isAbsolute=isMedia?path&&!isAbsolute?""+path+(parsed[SLASHES]?parsed[SLASHES][0]:"")+parsed[FULL_PATH]:parsed[FULL_PATH]:src,path=quality?"/quality="+quality:"",src=transform?"/"+transform:"";return domain+(parsed&&(parsed[SPECIAL]||parsed[RESERVED])?VERSION+debug+src+output+"/"+(isMedia?parsed[MEDIA]+":"+isAbsolute:isAbsolute)+path:`${isAbsolute}${parsed&&parsed[QUERY]?"&":"?"}twic=`+VERSION+debug+src+output+path)},computePosition=({x,y},mode,position)=>"contain"===mode&&(position||(y?x?x+" "+y:y:x)),computePreTransform=({x,y},focus,mode,preTransform,withDebug=!1)=>{mode="contain"!==mode&&(focus||(y?x?y+"-"+x:y:x));return(withDebug?"debug/":"")+(preTransform||"")+(mode?`focus=${mode}/`:"")},preComputeStyle=(transitionDelay,transitionDuration,transitionTimingFunction)=>{const preComputedStyle={};return transitionDuration&&(preComputedStyle.transitionDuration=transitionDuration),transitionDelay&&(preComputedStyle.transitionDelay=transitionDelay),transitionTimingFunction&&(preComputedStyle.transitionTimingFunction=transitionTimingFunction),preComputedStyle},rAlt=/\/?([^/?#.]+)(?:\.[^/?#]*)?(?:[?#].*)?$/,computeAlt=(alt,src)=>{return alt=alt?alt:(src=rAlt.exec(src))&&src[1]||"image"},computeData=(anchor,bot,eager,focus,intrinsic,isVideo,mode,preTransform,src,step)=>{const attributes={};anchor=computePreTransform(anchor,focus,mode,preTransform,"debug"===config.env);return"string"==typeof bot&&(attributes[getDataAttributeName("bot")]=bot||"/"),eager&&(attributes[getDataAttributeName("eager")]=""),intrinsic&&(attributes[getDataAttributeName("intrinsic")]=intrinsic),isVideo&&(attributes[getDataAttributeName("poster")]=src,attributes[getDataAttributeName("poster-transform")]=anchor+"*/output=image"),src&&(attributes[getDataAttributeName("src")]=src),void 0!==step&&(attributes[getDataAttributeName("step")]=String(step)),anchor&&(attributes[getDataAttributeName("transform")]=anchor+"*"),attributes},computePlaceholderStyle=(anchor,focus,mode,placeholder,position,preTransform,ratio,src,transitions,transitionDelay,transitionDuration,transitionTimingFunction,placeholderDataHandler)=>{const placeholderStyle=preComputeStyle(transitionDelay,transitionDuration,transitionTimingFunction);placeholderDataHandler({anchor:anchor,focus:focus,mode:mode,placeholder:placeholder,preTransform:preTransform,ratio:ratio,src:src,transitions:transitions}),mode&&(placeholderStyle.backgroundSize=mode);transitionDelay=computePosition(anchor,mode,position);return transitionDelay&&(placeholderStyle.backgroundPosition=transitionDelay),placeholderStyle},computeStyle=(anchor,mode,position,transitionDelay,transitionDuration,transitionTimingFunction)=>{const computedStyle=preComputeStyle(transitionDelay,transitionDuration,transitionTimingFunction);transitionDelay=computePosition(anchor,mode,position);return transitionDelay&&(computedStyle.objectPosition=transitionDelay),mode&&(computedStyle.objectFit=mode),computedStyle},PLACEHOLDER_DIM=1e3,computePlaceholderBackground=(element,{anchor,focus,mode,placeholder,preTransform,src,ratio,transitions})=>{if(!placeholder||!src||transitions.hasOwnProperty("zoom")||!config.domain)return"";transitions=getComputedStyle(element),element=mode||parseMode(transitions.backgroundSize)||"cover";let _ratio,height=(_ratio=0===ratio?"contain"===element?1:cssWithoutPx(transitions.height)/Math.max(1,cssWithoutPx(transitions.width)):ratio??cssWithoutPx(transitions.fontSize),PLACEHOLDER_DIM),width=PLACEHOLDER_DIM;return _ratio<1?height*=_ratio:width/=_ratio,height=Math.max(1,Math.round(height)),width=Math.max(1,Math.round(width)),createUrl({domain:config.domain,path:config.path,src:src,transform:""+computePreTransform(anchor,focus,mode,preTransform)+element+`=${width}x`+height,output:placeholder})},computeWrapperClass=(src,transitions)=>{const wrapperClass=["twic-w"];return transitions.hasOwnProperty("none")||(transitions.hasOwnProperty("fade")&&wrapperClass.push("twic-tf"),transitions.hasOwnProperty("zoom")&&wrapperClass.push("twic-tz")),"offline"===config.env&&(wrapperClass.push("twic-offline"),src||wrapperClass.push("twic-nosrc")),wrapperClass.join(" ")},computeWrapperStyle=ratio=>0===ratio?{height:"100%",paddingTop:"0"}:{paddingTop:void 0===ratio?"":100*ratio+"%"},debounceDelay=100,elementToObserver=new WeakMap,mutationObserver=isBrowser&&"undefined"!=typeof MutationObserver&&new MutationObserver(records=>{for(var{target}of records){const observer=elementToObserver.get(target);observer&&observer.handleState()}}),resizeObserver=isBrowser&&"undefined"!=typeof ResizeObserver&&new ResizeObserver(records=>{for(var{target}of records){const observer=elementToObserver.get(target);observer&&observer.refreshBackground()}}),rTwicClasses=new RegExp(`(?:\\s*)(?:${config.class}-)(done|error|loading)`);class Observer{constructor(stateHandler=void 0){this.handleState=()=>{if(this.stateHandler){let state="new";var className=this.media["className"],className=rTwicClasses.exec(className);className&&([,state]=className),this.stateHandler(state)}},this.refreshBackground=debounce(()=>{var wrapperBackground;this.placeholderData&&(wrapperBackground=computePlaceholderBackground(this.placeHolderElement,this.placeholderData))&&wrapperBackground!==this.savedWrapperBackground&&(this.savedWrapperBackground=wrapperBackground,this.placeHolderElement.style.backgroundImage=`url(${JSON.stringify(wrapperBackground)})`)},{ms:debounceDelay}),this.setMedia=media=>{media&&(config.handleShadowDom(media),this.media=media,elementToObserver.set(this.media,this),this.placeHolderElement=media.nextElementSibling,mutationObserver&&(mutationObserver.observe(this.media,{attributes:!0,attributeFilter:["class"]}),this.handleState()),resizeObserver&&resizeObserver.observe(this.media))},this.setPlaceholderData=data=>{this.placeholderData=data,this.media&&this.refreshBackground()},this.destroy=()=>{this.media&&this.media&&resizeObserver&&resizeObserver.unobserve(this.media)},this.stateHandler=stateHandler}}class TwicBaseComponent{constructor(){this.alt=void 0,this.anchor=void 0,this.bot=void 0,this.class=void 0,this.focus=void 0,this.intrinsic=void 0,this.mode=void 0,this.placeholder=void 0,this.position=void 0,this.preTransform=void 0,this.ratio=void 0,this.step=void 0,this.transitionDelay=void 0,this.transitionDuration=void 0,this.transitionTimingFunction=void 0,this.stateChangeEvent=new EventEmitter,this._alt=void 0,this._anchor=void 0,this._bot=void 0,this._focus=void 0,this._intrinsic=void 0,this._mode=void 0,this._placeholder=void 0,this._position=void 0,this._preTransform=void 0,this._ratio=void 0,this._step=void 0,this._transitionDelay=void 0,this._transitionDuration=void 0,this._transitionTimingFunct=void 0,this.observer=new Observer(state=>{this.stateChangeEvent.emit({target:this,state:state})})}ngOnInit(){this.observer.setMedia(this.mediaRef?.nativeElement||void 0)}ngOnChanges(){this._alt=parseAlt(this.alt),this._anchor=parseAnchor(this.anchor),this._bot=parseBot(this.bot),this._focus=parseFocus(this.focus),this._intrinsic=parseIntrinsic(this.intrinsic),this._mode=parseMode(this.mode),this._eager=parseEager(this.eager),this._placeholder=parsePlaceholder(this.placeholder,this.src),this._position=parsePosition(this.position),this._preTransform=parsePreTransform(this.preTransform),this._ratio=parseRatio(this.ratio),this._src=parseSrc(this.src),this._step=parseStep(this.step),this._transition=parseTransition(this.transition),this._transitionDelay=parseTransitionDelay(this.transitionDelay),this._transitionDuration=parseTransitionDuration(this.transitionDuration),this._transitionTimingFunct=parseTransitionTimingFunction(this.transitionTimingFunction),this.description=computeAlt(this._alt,this._src),this.mediaAttributs={...computeData(this._anchor,this._bot,this._eager,this._focus,this._intrinsic,this._isVideo,this._mode,this._preTransform,this._src,this._step)},this.mediaStyle=computeStyle(this._anchor,this._mode,this._position,this._transitionDelay,this._transitionDuration,this._transitionTimingFunct),this.placeholderStyle=computePlaceholderStyle(this._anchor,this._focus,this._mode,this._placeholder,this._position,this._preTransform,this._ratio,this._src,this._transition,this._transitionDelay,this._transitionDuration,this._transitionTimingFunct,this.observer.setPlaceholderData),this.wrapperClass=computeWrapperClass(this.src,this._transition),this.wrapperStyle=computeWrapperStyle(this._ratio)}ngOnDestroy(){this.observer.destroy()}}TwicBaseComponent.ɵfac=i0.ɵɵngDeclareFactory({minVersion:"12.0.0",version:"13.3.7",ngImport:i0,type:TwicBaseComponent,deps:[],target:i0.ɵɵFactoryTarget.Component}),TwicBaseComponent.ɵcmp=i0.ɵɵngDeclareComponent({minVersion:"12.0.0",version:"13.3.7",type:TwicBaseComponent,selector:"lib-twic-base",inputs:{alt:"alt",anchor:"anchor",bot:"bot",class:"class",focus:"focus",intrinsic:"intrinsic",mode:"mode",eager:"eager",placeholder:"placeholder",position:"position",preTransform:"preTransform",ratio:"ratio",src:"src",step:"step",transition:"transition",transitionDelay:"transitionDelay",transitionDuration:"transitionDuration",transitionTimingFunction:"transitionTimingFunction"},outputs:{stateChangeEvent:"stateChangeEvent"},host:{classAttribute:"twic-i twic-d"},viewQueries:[{propertyName:"mediaRef",first:!0,predicate:["media"],descendants:!0,static:!0}],usesOnChanges:!0,ngImport:i0,template:"<p>To implement in child class</p>",isInline:!0}),i0.ɵɵngDeclareClassMetadata({minVersion:"12.0.0",version:"13.3.7",ngImport:i0,type:TwicBaseComponent,decorators:[{type:Component,args:[{selector:"lib-twic-base",template:"<p>To implement in child class</p>",host:{class:"twic-i twic-d"}}]}],ctorParameters:function(){return[]},propDecorators:{alt:[{type:Input}],anchor:[{type:Input}],bot:[{type:Input}],class:[{type:Input}],focus:[{type:Input}],intrinsic:[{type:Input}],mode:[{type:Input}],eager:[{type:Input}],placeholder:[{type:Input}],position:[{type:Input}],preTransform:[{type:Input}],ratio:[{type:Input}],src:[{type:Input}],step:[{type:Input}],transition:[{type:Input}],transitionDelay:[{type:Input}],transitionDuration:[{type:Input}],transitionTimingFunction:[{type:Input}],stateChangeEvent:[{type:Output}],mediaRef:[{type:ViewChild,args:["media",{static:!0}]}]}});class AttributesDirective{constructor(renderer,elementRef){this.renderer=renderer,this.elementRef=elementRef}manageAttributes(){Object.entries(this.twicPicsAttributes||[]).forEach(([attributName,attributValue])=>{void 0!==attributValue?this.renderer.setAttribute(this.elementRef.nativeElement,attributName,attributValue):this.renderer.removeAttribute(this.elementRef.nativeElement,attributName)})}ngOnChanges(){this.manageAttributes()}}AttributesDirective.ɵfac=i0.ɵɵngDeclareFactory({minVersion:"12.0.0",version:"13.3.7",ngImport:i0,type:AttributesDirective,deps:[{token:i0.Renderer2},{token:i0.ElementRef}],target:i0.ɵɵFactoryTarget.Directive}),AttributesDirective.ɵdir=i0.ɵɵngDeclareDirective({minVersion:"12.0.0",version:"13.3.7",type:AttributesDirective,selector:"[twicPicsAttributes]",inputs:{twicPicsAttributes:"twicPicsAttributes"},usesOnChanges:!0,ngImport:i0}),i0.ɵɵngDeclareClassMetadata({minVersion:"12.0.0",version:"13.3.7",ngImport:i0,type:AttributesDirective,decorators:[{type:Directive,args:[{selector:"[twicPicsAttributes]"}]}],ctorParameters:function(){return[{type:i0.Renderer2},{type:i0.ElementRef}]},propDecorators:{twicPicsAttributes:[{type:Input}]}});class TwicImgComponent extends TwicBaseComponent{constructor(){super(),this._isVideo=!1}}TwicImgComponent.ɵfac=i0.ɵɵngDeclareFactory({minVersion:"12.0.0",version:"13.3.7",ngImport:i0,type:TwicImgComponent,deps:[],target:i0.ɵɵFactoryTarget.Component}),TwicImgComponent.ɵcmp=i0.ɵɵngDeclareComponent({minVersion:"12.0.0",version:"13.3.7",type:TwicImgComponent,selector:"TwicImg",usesInheritance:!0,ngImport:i0,template:`
        <div [ngClass]="wrapperClass" [ngStyle]="wrapperStyle">
            <img #media
                [attr.alt]="description"
                [twicPicsAttributes]="mediaAttributs"
                [ngStyle]="mediaStyle"
            >
            <div [ngStyle]="placeholderStyle"></div>
        </div>
    `,isInline:!0,styles:['.twic-i{overflow:hidden}.twic-w,.twic-w *{border:none;margin:0;overflow:hidden;padding:0}.twic-w{overflow:hidden;position:relative;padding-top:100%;width:100%;padding-top:calc(100% / var( --twic-ratio, 1 ))}.twic-w>*{display:block;left:0;height:100%;position:absolute;top:0;width:100%;transition-property:opacity,transform;will-change:opacity,transform;object-fit:cover;object-position:center;transition-delay:0s;transition-duration:.4s;transition-timing-function:ease;object-fit:var( --twic-mode, cover );object-position:var( --twic-position, center );transition-delay:var( --twic-transition-delay, 0s );transition-duration:var( --twic-transition-duration, .4s );transition-timing-function:var( --twic-transition-timing-function, ease )}.twic-w>div{background-repeat:no-repeat;background-size:cover;background-position:center;background-size:var( --twic-mode, cover );background-position:var( --twic-position, center );font-size:calc(1px / var( --twic-ratio, 1 ))}.twic-w>img[src=""],.twic-w>img:not([src]){visibility:hidden}.twic-w.twic-tz>img{transform:scale(0)}.twic-w.twic-tf>div{opacity:1}.twic-d{display:block;width:100%}.twic-offline{background-color:#ccc}.twic-offline.twic-nosrc{background-color:#fd0016}.twic-offline>*{display:none}\n'],directives:[{type:i1.NgClass,selector:"[ngClass]",inputs:["class","ngClass"]},{type:i1.NgStyle,selector:"[ngStyle]",inputs:["ngStyle"]},{type:AttributesDirective,selector:"[twicPicsAttributes]",inputs:["twicPicsAttributes"]}],changeDetection:i0.ChangeDetectionStrategy.OnPush,encapsulation:i0.ViewEncapsulation.None}),i0.ɵɵngDeclareClassMetadata({minVersion:"12.0.0",version:"13.3.7",ngImport:i0,type:TwicImgComponent,decorators:[{type:Component,args:[{selector:"TwicImg",template:`
        <div [ngClass]="wrapperClass" [ngStyle]="wrapperStyle">
            <img #media
                [attr.alt]="description"
                [twicPicsAttributes]="mediaAttributs"
                [ngStyle]="mediaStyle"
            >
            <div [ngStyle]="placeholderStyle"></div>
        </div>
    `,changeDetection:ChangeDetectionStrategy.OnPush,encapsulation:ViewEncapsulation.None,styles:['.twic-i{overflow:hidden}.twic-w,.twic-w *{border:none;margin:0;overflow:hidden;padding:0}.twic-w{overflow:hidden;position:relative;padding-top:100%;width:100%;padding-top:calc(100% / var( --twic-ratio, 1 ))}.twic-w>*{display:block;left:0;height:100%;position:absolute;top:0;width:100%;transition-property:opacity,transform;will-change:opacity,transform;object-fit:cover;object-position:center;transition-delay:0s;transition-duration:.4s;transition-timing-function:ease;object-fit:var( --twic-mode, cover );object-position:var( --twic-position, center );transition-delay:var( --twic-transition-delay, 0s );transition-duration:var( --twic-transition-duration, .4s );transition-timing-function:var( --twic-transition-timing-function, ease )}.twic-w>div{background-repeat:no-repeat;background-size:cover;background-position:center;background-size:var( --twic-mode, cover );background-position:var( --twic-position, center );font-size:calc(1px / var( --twic-ratio, 1 ))}.twic-w>img[src=""],.twic-w>img:not([src]){visibility:hidden}.twic-w.twic-tz>img{transform:scale(0)}.twic-w.twic-tf>div{opacity:1}.twic-d{display:block;width:100%}.twic-offline{background-color:#ccc}.twic-offline.twic-nosrc{background-color:#fd0016}.twic-offline>*{display:none}\n']}]}],ctorParameters:function(){return[]}});class TwicVideoComponent extends TwicBaseComponent{constructor(){super(),this._isVideo=!0}}TwicVideoComponent.ɵfac=i0.ɵɵngDeclareFactory({minVersion:"12.0.0",version:"13.3.7",ngImport:i0,type:TwicVideoComponent,deps:[],target:i0.ɵɵFactoryTarget.Component}),TwicVideoComponent.ɵcmp=i0.ɵɵngDeclareComponent({minVersion:"12.0.0",version:"13.3.7",type:TwicVideoComponent,selector:"TwicVideo",usesInheritance:!0,ngImport:i0,template:`
        <div [ngClass]="wrapperClass" [ngStyle]="wrapperStyle">
            <video #media
                [twicPicsAttributes]="mediaAttributs"
                [ngStyle]="mediaStyle"
            >
            </video>
            <div [ngStyle]="placeholderStyle"></div>
        </div>
    `,isInline:!0,styles:['.twic-i{overflow:hidden}.twic-w,.twic-w *{border:none;margin:0;overflow:hidden;padding:0}.twic-w{overflow:hidden;position:relative;padding-top:100%;width:100%;padding-top:calc(100% / var( --twic-ratio, 1 ))}.twic-w>*{display:block;left:0;height:100%;position:absolute;top:0;width:100%;transition-property:opacity,transform;will-change:opacity,transform;object-fit:cover;object-position:center;transition-delay:0s;transition-duration:.4s;transition-timing-function:ease;object-fit:var( --twic-mode, cover );object-position:var( --twic-position, center );transition-delay:var( --twic-transition-delay, 0s );transition-duration:var( --twic-transition-duration, .4s );transition-timing-function:var( --twic-transition-timing-function, ease )}.twic-w>div{background-repeat:no-repeat;background-size:cover;background-position:center;background-size:var( --twic-mode, cover );background-position:var( --twic-position, center );font-size:calc(1px / var( --twic-ratio, 1 ))}.twic-w>img[src=""],.twic-w>img:not([src]){visibility:hidden}.twic-w.twic-tz>img{transform:scale(0)}.twic-w.twic-tf>div{opacity:1}.twic-d{display:block;width:100%}.twic-offline{background-color:#ccc}.twic-offline.twic-nosrc{background-color:#fd0016}.twic-offline>*{display:none}\n'],directives:[{type:i1.NgClass,selector:"[ngClass]",inputs:["class","ngClass"]},{type:i1.NgStyle,selector:"[ngStyle]",inputs:["ngStyle"]},{type:AttributesDirective,selector:"[twicPicsAttributes]",inputs:["twicPicsAttributes"]}],changeDetection:i0.ChangeDetectionStrategy.OnPush,encapsulation:i0.ViewEncapsulation.None}),i0.ɵɵngDeclareClassMetadata({minVersion:"12.0.0",version:"13.3.7",ngImport:i0,type:TwicVideoComponent,decorators:[{type:Component,args:[{selector:"TwicVideo",template:`
        <div [ngClass]="wrapperClass" [ngStyle]="wrapperStyle">
            <video #media
                [twicPicsAttributes]="mediaAttributs"
                [ngStyle]="mediaStyle"
            >
            </video>
            <div [ngStyle]="placeholderStyle"></div>
        </div>
    `,changeDetection:ChangeDetectionStrategy.OnPush,encapsulation:ViewEncapsulation.None,styles:['.twic-i{overflow:hidden}.twic-w,.twic-w *{border:none;margin:0;overflow:hidden;padding:0}.twic-w{overflow:hidden;position:relative;padding-top:100%;width:100%;padding-top:calc(100% / var( --twic-ratio, 1 ))}.twic-w>*{display:block;left:0;height:100%;position:absolute;top:0;width:100%;transition-property:opacity,transform;will-change:opacity,transform;object-fit:cover;object-position:center;transition-delay:0s;transition-duration:.4s;transition-timing-function:ease;object-fit:var( --twic-mode, cover );object-position:var( --twic-position, center );transition-delay:var( --twic-transition-delay, 0s );transition-duration:var( --twic-transition-duration, .4s );transition-timing-function:var( --twic-transition-timing-function, ease )}.twic-w>div{background-repeat:no-repeat;background-size:cover;background-position:center;background-size:var( --twic-mode, cover );background-position:var( --twic-position, center );font-size:calc(1px / var( --twic-ratio, 1 ))}.twic-w>img[src=""],.twic-w>img:not([src]){visibility:hidden}.twic-w.twic-tz>img{transform:scale(0)}.twic-w.twic-tf>div{opacity:1}.twic-d{display:block;width:100%}.twic-offline{background-color:#ccc}.twic-offline.twic-nosrc{background-color:#fd0016}.twic-offline>*{display:none}\n']}]}],ctorParameters:function(){return[]}});class TwicViewComponent{constructor(renderer,elementRef){this.renderer=renderer,this.elementRef=elementRef}ngOnInit(){this.renderer.setAttribute(this.elementRef.nativeElement,getDataAttributeName("view"),"")}}TwicViewComponent.ɵfac=i0.ɵɵngDeclareFactory({minVersion:"12.0.0",version:"13.3.7",ngImport:i0,type:TwicViewComponent,deps:[{token:i0.Renderer2},{token:i0.ElementRef}],target:i0.ɵɵFactoryTarget.Component}),TwicViewComponent.ɵcmp=i0.ɵɵngDeclareComponent({minVersion:"12.0.0",version:"13.3.7",type:TwicViewComponent,selector:"TwicView",ngImport:i0,template:"<ng-content></ng-content>",isInline:!0}),i0.ɵɵngDeclareClassMetadata({minVersion:"12.0.0",version:"13.3.7",ngImport:i0,type:TwicViewComponent,decorators:[{type:Component,args:[{selector:"TwicView",template:"<ng-content></ng-content>"}]}],ctorParameters:function(){return[{type:i0.Renderer2},{type:i0.ElementRef}]}});class TwicPicsComponentsModule{}TwicPicsComponentsModule.ɵfac=i0.ɵɵngDeclareFactory({minVersion:"12.0.0",version:"13.3.7",ngImport:i0,type:TwicPicsComponentsModule,deps:[],target:i0.ɵɵFactoryTarget.NgModule}),TwicPicsComponentsModule.ɵmod=i0.ɵɵngDeclareNgModule({minVersion:"12.0.0",version:"13.3.7",ngImport:i0,type:TwicPicsComponentsModule,declarations:[TwicBaseComponent,TwicImgComponent,TwicVideoComponent,TwicViewComponent,AttributesDirective],imports:[CommonModule],exports:[TwicImgComponent,TwicVideoComponent,TwicViewComponent]}),TwicPicsComponentsModule.ɵinj=i0.ɵɵngDeclareInjector({minVersion:"12.0.0",version:"13.3.7",ngImport:i0,type:TwicPicsComponentsModule,imports:[[CommonModule]]}),i0.ɵɵngDeclareClassMetadata({minVersion:"12.0.0",version:"13.3.7",ngImport:i0,type:TwicPicsComponentsModule,decorators:[{type:NgModule,args:[{declarations:[TwicBaseComponent,TwicImgComponent,TwicVideoComponent,TwicViewComponent,AttributesDirective],imports:[CommonModule],exports:[TwicImgComponent,TwicVideoComponent,TwicViewComponent]}]}]});const installTwicpics=installTwicPics;export{TwicImgComponent,TwicPicsComponentsModule,TwicVideoComponent,TwicViewComponent,installTwicPics,installTwicpics};
//# sourceMappingURL=es2020.mjs.map