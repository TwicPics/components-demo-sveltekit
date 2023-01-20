import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-netlify';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter()
  },

  preprocess: [
    preprocess({
      scss: {}
    })
  ]
};

export default config;
