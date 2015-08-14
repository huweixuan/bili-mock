var fs = require('fs');
var path = require('path');

var on = function (req, res, rootPath, base) {
    var mod, modPath;
    var modPath = path.join(rootPath, req.path.replace(base, ''));
    if(fs.existsSync(modPath + '.js')) {        
        require.cache[require.resolve(modPath)] = null;

        mod = require(modPath);

        mod[req.method.toLowerCase()](req, res);
    } else {
        res.send('404, ' + req.path + ' not found!');
    }
};

module.exports = {
    on: on
};
