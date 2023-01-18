<script>
  import TwicAbstract from '$lib/components/demo-wrapper/TwicAbstract.svelte';
  import TwicWrapper from '$lib/components/demo-wrapper/TwicWrapper.svelte';
  import { TwicImg } from '@twicpics/components/sveltekit';
  import Code from '$lib/components/Code.svelte';

  let indiceConfig = 0;

  const config = [
    {
      src: 'components/state/autumn.jpg'
    },
    {
      src: 'components/state/winter.jpg'
    },
    {
      src: 'components/state/spring.jpg'
    },
    {
      src: 'components/state/summer.jpg'
    }
  ];

  const handleStateChange = (e) => {
    eventDetail = e.detail;
    console.log('WTF', e, eventDetail);
  };

  let state;
  let eventDetail;

  $: actualConfig = config[indiceConfig];

  $: console.log(actualConfig.src);
</script>

<div id="twic-state-container">
  <TwicWrapper filename="src/routes/state/+page.svelte">
    <TwicAbstract title="state property and / or statechange event ">
      <p>You can access to the loading state of your image or video by :</p>
      <ul>
        <li>
          binding to <Code>state</Code> property (current value is <b>{state}</b>)
        </li>
        <li>
          or listening to <Code>statechange</Code> event (current detail event is
          <b>{JSON.stringify(eventDetail)}</b>)
        </li>
      </ul>
      <p>Here are the values the Component will emit :</p>
      <ul>
        <li><Code>new</Code>: when the img or video source has not started loading</li>
        <li><Code>loading</Code>: when the img or video source is loading</li>
        <li><Code>done</Code>: when the img or video source has successfully loaded</li>
        <li><Code>error</Code>: when an error occurred while loading the img or video source</li>
      </ul>
      <p>
        <strong>Change the width of your browser</strong> to see the image aspect-ratio adapt according
        to the CSS rules. The loading status should then also be updated.
      </p>
    </TwicAbstract>
    <div class="twic-testing-container">
      <button
        class="twic-button"
        disabled={state !== `done` && state !== `error`}
        on:click={() => (indiceConfig = (indiceConfig + 1) % config.length)}
      >
        Click to load next image
      </button>
    </div>

    <div class="twic-item style-driven-responsive">
      <TwicImg
        src={actualConfig.src}
        focus="48px100p"
        bind:state
        on:statechange={handleStateChange}
      />
    </div>
  </TwicWrapper>
</div>

<style lang="scss">
  #twic-state-container {
    .style-driven-responsive {
      --twic-ratio: calc(2 / 3);
      --twic-mode: cover;
      margin: auto;
    }

    button {
      &:disabled {
        opacity: 0.2;
        cursor: wait;
      }
    }
  }

  #twic-state-container .style-driven-responsive {
    max-width: 1024px;

    @media (min-width: 640px) {
      --twic-ratio: calc(1);
    }

    @media (min-width: 768px) {
      --twic-ratio: calc(4 / 3);
    }

    @media (min-width: 1024px) {
      --twic-ratio: calc(16 / 9);
    }

    @media (min-width: 1280px) {
      --twic-ratio: calc(1.85);
    }

    @media (min-width: 1536px) {
      --twic-ratio: calc(29 / 9);
    }
  }
</style>
