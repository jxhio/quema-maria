import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd})=> {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if(quantity < stock) {
            setQuantity(quantity + 1)
        }
    }

    const decrement = () => {
        if(quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    return(
        <div className="Counter">
            <div className="Controls d-flex justify-content-center align-items-center">
                <button className="btn h-50 btn-primary" onClick={decrement}> - </button>
                <h className="m-3"> {quantity} </h>
                <button className="btn h-50 btn-primary" onClick={increment}> + </button>
            </div>
            <div className="mt-2">
                <button className="btn btn-primary" onClick={() => onAdd(quantity)} disabled={!stock}> Agregar al Carrito </button>
            </div>
        </div>
    )

}

export default ItemCount;