var siteSettings = require('../data/site-settings');

exports.get = function(req, res) {
    var settings = siteSettings.getCopy();
    res.render('index', settings );
};