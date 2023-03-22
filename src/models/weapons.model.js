module.exports = (Sequelize, DataTypes) => {
	const weapon = Sequelize.define(
		'Weapon',
		{
			weaponId: {
				type: DataTypes.INTEGER,
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
			},
			weaponName: {
				type: DataTypes.STRING,
				allowNull: false,
			},
		},
		{
			tableName: 'weapon',
			timestamps: false,
		},
	);

	return weapon;
};