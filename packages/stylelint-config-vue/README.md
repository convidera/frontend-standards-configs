# Stylelint config with vue files support used in Convidera

Extends [stylelint-config-recommended-vue](https://github.com/ota-meshi/stylelint-config-recommended-vue) and
[stylelint-config-standard-scss](https://github.com/stylelint-scss/stylelint-config-standard-scss).

## Installation

```sh
npm i @convidera-team/stylelint-config-vue-convidera --save-dev
```

or

```sh
yarn add @convidera-team/stylelint-config-vue-convidera -D
```

Add the following to your `stylelint.config.js` file:

```javascript
module.exports = {
  extends: '@convidera-team/stylelint-config-vue-convidera'
};
```

---

## Changelog

### 2.0.0

- **Breaking**: supports `stylelint` v14.0.0 and above

---
