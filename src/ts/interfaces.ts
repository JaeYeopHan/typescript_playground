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

export interface dataFormat {
    charaters: Character[];
}
