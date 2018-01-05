import { Position } from './interfaces';

export default interface Movable {
    velocity: number;
    move(time: number): Position;
    startPos?: Position;
}
