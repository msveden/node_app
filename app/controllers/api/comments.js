
var comments = [
        {"author": "Pete Hunt", "text": "This is one comment", "id": 1},
        {"author": "Jordan Walke", "text": "This is *another* comment", "id": 2},
        {"author": "Andrew Bull", "text": "Hello", "id": 3}
    ];

module.exports.get = function(req, res){
    res.json(comments);
};

module.exports.post = function(req, res) {
    comments.push(req.body);
};