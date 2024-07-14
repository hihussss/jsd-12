export default interface Buyble {
    id: number
    readonly year: number,
    readonly country: string,
    readonly slogan: string,
    readonly genre: string[],
    readonly price: number,
    discount?: number,
    readonly time: number
}