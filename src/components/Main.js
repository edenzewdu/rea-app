import { EmptyCart, addToCart, removeFromCart } from '../Redux/action';
import { useDispatch } from 'react-redux';
import { productList } from '../Redux/productaction';
import { useSelector } from 'react-redux';

function Main() {
    const dispatch = useDispatch();
    let data = useSelector((state)=>state.productData);
    console.warn("data in main component", data)
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
                <button onClick={() => dispatch(EmptyCart())}>
                    Empty Cart
                </button>
            </div>
            <div>
                <button onClick={() => dispatch(productList())}>
                    Product List
                </button>
            </div>
        </div>
    );
}

export default Main;
