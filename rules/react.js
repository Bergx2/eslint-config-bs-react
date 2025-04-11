module.exports = {
  plugins: ['react-hooks'],
  extends: ['plugin:react/recommended', 'plugin:react-hooks/recommended'],
  rules: {
    'react/jsx-filename-extension': [
      2,
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    ],
    'react-hooks/exhaustive-deps': 0,
    'react/no-danger': 0,
    'react/jsx-props-no-spreading': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-closing-tag-location': 0,
    'react/jsx-fragments': 0,
    'react/function-component-definition': 0,
    'react/jsx-no-useless-fragment': 0,
    'react/no-unstable-nested-components': 0
  },
  settings: {
    react: {
      createClass: 'createReactClass',
      pragma: 'React',
      version: 'detect',
    },
  },
};
