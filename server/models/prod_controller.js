// import store from '../../client/src/store'
const neo4j = require('neo4j-driver');
var uuid = require('uuid');
const uri = 'neo4j+s://74f312f9.databases.neo4j.io';
const user = 'neo4j';
const password = 'yH4eXXjRiPoR3IP3WpOikyQljxnzcYnQUmxloDJpvRw';
const driver = neo4j.driver(uri, neo4j.auth.basic(user, password));
const session = driver.session({ database: 'neo4j' });

    const findAll = async (id) =>{
     
     console.log('id for cyfer',id);
    const result = await session.run(`MATCH (u:User {_id:'${id}'})-[:sells]->(p:Product)
    RETURN p`) 
    return await result.records.map(i=>i.get('p').properties)

}

    const findById = async (id) =>{
    const result = await session.run(`MATCH (p:Product {_id : '${id}'} ) return p limit 1`)
    console.log(result.records[0].get('p').properties
)
    return result.records[0].get('p').properties
}
const create = async (arr) =>{

    const prod = arr.pssi;
    const token = arr.currentId;
    console.log(prod,token);
    // const token1=sessionStorage.getItem('user-storage');
    // console.log(token1);
    console.log(uuid.v1);
    // console.log('hi ',prod);
    const product_unique_id = uuid.v1();
    console.log(product_unique_id);
    await session.run(`CREATE (p:Product {
       
        _id : '${product_unique_id}',
        productcategory:'${prod.productcategory}',
        productname:'${prod.productname}',
        sellingprice:'${prod.sellingprice}',
        stock:'${prod.stock}',
        packof:'${prod.packof}',
        delivercharge:'${prod.delivercharge}',
        description:'${prod.description}',
        searchkeyword:'${prod.searchkeyword}'} ) return p`)
   await session.run(`MATCH (u:User {_id:'${token}'}), (p:Product {_id:'${product_unique_id}'})
   CREATE (u)-[:sells]->(p)`)
    return await findById(product_unique_id)
}
const findByIdAndUpdate = async (id, user) =>{
    const result = await session.run(`MATCH (u:User {_id : '${id}'}) SET u.title= '${user.title}', u.description= '${user.description}' return u`)
    return result.records[0].get('u').properties
}
const findByIdAndDelete = async (id) =>{
    await session.run(`MATCH (u:User {_id : '${id}'}) DELETE u`)
    return await findAll()
}
module.exports ={
    findAll,
    findById,
    create,
    findByIdAndUpdate,
    findByIdAndDelete
}