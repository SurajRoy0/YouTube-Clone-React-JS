import React, { useState, useEffect } from "react";
import { fetchDataFromApi } from "../utils/api";

export const AppContext = React.createContext();

const AppContextProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [searchResult, setSearchResult] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [mobileMenu, setMobileMenu] = useState(false);

    useEffect(() => {
        fetchSelectedCategoryData(selectedCategory);
    }, [selectedCategory]);

    useEffect(() => {
        console.log(searchResult)
    }, [searchResult]);


    const fetchSelectedCategoryData = async (query) => {
        setLoading(true);
        try {
            const { contents } = await fetchDataFromApi(`search/?q=${query}`);
            setSearchResult(contents);
        } catch (error) {
            console.log(error);
        }
        setLoading(false);
    };

    return (
        <AppContext.Provider
            value={{
                loading,
                setLoading,
                searchResult,
                selectedCategory,
                setSelectedCategory,
                mobileMenu,
                setMobileMenu,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;
