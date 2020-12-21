import React from 'react';
import DishCart from '../components/Home/DishCart';


const ShoppingUI = ({route: {params: { title, readyInMinutes, servings , image }}}) => {
  
    return (
      <>
        <DishCart
            title={title}
            readyInMinutes={readyInMinutes} 
            servings={servings} 
            image={image}
        />
      </>

    );
}

export default ShoppingUI;
