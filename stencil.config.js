exports.config = {
  bundles: [
    { components: ['my-app'] }
  ],
  collections: [
    { name: '@stencil/router' },
    { name: '@stencil/redux' }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
