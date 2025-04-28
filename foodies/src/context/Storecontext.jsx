import React, { useEffect, useState, createContext } from 'react';
import { fetchFoodList } from '../service/Foodservice'; // Adjust the import path if necessary

export const StoreContext = createContext(null);

export const StoreContextProvider = (props) => {
    const [foodList, setFoodList] = useState([]);
    const [quantities, setQuantities] = useState({});

    const increaseQuantity = (foodId) => {
        setQuantities((prevQuantities) => ({
            ...prevQuantities,
            [foodId]: (prevQuantities[foodId] || 0) + 1,
        }));
    };

    const decreaseQuantity = (foodId) => {
        setQuantities((prevQuantities) => {
            const newQuantity = (prevQuantities[foodId] || 0) - 1;
            if (newQuantity <= 0) {
                const { [foodId]: _, ...rest } = prevQuantities; // Remove foodId from state
                return rest;
            }
            return {
                ...prevQuantities,
                [foodId]: newQuantity,
            };
        });
    };

    const removeFromCart = (foodId) => {
        setQuantities((prevQuantities) => {
            const { [foodId]: _, ...rest } = prevQuantities; // Remove foodId from state
            return rest;
        });
    };

    const addToCart = (foodId, quantityToAdd) => {
        setQuantities((prevQuantities) => ({
            ...prevQuantities,
            [foodId]: (prevQuantities[foodId] || 0) + quantityToAdd,
        }));
    };

    const contextValue = {
        foodList,
        setFoodList,
        quantities,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        addToCart, // Add addToCart to the context value
    };

    useEffect(() => {
        async function loadData() {
            const data = await fetchFoodList();
            console.log('Fetched food list:', data);
            setFoodList(data);
        }
        loadData();
    }, []);

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};