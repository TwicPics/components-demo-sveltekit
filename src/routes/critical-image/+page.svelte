<script>
  import TwicAbstract from '$lib/components/demo-wrapper/TwicAbstract.svelte';
  import TwicWrapper from '$lib/components/demo-wrapper/TwicWrapper.svelte';
  import TwicPicture from '@twicpics/components/sveltekit/TwicPicture.svelte';
  import Code from '$lib/components/Code.svelte';
</script>

<div>
  <TwicWrapper filename="src/routes/critical-image/+page.svelte">
    <div class="twic-item mb">
      <TwicPicture
        src="puppy-dressed-as-a-reindeer.jpeg"
        eager
        focus="
          @lg top
        "
        ratio="
          @md 4/3
          @lg 3
        "
        sizes="
          (min-width: 1600px) calc(1600px - 4rem),
          calc(100vw - 80px)
        "
      ></TwicPicture>
    </div>
    <TwicAbstract title="Critical Image with Art Direction">
      <p>
        <Code>TwicPicture</Code> stands out as a robust and efficient solution for optimizing the <b>Largest Contentful Paint</b> (LCP) images in web projects.
      </p>
      <p>
        It operates independently of <a
          target="_blank"
          href="https://www.twicpics.com/docs/essentials/native"
        >
          TwicPics Script
        </a> and dynamically generates <Code>source</Code> elements and <Code>srcset</Code> attributes from a <b>single master file</b> using variants transformed through <a
          target="_blank"
          href="https://www.twicpics.com/docs/essentials/api">TwicPics API</a>.
      </p>
      <p>
        Want to know more? <a
          href="https://www.twicpics.com/blog/components-feature-twic-picture"
          target="_blank"
          rel="noreferrer"
        >
          See dedicated blog post.
        </a>
      </p>
    </TwicAbstract>
  </TwicWrapper>
</div>
<style>
  .mb{
    margin-bottom: 15px;
  }
</style>
