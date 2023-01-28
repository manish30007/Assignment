const neo4j = require('neo4j-driver');

const uri = 'neo4j+s://74f312f9.databases.neo4j.io';
const user = 'neo4j';
const password = 'yH4eXXjRiPoR3IP3WpOikyQljxnzcYnQUmxloDJpvRw';

const connectDB = async() => {

    
    // To learn more about the driver: https://neo4j.com/docs/javascript-manual/current/client-applications/#js-driver-driver-object
    const driver = await neo4j.driver(uri, neo4j.auth.basic(user, password));
    const session = await driver.session({ database: 'neo4j' });

   console.log("Connected")
}

module.exports = connectDB;
