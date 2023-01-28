const neo4j = require('neo4j-driver');

const uri = 'neo4j+s://a4bf3054.databases.neo4j.io';
const user = 'neo4j';
const password = 'L-0cLNXtJqkoMg4xs3o2Qs1ueLllsTWjWFkCi8UzcKM';

const connectDB = async() => {

    
    // To learn more about the driver: https://neo4j.com/docs/javascript-manual/current/client-applications/#js-driver-driver-object
    const driver = neo4j.driver(uri, neo4j.auth.basic(user, password));
    const session = driver.session({ database: 'neo4j' });

   console.log("Connected")
}

module.exports = connectDB;
