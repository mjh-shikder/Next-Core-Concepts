const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.URI
// Create a MongoClient with a MongoClientOptions object to set the Stable API version

const dbName = process.env.DB_Name
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

// Database Connection Function
export const dbConnect = async (collectionName) => {
    
    try {
        const db = client.db(dbName);
        return db.collection(collectionName)
    } catch (e) {
        console.log(e);
        
    }
}