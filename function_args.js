

function printParameters(fn){

    //console.log(arguments);
    //var params= fname.split('(');
    //console.log(params);
    var fname = String(fn);
    var remName = Array.prototype.slice.call(String(fname),fname.indexOf('(')+1,fname.indexOf(')') );
    var args = remName.filter(function(elem){
        if(elem != ',')
            return true;
    });

    console.log(args);

}


function add(x,y){
    return x+y;
}

function doNothing(a,b,c,d,e,f)
{
    console.log('helloooo....');

}

printParameters(add);
printParameters(doNothing);