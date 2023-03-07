module.exports = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-rational-order",
    "stylelint-no-unsupported-browser-features",
    "stylelint-config-css-modules",
  ],
  plugins: ["stylelint-declaration-block-no-ignored-properties", "stylelint-scss"],
  rules: {
    "plugin/declaration-block-no-ignored-properties": true,
    "at-rule-no-unknown": null,
    "scss/at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: ["svg", "rect"],
      },
    ],
    "media-feature-name-no-unknown": [
      true,
      {
        ignoreMediaFeatureNames: ["min-device-pixel-ratio"],
      },
    ],
  },
  ignoreFiles: ["**/*.js", "**/*.jsx", "**/*.tsx", "**/*.ts"],
};
