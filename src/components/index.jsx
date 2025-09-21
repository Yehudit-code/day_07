import React from 'react';

const Index = () => {
    const products = [{ title: "Product 1" }];
    const getProducts =()=>{
        return products;
    };

    return (
        <div>
            <h1>Welcome to the Index Component</h1>
        </div>
    );
};

export default Index;