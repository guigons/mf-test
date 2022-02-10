module.exports = {
  reactStrictMode: true,
  webpack5: true,
  webpack: (config, options) => {
    const { ModuleFederationPlugin } = options.webpack.container;
    
    config.plugins.push(
      new ModuleFederationPlugin({
        remotes: {
          nav: "nav@http://localhost:3001/remoteEntry.js",
        },
        shared: [],
      })
    );

    return config;
  }
}
