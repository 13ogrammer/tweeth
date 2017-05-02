// Allows us to use ES6 in our migrations and tests.
require('babel-register')

module.exports = {
  build: 'webpack',
  networks: {
    development: {
      host: 'localhost',
      port: 8545,
      network_id: '*' // Match any network id
    },
    production: {
      host: 'localhost',
      port: 8888,
      network_id: '*' // Match any network id
    }
  },
  migrations_directory: './migrations'
}
