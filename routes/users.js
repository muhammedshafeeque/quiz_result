var express = require('express');
const { answers } = require('../helpers/result-helper');
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
  res.render('user/result',{result,total})
})
router.get('/show_answers/:id',async(req,res)=>{
  let answer=await reSultHelper.answers(req.params.id)

  // modifiying object as an array
  let questions=[]
   
     
    for(x in answer){
      questions.push({q:x,a:answer[x]})
  
    }
  // console.log(questions)
  
  for(i=0;i<7;i++){
    questions.shift()
  }
  console.log(questions)



    

  res.render('user/answers',{questions,answer})

})


module.exports = router;
