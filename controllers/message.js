// False mandatory field, w/o key.subkey
const mandatoryFields = ["msgId","boxNumber","SoldToCode","sender","plant","shippingPoint","shipToCode","intermediateCode"]
const missingKeys = []

exports.getPostMessage = (req, res) => {
    const message = req.body // message is an object
    validate(message)
    res.end()
}
function validate(obj){
    if(!typeof obj === 'object'){ //Guard function not working
        console.log("Not an object")
    }
    const innerObj  = obj.boxPackingRequest.messageHeader  // Object shortcut

    for (const [key, value] of Object.entries(innerObj)) {  //Loop through inner objects + values
        if (value === ''){
            missingKeys.push(key)
        }
        if (typeof value === 'object'){
            for (const [key, innerValue] of Object.entries(value)) {
                if (value === '') {
                    missingKeys.push(key)
                }
            }
        }
    }
    respond(missingKeys)
}
// Create response based on the validation function, not working for missing non-critical information
function respond(array){
    if (array.length === 0){
        console.log("Message accepted, all information has been provided")
        return true
    } else {
        console.log("Message rejected, missing following information:")
        for (let item in array){
            if (mandatoryFields.includes(array[item])){
                console.log(array[item])
            }
        }
        return false
        missingKeys.pop()
    }
}