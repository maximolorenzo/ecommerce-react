import { useState, useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { db } from "../../firebase/firebase"
import {doc,getDoc,collection} from "firebase/firestore"

const  ItemDitalConteiner = () => {

    const [listProduct , setListProduct] = useState({})
    const [loading , setLoading] = useState (true)

    const {id} = useParams ()

    
    useEffect(() => {
            setLoading (true)
            const productCollection = collection(db, "products");
            const refDoc = doc(productCollection, id);
            getDoc(refDoc)
              .then((result) => {
                setListProduct({
                  id: result.id,
                  ...result.data(),
                });
              })
              .catch((e) => {
                console.log(e);
              })
              .finally(() => {
                setLoading(false);
              });
          }, [id]);

    
    return (
    <>
        {!loading ? <ItemDetail listProduct = {listProduct}/> : <p>cargando...</p> }
    </>
    )
}

export default ItemDitalConteiner