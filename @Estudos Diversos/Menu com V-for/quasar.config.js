const { configure } = require("quasar/wrappers");

module.exports = configure(function (/* ctx */) {
  return {
    boot: [],
    css: ["app.scss"],
    extras: [
      // 'ionicons-v4',
      // 'mdi-v7',
      "fontawesome-v6",
      // 'eva-icons',
      // 'themify',
      // 'line-awesome',
      // 'roboto-font-latin-ext', // this or either 'roboto-font', NEVER both!

      "roboto-font", // optional, you are not bound to it
      "material-icons", // optional, you are not bound to it
    ],

    build: {
      target: {
        browser: ["es2019", "edge88", "firefox78", "chrome87", "safari13.1"],
        node: "node20",
      },

      vueRouterMode: "hash",
      vitePlugins: [
        [
          "vite-plugin-checker",
          {
            eslint: {
              lintCommand: 'eslint "./**/*.{js,mjs,cjs,vue}"',
            },
          },
          { server: false },
        ],
      ],
    },


    devServer: {
      open: true,
    },

    framework: {
      config: {},

      plugins: [],
    },

    animations: [],

    ssr: {

      pwa: false,

      prodPort: 3000,
      middlewares: [
        "render", // keep this as last one
      ],
    },

    pwa: {
      workboxMode: "generateSW", // or 'injectManifest'
      injectPwaMetaTags: true,
      swFilename: "sw.js",
      manifestFilename: "manifest.json",
      useCredentialsForManifestTag: false,
    },

    cordova: {
    },

    capacitor: {
      hideSplashscreen: true,
    },

    electron: {
      inspectPort: 5858,

      bundler: "packager",

      packager: {
      },

      builder: {

        appId: "menus-com-v-for",
      },
    },

    bex: {
      contentScripts: ["my-content-script"],
    },
  };
});
