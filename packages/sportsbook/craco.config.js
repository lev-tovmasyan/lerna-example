const { whenDev } = require('@craco/craco');

module.exports = {
  babel: {
    plugins: [...whenDev(() => [['babel-plugin-styled-components']], [])],
  },
};
