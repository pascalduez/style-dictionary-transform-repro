import StyleDictionary from 'style-dictionary';

let buildPath = 'dist/';

let transform = {
  'repro/length': {
    type: 'value',
    transitive: true,
    matcher: token =>
      token.type === 'dimension' && Object.hasOwn(token, '$extensions'),
    transformer: token => {
      return token.value * token.$extensions.scale;
    },
  },
};

let transformGroup = {
  'repro:styles': ['attribute/cti', 'name/cti/kebab', 'repro/length'],
};

let platforms = {
  css: {
    buildPath,
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
