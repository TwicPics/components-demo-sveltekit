<script>
  import { TwicImg } from '@twicpics/components/sveltekit';
  import TwicAbstract from '$lib/components/demo-wrapper/TwicAbstract.svelte';
  import TwicWrapper from '$lib/components/demo-wrapper/TwicWrapper.svelte';
  import Code from '$lib/components/Code.svelte';

  let zoom = 1.5;

  const changeZoom = () => {
    zoom += 0.5;
    if (zoom > 4) {
      zoom = 1.5;
    }
  };
</script>

<!-- demonstrates transition features -->
<div id="twic-zoom-container">
  <TwicWrapper filename="src/routes/zoom/+page.svelte">
    <TwicAbstract title="zoom property">
      <p>
        <strong>
          The <dfn>zoom property</dfn> allows you to display a <dfn>lazy-loaded enlarged</dfn> version
          of your image when you hover the mouse
        </strong>.
      </p>
      <Code>zoom</Code> value
      <ul>
        <li>
          is a number <strong>strictly superior to 1</strong>
        </li>
        <li>
          can be set using the <Code>zoom</Code> prop of <Code>TwicImg</Code> component or through <Code
            >--twic-zoom</Code
          >
          <a href="/style-driven" target="_blank" rel="noreferrer">CSS variable</a>.
        </li>
        <li>
          can be combined with the
          <a href="/preTransform" target="_blank" rel="noreferrer">preTransform</a> property
        </li>
      </ul>

      <p>
        We recommend using <a href="/intrinsic" target="_blank" rel="noreferrer">intrinsic</a> property
        to avoid upscaling.
      </p>
      <p>
        It applies only to <Code>TwicImg</Code> component in cover
        <a href="/mode" target="_blank" rel="noreferrer">mode</a>.
      </p>
    </TwicAbstract>
    <div class="twic-grid">
      <div class="twic-item">
        <TwicImg {zoom} src="components/zoom/stamps-on-booklet.jpg" intrinic="2996x4502" />
        <span>
          <Code>zoom="{zoom}"</Code>
        </span>
      </div>
      <div class="twic-item">
        <TwicImg
          {zoom}
          src="components/zoom/stamp-on-envelopes.jpg"
          intrinsic="2400x3600"
          ratio="4/3"
        />
        <span>
          <Code>ratio="4/3" + zoom="{zoom}"</Code>
        </span>
      </div>
      <div class="twic-item">
        <TwicImg
          {zoom}
          src="components/zoom/stamp-on-envelopes.jpg"
          preTransform="focus=40px35p/crop=800x800"
          intrinsic="800x800"
        />
        <span>
          <Code>preTransform + zoom="{zoom}"</Code>
        </span>
      </div>
    </div>
    <div class="twic-testing-container">
      <button class="twic-button" on:click={changeZoom}> Change zoom factor </button>
    </div>
  </TwicWrapper>
</div>

<style lang="scss">
  #twic-zoom-container {
    .twic-grid {
      --twic-grid-columns-width: calc(400px);
    }
    .twic-item {
      cursor: crosshair;
    }
  }
</style>
