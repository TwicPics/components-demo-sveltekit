<script>
  import TwicImg from '@twicpics/components/sveltekit/TwicImg.svelte';
  export let image;
  export let show;
  export let onClose;
</script>

<div class="modal" class:modal-opened={show} on:click={onClose} on:keydown={onClose}>
  <div class="modal-content">
    <div class="poster">
      <TwicImg src={image.url} />
    </div>
    <div>
      <h1>{image.caption}</h1>
      <p>
        Lorem ipsum dolor sit amet. Non illo natus aut quis dolores et voluptas aliquid. Et
        architecto libero rem itaque consectetur qui ducimus quos aut quos alias est nisi maxime et
        rerum nisi vel enim iure. Ut soluta sapiente sed quis voluptates.
        <em>Nam dolore et omnis magnam non doloremque magnam</em>.
      </p>
    </div>
  </div>
</div>

<style lang="scss">
  .modal {
    position: absolute;
    z-index: 1; /* Sit on top */
    left: 0;
    top: 100px;
    padding-top: 30px;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0, 0, 0); /* Fallback color */
    background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
    transform: translate(10000px);
    &.modal-opened {
      transform: translate(0);
    }

    .modal-content {
      display: grid;
      grid-template-columns: minmax(200px, 1fr);
      grid-column-gap: 10px;
      overflow-y: auto;
      background-color: #fefefe;
      margin: 1rem auto;
      padding: 20px;
      border: 1px solid #888;
      width: 80%;
      & .poster {
        --twic-ratio: calc(1 / 1);
      }
      & h1 {
        text-transform: capitalize;
        margin-bottom: 1rem;
      }
    }
  }

  .modal .modal-content {
    @media (min-width: 480px) {
      grid-template-columns: minmax(200px, 1fr);
      & .poster {
        --twic-ratio: calc(4 / 3);
      }
    }
    @media (min-width: 768px) {
      grid-template-columns: minmax(300px, 1fr) 2fr;
      & .poster {
        --twic-ratio: calc(3 / 4);
      }
    }

    @media (min-width: 1024px) {
    }

    @media (min-width: 1280px) {
    }

    @media (min-width: 1536px) {
      width: 50%;
      grid-template-columns: minmax(300px, 1fr) 1fr;
    }
  }
</style>
