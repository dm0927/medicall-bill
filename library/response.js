exports.response = (resObject, statusCode, responseData) => {
    return resObject.status(statusCode).json(responseData)
}