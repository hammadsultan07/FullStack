import React from 'react'
import Cards from '../components/Cards';
import data from '../backend/Data';
import { useState } from 'react';
const Binge = () => {
 
  const [foodState, setFoodState] = useState("");
  function recommendSection(e) { 
      parseInt({foodState}-1);
      console.log(data.products[foodState])
      const[id,img,title,desc,price]=data.products[foodState-1]
      return (
        <Cards img={img} title={title} desc={desc} price={price} id={id} />
    )
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
      <button onClick={()=>{recommendSection()}}>Submit</button>
    </div>
  )

}
export default Binge
