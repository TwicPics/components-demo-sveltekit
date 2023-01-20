import type { ComponentType, SvelteComponentTyped } from "svelte";
import type { Anchor, BaseAttributes, Environment, Mode, Placeholder, State, StateEvent } from "./_utils.js";
import { installTwicPics } from "./_utils.js";
export interface Attributes extends BaseAttributes {
    class?: string;
    state?: State;
}
export type { Anchor, Environment, Mode, Placeholder, State, StateEvent };
declare const installTwicpics: (options: import("./_utils.js").Options) => void;
declare const TwicImg: ComponentType<SvelteComponentTyped<Attributes, any, any>>;
declare const TwicVideo: ComponentType<SvelteComponentTyped<Attributes, any, any>>;
declare const TwicView: ComponentType<SvelteComponentTyped<any, any, any>>;
export { installTwicpics, installTwicPics, TwicImg, TwicVideo, TwicView };
