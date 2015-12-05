
var _shallPrintStackTrace = false;

var handler = function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: _shallPrintStackTrace ? err : {}
    });
};

module.exports = function (shallPrintStackTrace) {
    _shallPrintStackTrace = shallPrintStackTrace;
    return handler;
}