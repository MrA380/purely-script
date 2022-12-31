var print;
print = {
    console: function (data) {
        console.log(data);
    },
    record: function (condition, toRecordStr) {
        if (condition == false) {
            console.assert(false, toRecordStr);
        }
        else {
            return toRecordStr;
        }
    },
    form: function (value) {
        console.table(value);
    },
    input: function (message) {
        prompt(message);
    },
    group: function (message, frequency) {
        if (frequency == undefined) {
            frequency = 1;
        }
        for (var i = 0; i < frequency; i++) {
            console.log(message);
        }
    }
};
var call;
call = {
    "return": function (data, condition) {
        if (condition == undefined) {
            condition = false;
        }
        if (condition == true) {
            console.log(data);
            return data;
        }
        else if (condition == false) {
            return data;
        }
    },
    alert: function (message) {
        alert(message);
    }
};
