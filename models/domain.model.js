const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Domain = sequelize.define('domain', {
        id: DataTypes.UUID,
        name: DataTypes.STRING
    },
    {
        timestamps: false
    });

    return Domain;
}