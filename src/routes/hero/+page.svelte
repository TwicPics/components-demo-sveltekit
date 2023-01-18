<script>
  import TwicAbstract from '$lib/components/demo-wrapper/TwicAbstract.svelte';
  import TwicWrapper from '$lib/components/demo-wrapper/TwicWrapper.svelte';
  import Code from '$lib/components/Code.svelte';
  import { TwicImg } from '@twicpics/components/sveltekit';
</script>

<div id="twic-hero-container">
  <TwicWrapper filename="src/routes/hero/+page.svelte">
    <div class="twic-demo-container">
      <TwicAbstract title="Hero image">
        <p>To display a hero image (or video) you need to :</p>
        <ul>
          <li>define the dimensions of TwicImg (or TwicVideo) especially it's height.</li>
          <li>
            use <Code>ratio="none"</Code> to free
            <a href="/ratio" target="_blank" rel="noreferrer">aspect ratio</a>
          </li>
          <li>
            specify the dimensions of the original image in <a
              href="/intrinsic"
              target="_blank"
              rel="noreferrer">intrinsic</a
            >
            property as in <Code>intrinsic="3840x2160"</Code>
          </li>
        </ul>
        <p>
          Your hero media should resize itself according to the viewport while preserving its
          intrinsic ratio aspect.
        </p>
        <p>
          <strong>Change the dimensions of your browser </strong>
          to see the image adapt it's new viewport.
        </p>
      </TwicAbstract>
      <div class="hero">
        <TwicImg src="components/goldenGate.jpg" ratio="none" intrinsic="3840x2160" />
      </div>
    </div>
  </TwicWrapper>
</div>

<style lang="scss">
  #twic-hero-container {
    & :global(#twic-demo-container) {
      @media screen and (min-width: 1600px) {
        max-width: 95% !important;
      }
    }

    & :global(.twic-abstract) {
      margin-bottom: unset !important;
    }
  }
  .twic-demo-container {
    background-color: rgba(#ffffff, $alpha: 0.8);
    padding: 30px;

    .hero {
      z-index: -1;
      opacity: 0.8;
      position: absolute;
      top: 0;
      left: 0;
      width: 100vw;
      & :global(.twic-i) {
        height: 100vh;
      }
    }
  }
</style>
