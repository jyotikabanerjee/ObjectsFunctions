/**
 * Created by jyotikabanerjee on 04/08/14.
 */

function isEqual(obj1,obj2){

    var keys1 = Object.keys(obj1);
    var keys2 = Object.keys(obj2);

   // console.log(keys1);
   // console.log(keys2);

    if(keys1.length !== keys2.length){
        return false;
    }
    else{
        var len = keys1.length; //(Same for both)
        for(var i=0; i<len;i++){
            if(!(typeof obj1[keys1[i]] === "object") && !(typeof obj2[keys2[i]] === "object")){
                if((typeof obj1[keys1[i]]) === (typeof obj2[keys2[i]])) {
                   /* console.log(typeof obj1[keys1[i]]);
                    console.log(typeof obj2[keys2[i]]);
                    console.log(obj1[keys1[i]]);
                    console.log(obj2[keys2[i]]);*/
                    if (obj1[keys1[i]] == obj2[keys2[i]]) {
                        /*console.log(obj1[keys1[i]]);
                        console.log(obj2[keys2[i]]);*/
                        continue;
                    }
                    else if((typeof obj1[keys1[i]])  === 'function'){
                         if(obj1[keys1[i]].toString  === obj2[keys2[i]].toString){
                            continue;
                         }
                         else{
                             console.log("line : \'"+keys1[i]+"\'");
                             return false;
                         }
                    }
                    else{
                        console.log("line : \'"+keys1[i]+"\'");
                        return false;
                    }
                }
                else{
                    console.log("Non matching types: ");
                    console.log(typeof obj1[keys1[i]]);
                    console.log(typeof obj2[keys2[i]]);
                    return false;
                }
            }
            if(!((typeof obj1[keys1[i]]) === (typeof obj2[keys2[i]]))){
                console.log("line : \'"+keys1[i]+"\':"+obj1[keys1[i]])
                return false;
            }
            else //Both are objects
            {
                return isEqual(obj1[keys1[i]],obj2[keys2[i]]);
            }
        }

        return true; //If control reaches here, it implies that the loop was completed and the properties are all same
    }

}



var x = {
    name:'Hamid',
    skills: {
        js: '2.5',
        css: '1'
    }
};

var y = {
    name:'Hamid',
    skills: {
        js: '2.5',
        css: '1'
    }
};


var z = {
    name:'Hamid',
    skills: {
        js: '2.5',
        css: '1',
        html: '5',
        obj: {
            name: '1',
            age: '12',
            num: 987897,
            getname: function(){
                console.log("hello");
            }
        }
    }
};

var w = {
    name:'Hamid',
    skills: {
        js: '2.5',
        css: '1',
        html: '5',
        obj: {
            name: '1',
            age: '12',
            num: 987897,
            getname: function(){
                console.log("hello");
            }
        }
    }
};


console.log(isEqual(x,y));
console.log(isEqual(y,z));
console.log(isEqual(z,w));
