/**
 * @description Return to number format from string format
 * @param date {string} String of Date. ex) 201712
 * @return month {number} Number of Date
 */
export const getMonth = (date: string): number => {
    return parseInt(date.substring(4, 6), 10);
}

/**
 * @description Return to number format from string format
 * @param date {string} String of Date. ex) 201712
 * @return year {number} Number of Date
 */
export const getYear = (date: string): number => {
    return parseInt(date.substring(0, 4), 10);
}

interface DefaultReqInfo {
    url: string;
    timeout: number;
    cache: boolean;
}

interface FetchContentParam {
    u1: string;
    platform: string;
    releaseType: string;
    date: string;
}

interface FetchDateParam {
    currentDate: number;
}

export const buildReqInfo = (
    {url: string, timeout: number, cache: boolean}: DefaultReqInfo,
    param?: FetchContentParam
) => {
    let reqInfo = {
        url: string,
        jsonp: "_callback",
        timeout: number,
        cache: boolean,
    };

    // fetchContent인 경우에 대해 q라는 속성 추가
    if (typeof param) {
        const {u1, platform, releaseType, date} = param;
        const q = `${date} ${platform} ${releaseType} 게임`;

        // reqInfo = Object.assign({}, reqInfo, {data: q})
    }

    return reqInfo;
}

export const getRandomNumber = (min: number, max: number = 10): number => {
    console.log(min);
    console.log(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

export const setSpec = (major: string, option?: string): void => {
    console.log(major);
    console.log(option);
}

export const setSkills = (...skills: string[]): void => {
    // ...
}
