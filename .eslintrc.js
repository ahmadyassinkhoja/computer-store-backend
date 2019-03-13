module.exports = {
  env: {
    browser: true
  },
  extends: "eslint:recommended",
  parser: "babel-eslint",
  rules: {
    "indent": ["error", 4],
    "quotes": ["error", "single"],
    "no-console": "off",
  }
};
