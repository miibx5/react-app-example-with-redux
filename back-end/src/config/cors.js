const ACCESS_CONTROL_ALLOW_ORIGIN = "Access-Control-Allow-Origin";
const ACCESS_CONTROL_ALLOW_METHODS = "Access-Control-Allow-Methods"
const ACCESS_CONTROL_ALLOW_HEADERS = "Access-Control-Allow-Headers"
const METHODS = ["GET", "POST", "OPTIONS", "PUT", "PATCH", "DELETE"]
module.exports = function (req, resp, next) {
    resp.header(ACCESS_CONTROL_ALLOW_ORIGIN, "*");
    resp.header(ACCESS_CONTROL_ALLOW_METHODS, METHODS);
    resp.header(ACCESS_CONTROL_ALLOW_HEADERS, "Origin, X-Requested-With, Content-Type, Accept");
    next();
}