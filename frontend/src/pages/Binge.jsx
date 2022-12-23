import React from 'react'
import Cards from '../components/Cards';
import data from '../backend/Data';
import { useState } from 'react';
const Binge = () => {
  const[foodState,setFoodState]=useState("");

  return (
    <div className='container pt-5'>
      <select className='custom-select' onChange={(e)=>{
        const selectedSeries=e.target.value;
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
      <br />
      {foodState}
    </div>
  )
}
export default Binge
