var db=require('../config/connection')
var collection=require('../config/collection')
var objectId=require('mongodb').ObjectId;
const { response } = require('express');
const { ObjectId } = require('bson');

module.exports={
    getResult:(data)=>{
        console.log(data.Mobile)
        Mobile=parseInt(data.Mobile)
        return new Promise(async(resolve,reject)=>{
           let result = await  db.get().collection(collection.QUIZ_COLLECTION).find({Phone:Mobile}).toArray()
           
           resolve(result)
        })
    }

}