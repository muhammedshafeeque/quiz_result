var express = require('express');
var router = express.Router();
var reSultHelper=require('../helpers/result-helper')

/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('../views/user/home', { title: 'Express' });

});
router.post('/serch',async(req,res)=>{
  
  let result=await reSultHelper.getResult(req.body)

  res.render('user/result',{result})
})
router.get('/show_answers',(req,res)=>{
  res.render('user/answers')

})

module.exports = router;
