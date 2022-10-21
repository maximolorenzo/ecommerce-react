
import Item from "../Item/Item"

const ItemList = ( {listProduct}) => {

    return (
        <>
        {listProduct.map (products => <Item products={products} key = {products.id}/>)}
        </>
    )
}

export default ItemList