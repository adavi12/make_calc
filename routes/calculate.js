var express = require('express');
var router = express.Router();
var answerval = 0;

// calcObj becomes the req.body
router.post('/addition', function(req,res){
  answerval= Number(req.body.x) + Number(req.body.y);
  res.sendStatus(200);
});
router.post('/subtraction', function(req,res){
  answerval=req.body.x - req.body.y;

  res.sendStatus(200);
});
router.post('/multiplication',function(req,res){
  answerval=req.body.x * req.body.y;

  res.sendStatus(200);
});
router.post('/division',function(req,res){
  answerval=req.body.x / req.body.y;

  res.sendStatus(200);
});

router.get('/', function(req, res){

  res.send( {
    answer:answerval
  });
  console.log(answerval);

});
module.exports = router;
