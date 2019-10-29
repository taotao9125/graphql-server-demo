const { buildSchema } = require('graphql');

module.exports = {
    getBook: buildSchema(
        `type Book {
            title: String,
            author: Author
        }` 
    ),
    getAuthor: buildSchema(
        `
        type Author {
            name: String
            books: [Book]
          }
        `
    )
}