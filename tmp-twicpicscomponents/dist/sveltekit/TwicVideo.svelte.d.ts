import { SvelteComponentTyped } from "svelte";
import type { Anchor, Mode, Placeholder, State } from "./_utils.js";
declare const __propDef: {
    props: {
        anchor?: Anchor;
        bot?: string;
        class?: string;
        focus?: string;
        intrinsic?: string;
        mode?: Mode;
        eager?: boolean;
        placeholder?: Placeholder;
        position?: string;
        preTransform?: string;
        ratio?: number | string;
        src: string;
        step?: number;
        state?: State;
        transition?: boolean | string;
        transitionDelay?: string;
        transitionDuration?: string;
        transitionTimingFunction?: string;
    };
    events: {
        statechange: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type TwicVideoProps = typeof __propDef.props;
export type TwicVideoEvents = typeof __propDef.events;
export type TwicVideoSlots = typeof __propDef.slots;
export default class TwicVideo extends SvelteComponentTyped<TwicVideoProps, TwicVideoEvents, TwicVideoSlots> {
}
export {};
