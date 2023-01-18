<script>
  import TwicAbstract from '$lib/components/demo-wrapper/TwicAbstract.svelte';
  import TwicWrapper from '$lib/components/demo-wrapper/TwicWrapper.svelte';
  import Slideshow from '$lib/components/Slideshow.svelte';
  import Code from '$lib/components/Code.svelte';

  const images = [
    {
      url: `components/slideshow/space-1.jpg`,
      focus: ``
    },
    {
      url: `components/slideshow/space-2.jpg`,
      focus: `50px100p`
    },
    {
      url: `components/slideshow/space-3.jpg`,
      focus: `50px100p`
    },
    {
      url: `components/slideshow/space-4.jpg`,
      focus: `50px100p`
    },
    {
      url: `components/slideshow/space-5.jpg`,
      focus: `50px100p`
    }
  ];
</script>

<!-- displays a carousel of responsive images -->
<div id="twic-slideshow-container">
  <TwicWrapper filename="src/routes/slideshow/+page.svelte">
    <TwicAbstract title="A Picture Carousel">
      <p>
        Use TwicPics for automatic lazy-loading, CLS optimization and art directions adaptation.
      </p>
      <p>
        Monitor the <a href="/state" target="_blank" rel="noreferrer">loading status </a> of your
        media with <Code>state</Code> property value.
      </p>
      <p>
        <strong>Change the width of your browser</strong> to see the image aspect-ratio adapt according
        to the CSS rules.
      </p>
    </TwicAbstract>
    <div class="slideshow-container">
      <Slideshow {images} />
    </div>
  </TwicWrapper>
</div>

<style lang="scss">
  #twic-slideshow-container {
    .slideshow-container {
      margin: auto;
      width: 80%;
    }
  }
</style>
