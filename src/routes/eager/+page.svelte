<script>
  import TwicAbstract from '$lib/components/demo-wrapper/TwicAbstract.svelte';
  import TwicWrapper from '$lib/components/demo-wrapper/TwicWrapper.svelte';
  import TwicImg from '@twicpics/components/sveltekit/TwicImg.svelte';
  import { onDestroy } from 'svelte';

  let indice = 0;
  let interval;

  const images = [
    {
      src: `components/eager/subway-1.jpg`,
      preTransform: 'flip=x'
    },
    {
      src: `components/eager/subway-2.jpg`,
      focus: `50px30p`
    },
    {
      src: `components/eager/subway-3.jpg`
    },
    {
      src: `components/eager/subway-4.jpg`
    },
    {
      src: `components/eager/subway-5.jpg`
    },
    {
      src: `components/eager/subway-6.jpg`
    }
  ];

  const update = () => {
    indice = (indice + 1) % images.length;
    if (indice === 0) {
      clearInterval(interval);
      interval = undefined;
    }
  };

  const startAnimation = () => {
    if (!interval) {
      update();
      interval = setInterval(update, 1000);
    }
  };

  onDestroy(() => {
    clearInterval(interval);
  });
</script>

<div id="twic-eager-container">
  <TwicWrapper filename="src/routes/eager/+page.svelte">
    <div class="demo-container">
      <TwicAbstract title="eager property">
        <p>
          <strong>
            The <dfn>eager</dfn> property allows to disable lazy loading for a given media
          </strong>: associated specific media will start loading regardless of whether it is
          visible in the view port.
        </p>
        <p>
          Useful to ensure that media is loaded before entering the viewport but not recommended as
          a general practice.
        </p>
        <p>
          See also the <a href="/bulk-loading" target="_blank" rel="noreferrer"
            >TwicView Component</a
          > which allows to load all the TwicImg and TwicVideo elements it contains in one block, but
          once TwicView arrives near the Viewport.
        </p>
      </TwicAbstract>
      {#if indice === 0}
        <div class="twic-testing-container">
          <button class="twic-button" on:click={startAnimation}> Click to start animation </button>
        </div>
      {/if}
      <div class="banner-container">
        <div
          class="banner"
          style="
            transform: translateX(-{indice * 100}%);
          "
        >
          {#each images as img}
            <div class="item">
              <TwicImg
                src={img.src}
                focus={img.focus}
                eager
                ratio="none"
                preTransform={img.preTransform}
              />
            </div>
          {/each}
        </div>
      </div>
    </div>
  </TwicWrapper>
</div>

<style lang="scss">
  #twic-eager-container {
    .demo-container {
      background-color: rgba(#ffffff, $alpha: 0.8);
      padding: 50px;
      margin-top: calc(100px + 40vh);
    }

    .banner-container {
      position: absolute;
      top: 100px;
      left: 0;
      right: 0;
      white-space: nowrap;
      overflow: hidden;
      z-index: -1;
    }
    .banner {
      transition: transform 200ms;
      transition-timing-function: ease-out;
    }
    .item {
      display: inline-block;
      width: 100%;
    }
    & :global(.twic-i) {
      height: 40vh;
    }
  }
</style>
