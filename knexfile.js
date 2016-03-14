require('dotenv').load()
module.exports = {

development: {
   client: 'pg',
   connection: 'postgres://localhost/active4life_development'
},
production: {
 client: 'pg',
 connection: process.env.DATABASE_URL + '?ssl=true'
}


}
