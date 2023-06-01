<script>
  import TwicAbstract from '$lib/components/demo-wrapper/TwicAbstract.svelte';
  import TwicWrapper from '$lib/components/demo-wrapper/TwicWrapper.svelte';
  import TwicImg from '@twicpics/components/sveltekit/TwicImg.svelte';
  import Modal from '$lib/components/Modal.svelte';

  const images = [
    {
      url: `components/modal/seagull.jpg`,
      caption: `seagulls`
    },
    {
      url: `components/modal/shell.jpg`,
      caption: `shell`
    },
    {
      url: `components/modal/jelly-fish.jpg`,
      caption: `jelly fish`
    },
    {
      url: `components/modal/turtle.jpg`,
      caption: `turtle`
    }
  ];
  let idModalToOpen = null;

  const openModal = (index) => {
    idModalToOpen = index;
  };
  const closeModal = () => {
    idModalToOpen = null;
  };
</script>

<div id="twic-modal-container">
  <TwicWrapper filename="src/routes/modal/+page.svelte">
    <TwicAbstract title="A modal revealer">
      <p>Click on the image of your choice to reveal a modal.</p>
    </TwicAbstract>
    <div class="twic-grid">
      {#each images as image, index}
        <div>
          <figure
            class="poster-wrapper twic-item"
            on:click={() => openModal(index)}
            on:keydown={() => openModal(index)}
          >
            <TwicImg src={image.url} focus="auto" ratio="0.95" />
            <figcaption>
              <p>Click</p>
            </figcaption>
          </figure>
          <Modal {image} show={index === idModalToOpen} onClose={closeModal} />
        </div>
      {/each}
    </div>
  </TwicWrapper>
</div>

<style lang="scss">
  #twic-modal-container {
    figure.poster-wrapper {
      position: relative;
      figcaption {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.3em;
        color: #fff;
        background: rgba(0, 0, 0, 0.5);
        opacity: 0;
        transition: opacity 0.3s;
        cursor: pointer;
      }
      figcaption:hover {
        opacity: 1;
      }
    }
  }
</style>
