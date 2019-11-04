var { gql } = require('apollo-server-express');

// 定义单条记录结构
const typedefs = gql`
    type BookingItem {
        id: Int
        content: String
        ctime: String
    }
    type User {
        id: Int
        name: String
    }
    type Query {
        list: [BookingItem]
        user: [User]
    }

`;

module.exports = typedefs;