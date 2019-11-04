const mysql = require('mysql');
const dbConfig = require('../../config/dbConfig');


const query = `
select * from hotel_otaroom_booking limit 0, 100;
`
.toUpperCase()
.trim();


const getList = () => {
    return new Promise((rel, rej) => {
        const cn = mysql.createConnection(dbConfig('mfw'));
        cn.connect();
        cn.query(query, function(error, ret, field) {
            if (error) {
                throw error;
            }
            rel(ret);
        });
    });
}

const path = require('path');
const fs = require('fs');
const resolvers = {
    Query: {
        list: async () => {
            //const list = await getList();
            const list = fs.readFileSync( path.join(__dirname, '../data.json'));
            return JSON.parse(list);
        }
    }
};

module.exports = resolvers;