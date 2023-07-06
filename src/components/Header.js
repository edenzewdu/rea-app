import { useSelector } from "react-redux";

const Header =()=>{
    const result = useSelector((state)=>state.cartData)
    console.warn("data in header", result);
    return(
        <div className="Header">
            <div className="cart-div">
                <span>{result.length}</span>
                <img src="../resources/images/deliveryicon.png" alt=""/>
            </div>
        </div>
    )
}

export default Header;