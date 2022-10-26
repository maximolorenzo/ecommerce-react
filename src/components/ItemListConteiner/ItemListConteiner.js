
import ItemList from "../ItemList/ItemList"
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import {db} from "../../firebase/firebase"
import { getDocs, collection, query, where } from "firebase/firestore";
import BeatLoader from "react-spinners/ClipLoader";



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
                <h1 className="text-4xl	font-family: ui-sans-serif text-center	p-2 pb-3">{props.greetings}</h1>
            

                {!loading ? <div className="grid md:grid-cols-3 sm:grid-cols-3 xs:grid-cols-1 gap-4"><ItemList listProduct ={listProduct} /> </div> : <div className="flex justify-center items-center"> <BeatLoader color="#0B49FC" margin={4} size={60}/> </div>}
           
           
            </>
    )
}

export default ItemListConteinter