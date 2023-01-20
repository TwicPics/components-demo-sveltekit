import * as i0 from '@angular/core';
import { OnInit, OnDestroy, OnChanges, EventEmitter, ElementRef, Renderer2 } from '@angular/core';
import * as i6 from '@angular/common';

declare type Anchor = `bottom` | `bottom-left` | `bottom-right` | `center` | `left` | `top` | `top-left` | `top-right` | `right`;
declare type Environment = `debug` | `offline` | `production`;
declare type Media = HTMLImageElement | HTMLVideoElement;
declare type Mode = `contain` | `cover`;
declare type Placeholder = `maincolor` | `meancolor` | `none` | `preview`;
declare type StateEvent = {
    target: any;
    state: State;
};
declare type State = `error` | `done` | `loading` | `new`;
interface AnchorObject {
    x: string | undefined;
    y: string | undefined;
}
interface Options {
    anticipation?: number;
    class?: string;
    debug?: boolean;
    domain: string;
    env?: Environment;
    handleShadowDom?: boolean;
    maxDPR?: number;
    path?: string;
    step?: number;
}
interface PlaceholderData {
    anchor: AnchorObject;
    focus: string;
    mode: Mode;
    placeholder: Placeholder;
    preTransform: string;
    ratio: number;
    src: string;
    transitions: Record<string, boolean>;
}

declare class Observer {
    private media;
    private placeholderData;
    private placeHolderElement;
    private savedWrapperBackground;
    private stateHandler;
    constructor(stateHandler?: (state: State) => void);
    handleState: () => void;
    refreshBackground: (...args: any[]) => void;
    setMedia: (media: Media) => void;
    setPlaceholderData: (data: PlaceholderData) => void;
    destroy: () => void;
}

/**
 * base component
 * Used in twic-img and twic-video
 */

declare class TwicBaseComponent implements OnInit, OnDestroy, OnChanges {
    alt: string;
    anchor: Anchor;
    bot: string;
    class: string;
    focus: string;
    intrinsic: string;
    mode: Mode;
    eager: boolean | string;
    placeholder: Placeholder;
    position: string;
    preTransform: string;
    ratio: number | string;
    src: string;
    step: number;
    transition: boolean | string;
    transitionDelay: string;
    transitionDuration: string;
    transitionTimingFunction: string;
    stateChangeEvent: EventEmitter<StateEvent>;
    _alt: string;
    _anchor: AnchorObject;
    _bot: string;
    _eager: boolean;
    _focus: string;
    _intrinsic: string;
    _isVideo: boolean;
    _mode: Mode;
    _placeholder: Placeholder;
    _position: string;
    _preTransform: string;
    _ratio: number;
    _src: string;
    _step: number;
    _transition: Record<string, boolean>;
    _transitionDelay: string;
    _transitionDuration: string;
    _transitionTimingFunct: string;
    mediaRef: ElementRef;
    description: string;
    mediaAttributs: Record<string, string>;
    mediaStyle: Record<string, string>;
    observer: Observer;
    placeholderStyle: Record<string, string>;
    wrapperClass: string;
    wrapperStyle: Record<string, string>;
    constructor();
    ngOnInit(): void;
    ngOnChanges(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TwicBaseComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TwicBaseComponent, "lib-twic-base", never, { "alt": "alt"; "anchor": "anchor"; "bot": "bot"; "class": "class"; "focus": "focus"; "intrinsic": "intrinsic"; "mode": "mode"; "eager": "eager"; "placeholder": "placeholder"; "position": "position"; "preTransform": "preTransform"; "ratio": "ratio"; "src": "src"; "step": "step"; "transition": "transition"; "transitionDelay": "transitionDelay"; "transitionDuration": "transitionDuration"; "transitionTimingFunction": "transitionTimingFunction"; }, { "stateChangeEvent": "stateChangeEvent"; }, never, never, false>;
}

declare class TwicImgComponent extends TwicBaseComponent {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<TwicImgComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TwicImgComponent, "TwicImg", never, {}, {}, never, never, false>;
}

declare class TwicVideoComponent extends TwicBaseComponent {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<TwicVideoComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TwicVideoComponent, "TwicVideo", never, {}, {}, never, never, false>;
}

declare class TwicViewComponent implements OnInit {
    private renderer;
    private elementRef;
    constructor(renderer: Renderer2, elementRef: ElementRef);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TwicViewComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TwicViewComponent, "TwicView", never, {}, {}, never, ["*"], false>;
}

declare class AttributesDirective implements OnChanges {
    private renderer;
    private elementRef;
    twicPicsAttributes?: {
        [key: string]: string;
    };
    constructor(renderer: Renderer2, elementRef: ElementRef);
    manageAttributes(): void;
    ngOnChanges(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AttributesDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<AttributesDirective, "[twicPicsAttributes]", never, { "twicPicsAttributes": "twicPicsAttributes"; }, {}, never, never, false>;
}

declare class TwicPicsComponentsModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<TwicPicsComponentsModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<TwicPicsComponentsModule, [typeof TwicBaseComponent, typeof TwicImgComponent, typeof TwicVideoComponent, typeof TwicViewComponent, typeof AttributesDirective], [typeof i6.CommonModule], [typeof TwicImgComponent, typeof TwicVideoComponent, typeof TwicViewComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<TwicPicsComponentsModule>;
}

declare const _default: (options: Options) => void;

declare const installTwicpics: (options: Options) => void;

export { Anchor, Mode, Placeholder, State, StateEvent, TwicImgComponent, TwicPicsComponentsModule, TwicVideoComponent, TwicViewComponent, _default as installTwicPics, installTwicpics };
