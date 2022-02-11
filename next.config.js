module.exports = {
  reactStrictMode: true,
  webpack5: true,
  webpack: (config, options) => {
    const { ModuleFederationPlugin } = options.webpack.container;
    
    config.plugins.push(
      new ModuleFederationPlugin({
        remotes: {
          nav: "nav@http://https://nav-gray.vercel.app/remoteEntry.js",
        },
        shared: [],
      })
    );

    return config;
  }
}
