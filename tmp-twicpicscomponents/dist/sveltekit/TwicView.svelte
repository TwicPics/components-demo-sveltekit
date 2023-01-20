<svelte:options tag={null}/>
<script context="module">import { getDataAttributeName, isWebComponents } from "./_utils.js";
import { get_current_component } from "svelte/internal";
</script>
<script>if (isWebComponents) {
  get_current_component().setAttribute(getDataAttributeName(`view`), ``);
}
</script>
{ #if isWebComponents }
<slot />
{ :else }
<div { ...{ [ getDataAttributeName( `view` ) ]: `` } } { ...$$restProps }>
    <slot />
</div>
{ /if }
