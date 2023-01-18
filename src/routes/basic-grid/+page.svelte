<script>
  import TwicAbstract from '$lib/components/demo-wrapper/TwicAbstract.svelte';
  import TwicWrapper from '$lib/components/demo-wrapper/TwicWrapper.svelte';
  import Code from '$lib/components/Code.svelte';
  import { TwicImg } from '@twicpics/components/sveltekit';
</script>

<div id="twic-basic-grid-container">
  <TwicWrapper filename="src/routes/basic-grid/+page.svelte">
    <TwicAbstract title="A basic example">
      <p>
        TwicPics is a Responsive Image Service Solution (SaaS) that enables on-demand responsive
        image generation.
      </p>
      <p>TwicPics Components make it dead easy to unleash the power of TwicPics.</p>

      Here the properties used in this example:
      <ul>
        <li>
          <Code>ratio</Code>:
          <span> determines the value of the width/height ratio of the image display area.</span>
        </li>
        <li>
          <Code>mode</Code>:
          <span>determines if the image fills or sits inside the area.</span>
        </li>
        <li>
          <Code>focus</Code>:
          <span>changes the focus point coordinates of the image.</span>
        </li>
        <li>
          <Code>placeholder</Code>:
          <span>helps optimize your CLS and implement the LQIP technique.</span>
        </li>
      </ul>
    </TwicAbstract>
    <div class="twic-grid">
      <div class="twic-item">
        <TwicImg src="https://assets.twicpics.com/examples/football.jpg" />
        <span> Default values </span>
      </div>
      <div class="twic-item">
        <TwicImg src="/football.jpg" ratio="16/9" mode="cover" placeholder="meancolor" />
        <span>
          <Code>ratio="16/9"</Code> &
          <Code>mode="cover"</Code>: the image fills the area
        </span>
      </div>
      <div class="twic-item">
        <TwicImg src="/football.jpg" step="100" mode="contain" ratio="16/9" />
        <span>
          <Code>ratio="16/9"</Code> &
          <Code>mode="contain"</Code>: the image sits inside the area
        </span>
      </div>
      <div class="twic-item">
        <TwicImg
          src="/football.jpg"
          step="100"
          focus="auto"
          ratio="2/3"
          mode="contain"
          placeholder="maincolor"
        />
        <span>
          <Code>ratio="2/3"</Code>,
          <Code>mode="contain"</Code> &
          <Code>focus="auto"</Code>
        </span>
      </div>
    </div>
  </TwicWrapper>
</div>

<style lang="scss">
  #twic-basic-grid-container {
    :global(.twic-item .twic-w) {
      background-color: #00ffa3;
      display: block;
    }
  }
</style>
