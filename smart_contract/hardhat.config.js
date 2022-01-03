require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/Qsq6nJ8LAky8bu2BDRuBzVNDm53pVP9L',
      accounts: [
        'b848e115db3c60f86ee42eb7ddf62acfadc511ac85564f0174f2c4f44b89b58e',
      ],
    },
  },
};
