var indexController = requireController('index');
var commentsApi = requireApi('comments');

function requireController(name) {
    return require('../app/controllers/' + name);
}

function requireApi(name) {
    return require('../app/controllers/api/' + name);
}

module.exports = function(app) {
    
    app.get('/', indexController.get);
    app.get('/api/comments', commentsApi.get);
    app.post('/api/comments', commentsApi.post);
}