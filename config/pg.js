require('dotenv').config();

const config = {
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    user: process.env.PG_USER,
    pass: process.env.PG_PASS
};

module.exports = config;