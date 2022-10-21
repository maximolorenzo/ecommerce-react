
import ItemList from "../ItemList/ItemList"
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import {db} from "../../firebase/firebase"
import { getDocs, collection, query, where } from "firebase/firestore";
const ItemListConteinter = (props) => {

    const [ listProduct , setListProduct] = useState([])
    const [loading , setLoading] = useState (true)
    
    const {category} = useParams ()

    useEffect (() => {
        const productCollection = collection(db, "products")
        
        const qry = query(productCollection, where('category','==',category || null))
        
        getDocs(category ? qry : productCollection )
        .then((data)=>{
            console.log(data);
            
            const list = data.docs.map((product) =>{
                return {
                    ...product.data(),
                    id: product.id
                }
            }) 
            setListProduct(list)
        })
        .catch((e)=>{
            console.log(e);
        }) 
        .finally(()=>{
            setLoading(false)
        })
        
    }, [category] )

        return(
            <>
            <h1>{props.greetings}</h1>
            

            {!loading ? <div className="grid md:grid-cols-3 sm:grid-cols-3 xs:grid-cols-1 gap-4"><ItemList listProduct ={listProduct} /> </div> : <p>cargando...</p> }
           
           
            </>
    )
}

export default ItemListConteinter