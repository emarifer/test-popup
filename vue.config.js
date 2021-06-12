module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/' // /my-pwa/
    : '/',

  pages: {
    index: {
      entry: 'src/main.js',
      title: 'Test Popup'
    },
  },

  pwa: {
    name: 'Test Popup',
      workboxPluginMode: "InjectManifest", // GenerateSW
      /* workboxPluginMode: "GenerateSW", // InjectManifest
      workboxOptions: {
          skipWaiting: true,
          navigateFallback: 'index.html'
      } */
      workboxOptions: {
          swSrc: "./src/service-worker.js"
      },
  },

  transpileDependencies: [
    'vuetify'
  ]
}

/**
 * MANEJO DE ACTUALIZACIONES DEL SERVICE WORKER EN UNA PWA CON VUE.JS. VER:
 * https://dev.to/drbragg/handling-service-worker-updates-in-your-vue-pwa-1pip
 * 
 * UNA SOLUCION MENOS ELEGANTE (NO USA VUETIFY):
 * https://levelup.gitconnected.com/vue-pwa-example-298a8ea953c9
 * 
 * CÓMO PROPORCIONAR SU PROPIA EXPERIENCIA DE INSTALACIÓN EN LA APLICACIÓN. VER:
 * https://web.dev/customize-install/
 * 
 * COMANDO LINUX PARA ENTRAR DIRECTAMENTE EN LA CARPETA CREADA CON MKDIR:
 * https://unix.stackexchange.com/questions/125385/combined-mkdir-and-cd#125459
 */
