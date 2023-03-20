<script>
  import TwicAbstract from '$lib/components/demo-wrapper/TwicAbstract.svelte';
  import TwicWrapper from '$lib/components/demo-wrapper/TwicWrapper.svelte';
  import Code from '$lib/components/Code.svelte';
  import { TwicImg } from '@twicpics/components/sveltekit';

  const imgUrl = `components/fox.jpg`;
  const modeValues = [`cover`, `contain`];
  let modeIndex = 0;

  $: finalImgUrl = `${imgUrl}?${modeIndex}`; // trick to force image reload

  const onChangeMode = () => {
    modeIndex = (modeIndex + 1) % modeValues.length;
  };
</script>

<!-- demonstrates mode features (contain or cover) -->
<div id="twic-mode-container">
  <TwicWrapper filename="src/routes/mode/+page.svelte">
    <TwicAbstract title="mode property">
      <p>
        <strong>
          The
          <dfn>mode</dfn>
          property determines if the image fills or sits inside the area.
        </strong>
      </p>
      <p>Here are the two accepted values:</p>
      <ul>
        <li>
          <Code>cover</Code>:
          <span> the image fills the area and is cropped accordingly.</span>
        </li>
        <li>
          <Code>contain</Code>:
          <span> the image sits inside the area with no cropping.</span>
        </li>
      </ul>
    </TwicAbstract>
    <div class="twic-grid">
      <div class="twic-item">
        <button class="twic-button" on:click={onChangeMode}>
          Click to change the mode value
        </button>
        <TwicImg src={finalImgUrl} mode={modeValues[modeIndex]} />
        <span>
          <Code>mode="{modeValues[modeIndex]}"</Code>
        </span>
      </div>
      <div class="twic-item">
        <TwicImg src={imgUrl} />
        <span>No mode set (<Code>cover</Code> by default)</span>
      </div>
      <div class="twic-item">
        <TwicImg src={imgUrl} mode="cover" />
        <span>
          <Code>mode="cover"</Code>
        </span>
      </div>
      <div class="twic-item">
        <TwicImg src={imgUrl} mode="contain" />
        <span>
          <Code>mode="contain"</Code>
        </span>
      </div>
    </div>
  </TwicWrapper>
</div>

