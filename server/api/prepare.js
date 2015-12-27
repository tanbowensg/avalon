var express = require('express');

express.post('/api/join',function (req,res) {
  res.json({
    status:"ok"
  })
})

module.exports = router;