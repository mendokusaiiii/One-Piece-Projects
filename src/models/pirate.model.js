module.exports = (Sequelize, DataTypes) => {
  const Pirate = Sequelize.define('Pirate', {
    pirateId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    pirateName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
    },
  },
    {
      tableName: 'pirate',
      timestamps: false,
      underscored: true,
    });
    return Pirate
};
