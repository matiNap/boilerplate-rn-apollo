module.exports = {
  extends: ['airbnb'],
  parser: 'babel-eslint',
  plugins: [
    'module-resolver',
    {
      root: '.',
      alias: {
        _types: './types/index.ts',

        _slices: './reducers/',
        _selectors: './selectors/',

        _components: './screens/components/',

        _typography: './theme/typography',
        _palette: './theme/palette',
        _metrics: './theme/metrics',
        _globals: './theme/globals',

        _store: './store.ts',

        _mutations: './mutations/',
        _queries: './queries/',
        _updates: './updates/',
      },
    },
  ],
};
