module.exports = {
  rules: {
    'color-no-invalid-hex': true,
    'font-family-no-duplicate-names': true,
    'font-family-no-missing-generic-family-keyword': true,
    'named-grid-areas-no-invalid': true,
    'function-calc-no-invalid': true,
    'function-calc-no-unspaced-operator': true,
    'function-linear-gradient-no-nonstandard-direction': true,
    'string-no-newline': true,
    'unit-no-unknown': true,
    'property-no-unknown': true,
    'keyframe-declaration-no-important': true,
    'declaration-block-no-duplicate-properties': [
      true,
      {
        ignore: [
          'consecutive-duplicates-with-different-values',
        ],
      },
    ],
    'declaration-block-no-shorthand-property-overrides': true,
    'block-no-empty': true,
    'selector-pseudo-class-no-unknown': true,
    'selector-type-no-unknown': true,
    'media-feature-name-no-unknown': true,
    'comment-no-empty': true,
    'no-duplicate-at-import-rules': true,
    'no-duplicate-selectors': true,
    'no-extra-semicolons': true,
    'alpha-value-notation': 'number',
    'hue-degree-notation': 'angle',
    'font-weight-notation': 'named-where-possible',
    'function-url-no-scheme-relative': true,
    'shorthand-property-no-redundant-values': true,
    'value-no-vendor-prefix': true,
    'declaration-block-no-redundant-longhand-properties': true,
    'declaration-no-important': true,
    'declaration-block-single-line-max-declarations': 1,
    'selector-max-empty-lines': 0,
    'color-hex-case': 'lower',
    'color-hex-length': 'short',
    'font-family-name-quotes': 'always-unless-keyword',
    'function-comma-newline-after': 'always-multi-line',
    'function-comma-space-after': 'always-single-line',
    'function-comma-space-before': 'never',
    'function-max-empty-lines': 0,
    'function-name-case': 'lower',
    'function-parentheses-newline-inside': 'always-multi-line',
    'function-parentheses-space-inside': 'never-single-line',
    'function-whitespace-after': 'always',
    'comment-empty-line-before': [
      'always',
      {
        except: [
          'first-nested',
        ],
        ignore: [
          'stylelint-commands',
        ],
      },
    ],
    'comment-whitespace-inside': 'always',
    indentation: 2,
    'length-zero-no-unit': true,
    'max-empty-lines': 1,
    linebreaks: 'unix',
    'no-eol-whitespace': true,
    'no-missing-end-of-source-newline': true,
    'block-opening-brace-space-before': 'always',
  },
};
