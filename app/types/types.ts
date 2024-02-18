export interface Classes {
    day: string;
    classes: {
        key: string;
        name: string;
        timeStart: string;
        timeEnd: string;
    }[];
}

export interface ClassList {
    day: string;
    classes: {
        key: string;
        name: string;
        timeStart: string;
        timeEnd: string;
    }[];
}[]