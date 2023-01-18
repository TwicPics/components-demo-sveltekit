import { sveltekit } from '@sveltejs/kit/vite';

const config = {
  plugins: [sveltekit()],

  server: {
    port: 3000
  },

  css: {
    preprocessorOptions: {
      scss: {}
    }
  }
};

export default config;
