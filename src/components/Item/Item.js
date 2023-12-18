import { Link } from "react-router-dom";

const Item = ({id, name, price, img, stock}) => {

    return(
            <article className="card m-1 w-25">
                <div className="card-body">

                    <h3 className="card-title">
                        {name}
                    </h3>
                    <img className="imgCard" src={img} alt={name} />
                    <p>
                        Precio: ${price}
                    </p>
                    <p>
                        Stock: {stock}
                    </p>
                    <Link to={ `/item/${id}`} className="btn btn-primary">
                        Ver Detalles
                    </Link>
                    
                </div>
            </article>
    )
}

export default Item;