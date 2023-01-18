<script>
  import TwicAbstract from '$lib/components/demo-wrapper/TwicAbstract.svelte';
  import TwicWrapper from '$lib/components/demo-wrapper/TwicWrapper.svelte';
  import { TwicImg } from '@twicpics/components/sveltekit';
  import Code from '$lib/components/Code.svelte';

  const verticalConfig = [
    {
      anchor: `center`
    },
    {
      anchor: `top`
    },
    {
      anchor: `bottom`
    }
  ];

  const horizontalConfig = [
    {
      anchor: `center`
    },
    {
      anchor: `left`
    },
    {
      anchor: `right`
    }
  ];

  let indiceConfig = 0;

  $: actualHorizontal = horizontalConfig[indiceConfig];
  $: actualVertical = verticalConfig[indiceConfig];
</script>

<div id="twic-anchor-container">
  <TwicWrapper filename="src/routes/anchor/+page.svelte">
    <TwicAbstract title="anchor property">
      <p>
        <strong>
          The <dfn>anchor</dfn> property positions the image in both
          <Code>contain</Code>
          and <Code>cover</Code> mode.
        </strong>
      </p>
      It allows to:
      <ul>
        <li>
          position the letterboxed image in its container in <Code>contain</Code> mode.
        </li>
        <li>
          determine what should be visible when the image is cropped in <span class="twic-code"
            >cover</span
          > mode.
        </li>
      </ul>
      <p>
        Accepted values are <Code>top</Code>,
        <Code>bottom</Code>, <Code>left</Code>,
        <Code>right</Code>, <Code>top-left</Code>,
        <Code>top-right</Code>, <Code>bottom-left</Code>, <Code>bottom-right</Code> and
        <Code>center</Code>.
      </p>
      <p>
        Please note that anchor is applied after an eventual transformation defined with <a
          href="/pre-transform"
          target="_blank"
          rel="noreferrer">preTransform</a
        > property.
      </p>
      <p>
        For a more specific positionning see <a href="/position" target="_blank" rel="noreferrer"
          >position</a
        >
        or <a href="/focus" target="_blank" rel="noreferrer">focus</a>
        properties in for
        <Code>contain</Code> or
        <Code>cover</Code> mode respectively.
      </p>
    </TwicAbstract>
    <div class="twic-testing-container">
      <button
        class="twic-button"
        on:click={() => (indiceConfig = (indiceConfig + 1) % horizontalConfig.length)}
      >
        Click to see anchor effect
      </button>
    </div>
    <div class="twic-grid">
      <div class="twic-item">
        <TwicImg
          src="components/anchor/anchor.jpg"
          preTransform="focus=bottom-right/cover=1:1"
          anchor={actualHorizontal.anchor}
          mode="contain"
          ratio="4/3"
        />
        <span>
          <span>
            <Code>anchor="{actualHorizontal.anchor}"</Code>
            <Code>mode="contain"</Code>
          </span>
        </span>
      </div>
      <div class="twic-item">
        <TwicImg
          src="components/anchor/anchor.jpg"
          preTransform="focus=bottom-right/cover=1:1"
          anchor={actualVertical.anchor}
          mode="contain"
          ratio="3/4"
        />
        <span>
          <span>
            <span>
              <Code>anchor="{actualVertical.anchor}"</Code>
              <Code>mode="contain"</Code>
            </span>
          </span>
        </span>
      </div>
      <div class="twic-item">
        <TwicImg
          src="components/anchor/anchor.jpg"
          preTransform="focus=bottom/cover=1:1"
          anchor={actualHorizontal.anchor}
          mode="cover"
          ratio="3/4"
        />
        <span>
          <span>
            <Code>anchor="{actualHorizontal.anchor}"</Code>
            <Code>mode="cover"</Code>
          </span>
        </span>
      </div>
      <div class="twic-item">
        <TwicImg
          src="components/anchor/anchor.jpg"
          preTransform="cover=1:1"
          anchor={actualVertical.anchor}
          mode="cover"
          ratio="4/3"
        />
        <span>
          <span>
            <span>
              <Code>anchor="{actualVertical.anchor}"</Code>
              <Code>mode="cover"</Code>
            </span>
          </span>
        </span>
      </div>
    </div>
  </TwicWrapper>
</div>

<style lang="scss">
  #twic-anchor-container {
    :global(.twic-item .twic-w) {
      background-color: #00ffa3;
      display: block;
    }
  }
</style>
