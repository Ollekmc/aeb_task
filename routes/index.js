const express = require('express');

const router = express.Router();

const messageController = require('../controllers/message')

function getAllKeys (json) {
  let keys = []
  for (let item in json) {
    keys.push(item)
    if (typeof json[item] === 'object') {
      let subKeys = getAllKeys(json[item])
      keys = keys.concat(subKeys.map(function (subKey) {
        return item + "." + subKey
      }))
    }
  }
  return keys
}

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/', messageController.getMessage)

router.post('/post-message', (req, res) => {
  console.log("req.body")
  console.log(req.body)
  const message = req.body
  console.log(message+"this was received")
  console.log("message.hasOwnProperty(name)")
  console.log(message.hasOwnProperty("Bame"))

  res.send("req.body")
})
router.post('/message', (req, res) => {

  const message = req.body

  const mandatoryFields = ["msgId","sender","boxNumber","senderInfo.plant","senderInfo.shippingPoint","soldTo.SoldToCode","shipTo.shipToCode","intermediate.intermediateCode"]

  const providedKeys = getAllKeys(message.boxPackingRequest.messageHeader)

  const verifiedKeys = []
  const missingKeys = []

  for (let item in mandatoryFields) {
          if (providedKeys.includes(mandatoryFields[item])){
          verifiedKeys.push(mandatoryFields[item])
          } else {
            missingKeys.push(mandatoryFields[item])
          }
  }

  if (missingKeys.length===0){
    console.log("Message accepted, valid Information provided")
    res.send("req.body")
  } else {
    console.log("Message rejected, missing following information")
    for (let item in missingKeys){
      console.log(missingKeys[item])
    }
  }


})

module.exports = router;
