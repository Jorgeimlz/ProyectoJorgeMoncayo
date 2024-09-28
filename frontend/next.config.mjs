export default {
    async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: 'http://localhost:3000/:path*', // Ajusta esto al puerto y host donde se ejecuta tu backend
        },
      ];
    },
  };
  