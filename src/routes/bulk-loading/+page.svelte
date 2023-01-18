<script>
  import TwicAbstract from '$lib/components/demo-wrapper/TwicAbstract.svelte';
  import TwicWrapper from '$lib/components/demo-wrapper/TwicWrapper.svelte';
  import Code from '$lib/components/Code.svelte';
  import { TwicImg, TwicView } from '@twicpics/components/sveltekit';

  let current = 2;
  let last = 1;
  let penultimate = 0;

  const images = [
    {
      url: `components/bulk-loading/pool-1.jpg`
    },
    {
      url: `components/bulk-loading/pool-2.jpg`
    },
    {
      url: `components/bulk-loading/pool-3.jpg`
    },
    {
      url: `components/bulk-loading/pool-4.jpg`
    },
    {
      url: `components/bulk-loading/pool-5.jpg`
    }
  ];

  const changeImage = () => {
    current = (current + 1) % images.length;
    last = (last + 1) % images.length;
    penultimate = (penultimate + 1) % images.length;
  };
</script>

<div id="twic-bulk-loading-container">
  <TwicWrapper filename="src/routes/bulk-loading/+page.svelte">
    <TwicAbstract title="Bulk loading">
      <p>
        With <Code>TwicImg</Code> and <Code>TwicVideo</Code> your medias will only start loading when
        they come into the viewport.
      </p>
      <p>
        But sometimes you may want to load multiple assets in bulk instead of lazy loading them.
      </p>
      <p>This is where <Code>TwicView</Code> comes into play.</p>
      <p>
        The <Code>TwicView</Code> components eager loads all of his <Code>TwicImg</Code> and <Code
          >TwicVideo</Code
        > children as soon as <Code>TwicView</Code> comes into the viewport (depending on your anticipation
        settings).
      </p>
      <p>
        See also the <a href="/eager" target="_blank" rel="noreferrer">eager property</a> that disables
        lazy loading for a given media.
      </p>
    </TwicAbstract>
    <TwicView>
      <div class="polaroids" on:click={changeImage} on:keydown={changeImage}>
        <div class="polaroid bottom" class:left={current % 2 === 0}>
          <TwicImg src={images[penultimate].url} focus="0px100p" />
        </div>
        <div class="polaroid bottom previous" class:left={(current - 1) % 2 === 0}>
          <TwicImg src={images[last].url} focus="0px100p" />
        </div>
        {#each images as img, i}
          <div class="polaroid" class:top={i === current} class:left={i % 2 === 0}>
            <TwicImg src={img.url} focus="0px100p" />
          </div>
        {/each}
      </div>
    </TwicView>
  </TwicWrapper>
</div>

<style lang="scss">
  #twic-bulk-loading-container {
    $pola-width: 300px;
    $pola-height: 360px;
    $border: 15px solid #ffffff;
    .polaroids {
      width: 100%;
      height: $pola-height + 50px;
      padding: 20px;
      margin: auto;
      position: relative;
      overflow: hidden;
      &:hover {
        cursor: pointer;
      }
    }

    .polaroid {
      border: $border;
      border-bottom: 50px solid white;
      border-radius: 4px;
      box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.4);
      background-color: #ffffff;
      position: absolute;
      left: 50%;
      width: $pola-width;
      transform: translate(2000px) rotate(90deg);
    }

    .top {
      transition: transform 300ms;
      transform: rotate(-2deg) translate(calc(-1 * $pola-width / 2 + 30px), 30px);
      z-index: 2;
      &.left {
        transform: rotate(+2deg) translate(calc(-1 * $pola-width / 2 - 30px), +30px);
      }
    }
    .bottom {
      transition: transform 100ms;
      transform: rotate(-1deg) translateX(calc(-1 * $pola-width / 5));
      z-index: 0;
      &.previous {
        z-index: 1;
      }
      &.left {
        transform: rotate(+1deg) translateX(calc(-4 * $pola-width / 5));
      }
    }
  }
</style>
