import { victoraSponge } from "./Cakes";
import { teaLoaf } from "./Cakes";
import { carrotCake } from "./Cakes";
import { useState } from "react";

const CakeContainer = ({cake, onButtonClick}) => {

    // setCake(cake)
    // console.log(cake);

    const {cakeName, ingredients, price, rating, numberSold} = cake
    const handleButtonClick = () =>{onButtonClick(cake)}

    return ( 
        <>
            <h3>{cakeName}</h3>
            <ul>Ingredient: {ingredients.map(ingredient=> <li>{ingredient}</li>)}</ul>
            <p>£{price}</p>
            <p>Rating: {rating}</p>
            {/* <p>Number sold: {numberSold} </p> */}
            <button onClick = {handleButtonClick}> Sell cake</button>
        </>

    );
}

export default CakeContainer;