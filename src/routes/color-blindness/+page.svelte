<script>
  import TwicAbstract from '$lib/components/demo-wrapper/TwicAbstract.svelte';
  import TwicWrapper from '$lib/components/demo-wrapper/TwicWrapper.svelte';
  import Code from '$lib/components/Code.svelte';
  import TwicImg from '@twicpics/components/sveltekit/TwicImg.svelte';

  let indiceConfig = 0;

  const imgUrl = `components/color-blindless/umbrellas.jpg`;

  const config = [
    {
      achromatopsia: 'achromatopsia=0.5',
      deuteranopia: 'deuteranopia=0.5',
      protanopia: 'protanopia=0.5'
    },
    {
      achromatopsia: 'achromatopsia=1',
      deuteranopia: 'deuteranopia=1',
      protanopia: 'protanopia=1'
    },
    {
      achromatopsia: 'achromatopsia=0',
      deuteranopia: 'deuteranopia=0',
      protanopia: 'protanopia=0'
    }
  ];

  $: actualConfig = config[indiceConfig];
</script>

<div id="twic-color-blindness-container">
  <TwicWrapper filename="src/routes/color-blindness/+page.svelte">
    <TwicAbstract title="Color blindness filters">
      <p>
        You can apply correction filters for color blind people with our <strong
          >experimental transformations</strong
        >:
      </p>
      <ul>
        <li>
          <a
            href="https://www.twicpics.com/docs/reference/transformations?utm_source=github&utm_medium=organic&utm_campaign=components#span-classexperimentalachromatopsiaspan"
            target="_blank"
            rel="noreferrer"
          >
            <Code>preTransform="achromatopsia=number"</Code>
          </a>
        </li>
        <li>
          <a
            href="https://www.twicpics.com/docs/reference/transformations?utm_source=github&utm_medium=organic&utm_campaign=components#span-classexperimentaldeuteranopiaspan"
            target="_blank"
            rel="noreferrer"
          >
            <Code>preTransform="deuteranopia=number"</Code>
          </a>
        </li>
        <li>
          <a
            href="https://www.twicpics.com/docs/reference/transformations?utm_source=github&utm_medium=organic&utm_campaign=components#span-classexperimentalprotanopiaspan"
            target="_blank"
            rel="noreferrer"
          >
            <Code>preTransform="protanopia=number"</Code>
          </a>
        </li>
      </ul>
      <p>
        The number provided must be between 0 and 1 and represents the degree of colour blindness to
        be corrected.
      </p>
    </TwicAbstract>
    <div class="twic-testing-container">
      <button
        class="twic-button"
        on:click={() => (indiceConfig = (indiceConfig + 1) % config.length)}
      >
        Click to change color blindness correction degree
      </button>
    </div>
    <div class="twic-grid">
      <div class="twic-item">
        <TwicImg src={imgUrl} />
        <span> Original image </span>
      </div>
      <div class="twic-item">
        <TwicImg src={imgUrl} preTransform={actualConfig.achromatopsia} />
        <span> preTransform="{actualConfig.achromatopsia}" </span>
      </div>

      <div class="twic-item">
        <TwicImg src={imgUrl} preTransform={actualConfig.deuteranopia} />
        <span> preTransform="{actualConfig.deuteranopia}" </span>
      </div>
      <div class="twic-item">
        <TwicImg src={imgUrl} preTransform={actualConfig.protanopia} />
        <span> preTransform="{actualConfig.protanopia}" </span>
      </div>
    </div>
  </TwicWrapper>
</div>
