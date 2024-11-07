export default {
    ssr: {
      noExternal: ['dotenv'], // Evita que dotenv seja empacotado no cliente
    },
    build: {
      rollupOptions: {
        external: ['dotenv'], // Evita que dotenv seja empacotado no cliente
      },
    },
  };