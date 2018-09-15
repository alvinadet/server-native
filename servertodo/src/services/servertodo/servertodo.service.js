// Initializes the `servertodo` service on path `/servertodo`
const createService = require('feathers-sequelize');
const createModel = require('../../models/servertodo.model');
const hooks = require('./servertodo.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/servertodo', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('servertodo');

  service.hooks(hooks);
};
