const assert = require('assert');
const app = require('../../src/app');

describe('\'servertodo\' service', () => {
  it('registered the service', () => {
    const service = app.service('servertodo');

    assert.ok(service, 'Registered the service');
  });
});
