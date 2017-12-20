import { TimeFunc } from './interfaces';

export const buildTimeStamp: TimeFunc = (hour, minutes): number => {
    if (minutes < 10) {
        return Number(`${hour}0${minutes}`);
    }
    return  Number(`${hour}${minutes}`);
}

export const buildTimeText: TimeFunc = (hour, minutes): string => {
    if (minutes < 10) {
        return `${hour}시 0${minutes}분`;
    }
    return `${hour}시 ${minutes}분`;
}

export const buildTime = (timeText: string, cb: TimeFunc) => {
    const hour: number = Number(timeText.split(":")[0]);
    const minutes: number = Number(timeText.split(":")[1]);
    return cb(hour, minutes);
}

export const getCurrentTime = (): {curHour: number, curMinutes: number} => {
    const time: number = new Date().getTime();
    const curHour: number = new Date(time).getHours();
    const curMinutes: number = new Date(time).getMinutes();

    return {curHour, curMinutes};
}
