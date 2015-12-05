var db = require('./db')();

// Note that settings are cached so if
// the values in the database are changed
// we need to re-initialize.


var _initalizedListener;
var _siteSettings = {};

var addToMap = function(map) {
     db.SiteSettings.find(function(err, docs) {
	   docs.forEach(function(element) {
            map[element.key] = element.value;
        }, this);
        if (_initalizedListener) {
            _initalizedListener();
        }
    });
}

module.exports.init = function(initalizedListener) {
    _initalizedListener = initalizedListener;
    _siteSettings = {}
    addToMap(_siteSettings);
}

module.exports.getCopy = function() {
    return JSON.parse(JSON.stringify(_siteSettings));
}

module.exports.getAll = function(callbackFn) {
    db.SiteSettings.find(function(err, docs) {
	   callbackFn(err, docs);
    });
}

module.exports.update = function(key, value, callbackFn) {
    db.SiteSettings.update(
        {key: key}, 
        { 
            $set: { 
                value: value  
            }
        }, 
        {
            multi: false, 
            upsert:false
        }, 
        function (a, b, c) {
            db.Categories.find({key: key}, function(err, docs) {
               callbackFn(err, docs[0]); 
            }); 
        });
};

module.exports.create = function(key, value, callbackFn) {
    db.SiteSettings.save({key: key, value: value}, 
        function (a, b, c) {
            db.Categories.find({key: key}, function(err, docs) {
               callbackFn(err, docs[0]); 
            }); 
        });
};

module.exports.remove = function(key, callbackFn) {
    db.SiteSettings.remove({key: key}, 
        function (a, b, c) {
            db.Categories.find({key: key}, function(err, docs) {
               callbackFn(err, docs[0]); 
            }); 
        });
};

