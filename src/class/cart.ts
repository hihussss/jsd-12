import Buyble from "../buyble";

export default class Cart {
    private items: Buyble[] = []

    add(item: Buyble) {
        this.items.push(item)
    }

    getAll(): Buyble[] {
        return [...this.items]
    }

    sumItog(): number {
        const sum = this.items.reduce((acc, item) => acc + item.price, 0)
        return sum
    }

    sumItogWithDiscount(discount: number): number {
        const sum = this.items.reduce((acc, item) => acc + item.price, 0)
        return sum - sum * (discount / 100)
    }

    deleteItem(id: number) {
        this.items = this.items.filter(item => item.id !== id)
    }
}