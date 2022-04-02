var express = require("express");
var sql = require('../db.js');
var router = express.Router();

router.get("/a", async function(req, res, next) {
    var resp = 'a';
    await sql.query("Select * from Persons where 1=1 ", function (err, res) {             
        if(err) {
            console.log("error: ", err);
           // result(err, null);
        }
        else{
            console.log(res);
           // result(null, res);
      
        }
        resp=res;
        return resp;
    }); 

    res.send(resp);
});


module.exports = router;