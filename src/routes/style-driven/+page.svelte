<script>
  import TwicAbstract from '$lib/components/demo-wrapper/TwicAbstract.svelte';
  import TwicWrapper from '$lib/components/demo-wrapper/TwicWrapper.svelte';
  import Code from '$lib/components/Code.svelte';
  import { TwicImg } from '@twicpics/components/sveltekit';

  const imgUrl = `components/horse.jpg`;
</script>

<div id="twic-style-driven-container">
  <TwicWrapper filename="src/routes/style-driven/+page.svelte">
    <TwicAbstract title="CSS style driven">
      <p>
        You can set up the TwicPics components using pure CSS and the power of <a
          href="https://www.twicpics.com/docs/components/sveltekit#css-variables"
          target="_blank"
          rel="noreferrer">CSS variable</a
        >.
      </p>
    </TwicAbstract>
    <p>
      <b>1.</b> Set up aspect ratio with <Code>--twic-ratio</Code> css variable.
    </p>
    <div class="twic-grid">
      <div class="twic-item square">
        <TwicImg src={imgUrl} />
        <span>
          class
          <Code>square</Code>
        </span>
      </div>
      <div class="twic-item portrait">
        <TwicImg src={imgUrl} />
        <span>
          class
          <Code>portrait</Code>
        </span>
      </div>
      <div class="twic-item landscape">
        <TwicImg src={imgUrl} />
        <span>
          class
          <Code>landscape</Code>
        </span>
      </div>
    </div>
    <p>
      <b>2.</b> Set up <a href="/zoom" target="_blank" rel="noreferrer">zoom</a> value with <Code
        >--twic-zoom</Code
      > css variable.
    </p>
    <div class="twic-grid">
      <div class="twic-item zoom-sm">
        <TwicImg src={imgUrl} zoom="css" />
        <span>
          class
          <Code>zoom-sm</Code>
        </span>
      </div>
      <div class="twic-item zoom-md">
        <TwicImg src={imgUrl} zoom="css" />
        <span>
          class
          <Code>zoom-md</Code>
        </span>
      </div>
      <div class="twic-item zoom-lg">
        <TwicImg src={imgUrl} zoom="css" />
        <span>
          class
          <Code>zoom-lg</Code>
        </span>
      </div>
    </div>
    <p>
      <b>3.</b> Class combination: you can set up multiples props as <Code>object-fit</Code> and
      <Code>position</Code> with
      <Code>--twic-mode</Code> and
      <Code>twic-position</Code>
    </p>
    <br />
    <div class="twic-grid">
      <div class="twic-item contain left">
        <TwicImg src={imgUrl} ratio="16/9" />
        <span>
          class
          <Code>contain</Code>& class
          <Code>left</Code>
        </span>
      </div>
      <div class="twic-item contain right">
        <TwicImg src={imgUrl} ratio="16/9" />
        <span>
          class
          <Code>contain</Code>& class
          <Code>right</Code>
        </span>
      </div>
      <div class="twic-item cover">
        <TwicImg src={imgUrl} focus="50px100p" ratio="16/9" />
        <span>
          class
          <Code>cover</Code>
        </span>
      </div>
    </div>
    <p>
      <b>4.</b> Other classical settings (here with
      <Code>width</Code>)
    </p>
    <br />
    <div class="twic-grid">
      <div class="twic-item lg">
        <TwicImg src={imgUrl} />
        <span>
          class
          <Code>lg</Code>
        </span>
      </div>
      <div class="twic-item md">
        <TwicImg src={imgUrl} />
        <span>
          class
          <Code>md</Code>
        </span>
      </div>
      <div class="twic-item sm">
        <TwicImg src={imgUrl} />
        <span>
          class
          <Code>sm</Code>
        </span>
      </div>
    </div>
  </TwicWrapper>
</div>

<style lang="scss">
  #twic-style-driven-container {
    .twic-grid {
      margin-bottom: 60px;
    }
    .landscape {
      --twic-ratio: calc(4 / 3);
    }
    .portrait {
      --twic-ratio: calc(3 / 4);
    }
    .square {
      --twic-ratio: calc(1);
    }
    .contain {
      --twic-mode: contain;
    }
    .cover {
      --twic-mode: cover;
    }
    .left {
      --twic-position: left;
    }
    .right {
      --twic-position: right;
    }
    .lg {
      width: 300px;
    }
    .md {
      width: 150px;
    }
    .sm {
      width: 100px;
    }
    .zoom-sm {
      --twic-zoom: 1.5;
    }
    .zoom-md {
      --twic-zoom: 2;
    }
    .zoom-lg {
      --twic-zoom: 3;
    }
  }
</style>
