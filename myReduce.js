/**
 * Created by jyotikabanerjee on 04/08/14.
 */


Array.prototype.myReduce = function (fn) {

    /*console.log(this);
    console.log(typeof this);*/

    var ind = this.length-1;
    var self = this[ind];
    //console.log(self);
    for(var i=this.length-2;i>=0;i--){
        //console.log( this[i]);
        self = fn(this[i],self);
        //console.log(self);
    }

    return self;
};

/*Works for operations except subtraction*/
var x = [32,11,10,5];
var z = ['h','e','l','l','o'];
var y = x.myReduce(add);
console.log(y);
var w = z.myReduce(add);
console.log(w);

function add(a,b){
 return a+b;
 }

 function multiply(a,b){
 return a*b;
 }

 y = x.myReduce(subtract);
 console.log(y);
 y = x.myReduce(multiply);
 console.log(y);
