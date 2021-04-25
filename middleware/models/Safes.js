const Safes = {
    $schema: 'http://json-schema.org/draft-07/schema#',
    title: 'Safes',
    type: 'object',
    properties: {
        _id: {type:'string'},
        creator: {type:'string'},
        guardians: {type: 'array'},
        recipient: {type: 'string'},
        encSafeKey: {type:'object'},
        encSafeData: {type: 'object'},
        // encSafeKeySahrds: {type: 'array'} => [{status: 'recovered', encData : 'data', decData: 'data'}]
    },
}

module.exports = Safes