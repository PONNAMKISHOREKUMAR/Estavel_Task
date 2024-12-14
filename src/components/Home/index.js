import React, { useState, useEffect } from 'react';
import './index.css';

const Home = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [filters, setFilters] = useState({
        price: '',
        rating: '',
        stock: ''
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch data from the API
        fetch('https://my.api.mockaroo.com/users.json?key=5ab15070')
            .then(response => response.json())
            .then(data => {
                setProducts(data);
                setFilteredProducts(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        // Apply filters
        let filtered = [...products];
        if (filters.price) {
            filtered = filtered.filter(product => product.price <= filters.price);
        }
        if (filters.rating) {
            filtered = filtered.filter(product => product.rating >= filters.rating);
        }
        if (filters.stock) {
            filtered = filtered.filter(product => product.stock >= filters.stock);
        }
        setFilteredProducts(filtered);
    }, [filters, products]);

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters(prevFilters => ({
            ...prevFilters,
            [name]: value
        }));
    };

    return (
        <div className="home-container">
            <header className="header">
                <h1>Shop Our Products</h1>
            </header>

            <div className="content">
                {/* Sidebar Filters */}
                <div className="sidebar">
                    <h3>Filters</h3>
                    <div className="filter">
                        <label>Price</label>
                        <input 
                            type="number" 
                            name="price" 
                            value={filters.price} 
                            onChange={handleFilterChange} 
                            placeholder="Max price"
                        />
                    </div>
                    <div className="filter">
                        <label>Rating</label>
                        <input 
                            type="number" 
                            name="rating" 
                            value={filters.rating} 
                            onChange={handleFilterChange} 
                            placeholder="Min rating"
                            max={5}
                            min={1}
                        />
                    </div>
                    <div className="filter">
                        <label>Stock</label>
                        <input 
                            type="number" 
                            name="stock" 
                            value={filters.stock} 
                            onChange={handleFilterChange} 
                            placeholder="Min stock"
                        />
                    </div>
                    <p>{filteredProducts.length} Products found</p>
                </div>

                {/* Products */}
                <div className="products">
                    {loading ? (
                        <div className="loading">Loading...</div>
                    ) : (
                        filteredProducts.map((product, index) => (
                            <div key={index} className="product-card">
                                <img src={product.image} alt={product.name} />
                                <h3>{product.name}</h3>
                                <p>Price: ${product.price}</p>
                                <p>Stock: {product.stock}</p>
                                <p>Rating: {product.rating}</p>
                                <p>Features:</p>
                                <ul>
                                    {product.features.map((feature, index) => (
                                        <li key={index}>{feature}</li>
                                    ))}
                                </ul>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default Home;
