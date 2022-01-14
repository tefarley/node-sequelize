const Users = require("../models/users.model");

module.exports = ( sequelize, email ) => {
    const users = Users(sequelize);
    users.update({
        last_sign_in: new Date()
    },
    {
        where: {
            email: email
        }
    }).then((res) => {
        console.log(res);
    }) 
};