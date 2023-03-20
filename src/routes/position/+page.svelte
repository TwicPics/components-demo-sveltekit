<script>
  import TwicAbstract from '$lib/components/demo-wrapper/TwicAbstract.svelte';
  import TwicWrapper from '$lib/components/demo-wrapper/TwicWrapper.svelte';
  import Code from '$lib/components/Code.svelte';
  import { TwicImg } from '@twicpics/components/sveltekit';

  const landscapeImgUrl = `components/position/horse.jpg`;
  const portraitImgUrl = `components/position/forest.jpg`;
  const horizontalPositionArray = [`left`, `right`, `center`];
  let horizontalPositionIndex = 0;
  const verticalPositionArray = [`top`, `bottom`, `center`];
  let verticalPositionIndex = 0;

  const onChangePosition = () => {
    horizontalPositionIndex = (horizontalPositionIndex + 1) % horizontalPositionArray.length;
    verticalPositionIndex = (verticalPositionIndex + 1) % verticalPositionArray.length;
  };
</script>

<div id="twic-position-container">
  <TwicWrapper filename="src/routes/position/+page.svelte">
    <TwicAbstract title="position property">
      <p>
        In <Code>contain</Code> mode,
        <strong>
          the <dfn>position</dfn> property changes the location of the image inside the area of the component.
        </strong>
      </p>
      <p>
        The syntax is the same as for CSS position properties (e.g.
        <Code>background-position</Code> or
        <Code>object-position</Code>).
      </p>
      <p>
        Useful values are <Code>top</Code>,
        <Code>bottom</Code>,
        <Code>left</Code>, and
        <Code>right</Code>, but all valid CSS position values are valid.
      </p>
      <p>
        If you only need border-based positionning, you can also use <a
          href="/anchor"
          target="_blank"
          rel="noreferrer">anchor</a
        > property.
      </p>
    </TwicAbstract>
    <div class="twic-testing-container">
      <button class="twic-button" on:click={onChangePosition}>
        Click to change the position
      </button>
    </div>
    <div class="twic-grid">
      <div class="twic-item">
        <TwicImg
          src={landscapeImgUrl}
          mode="contain"
          placeholder="none"
          position={verticalPositionArray[verticalPositionIndex]}
        />
        <span>
          <Code>position="{verticalPositionArray[verticalPositionIndex]}"</Code>
        </span>
      </div>
      <div class="twic-item">
        <TwicImg
          src={portraitImgUrl}
          mode="contain"
          placeholder="none"
          position={horizontalPositionArray[horizontalPositionIndex]}
        />
        <span>
          <span class="twic-code"
            >position="{horizontalPositionArray[horizontalPositionIndex]}"</span
          >
        </span>
      </div>
      <div class="twic-item">
        <TwicImg src={landscapeImgUrl} mode="contain" placeholder="none" />
        <span>No position set (<Code>center</Code> by default)</span>
      </div>
      <div class="twic-item">
        <TwicImg src={portraitImgUrl} mode="contain" placeholder="none" />
        <span>No position set (<Code>center</Code> by default)</span>
      </div>
    </div>
  </TwicWrapper>
</div>

