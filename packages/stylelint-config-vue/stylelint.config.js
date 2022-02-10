module.exports = {
  extends: '@convidera-team/stylelint-config-convidera',
  processors: [
    [
      '@mapbox/stylelint-processor-arbitrary-tags',
      {
        fileFilterRegex: [
          /\.vue$/,
        ],
      },
    ],
  ],
  rules: {
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: [
          'v-deep',
        ],
      },
    ],
    // should be null for vue files support
    'no-empty-source': null,
  },
};
