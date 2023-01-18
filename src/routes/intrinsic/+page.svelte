<script>
  import TwicAbstract from '$lib/components/demo-wrapper/TwicAbstract.svelte';
  import TwicWrapper from '$lib/components/demo-wrapper/TwicWrapper.svelte';
  import Code from '$lib/components/Code.svelte';
  import { TwicImg } from '@twicpics/components/sveltekit';
</script>

<div id="twic-intrinsic-container">
  <TwicWrapper filename="src/routes/intrinsic/+page.svelte">
    <div class="demo-container">
      <TwicAbstract title="intrinsic property">
        <p>
          <strong>
            The <dfn>intrinsic</dfn> property allows to specify the intrinsic dimensions of the
            image or video in pixel as in <Code>intrinsic="3840x2160"</Code>
          </strong>
        </p>
        <p>It prevents image or video upscaling and limits the number of generated variants</p>
        <p>
          Especially recommended when your image or video master has potentially smaller dimensions
          than those that may be displayed.
        </p>
        <p>
          This is often the case when using <a href="/hero" target="_blank" rel="noreferrer"
            >hero images and videos</a
          >.
        </p>
      </TwicAbstract>
      <div class="hero">
        <TwicImg src="components/intrinsic/moon.jpg" ratio="none" intrinsic="6526x3000" />
      </div>
    </div>
  </TwicWrapper>
</div>

<style lang="scss">
  #twic-intrinsic-container {
    & :global(#twic-demo-container) {
      @media screen and (min-width: 1600px) {
        max-width: 95% !important;
      }
    }

    & :global(.twic-abstract) {
      margin-bottom: unset !important;
    }
  }
  .demo-container {
    background-color: rgba(#ffffff, $alpha: 0.8);
    padding: 30px;
    margin-top: 20%;

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
