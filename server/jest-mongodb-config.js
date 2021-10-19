module.exports = {
  mongodbMemoryServerOptions: {
    instance: {
      dbName: 'jest',
    },
    binary: {
      version: '4.1.3',
      skipMD5: true,
    },
    autoStart: false,
  },
};
