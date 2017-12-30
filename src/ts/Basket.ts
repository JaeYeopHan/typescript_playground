export default class Basket<T> {
    private item: T[];

    getItem(index: number = 0): T {
        return this.item[index];
    }
}
