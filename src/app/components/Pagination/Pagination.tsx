import { count } from "console";
import React from "react";
import { useSelector } from "react-redux";

const Pagination: React.FC = () => {
    const state = useSelector((state: any) => state);
    const meta = state.products.data.meta;
    return (
        <ul className="root">
            {meta &&
                meta.totalPages &&
                [...Array(meta.totalPages)].map((value, key) => (
                    <li className="elem">
                        <a href="#" className="link">
                            {key + 1}
                        </a>
                    </li>
                ))}
        </ul>
    );
};

export default Pagination;
