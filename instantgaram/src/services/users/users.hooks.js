const { authenticate } = require('@feathersjs/authentication').hooks;

const {
  hashPassword,
  protect
} = require('@feathersjs/authentication-local').hooks;

function includeAssosiated() {
  return function(hook) {
    const model = hook.app.service('posts').Model;
    const association = {
      include: [
        { model: model, as: 'posts', attributes: ['id', 'image', 'tag'] }
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

module.exports = {
  before: {
    all: [includeAssosiated()],
    find: [authenticate('jwt')],
    get: [authenticate('jwt')],
    create: [hashPassword()],
    update: [hashPassword(), authenticate('jwt')],
    patch: [hashPassword(), authenticate('jwt')],
    remove: [authenticate('jwt')]
  },

  after: {
    all: [
      // Make sure the password field is never sent to the client
      // Always must be the last hook
      protect('password')
    ],
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
