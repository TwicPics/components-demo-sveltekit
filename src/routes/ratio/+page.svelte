<script>
  import TwicAbstract from '$lib/components/demo-wrapper/TwicAbstract.svelte';
  import TwicWrapper from '$lib/components/demo-wrapper/TwicWrapper.svelte';
  import Code from '$lib/components/Code.svelte';
  import TwicImg from '@twicpics/components/sveltekit/TwicImg.svelte';

  const imgUrl = `components/woman-and-winter.jpg`;
  const ratioValues = [`2.39`, `16/9`, `4/3`, ``, `0.75`];
  let ratioIndex = 0;
  let fullWidthAera = true;

  const onChangeRatio = () => {
    ratioIndex = (ratioIndex + 1) % ratioValues.length;
  };

  const onChangeAreaWidth = () => {
    fullWidthAera = !fullWidthAera;
  };
</script>

<!-- demonstrates ratio features -->
<div id="twic-ratio-container">
  <TwicWrapper filename="src/routes/ratio/+page.svelte">
    <TwicAbstract title="ratio property">
      <p>
        <strong>
          The <dfn>ratio</dfn> property determines the value of the width/height ratio of the image display
          area.
        </strong>
      </p>
      <p>Its value can be:</p>
      <ul>
        <li>
          a ratio expression of the form width/height like
          <Code>4/3</Code>,
          <Code>16/9</Code>, or
          <Code>1/1</Code>.
        </li>
        <li>
          a number that is the result of such an expression like
          <Code>1.85</Code>,
          <Code>2</Code>, or
          <Code>0.5</Code>.
        </li>
        <li>
          "none" as in <Code>ratio="none"</Code>. In this case the media displayed has a "free"
          ratio defined by the dimensions of its container. Particularly useful in the case of
          <a href="/hero" target="_blank" rel="noreferrer">image or video hero</a>.
        </li>
      </ul>
      <p>
        A square area (<Code>ratio="1"</Code>) will be created by default.
      </p>
    </TwicAbstract>
    <div class="twic-testing-container">
      <button class="twic-button" on:click={onChangeRatio}>
        Click to change the aspect-ratio
      </button>
      <button class="twic-button" on:click={onChangeAreaWidth}>
        Click to change the area width
      </button>
    </div>
    <div class="twic-grid" class:half-width={fullWidthAera === false}>
      <div class="twic-item">
        <TwicImg src={imgUrl} ratio={ratioValues[ratioIndex]} />
        <span>
          <span class="twic-code"
            >ratio="{ratioValues[ratioIndex] ? ratioValues[ratioIndex] : 1}"</span
          >
          (mode is <Code>cover</Code>)
        </span>
      </div>
      <div class="twic-item">
        <TwicImg src={imgUrl} mode="contain" ratio={ratioValues[ratioIndex]} />
        <span>
          <span class="twic-code"
            >ratio="{ratioValues[ratioIndex] ? ratioValues[ratioIndex] : 1}"</span
          >
          (mode is <Code>contain</Code>)
        </span>
      </div>
    </div>
  </TwicWrapper>
</div>

<style lang="scss">
  #twic-ratio-container {
    .twic-grid {
      --twic-grid-columns-width: 40%;
      &.full-width {
        .twic-item {
          width: 100%;
        }
      }

      &.half-width {
        .twic-item {
          width: 50%;
          margin: auto;
        }
      }
    }
  }
</style>
