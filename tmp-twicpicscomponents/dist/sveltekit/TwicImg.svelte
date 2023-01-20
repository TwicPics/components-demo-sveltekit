<svelte:options tag={null}/>

<script context="module">import TwicMedia from "./_TwicMedia.svelte";
</script>
<script>export let alt = void 0;
export let anchor = void 0;
export let bot = void 0;
let className = void 0;
export { className as class };
export let focus = void 0;
export let intrinsic = void 0;
export let mode = void 0;
export let eager = false;
export let placeholder = void 0;
export let position = void 0;
export let preTransform = void 0;
export let ratio = void 0;
export let src;
export let step = void 0;
export let state = void 0;
export let transition = void 0;
export let transitionDelay = void 0;
export let transitionDuration = void 0;
export let transitionTimingFunction = void 0;
$:
  props = {
    alt,
    anchor,
    bot,
    className,
    focus,
    intrinsic,
    mode,
    eager,
    placeholder,
    position,
    preTransform,
    ratio,
    src,
    step,
    transition,
    transitionDelay,
    transitionDuration,
    transitionTimingFunction
  };
</script>
<TwicMedia mediaTag="img" bind:state { ...props } on:statechange></TwicMedia>
