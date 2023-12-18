import Item from "../Item/Item"

const ItemList = ({products}) => {
    return(
        <div className="ListGroup container d-flex flx-row justify-content-center">
            {products.map(prod => <Item key={prod.id} {...prod} />)}
        </div>
    )
}

export default ItemList