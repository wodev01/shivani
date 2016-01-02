app.filter('sumProduct', function() {

    return function (data, key) {
       /* console.log(key);/!*salary*!/
        console.log(data);*/
        if (angular.isUndefined(data) && angular.isUndefined(key))
            return 0;
        var sum = 0;

        angular.forEach(data,function(v,k){
            sum = sum + parseInt(v[key]);
        });
        return sum;
    }


    /*return function (input) {
     var i = input instanceof Array ? input.length : 0;
     var a = arguments.length;
     if (a === 1 || i === 0)
     return i;

     var keys = [];
     while (a-- > 1) {
     var key = arguments[a].split('.');
     var property = getNestedPropertyByKey(input[0], key);
     if (isNaN(property))
     throw 'filter sumProduct can count only numeric values';
     keys.push(key);
     }

     var total = 0;
     while (i--) {
     var product = 1;
     for (var k = 0; k < keys.length; k++)
     product *= getNestedPropertyByKey(input[i], keys[k]);
     total += product;
     }
     return total;

     function getNestedPropertyByKey(data, key) {
     for (var j = 0; j < key.length; j++)
     data = data[key[j]];
     return data;
     }
     }*/


    /*return function(data, key) {
     if (typeof(data) === 'undefined' || typeof(key) === 'undefined') {
     return 0;
     }

     var sum = 0;
     for (var i = data.length - 1; i >= 0; i--) {
     sum += parseInt(data[i][key]);
     }

     return sum;
     };*/
});
