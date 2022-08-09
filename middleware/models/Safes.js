const Safes = {
  $schema: 'http://json-schema.org/draft-07/schema#',
  title: 'Safes',
  type: 'object',
  properties: {
    _id: { type: 'string' },
    safeName: {type: 'string'},
    description: {type: 'string'},
    creator: { type: 'string' },
    guardians: { type: 'array' },
    recipient: { type: 'string' },
    encSafeKey: { type: 'object' },
    encSafeData: { type: 'object' },
    stage: { type: 'integer' },
    encSafeKeyShards: { type: 'array' }, //=> [{status: 'recovered', encData : 'data', decData: 'data'}]
    onChain: {type: 'boolean'},
    sigalingPeriod: {type: 'integer'}
  },
};

module.exports = Safes;
