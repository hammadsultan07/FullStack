import React from 'react'
import Cards from '../components/Cards';
import data from '../backend/Data';
import { useState } from 'react';
const Binge = () => {
  const [foodState, setFoodState] = useState("");

  const recommendSection = () => {
    data.products.map((item, index) => {
      console.log("sfsf");
      return (<div className="d-flex justify-content-between py-5"><h1>we recommend</h1>
        <Cards img={item.img} title={item.title} desc={item.desc} price={item.price} item={item} key={index} />
      </div>)
    })
  }

  return (
    <div className='container pt-5'>
      <select className='custom-select' onChange={(e) => {
        const selectedSeries = e.target.value;
        setFoodState(selectedSeries)
      }}>
        <option value="1">Breaking bad</option>
        <option value="2">Stranger things</option>
        <option value="3">ALice</option>
        <option value="4">Kissing booth</option>
        <option value="5">Euphoria</option>
        <option value="6">Brea</option>
        <option value="7">Bread</option>
        <option value="8">Brng bad</option>
      </select>
      <button onClick={recommendSection}>Submit</button>
      <br />
      {foodState}
    </div>
  )

}
export default Binge
