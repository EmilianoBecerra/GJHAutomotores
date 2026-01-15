import { useEffect, useState } from "react"
import "./Product.css"
import { useParams } from "react-router-dom";
import { Loading } from "../../../loading/Loading";
import { Error } from "../../../error/Error";
import {FeatureItem} from "../productDetail/featureItem/FeatureItem"
import {ProductInfo} from "../productDetail/featureItem/ProductInfo"


export function Product() {
    const { carId } = useParams();
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [image, setImage] = useState("");

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            try {
                const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/${carId}`);
                if (!response.ok) throw new Error("Product no encontrado");
                const data = await response.json();
                if (!data || data.length === 0) {
                    throw new Error("Producto no existe");
                }
                setProduct(data[0]);
            }
            catch (error) {
                console.error("Hubo una falla", error);
                setError(error.message);
            }
            finally {
                setLoading(false);
            }
        }

        if (carId) {
            getProduct()
        }
    }, [carId])

    if (loading) {
        return <Loading />
    }

    if (error) {
        return <Error />
    }

    if (!product) {
        return <div className="error">Producto no encontrado</div>
    }


    function handleClick (e) {
        setImage(e.target.src);
    }

    const imgArray = product.imgDetail ? product.imgDetail.split(",") : [];
    const whatsappMessage = `Hola, me interesa el ${product.marca} ${product.modelo} ${product.version}`;
    const whatsappUrl = `https://api.whatsapp.com/send/?phone=${import.meta.env.VITE_API_CEL_NUMBER}&text=${encodeURIComponent(whatsappMessage)}&type=phone_number&app_absent=0`;

    return (
        <div className="product-info">
            <div className="resume-info">
                <div className="imgs">
                    <div className="principal-img">
                        <img src={image === "" ? imgArray[0] : image} alt={product.name} className="large-photo"/>
                    </div>
                    {imgArray.length > 0 && (
                        <div className="smalls-img">
                            {imgArray.map((photo, index) => (
                                <img src={photo} key={index} alt={product.name} className="small-photo"  onClick={handleClick}/>
                            ))}
                        </div>)
                    }
                </div>

                <div className="product-feature">
                    <div className="feature-section">
                        <FeatureItem title={`${product.marca} ${product.modelo} ${product.motor} ${product.version}`}>
                            <p>{product.kilometros} KM <b>-</b> {product.lugar}</p>
                        </FeatureItem>
                        <FeatureItem label="Precio Contado" value={`$ ${product.precio}`} />
                        <FeatureItem label="Precio Financiado" value={`$ ${product.precio}`}>
                            <p className="condition">*Precio financiado 50% o más</p>
                        </FeatureItem>
                        <FeatureItem label="Año" value={` ${product.fabricacion}`} />
                        <FeatureItem label="Modelo" value={`${product.version} ${product.motor} - ${product.puertas} puertas`} />
                        <FeatureItem label="Transmisión" value={`${product.transmision}`} />
                        <div className="visit">
                            <a href={whatsappUrl}
                                className="buttonVisit"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Agendar Visita
                            </a>
                        </div>

                    </div>
                </div>
            </div>
            <div className="div-car-info">
                <ProductInfo
                    product={product}
                />
            </div>
        </div>
    )

}