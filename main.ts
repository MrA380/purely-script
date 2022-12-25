interface Print {
    console(data?: any): void;
    error(condition: boolean, errorStr: string): void;
    array(array: any[]): void;
}

let print: Print;
print = {
    console: (data?: any): void => {
        console.log(data);
    },

    error: (condition: boolean, errorStr: any): void => {
        if (condition == false) {
            console.assert(false, errorStr);
        } else {
            console.log(errorStr);
        }
    },

    array: (array: any[]): void => {
        let temp;
        for (let i = 0; i < array.length; i++) {
            temp = temp + array[i] + ', ';
        }
        console.log('item: ' + temp);
        console.log('length: ' + array.length);
    }
}
