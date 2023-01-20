import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: never;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type TwicViewProps = typeof __propDef.props;
export type TwicViewEvents = typeof __propDef.events;
export type TwicViewSlots = typeof __propDef.slots;
export default class TwicView extends SvelteComponentTyped<TwicViewProps, TwicViewEvents, TwicViewSlots> {
}
export {};
