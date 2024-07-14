import Buyble from "../buyble";

export default class Movie implements Buyble {
    readonly id: number
    readonly year: number
    readonly country: string
    readonly slogan: string
    readonly genre: string[]
    readonly price: number
    readonly discount?: any
    readonly time: number
    constructor(
         id: number,
         year: number,
         country: string,
         slogan: string,
         genre: string[],
         price: number,
         time: number,
         dicount?: any
    ){
        this.id = id
        this.year = year
        this.country = country
        this.slogan = slogan
        this.genre = genre
        this.time = time
        this.price = price
        this.discount = undefined

    }
}