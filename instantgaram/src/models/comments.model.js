// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function(app) {
  const sequelizeClient = app.get('sequelizeClient');
  const comments = sequelizeClient.define(
    'comments',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      createdBy: {
        type: DataTypes.STRING,
        allowNull: false
      },
      comments: {
        type: DataTypes.STRING,
        allowNull: false
      },
      postId: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      hooks: {
        beforeCount(options) {
          options.raw = true;
        }
      }
    }
  );

  // // eslint-disable-next-line no-unused-vars
  // comments.associate = function(models) {
  //   // Define associations here
  //   // See http://docs.sequelizejs.com/en/latest/docs/associations/
  // };

  comments.associate = function(models) {
    models.comments.belongsTo(models.posts, {
      foreignKey: 'postId',
      targetKey: 'id',
      as: 'post'
    });
  };
  return comments;
};
