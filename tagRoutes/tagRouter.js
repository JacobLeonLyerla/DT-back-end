const router = require('express').Router();

const Tags = require('./tag')


router
.get("/",(req,res)=>{
    Tags
    .find()
    .then(response=>{
        res.status(200).json(response)
    })
    .catch(err=>{
        res.status(500).json({error:err})
    })
})
module.exports = router;