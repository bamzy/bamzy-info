const {MongoClient} = require("mongodb");

class CoreModel {
    constructor(username,password,defaultDBName){
        this.uri = `mongodb+srv://${username}:${password}@bamzyinfo.ic5od21.mongodb.net/?retryWrites=true&w=majority`;
        this.client = new MongoClient(this.uri, { useNewUrlParser: true, useUnifiedTopology: true });
        this.defaultDBName = defaultDBName;
    }
    connectClient = async ()=> {

            await this.client.connect();
    }
    getAllDatabases = async () => {
        try {
            await this.connectClient();
            return await  this.listDatabases(this.client);
        } catch (e) {
            console.error(e);
        } finally {
            await this.client.close();
        }
    }
    getAllCollections = async (dbName)=> {
        if (dbName === undefined || dbName == null) dbName = this.defaultDBName;
        try {
            await this.connectClient();
            return await this.listCollections(this.client,dbName);
        } catch (e) {
            console.error(e);
        } finally {
            await this.client.close();
        }
    }
    getColQuery = (collectionName)=>{
        return this.client.db(this.defaultDBName).collection(collectionName);
    }
    listCollections = async (client,dbName)=>{
        const cols = await client.db(dbName).listCollections().toArray();
        return cols;
    }
    listDatabases = async (client)=>{
        const databasesList = await client.db().admin().listDatabases();
        var names = databasesList.databases.map((db)=>db.name)
        return names;
    };
    getDBName = ()=>{
        return this.defaultDBName;
    }

}
module.exports = { CoreModel}