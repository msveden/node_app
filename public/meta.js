
function log(what) {
    console.log(what);
}

function getMeta(id) {
    return {
        path: 'body > p:nth-child(2)',
        content: 'hej'
    }
}

function meta(id){
    var meta = getMeta(id);
    var jq = $(meta.path);
    jq.html(meta.content);
};

meta('asdf');