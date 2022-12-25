var print;
print = {
    console: function (data) {
        console.log(data);
    },
    error: function (condition, errorStr) {
        if (condition == false) {
            console.assert(false, errorStr);
        }
        else {
            console.log(errorStr);
        }
    },
    array: function (array) {
        var temp;
        for (var i = 0; i < array.length; i++) {
            temp = temp + array[i] + ', ';
        }
        console.log('item: ' + temp);
        console.log('length: ' + array.length);
    }
};

print.console('Hi');
print.error(false, 'Awwwwww');
print.error(true, 'OK');
print.array([1,2,3,4,5]);