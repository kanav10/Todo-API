const {MongoClient, ObjectId} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        return console.log('unable to connect to the server');
    }
    console.log('connected to MongoDb server');
    // db.collection('Todos').find({
    //     _id : new ObjectId("5a85f0456dac811bc843063b")
    // }).toArray().then((docs)=>{
    //     console.log(JSON.stringify(docs,undefined,2));
    // },(err)=>{
    //     console.log('there is an unexpected error',err);
    // });
    // db.collection('Todos').count().then((count)=>{
    //     console.log(`todos count:${count}`);
    // },(err)=>{
    //     console.log('there is an unexpected error',err);
    // });
    db.collection('Users').find({name : 'mihika'}).toArray().then((docs)=>{
        console.log(JSON.stringify(docs,undefined,2));
    },(err)=>{
        console.log('Yay you have encountered an error',err);
    });
   // db.close();
});