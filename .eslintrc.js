module.exports = {
    'extends': 'hackreactor',
    'rules': {
      'no-console': 0
    },
    'parserOptions': {
      'ecmaVersion': 2019,
      'ecmaFeatures': {
        'jsx': true
      },
      'sourceType': 'module'
    },
    'plugins': [
      'react'
    ],
    'parser': 'babel-eslint'
};