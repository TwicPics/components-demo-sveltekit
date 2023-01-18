<script>
  import TwicAbstract from '$lib/components/demo-wrapper/TwicAbstract.svelte';
  import TwicWrapper from '$lib/components/demo-wrapper/TwicWrapper.svelte';
  import Code from '$lib/components/Code.svelte';
  import { TwicImg } from '@twicpics/components/sveltekit';

  const imgUrl = `components/man-hiding-his-hands.jpg`;
</script>

<!-- demonstrates the preTransform property -->
<div id="twic-pretransform-container">
  <TwicWrapper filename="src/routes/pre-transform/+page.svelte">
    <TwicAbstract title="preTransform property">
      <p>
        <Code>preTransform</Code> is a slash-separated list of TwicPics API transformations that perform
        before the automatic resizing of the image.
      </p>
      <p>
        You can check the
        <a
          href="https://www.twicpics.com/docs/api/transformations"
          target="_blank"
          rel="noreferrer"
        >
          TwicPics documentation
        </a>
        to see the list of API transformations.
      </p>
      <p>
        If you set the <Code>focus</Code> property, it will apply before all transformations of the <Code
          >preTransform</Code
        > property.
      </p>
      <p>
        Be aware that using <Code>preTransform</Code> can lead to unexpected results, so use with caution!
      </p>
    </TwicAbstract>
    <div class="twic-grid">
      <div class="twic-item">
        <TwicImg src={imgUrl} />
        <span>
          No <Code>preTransform</Code>
        </span>
      </div>
      <div class="twic-item">
        <TwicImg src={imgUrl} preTransform="crop=600x400" />
        <span>
          <Code>preTransform="crop=600x400"</Code>
        </span>
      </div>
      <div class="twic-item">
        <TwicImg src={imgUrl} focus="100px100p" preTransform="crop=1400x1200" />
        <span>
          <Code>focus="100px100p"</Code>
          and <Code>preTransform="crop=1400x1200"</Code>
        </span>
      </div>
      <div class="twic-item">
        <TwicImg src={imgUrl} preTransform="flip=x" />
        <span>
          <Code>preTransform="flip=x"</Code>
        </span>
      </div>
    </div>
  </TwicWrapper>
</div>
