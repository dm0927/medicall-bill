const { response } = require("../library/response")
const { verifyDetails } = require("../library/verifydetails")
let { items } = require("../library/item")

let responseData = {
    "success" : false,
    "data" : []
}

exports.insert_medical_items = async (req, res, next) => {
    data = req.body
    try {
        if(data != "") {
            is_verified = verifyDetails(data)
            if(is_verified['success']) {
                responseData['success'] = false
                responseData['data'] = is_verified['data']
                return response(res, 200, responseData)    
            } else {
                isnertData = {
                    "id" : Math.floor(Math.random() * 5 * Date.now()),
                    "name" : data.name,
                    "address" : data.address,
                    "hospitalname" : data.hospitalname,
                    "dateofservice" : data.dateofservice,
                    "billamount" : parseFloat(data.billamount)
                }
                items.push(isnertData)
                responseData['success'] = true
                responseData['data'] = [isnertData]
                return response(res, 200, responseData)
            }
        } else {
            responseData['success'] = false
            responseData['data'] = "No data was found"
            return response(res, 200, responseData)
        }
    } catch(e) {
        responseData['success'] = false
        responseData['data'] = [
            {
                "error" : "An unhandled exception occured",
                "message" : e.message
            }
        ]
        return response(res, 500, responseData)
    }
};

exports.fetch_medical_items = async (req, res, next) => {
    responseData['success'] = true
    responseData['data'] = items
    return response(res, 200, responseData)
};