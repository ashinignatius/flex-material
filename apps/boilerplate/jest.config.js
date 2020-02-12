module.exports = {
  name: 'boilerplate',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/boilerplate',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
