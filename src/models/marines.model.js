module.exports = (Sequelize, DataTypes) => {
  const Marine = Sequelize.define('Marine', {
    marineId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    marineName: {
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
      tableName: 'marine',
      timestamps: false,
      underscored: true,
    });
    return Marine
};
