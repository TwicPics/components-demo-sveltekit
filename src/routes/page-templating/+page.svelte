<script>
  import TwicAbstract from '$lib/components/demo-wrapper/TwicAbstract.svelte';
  import TwicWrapper from '$lib/components/demo-wrapper/TwicWrapper.svelte';
  import Code from '$lib/components/Code.svelte';
  import TwicImg from '@twicpics/components/sveltekit/TwicImg.svelte';

  let srcIsSet = false;

  const images = [
    `components/src-not-set/woman-1.jpg`,
    `components/src-not-set/boat.jpg`,
    `components/src-not-set/vase.jpg`,
    `components/src-not-set/street.jpg`,
    `components/src-not-set/sea.jpg`,
    `components/src-not-set/flowers.jpg`,
    `components/src-not-set/bird.jpg`,
    `components/src-not-set/feet.jpg`,
    `components/src-not-set/lemons.jpg`,
    `components/src-not-set/swimming-pool.jpg`,
    `components/src-not-set/man.jpg`,
    `components/src-not-set/kodak.jpg`
  ];
</script>

<!-- demonstrates the default red placeholder when the property src is not set -->
<div id="twic-working-without-images-container">
  <TwicWrapper filename="src/routes/page-templating/+page.svelte">
    <TwicAbstract title="Prepare your page template">
      <p>
        When you develop the page template and can't or don't want to integrate your images at this
        first stage, it is possible
        <br /> not to assign a value to the <Code>src</Code> property.
      </p>
      <p>
        In this case, TwicPics components will generate a default red placeholder, which displays
        the dimensions of the image container.
      </p>
    </TwicAbstract>
    <div class="twic-testing-container">
      <button class="twic-button" on:click={() => (srcIsSet = !srcIsSet)}>
        Click to {srcIsSet ? `unset` : `set`} the src property
      </button>
    </div>
    <div class="twic-grid">
      {#each images as image, i}
        <div class="twic-item">
          <TwicImg
            src={srcIsSet ? image : ``}
            placeholder="preview"
            ratio={i % 2 === 0 ? 1 : '4:3'}
          />
        </div>
      {/each}
    </div>
  </TwicWrapper>
</div>
