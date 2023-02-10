var validator = require('validator');

exports.verifyDetails = (data) => {

    message = []

    patientName = data.name || ""
    patientAddress = data.address || ""
    hospitalName = data.hospitalname || ""
    dateOfService = data.dateofservice || ""
    billAmount = data.billamount || ""

    if(validator.isEmpty(patientName, {ignore_whitespace: true})) {
        message.push({
            "error" : "Invalid Patient Name",
            "errorMessage" : "Please provide a valid patient name"
        })
    }

    if(validator.isEmpty(patientAddress, {ignore_whitespace: true})) {
        message.push({
            "error" : "Invalid Patient Address",
            "errorMessage" : "Please provide a valid patient address"
        })
    }

    if(validator.isEmpty(hospitalName, {ignore_whitespace: true})) {
        message.push({
            "error" : "Invalid Hospital Name",
            "errorMessage" : "Please provide a valid hospital name"
        })
    }

    if(!validator.isDate(dateOfService, {format:"MM-DD-YYYY"})) {
        message.push({
            "error" : "Invalid Date",
            "errorMessage" : "Please provide a valid date and make sure it's entered in MM-DD-YYYY format"
        })
    }

    if(!validator.isFloat(billAmount, {'min' : 0.00, 'locale' : 'en-US'})) {
        message.push({
            "error" : "Invalid Amount",
            "errorMessage" : "Please provide a valid bill amount"
        })
    }

    if(message.length > 0) {
        return {
            "success" : true,
            "data" : message
        }
    } else {
        return {
            "success" : false,
            "data" : []
        }
    }

}