# Configs for frontend code formatting/linting tools that are used in Convidera

## Packages

The monorepo contains multiple packages. Refer to their READMEs for more details:

- stylelint-config-convidera

---

## How to release

```sh
yarn install
# Do some changes
yarn lerna:version
yarn lerna:publish
```

---

Read more about [version](https://github.com/lerna/lerna/tree/main/commands/version) and
[publish](https://github.com/lerna/lerna/tree/main/commands/publish).