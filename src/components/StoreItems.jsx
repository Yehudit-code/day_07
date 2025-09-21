import React, { useEffect, useState } from 'react';
import { getProducts } from "./productsService"
const StoreItems = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const data = getProducts();
        setProducts(data)
    }, []);

    console.log(products);

    return null;
};

export default StoreItems;