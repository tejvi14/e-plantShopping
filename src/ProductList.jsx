import React, { useState } from 'react';
import { addItem } from './CartSlice'; // Make sure the path is correct for your project

const ProductList = () => {
  const plantsArray = [
    {
      category: "Indoor",
      plants: [
        {
          name: "Aloe Vera",
          image: "url-to-image",
          description: "An easy-to-care-for plant.",
          cost: 10
        },
      ]
    },
  ];

  const [addedToCart, setAddedToCart] = useState({});

  const handleAddToCart = (plant) => {
    addItem(plant); 
    setAddedToCart((prevState) => ({
      ...prevState,
      [plant.name]: true
    }));
  };

  return (
    <div className="product-grid">
      {plantsArray.map((category, index) => (
        <div key={index}>
          <h1><div>{category.category}</div></h1>
          <div className="product-list">
            {category.plants.map((plant, plantIndex) => (
              <div className="product-card" key={plantIndex}>
                <img className="product-image" src={plant.image} alt={plant.name} />
                <div className="product-title">{plant.name}</div>
                <div className="product-description">{plant.description}</div>
                <div className="product-cost">${plant.cost}</div>
                <button
                  className="product-button"
                  onClick={() => handleAddToCart(plant)}
                >
                  {addedToCart[plant.name] ? "Added to Cart" : "Add to Cart"}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
