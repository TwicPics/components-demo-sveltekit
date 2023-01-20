import { SvelteComponentTyped } from "svelte";
import type { Anchor, Mode, Placeholder, State } from "./_utils.js";
declare const __propDef: {
    props: {
        alt?: string;
        anchor?: Anchor;
        bot?: string;
        className?: string;
        focus?: string;
        intrinsic?: string;
        mediaTag: 'img' | 'video';
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
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type TwicMediaProps = typeof __propDef.props;
export type TwicMediaEvents = typeof __propDef.events;
export type TwicMediaSlots = typeof __propDef.slots;
export default class TwicMedia extends SvelteComponentTyped<TwicMediaProps, TwicMediaEvents, TwicMediaSlots> {
}
export {};
