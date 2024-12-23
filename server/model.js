const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite3'
});

class Agent extends Sequelize.Model { }
Agent.init(
  {
    // attributes
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    firstName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    lastName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    photoUrl: {
      type: Sequelize.STRING
    },
    agentLicence: {
      type: Sequelize.STRING,
      allowNull: false
    },
    address: {
      type: Sequelize.STRING,
      allowNull: false
    },
    practiceAreas: {
      type: Sequelize.STRING,
      get() {
        const areas = this.getDataValue('practiceAreas');
        return areas ? areas.split(',') : [];
      }
    },
    aboutMe: {
      type: Sequelize.TEXT
    }
  },
  {
    sequelize,
    modelName: 'Agents'
    // options
  }
);

class Review extends Sequelize.Model { }
Review.init(
  {
    // attributes
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    rating: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
      allowNull: false
    },
    comment: {
      type: Sequelize.TEXT,
      allowNull: false
    }
  },
  {
    sequelize,
    modelName: 'Reviews'
  }
);

Agent.hasMany(Review, {
  onDelete: 'CASCADE',
});

Review.belongsTo(Agent);


module.exports = {
  sequelize,
  Agent,
  Review
};
