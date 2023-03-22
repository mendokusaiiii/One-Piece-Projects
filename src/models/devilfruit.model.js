module.exports = (Sequelize, DataTypes) => {
	const devilFruit = Sequelize.define(
		'DevilFruit',
		{
			devilFruitId: {
				type: DataTypes.INTEGER,
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
			},
			devilFruitName: {
				type: DataTypes.STRING,
				allowNull: false,
			},
		},
		{
			tableName: 'devilFruit',
			timestamps: false,
		},
	);

	return devilFruit;
};