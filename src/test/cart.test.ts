import Cart from "../class/cart";
import Movie from "../class/movie";


test('sumItog', () => {
    const cart = new Cart()

    const movie = new Movie(1,1999, '57', 'slogan', ['comedy', 'drama'],600, 120)
    const movie2 = new Movie(2,1999, 'usa', 'slogan', ['comedy', 'drama'],600, 120)

    cart.add(movie)
    cart.add(movie2)

    expect(cart.sumItog()).toBe(1200)
})

test('sumItogWithDiscount', () => {
    const cart = new Cart()

    const movie = new Movie(1,1999, '57', 'slogan', ['comedy', 'drama'],600, 120)
    const movie2 = new Movie(2,1999, 'usa', 'slogan', ['comedy', 'drama'],600, 120)

    cart.add(movie)
    cart.add(movie2)

    expect(cart.sumItogWithDiscount(10)).toBe(1080)
})

test('deleteItem', () => {
    const cart = new Cart()

    const movie = new Movie(1,1999, '57', 'slogan', ['comedy', 'drama'],600, 120)
    const movie2 = new Movie(2,1999, 'usa', 'slogan', ['comedy', 'drama'],600, 120)

    cart.add(movie)
    cart.add(movie2)

    cart.deleteItem(2)

    expect(cart.getAll()[0]).toEqual(movie)

})

