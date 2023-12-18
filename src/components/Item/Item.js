const Item = ({id, name, price, category, img, stock}) => {

    return(
            <article className="card m-1 w-25">
                <div className="card-body">

                    <h3 className="card-title">
                        {name}
                    </h3>
                    <img src={img} alt={name} />
                    <p>
                        Precio: $(price)
                    </p>
                    <p>
                        Stock: {stock}
                    </p>
                    <button className="btn btn-primary">
                        Ver Detalles
                    </button>
                    
                </div>
            </article>
    )
}

export default Item;