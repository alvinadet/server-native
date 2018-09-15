// const { authenticate } = require('@feathersjs/authentication').hooks;\
const hydrate = require('feathers-sequelize/hooks/hydrate');

function includeAssosiated() {
  return function(hook) {
    const model = hook.app.service('comments').Model;
    const association = {
      include: [
        { model: model, as: 'comments', attributes: ['id', 'comments'] }
      ]
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

function users() {
  return function(hook) {
    const model = hook.app.service('users').Model;
    const association = {
      include: [{ model: model, as: 'user', attributes: ['id', 'username'] }]
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
    all: [includeAssosiated(), users()],
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
