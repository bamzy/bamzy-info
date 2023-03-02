const {CoreModel} = require('./CoreModel');
class NewsSource extends CoreModel{

    constructor(username,password,dbname){

        super()
        this.collectionName = 'news-srcs';

    }
    insertNewsSource = async (newsSource)=>{
        try {
            await this.connectClient();
            const result = await this.getColQuery(this.collectionName).insertOne(newsSource);
            console.log(`New record created with the following id: ${result.insertedId}`);
            return result.insertedId;
        } catch (err) {
            await this.client.close();
        }
    }
    insertMultiNewsSource = async (newsSource)=>{
        try {

            await this.connectClient();
            let result = await this.getColQuery(this.collectionName).insertMany(newsSource);
            console.log(`New records created with the following ids: ${result.insertedIds}`);
            return {insertedIds:result.insertedIds,count:result.insertedCount};
        } catch (err) {
            await this.client.close();
        }
    }

    findNewsSource = async (keyValObj)=> {
        try {
            await this.connectClient();
            let result = await this.getColQuery(this.collectionName).findOne(keyValObj);
            return result.toArray();
        } catch (err) {

            await this.client.close();
        }

    }
    findAllNewsSource = async (keyValObj)=> {
        try {
            await this.client.connect();
            // await this.connectClient();
            let result = await this.getColQuery(this.collectionName).find(keyValObj);
            return result.toArray();
        } catch (err) {
            await this.client.close();
        }

    }

}
module.exports = {NewsSource}