import { useEffect, useState } from "react"
import "./Product.css"
import { Link } from "react-router-dom";


export function Product() {
    const urlParams = window.location.pathname;
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    console.log(urlParams)
    const productId = urlParams.split("/")[4];
    useEffect(() => {
        const getProduct = async () => {
            try {
                const response = await fetch(`https://api.sheetbest.com/sheets/0e184cfb-d13d-416a-a41c-47396ed90ad1/${productId}`);
                if (!response.ok) throw new Error("Falló el servidor");
                const data = await response.json();
                setLoading(false);
                setProduct(data);
            }
            catch (error) {
                console.error("Hubo una falla", error);
            }
        }
        getProduct()
    }, [])
    if (loading) {
        return (
            <p>Cargando...</p>
        )
    }

    const imgArray = product[0].imgDetail.split(",");

    return (
        <div className="product">
            <div className="imgs">
                <div className="large-img">
                    <img src={product[0].img} alt={product[0].name} className="large-photo" />
                </div>
                <div className="smalls-img">
                    {
                        imgArray.map((photo) => (
                            imgArray.length > 0 ?
                                <img src={photo} key={product[0].id} alt={product.name} className="small-photo"/>
                                : null
                        ))
                    }
                </div>
            </div>
            <div className="info-product">
                <div className="info">
                    <p><b>{product[0].marca} {product[0].nombre} {product[0].anio} {product[0].motor} {product[0].modelo}</b></p>
                    <p>{product[0].kilometros} KM <b>-</b> {product[0].lugar}</p>
                </div>
                <hr />
                <div className="info">
                    <p>Precio Contado</p>
                    <p>$ {product[0].precio}</p>
                </div>


            </div>
        </div>
    )

}