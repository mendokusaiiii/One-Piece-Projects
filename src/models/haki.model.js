module.exports = (Sequelize, DataTypes) => {
	const haki = Sequelize.define(
		'Haki',
		{
			id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
			},
			name: {
				type: DataTypes.STRING,
				allowNull: false,
			},
		},
		{
			tableName: 'haki',
			timestamps: false,
		},
	);

	return haki;
};