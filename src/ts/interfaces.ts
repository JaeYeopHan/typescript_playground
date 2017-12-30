export interface fetchDataParam {
    baseUrl: string;
    type: string;
    subject: string;
}

interface Character {
    id: number;
    name: string;
    company: string;
}

export interface DataFormat {
    charaters: Character[];
}

export interface WeatherSpec {
    readonly type: string;
    amount?: number;
}

export interface TimeFunc {
    (hour: number, minutes: number): any;
}

export interface Position {
    x: number;
    y: number;
}

export interface BaseUrl {
    baseUrl: string;
}

export interface Book {
    name: string;
}

export interface Cup {
    purpose: string;
}

export interface Doll {
    name: string;
}
