import { useState } from "react";
import CakeContainer from "../components/CakeContainer";
import { teaLoaf } from "../components/Cakes";
import { victoraSponge } from "../components/Cakes";
import { carrotCake } from "../components/Cakes";
import './BakeryContainer.css';

const BakeryContainer = () => {

    // const [victoraSponge, setVictoriaSponge] = useState(teaLoaf)
    // const [teaLoaf, setTeaLoaf] = useState(victoraSponge)
    // const [carrotCake, setCarrotCake] = useState(carrotCake)

    const cakes = [teaLoaf, victoraSponge, carrotCake]
    const averageRating = cakes.reduce((rating, cake)=>{ return rating+=(cake.rating)/cakes.length},0)
    cakes.forEach(cake => cake.numberSold = 0)

    // const cakeEarnings = cakes.reduce((total, cake)=> {total += cake.price*cake.numberSold},0)

    const [earnings, setEarnings] = useState(0) 
    const incrementEarnings = (cake)=>{setEarnings(earnings + cake.price)}

    return ( 
        <>
        <h1>BNTA BAKERY</h1>
        <p>Average rating: { averageRating.toFixed(1) }</p><hr/>
        <div>
            {cakes.map((cake) => <><CakeContainer cake = {cake} onButtonClick = {incrementEarnings} /><hr/></>)}
        </div>
        {/* <hr />
        <CakeContainer cake = {victoraSponge} onButtonClick = {incrementEarnings} />
        <hr />
        <CakeContainer cake = {teaLoaf} onButtonClick = {incrementEarnings} />
        <hr />
        <CakeContainer cake = {carrotCake} onButtonClick = {incrementEarnings}/> */}
        <p>Total earnings: £{earnings}</p>
        </>
    );
}

export default BakeryContainer;