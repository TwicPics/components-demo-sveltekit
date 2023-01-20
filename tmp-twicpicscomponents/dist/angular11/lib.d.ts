import { OnInit, OnDestroy, OnChanges, EventEmitter, ElementRef, Renderer2 } from '@angular/core';

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
}

declare class TwicImgComponent extends TwicBaseComponent {
    constructor();
}

declare class TwicVideoComponent extends TwicBaseComponent {
    constructor();
}

declare class TwicViewComponent implements OnInit {
    private renderer;
    private elementRef;
    constructor(renderer: Renderer2, elementRef: ElementRef);
    ngOnInit(): void;
}

declare class TwicPicsComponentsModule {
}

declare const _default: (options: Options) => void;

declare const installTwicpics: (options: Options) => void;

declare class AttributesDirective implements OnChanges {
    private renderer;
    private elementRef;
    twicPicsAttributes?: {
        [key: string]: string;
    };
    constructor(renderer: Renderer2, elementRef: ElementRef);
    manageAttributes(): void;
    ngOnChanges(): void;
}

export { Anchor, Mode, Placeholder, State, StateEvent, TwicImgComponent, TwicPicsComponentsModule, TwicVideoComponent, TwicViewComponent, _default as installTwicPics, installTwicpics, TwicBaseComponent as ɵa, AttributesDirective as ɵb };
