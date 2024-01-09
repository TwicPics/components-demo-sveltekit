<script>
  // @ts-nocheck

  import TwicAbstract from '$lib/components/demo-wrapper/TwicAbstract.svelte';
  import TwicWrapper from '$lib/components/demo-wrapper/TwicWrapper.svelte';
  import Code from '$lib/components/Code.svelte';
  import TwicImg from '@twicpics/components/sveltekit/TwicImg.svelte';

  let indiceConfig = 0;

  const imgUrl = `components/refit/dog-looking-water.jpg`;

  const config = [
    {
      mode: `cover`,
      refit: true
    },
    {
      mode: `cover`,
      refit: `5p`
    },
    {
      mode: `contain`,
      refit: true
    },
    {
      mode: `contain`,
      refit: `5p`
    }
  ];

  $: actualConfig = config[indiceConfig];
</script>

<div id="twic-color-blindness-container">
  <TwicWrapper filename="src/routes/refit/+page.svelte">
    <TwicAbstract title="refit property">
      <p>
        <strong>
          The <dfn>refit</dfn> property:
        </strong>
      </p>
      <ul>
        <li>
          reframes the image to maximize the area occupied by the main object(s) while respecting <a href="/ratio" target="_blank" rel="noreferrer"> ratio </a> in <Code>cover</Code> <a href="/mode" target="_blank" rel="noreferrer"> mode </a>.
        </li>
        <li>
          crops the image as close as possible to the main object(s) in <Code>contain</Code> <a href="/mode" target="_blank" rel="noreferrer"> mode </a>.
        </li>
      </ul>
      <p>
        To enable <dfn>refit</dfn>, simply add the <Code>refit</Code> property to the <Code
          >TwicImg</Code
        > component like in
        <Code>&lt;TwicImg src="image.jpg" refit/&gt;</Code>
      </p>
      <p>
        By default, the subject will be placed at the center of the resulting image but
        <strong>it is possible to align the subject</strong> with a given border by specifying an
        <a href="/anchor" target="_blank" rel="noreferrer"> anchor </a>
        .
      </p>
      <p>
        Also by default, the subject will touch the borders of the resulting image. This can be
        avoided by <strong>adding padding</strong> like in
        <Code>&lt;TwicImg src="image.jpg" refit="5p"/&gt;</Code>.
      </p>
      <p>
        <a
          href="https://www.twicpics.com/blog/components-feature-refit"
          target="_blank"
          rel="noreferrer"
        >
          Want to see more examples?
        </a>
      </p>
    </TwicAbstract>
    <div class="twic-testing-container">
      <button
        class="twic-button"
        on:click={() => (indiceConfig = (indiceConfig + 1) % config.length)}
      >
        Click to change props
      </button>
    </div>
    <div class="twic-grid">
      <div class="twic-item">
        <TwicImg src="{imgUrl}?${indiceConfig}" mode={actualConfig.mode} />
        <span> Original image + mode="{actualConfig.mode}" </span>
      </div>
      <div class="twic-item">
        <TwicImg src={imgUrl} mode={actualConfig.mode} ratio="4/3" refit={actualConfig.refit} />
        <span>
          {actualConfig.refit === true ? `refit` : `refit="${actualConfig.refit}"`}
          + mode="{actualConfig.mode}"
        </span>
      </div>

      <div class="twic-item">
        <TwicImg
          src={imgUrl}
          anchor="left"
          mode={actualConfig.mode}
          ratio="4/3"
          refit={actualConfig.refit}
        />
        <span>
          {actualConfig.refit === true ? `refit` : `refit="${actualConfig.refit}"`}
          + mode="{actualConfig.mode} + anchor="left"
        </span>
      </div>
      <div class="twic-item">
        <TwicImg
          src={imgUrl}
          anchor="right"
          mode={actualConfig.mode}
          ratio="4/3"
          refit={actualConfig.refit}
        />
        <span>
          {actualConfig.refit === true ? `refit` : `refit="${actualConfig.refit}"`}
          + mode="{actualConfig.mode} + anchor="right"
        </span>
      </div>
    </div>
  </TwicWrapper>
</div>
