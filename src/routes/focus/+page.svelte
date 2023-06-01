<script>
  import TwicAbstract from '$lib/components/demo-wrapper/TwicAbstract.svelte';
  import TwicWrapper from '$lib/components/demo-wrapper/TwicWrapper.svelte';
  import Code from '$lib/components/Code.svelte';
  import TwicImg from '@twicpics/components/sveltekit/TwicImg.svelte';

  const imgUrl = `components/puppy.jpg`;
  const focusArray = [``, `1920x1282`, `auto`];
  let focusIndex = 0;

  const onChangeFocus = () => {
    focusIndex = (focusIndex + 1) % focusArray.length;
  };
</script>

<div id="twic-focus-container">
  <TwicWrapper filename="src/routes/focus/+page.svelte">
    <TwicAbstract title="focus property">
      <p>
        <strong>
          The <dfn>focus</dfn> property will change the focus point coordinates of the image
        </strong>
        (only useful with
        <Code>mode="cover"</Code>).
        <br />
        It allows to determine what should be visible when the image is cropped.
      </p>
      <p>
        You can set the focus by using coordinates or
        <Code>auto</Code> values:
      </p>
      <ul>
        <li>
          <strong>Coordinates</strong> represent a point in the image, specified as a couple of
          positive lengths, separated by the character <Code>x</Code>.
          <br />
          As an example, in
          <Code>focus="1920x1282"</Code>:<br />
          - <Code>1920</Code> is the coordinate along the x-axis (following the width of the image)
          <br />
          - and <Code>1282</Code> is the coordinate along the y-axis (following the height of the image)
        </li>
        <li>
          If <Code>auto</Code> is used in place of actual coordinates, the focus point will be chosen
          automagically for you!
        </li>
      </ul>
      <p>
        If you only need border-based positionning (<Code>top</Code>,
        <Code>bottom</Code>, etc), use
        <a href="/anchor" target="_blank" rel="noreferrer">anchor</a> instead.
      </p>
    </TwicAbstract>

    <div class="twic-grid">
      <div class="twic-item">
        <button class="twic-button" on:click={onChangeFocus}>
          Click to change the focus point
        </button>
        <TwicImg src={imgUrl} focus={focusArray[focusIndex]} ratio="4/5" placeholder="preview" />
        {#if focusArray[focusIndex]}
          <span>
            <Code>focus="{focusArray[focusIndex]}"</Code>
          </span>
        {:else}
          <span>
            <span>No focus</span>
            (default)
          </span>
        {/if}
      </div>
      <div class="twic-item">
        <TwicImg src={imgUrl} ratio="4/5" placeholder="preview" />
        <span>
          <span>No focus</span>
          (default)
        </span>
      </div>
      <div class="twic-item">
        <TwicImg src={imgUrl} ratio="4/5" focus="1920x1282" placeholder="preview" />
        <span>
          <Code>focus="1920x1282"</Code>
        </span>
      </div>
      <div class="twic-item">
        <TwicImg src={imgUrl} ratio="4/5" focus="auto" placeholder="preview" />
        <span>
          <Code>focus="auto"</Code>
        </span>
      </div>
    </div>
  </TwicWrapper>
</div>
