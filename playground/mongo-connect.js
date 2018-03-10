const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
if(err){
    return console.log('Unable to connect to the server');
}
    console.log('Connected to the database');
    // db.collection('Todos').insertOne({
    //     text :"something to do",
    //     completed : false,
    // },(err,result)=>{
    //     if(err){
    //         return console.log('unable to connect to server',err);
    //     }
    //     console.log(JSON.stringify(result.ops,undefined,2));
    // });
    db.collection('Users').insertOne({
        name:"kanav Malik",
        age:20,
        Location:"Malviyanagar"
    },(err,result)=>{
        if(err){
            console.log('Unable to connect to server',err);
        }
        console.log(JSON.stringify(result.ops[0]._id.getTii,undefined,2));
    });
    db.close();
}); 