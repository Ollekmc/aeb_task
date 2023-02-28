exports.getPostMessage = (req, res) => {
    const message = req.body
    
    // valid message:
    //const mandatoryFields = ["msgId","sender","senderInfo.plant","senderInfo.shippingPoint","shipTo.shipToCode","intermediate.intermediateCode"]

    // invalid message:
    const mandatoryFields = ["msgId","boxNumber","soldTo.SoldToCode","sender","senderInfo.plant","senderInfo.shippingPoint","shipTo.shipToCode","intermediate.intermediateCode"]

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
        res.send("Message is valid")
        res.end()
    } else {
        console.log("Message rejected, missing following information:")
        for (let item in missingKeys){
            console.log(missingKeys[item])
        }
        res.send(missingKeys+" are missing")
        res.end()
    }


}

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