import { Position } from './interfaces';
import Movable from './Movable';

class Car implements Movable{
    velocity: number;
    startPos?: Position;
    constructor(velocity: number) {
        this.velocity = velocity;
    }
    move(time: number): Position {
        const {x, y}: Position = {x: 2, y: 3};
        console.log(time);
        return {x, y};
    }

}

export default Car;
