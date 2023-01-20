<svelte:options tag="twic-media" />
<script context="module">import {
  computeAlt,
  computeData,
  computePlaceholderStyle,
  computeStyle,
  computeWrapperClass,
  computeWrapperStyle,
  isBrowser,
  isWebComponents,
  Observer,
  parseAlt,
  parseAnchor,
  parseBot,
  parseClassName,
  parseFocus,
  parseIntrinsic,
  parseMode,
  parseEager,
  parsePlaceholder,
  parsePosition,
  parsePreTransform,
  parseRatio,
  parseSrc,
  parseStep,
  parseTransition,
  parseTransitionDelay,
  parseTransitionDuration,
  parseTransitionTimingFunction,
  styleToString
} from "./_utils.js";
import { createEventDispatcher, get_current_component, onDestroy, onMount } from "svelte/internal";
</script>

<script>export let alt = void 0;
export let anchor = void 0;
export let bot = void 0;
export let className = void 0;
export let focus = void 0;
export let intrinsic = void 0;
export let mediaTag;
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
let media;
const observer = new Observer((_state) => {
  state = _state;
});
const stateDispatcher = createEventDispatcher();
$:
  stateDispatcher(`statechange`, { state });
$:
  isVideo = mediaTag === `video`;
$:
  parsedAlt = parseAlt(alt);
$:
  parsedAnchor = parseAnchor(anchor);
$:
  parsedBot = parseBot(bot);
$:
  parsedEager = parseEager(eager);
$:
  parsedFocus = parseFocus(focus);
$:
  parsedIntrinsic = parseIntrinsic(intrinsic);
$:
  parsedMode = parseMode(mode);
$:
  parsedPlaceholder = parsePlaceholder(placeholder, src);
$:
  parsedPosition = parsePosition(position);
$:
  parsedPreTransform = parsePreTransform(preTransform);
$:
  parsedRatio = parseRatio(ratio);
$:
  parsedSrc = mediaTag && parseSrc(src);
$:
  parsedStep = parseStep(step);
$:
  parsedTransition = parseTransition(transition);
$:
  parsedTransitionDelay = parseTransitionDelay(transitionDelay);
$:
  parsedTransitionDuration = parseTransitionDuration(transitionDuration);
$:
  parsedTransitionTimingFunction = parseTransitionTimingFunction(transitionTimingFunction);
$:
  _alt = isVideo ? void 0 : computeAlt(parsedAlt, parsedSrc);
$:
  _data = computeData(
    parsedAnchor,
    parsedBot,
    parsedEager,
    parsedFocus,
    parsedIntrinsic,
    isVideo,
    parsedMode,
    parsedPreTransform,
    parsedSrc,
    parsedStep
  );
$:
  _placeholderStyle = styleToString(computePlaceholderStyle(
    parsedAnchor,
    parsedFocus,
    parsedMode,
    parsedPlaceholder,
    parsedPosition,
    parsedPreTransform,
    parsedRatio,
    parsedSrc,
    parsedTransition,
    parsedTransitionDelay,
    parsedTransitionDuration,
    parsedTransitionTimingFunction,
    observer.setPlaceholderData
  ));
$:
  _style = styleToString(computeStyle(
    parsedAnchor,
    parsedMode,
    parsedPosition,
    parsedTransitionDelay,
    parsedTransitionDuration,
    parsedTransitionTimingFunction
  ));
$:
  _wrapperStyle = styleToString(computeWrapperStyle(parsedRatio));
$: {
  if (isWebComponents) {
    get_current_component().className = `${parseClassName(className) || ``} twic-d twic-i`;
  }
}
if (isBrowser) {
  onMount(() => {
    observer.setMedia(media);
  });
  onDestroy(() => {
    observer.destroy();
  });
}
</script>
{#if isWebComponents}
<div
    class = { computeWrapperClass( src, parsedTransition ) }
    style = { _wrapperStyle }
>
    <svelte:element this={ mediaTag }
        bind:this = { media }
        alt = { _alt }
        style = { _style }
        { ..._data }
    ></svelte:element>
    <div style = { _placeholderStyle } />
</div>
{:else}
<div class = {`twic-i ${ parseClassName( className ) || `` }`}>
    <div
        class = { computeWrapperClass( src, parsedTransition ) }
        style = { _wrapperStyle }
    >
        <svelte:element this={ mediaTag }
            bind:this = { media }
            alt = { _alt }
            style = { _style }
            { ..._data }
        ></svelte:element>
        <div style = { _placeholderStyle } />
    </div>
</div>
{/if}
