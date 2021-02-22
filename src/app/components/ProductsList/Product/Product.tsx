import React from "react";
import { IProduct } from "../../../../app-models/app.models";

const Product: React.FC<IProduct> = ({
    image,
    promo,
    name,
    description,
    rating,
}) => {
    return (
        <div className="root">
            <div className="inner">
                <img src={image} alt="" />
                <h2>{name}</h2>
                <p>{description}</p>
                <p>{rating}</p>
            </div>
        </div>
    );
};

export default Product;
