import {fetchDataParam, DataFormat} from "./interfaces";

// export async function fetchData(param: {baseUrl: string, type: string, subject?: string}): Promise<any> {
//     const {baseUrl, subject} = param;
    
//     return fetch(`${baseUrl}/${subject}`)
//         .then((response) => {
//             const contentType = response.headers.get("content-type");
//             if (response.ok && contentType && contentType.includes("application/json")) {
//                 return response.json();
//             }
//             throw Error("Invalid baseUrl or subject");
//         });
// }

export async function fetchBasic(param: {url: string}): Promise<Response> {
    const response = await fetch(param.url);
    return response.json();
}

export async function fetchData(param: fetchDataParam): Promise<DataFormat> {
    const {baseUrl, type, subject} = param;
    const response = await fetch(`${baseUrl}/${subject}`);
    const contentType = response.headers.get("content-type");

    if (response.ok && contentType && contentType.includes(type)) {
        return response.json();
    }
    throw Error("Invalid baseUrl or subject");
}
