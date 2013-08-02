
var myExports = {};
var foo = 'default';


function init( param) {

    foo = param;

    function iAmPrivate() {
        return foo;
    }

    myExports.doit = function() {
        return iAmPrivate();
    }

}



module.exports =  function( param) {
    init( param);
    return myExports;
};