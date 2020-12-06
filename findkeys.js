const findKey = (object, predicate) =>{
    for(let property in object){
        let value = object[property];
        let predicateReturnValue = predicate(value);
        if(predicateReturnValue === true){
            return property;
        }
    }
    return undefined;
};
var obj = {
    'age': 40,
    'fred':    { 'age': 40, 'active': false },
    'pebbles': { 'age': 1,  'active': true }
};
console.log(obj['fred']['active']);
console.log(findKey(obj, function(o){return  o < 40 }));