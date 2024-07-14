import Movie from "./class/movie";
import Cart from "./class/cart";


const movie = new Movie(1999, 57, 'slogan', ['comedy', 'drama'], 120)

const cart = new Cart()

cart.add(movie)


console.log(cart.getAll())