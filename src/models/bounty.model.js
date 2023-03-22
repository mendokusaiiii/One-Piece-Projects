module.exports = (Sequelize, DataTypes) => {
	const bounty = Sequelize.define(
		'Bounty',
		{
			bountyId: {
				type: DataTypes.INTEGER,
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
			},
			bountyName: {
				type: DataTypes.STRING,
				allowNull: false,
			},
		},
		{
			tableName: 'bounty',
			timestamps: false,
		},
	);

	return bounty;
};