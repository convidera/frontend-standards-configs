# ⚠️ Archived, please use https://github.com/convidera/frontend-kit

# Configs for frontend code formatting/linting tools that are used in Convidera

## Packages

The monorepo contains multiple packages. Refer to their READMEs for more details:

- [stylelint-config-convidera](https://github.com/convidera/frontend-standards-configs/tree/main/packages/stylelint-config)
- [stylelint-config-vue-convidera](https://github.com/convidera/frontend-standards-configs/tree/main/packages/stylelint-config-vue)
- [eslint-config-convidera](https://github.com/convidera/frontend-standards-configs/tree/main/packages/eslint-config-convidera)
- [eslint-config-ts-convidera](https://github.com/convidera/frontend-standards-configs/tree/main/packages/eslint-config-ts-convidera)
- [eslint-config-vue3-convidera](https://github.com/convidera/frontend-standards-configs/tree/main/packages/eslint-config-vue3-convidera)

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
[publish](https://github.com/lerna/lerna/tree/main/commands/publish) provided by
[lerna](https://github.com/lerna/lerna).
