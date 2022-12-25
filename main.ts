interface print {
    console(data?: any): void;
    error(condition: boolean, errorStr: string): void;
    array(array: any[]): void;
}

let Console: print['console'];
Console = (data?: any): void => {
    console.log(data);
}

let error: print['error'];
error = (condition: boolean, errorStr: any): void => {
    if (condition == false) {
        console.assert(false, errorStr);
    } else {
        console.log(errorStr);
    }
}

let array: print['array'];
array = (array: any[]): void => {
    let temp;
    for (let i = 0; i < array.length; i++) {
        temp = temp + array[i] + ', '
    }
    console.log('item: ' + temp);
    console.log('length: ' + array.length)
}