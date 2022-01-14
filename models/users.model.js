const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const User = sequelize.define('user', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV1,
            allowNull: false,
            primaryKey: true,
            validate: {
                notEmpty: true,
                isUUID: true
            }
        },
        email: {
            type: DataTypes.STRING,
            validate: {
                isEmail: true
            }
        },
        domain: {
            type: DataTypes.UUID,
            validate: {
                isUUID: true
            }
        },
        created: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            validate: {
                isDate: true
            }
        },
        last_modified: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            validate: {
                isDate: true
            }
        },
        last_sign_in: {
            type: DataTypes.DATE
        }
    },
    {
        timestamps: false
    });

    return User;
}