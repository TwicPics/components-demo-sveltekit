<script>
  import '../app.scss';
  import '../app.scss';
  import '../app.scss';
  import { installTwicPics } from '@twicpics/components/sveltekit';
  import '@twicpics/components/style.css';

  installTwicPics({
    domain: `https://demo.twic.pics`,
    anticipation: 0.5,
    step: 100,
    env: `production`
  });
</script>

<slot />
