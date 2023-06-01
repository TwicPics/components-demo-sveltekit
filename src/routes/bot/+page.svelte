<script>
  import TwicAbstract from '$lib/components/demo-wrapper/TwicAbstract.svelte';
  import TwicWrapper from '$lib/components/demo-wrapper/TwicWrapper.svelte';
  import Code from '$lib/components/Code.svelte';
  import TwicImg from '@twicpics/components/sveltekit/TwicImg.svelte';

  let indiceConfig = 0;

  const config = [
    {
      anchor: 'center',
      preTransform: 'flip=x',
      ratio: '4/3'
    },
    {
      anchor: 'left',
      preTransform: 'trit',
      ratio: '16/9'
    },
    {
      anchor: 'right',
      preTransform: 'focus=top-left/crop=50px50p',
      ratio: '21/9'
    }
  ];

  $: actualConfig = config[indiceConfig];
</script>

<div id="twic-bot-container">
  <TwicWrapper filename="src/routes/bot/+page.svelte">
    <TwicAbstract title="bot property">
      <p>
        <strong>
          The <dfn>bot</dfn> specifies a manipulation to be applied to the medium when search engine
          bots are visiting.
        </strong>
      </p>
      <p>
        Its goal is to optimize SEO by always giving the same image to the search engine bots even
        if they emulate different devices.
      </p>
      <p>
        The syntax is a slash-separated list of <a
          href="https://www.twicpics.com/docs/api/transformations?utm_source=github&utm_medium=organic&utm_campaign=components"
          target="_blank"
          rel="noreferrer"
        >
          TwicPics API transformations</a
        >.
      </p>
      <p>
        In the example bellow, <Code>bot</Code> has been set to "cover=400x400".
      </p>
      <p>
        While regular visitors will receive different variants depending on their browsing context,
        search engine bots will always get a 400 pixels wide, 400 pixels high version of your image.
      </p>
      <p>
        <strong>Sets your browser's user agent to a bot engine value</strong>
        to see how bots will perceive the images. Note that context changes then have no effect on the
        delivered image.
      </p>
    </TwicAbstract>
    <div class="twic-testing-container">
      <button
        class="twic-button"
        on:click={() => (indiceConfig = (indiceConfig + 1) % config.length)}
      >
        Click to change context
      </button>
    </div>
    <div class="twic-grid">
      <div class="twic-item">
        <img
          alt="@twicpics-components/bot/robot.jpg"
          src="https://demo.twic.pics/https://assets.twicpics.com/demo/@twicpics-components/bot/robot.jpg?twic=v1/cover=400x400"
        />
        <span> Media seen by search engine bots </span>
      </div>
      <div class="twic-item">
        <TwicImg
          src="https://assets.twicpics.com/demo/@twicpics-components/bot/robot.jpg"
          bot="cover=400x400"
          ratio={actualConfig.ratio}
        />
        <span> Bot will override ratio="{actualConfig.ratio}" </span>
      </div>

      <div class="twic-item">
        <TwicImg
          src="https://assets.twicpics.com/demo/@twicpics-components/bot/robot.jpg"
          bot="cover=400x400"
          preTransform={actualConfig.preTransform}
        />
        <span> Bot will override preTransform="{actualConfig.preTransform}"</span>
      </div>
      <div class="twic-item">
        <TwicImg
          src="https://assets.twicpics.com/demo/@twicpics-components/bot/robot.jpg"
          bot="cover=400x400"
          preTransform="cover=400x300"
          anchor={actualConfig.anchor}
        />
        <span> Bot will override anchor="{actualConfig.anchor}"</span>
      </div>
    </div>
  </TwicWrapper>
</div>

<style lang="scss">
  #twic-bot-container {
    img {
      width: 100%;
      height: 100%;
    }
  }
</style>
