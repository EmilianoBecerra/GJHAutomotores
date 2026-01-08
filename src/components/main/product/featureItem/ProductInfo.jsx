import { useEffect, useState } from "react";
import "./ProductInfo.css";
import { infoBoxs } from "./infoBoxs"

export function ProductInfo({ product }) {
    const [boxs, setBoxs] = useState(infoBoxs);
    return (
        <div>
            {
                boxs.map((item, index) => (
                    <div key={index + 1} className="information-product">
                        <p className="title-info"><b>{item.title}</b></p>
                        <div className="particular-information">
                            {
                                item.box.map((tips, index) => {
                                    let prop = tips.toLocaleLowerCase().replaceAll(" ", "_");
                                    return (
                                        <div key={index} className="table-tips">
                                            <div>
                                                <p className="typeTips">{tips}</p>
                                                <p className="tips">{product[prop] != "" ? product[prop] : "N/A"}</p>
                                            </div>
                                        </div>
                                    )
                                }
                                )
                            }
                        </div>

                    </div>
                ))
            }
        </div>
    )
}