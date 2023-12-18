import ItemCount from "../ItemCount/ItemCount";
import '../css/styles.css';

const ItemDetail = ({id, name, price, category, img, stock,description}) => {
    return (
        <article className="card m-1 w-25">
            <div className="card-body">

                <h3 className="card-title">
                    {name}
                </h3>
                <h4 >
                    {category}
                </h4>
                <img className="imgCard" src={img} alt={name} />
                <p>
                    Precio: ${price}
                </p>
                <p>
                    Stock: {stock}
                </p>
                <h5>
                    Description
                </h5>    
                <p>
                    {description}
                </p>    

                <button className="btn btn-primary">
                    Ver Detalles
                </button>
                
                <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log("Cantidad Agregada ",quantity)}/>


            </div>
        </article>
    )
}

export default ItemDetail