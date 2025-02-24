const mongoose = require('mongoose');
let db = null;


async function connectDB(mongoString, dbName) {
    try {
        console.log('attempting connection to the database:', {mongoString});
        db = await mongoose.connect(mongoString, dbName);
        if (db){
            console.info('Connected to ', {db});
        }
    } catch (error) {
        console.error('error connecting to the database');
    }
}

module.exports={
    connectDB
};