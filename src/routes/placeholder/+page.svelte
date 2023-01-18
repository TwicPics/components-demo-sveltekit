<script>
  import TwicAbstract from '$lib/components/demo-wrapper/TwicAbstract.svelte';
  import TwicWrapper from '$lib/components/demo-wrapper/TwicWrapper.svelte';
  import { TwicImg } from '@twicpics/components/sveltekit';
  import Code from '$lib/components/Code.svelte';

  const imgUrl = `components/cat.jpg`;
  let showPlaceholders = false;

  const PLACEHOLDERS_TEXT = `Click to reveal the placeholders`;
  const IMG_TEXT = `Click to show the images`;
  let toggleBtnText = PLACEHOLDERS_TEXT;

  const togglePlaceholder = () => {
    showPlaceholders = !showPlaceholders;
    if (showPlaceholders) {
      toggleBtnText = IMG_TEXT;
    } else {
      toggleBtnText = PLACEHOLDERS_TEXT;
    }
  };
</script>

<!-- demonstrates placeholders features -->
<div id="twic-placeholder-container">
  <TwicWrapper filename="src/routes/placeholder/+page.svelte">
    <TwicAbstract title="placeholder property">
      <p>
        <strong>
          The <dfn>placeholder</dfn> property helps you optimize user experience, CLS, and implement
          the LQIP technique.
        </strong>
      </p>
      <p>
        TwicPics Components automatically adds a background placeholder to your images: their size
        are reserved in the page before the images are actually loaded.
      </p>
      <p>
        The <Code>placeholder</Code> values can be:
        <Code>preview</Code>,
        <Code>meancolor</Code>,
        <Code>maincolor</Code> or
        <Code>none</Code>.
      </p>
      <p>
        The browser is told to load a SVG version as a backgroung image first, then to replace it
        with the full version later on.
      </p>
      <p>
        When set to <Code>preview</Code> (the default value), a blurry version of your image is used
        as a background image.
      </p>
    </TwicAbstract>
    <div class="twic-testing-container">
      <button class="twic-button" on:click={togglePlaceholder}>
        {toggleBtnText}
      </button>
    </div>
    <div class="twic-grid" class:show-placeholders={showPlaceholders === true}>
      <div class="twic-item">
        <TwicImg src={imgUrl} placeholder="preview" />
        <span>
          <Code>placeholder="preview"</Code>
          (default value)
        </span>
      </div>
      <div class="twic-item">
        <TwicImg src={imgUrl} placeholder="meancolor" />
        <span>
          <Code>placeholder="meancolor"</Code>
        </span>
      </div>
      <div class="twic-item">
        <TwicImg src={imgUrl} placeholder="maincolor" />
        <span>
          <Code>placeholder="maincolor"</Code>
        </span>
      </div>
      <div class="twic-item">
        <TwicImg src={imgUrl} placeholder="none" />
        <span>
          <Code>placeholder="none"</Code>
        </span>
      </div>
    </div>
  </TwicWrapper>
</div>

<style lang="scss">
  #twic-placeholder-container {
    .show-placeholders {
      :global(img) {
        visibility: hidden !important;
      }
      :global(img + div) {
        opacity: 1 !important;
      }
    }
  }
</style>
