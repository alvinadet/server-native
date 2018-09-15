// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function(app) {
  const sequelizeClient = app.get('sequelizeClient');
  const posts = sequelizeClient.define('posts', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    location: {
      type: Sequelize.STRING,
      allowNull: true
    },
    image: {
      type: Sequelize.STRING,
      allowNull: false
    },
    tag: {
      type: Sequelize.STRING,
      allowNull: false
    },
    likes: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    createdBy: {
      type: Sequelize.STRING,
      allowNull: false
    },

    // Timestamps
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE
  });

  // eslint-disable-next-line no-unused-vars
  posts.associate = function(models) {
    models.posts.hasMany(models.comments, {
      foreignKey: 'postId',
      targetKey: 'id',
      as: 'comments'
    });
    models.posts.belongsTo(models.users, {
      foreignKey: 'createdBy',
      targetKey: 'id',
      as: 'user'
    });
  };
  return posts;
};
