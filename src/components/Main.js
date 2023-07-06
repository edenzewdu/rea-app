import { EmptyCart, addToCart, removeFromCart } from '../Redux/action';
import { useDispatch } from 'react-redux';

function Main() {
    const dispatch = useDispatch();
    const product = {
        name: ' music1',
        catagory: 'pop',
        price: 10000

    }
    return (
        <div>
            <button onClick={() => dispatch(addToCart(product))}>
                Add To Cart
            </button>
            <div>
                <button onClick={() => dispatch(removeFromCart(product.name))}>
                    Remove From Cart
                </button>
            </div>
            <div>
                <button onClick={() => dispatch(EmptyCart(product))}>
                    Empty Cart
                </button>
            </div>
        </div>
    );
}

export default Main;
