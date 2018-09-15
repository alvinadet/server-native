const hydrate = require('feathers-sequelize/hooks/hydrate');

function includeAssosiated() {
  return function(hook) {
    const model = hook.app.service('posts').Model;
    const association = {
      include: [{ model: model, as: 'post', attributes: ['id', 'image'] }]
    };

    switch (hook.type) {
      case 'before':
        hook.params.sequelize = Object.assign(association, { raw: false });
        return Promise.resolve(hook);
        break;

      case 'after':
        hydrate(association).call(this, hook);
        break;
    }
  };
}

module.exports = {
  before: {
    all: [includeAssosiated()],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
