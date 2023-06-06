module.exports = {
  extends: "stylelint-config-standard",
  rules: {
    "at-rule-empty-line-before": null,
    "at-rule-no-unknown": null,
    "block-no-empty": null,
    "color-hex-length": null,
    "declaration-colon-newline-after": null,
    "declaration-block-no-redundant-longhand-properties": null,
    "declaration-empty-line-before": [
      "never",
      {
        ignore: ["after-declaration"],
      },
    ],
    indentation: [
      2,
      {
        ignore: ["inside-parens"],
      },
    ],
    "font-family-name-quotes": null,
    "font-family-no-missing-generic-family-keyword": null,
    "keyframes-name-pattern": null,
    "no-empty-source": null,
  },
};
