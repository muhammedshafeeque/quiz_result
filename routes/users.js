var express = require('express');
var router = express.Router();
var reSultHelper=require('../helpers/result-helper')

/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('../views/user/home', { title: 'Express' });

});
router.post('/serch',async(req,res)=>{
  
  let result=await reSultHelper.getResult(req.body)
  
  let total=0
   for(i=0;i<result.length;i++){
   
    total=total+result[i].Score
  
   }
   console.log(total)
  res.render('user/result',{result,total})
})
router.get('/show_answers',(req,res)=>{
  res.render('user/answers')

})

module.exports = router;
