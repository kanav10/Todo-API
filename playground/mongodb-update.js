const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
    if(err){
        console.log('Unable to connect to the server',err);
    }
    console.log('connected to the server');
    // db.collection('Todos').findOneAndUpdate({
    //     _id : new ObjectID("5a983546a1e534fc0fc6ab98")
    // },{
    //     $set :{
    //         completed : true,
    //     }
    // },{
    //     returnOrignal : false,
    // }).then((result)=>{
    //     console.log(result);
    // });
    db.collection("Users").findOneAndUpdate({
        _id : new ObjectID("5a565b73daebc748a805e103"),
    },{
        $set :{
            name : "kanav"
        },
        $inc :{
            age : 1,
        }
    },{
        returnOrignal : false,
    }).then((result)=>{
        console.log(result);
    });
    //db.close();
});