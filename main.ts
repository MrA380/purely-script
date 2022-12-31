interface print {
    console(data?: any): void;
    record(condition: boolean, toRecordStr: any): void;
    form(value: any): void;
    input(message?: string): void;
    group(message: any, frequency?: number): void;
}

interface call {
    return(data: any, condition?: boolean): void;
    alert(message?: any): void;
}

let print: print;
print = {
    console(data?: any): void {
        console.log(data);
    },

    record(condition: boolean, toRecordStr: any): void {
        if (condition == false) {
            console.assert(false, toRecordStr);
        } else {
            return toRecordStr
        }
    },

    form(value: any) {
        console.table(value);
    },

    input(message?: string): void {
        prompt(message)
    },

    group(message: any, frequency?: number): void {
        if (frequency == undefined) {
            frequency = 1;
        }
        for (let i = 0; i < frequency; i++) {
            console.log(message)
        }
    }
}

let call: call;
call = {
    return(data: any, condition?: boolean): void {
        if (condition == undefined) {
            condition = false
        }
        if (condition == true) {
            console.log(data)          
            return data;
        } else if(condition == false) {
            return data;
        }
    },

    alert(message?: any): void {
        alert(message);
    }
}