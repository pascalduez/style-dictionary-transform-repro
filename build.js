import StyleDictionary from 'style-dictionary';

let buildPath = 'dist/';

let transform = {
  'repro/length': {
    type: 'value',
    transitive: true,
    matcher: token =>
      token.type === 'dimension' &&
      Object.hasOwn(token, '$extensions') &&
      token.$extensions?.use === 'scale',
    transformer: (token, options) => {
      let scale = parseFloat(options.basePxLength);
      return (token.value * scale).toFixed(0) + 'px';
    },
  },
};

let transformGroup = {
  'repro:styles': ['attribute/cti', 'name/cti/kebab', 'repro/length'],
};

let platforms = {
  css: {
    buildPath,
    basePxLength: '4px',
    transformGroup: 'repro:styles',
    files: [
      {
        destination: 'tokens.css',
        format: 'css/variables',
        options: {
          outputReferences: true,
        },
      },
    ],
  },
};

let config = {
  source: ['tokens/**/*.json'],
  transform,
  transformGroup,
  platforms,
};

StyleDictionary.extend(config).buildAllPlatforms();
