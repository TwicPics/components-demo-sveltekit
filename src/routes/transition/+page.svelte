<script>
  import { TwicImg } from '@twicpics/components/sveltekit';
  import TwicAbstract from '$lib/components/demo-wrapper/TwicAbstract.svelte';
  import TwicWrapper from '$lib/components/demo-wrapper/TwicWrapper.svelte';
  import Code from '$lib/components/Code.svelte';

  const imgUrl = `components/peacock.jpg`;
  let showTransitions = false;

  const TRANSITIONS_TEXT = `Click to reveal the transitions`;
  const IMG_TEXT = `Click to show the images`;
  let toggleBtnText = TRANSITIONS_TEXT;

  const toggleTransitions = () => {
    showTransitions = !showTransitions;
    if (showTransitions) {
      toggleBtnText = IMG_TEXT;
    } else {
      toggleBtnText = TRANSITIONS_TEXT;
    }
  };
</script>

<!-- demonstrates transition features -->
<div id="twic-transition-container">
  <TwicWrapper filename="src/routes/transition/+page.svelte">
    <TwicAbstract title="transition properties">
      <p>
        <strong>
          The <dfn>transition</dfn> properties allow you to customize the effect used to reveal the image
          once it has been loaded
        </strong>.
      </p>
      <ul>
        <li>
          <Code>transition</Code>: determines how the image will be revealed once loaded (default:
          <Code>fade</Code>). The possible values are:
          <br />
          - <Code>fade</Code>, for a
          <em>fade in</em> effect<br />
          - <Code>zoom</Code>, for a
          <em>zoom</em> effect<br />
          - <Code>fade+zoom</Code>, for both
          <em>fade</em> and <em>zoom</em> effects<br />
          - or <Code>none</Code>, for no transition
        </li>
        <li>
          <Code>transitionDelay</Code>: transition delay of the transition effect (default: <Code
            >0ms</Code
          >).
        </li>
        <li>
          <Code>transitionDuration</Code>: duration of the transition effect (default: <Code
            >400ms</Code
          >).
        </li>
        <li>
          <Code>transitionTimingFunction</Code>: CSS timing function applied to the transition
          effect (default:
          <Code>ease</Code>).
        </li>
      </ul>
    </TwicAbstract>
    <div class="twic-testing-container">
      <button class="twic-button" on:click={toggleTransitions}>
        {toggleBtnText}
      </button>
    </div>
    <div class="twic-grid" class:show-transitions={showTransitions}>
      <div class="twic-item">
        <TwicImg src={imgUrl} placeholder="preview" />
        <span>Default values</span>
      </div>
      <div class="twic-item">
        <TwicImg src={imgUrl} transition="none" placeholder="preview" />
        <span>
          <Code>transition="none"</Code>
        </span>
      </div>
      <div class="twic-item">
        <TwicImg src={imgUrl} transition="zoom" />
        <span>
          <Code>transition="zoom"</Code>
        </span>
      </div>
      <div class="twic-item">
        <TwicImg src={imgUrl} transition="fade" />
        <span>
          <Code>transition="fade"</Code>
        </span>
      </div>
      <div class="twic-item">
        <TwicImg src={imgUrl} transition="fade+zoom" />
        <span>
          <Code>transition="fade+zoom"</Code>
        </span>
      </div>
      <div class="twic-item">
        <TwicImg src={imgUrl} transitionDuration="2000ms" placeholder="preview" />
        <span>
          <Code>transitionDuration="2000ms"</Code>
        </span>
      </div>
      <div class="twic-item">
        <TwicImg
          src={imgUrl}
          transitionDuration="2000ms"
          transitionTimingFunction="linear"
          placeholder="preview"
        />
        <span>
          <Code>transitionDuration="2000ms"</Code>
          and <Code>transitionTimingFunction="linear"</Code>
        </span>
      </div>
      <div class="twic-item">
        <TwicImg
          src={imgUrl}
          transitionDelay="2000ms"
          transitionTimingFunction="linear"
          placeholder="preview"
        />
        <span>
          <Code>transitionDelay="2000ms"</Code>
        </span>
      </div>
    </div>
  </TwicWrapper>
</div>

<style lang="scss">
  #twic-transition-container {
    .show-transitions {
      :global(.twic-tf img) {
        opacity: 0 !important;
      }
      :global(.twic-tf img + div) {
        opacity: 1 !important;
      }
      :global(.twic-tz img) {
        transform: scale(0) !important;
      }
    }
  }
</style>
