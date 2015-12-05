var indexController = requireController('index');

function requireController(name) {
    return require('../app/controllers/' + name);
}

function requireApi(name) {
    return require('../app/controllers/api/' + name);
}

module.exports = function(app) {
    
    app.get('/', indexController.get);

}