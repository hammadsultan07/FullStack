
import Cards from '../components/Cards';
import data from '../backend/Data';
import { useState } from 'react';
const Binge = () => {
  const[category,setCategory]=useState('')
  const [foodState, setFoodState] = useState("");
  function recommendSection(e) { 
      parseInt({foodState});
      const a=(data.products[foodState-1])
      console.log(a)
      setCategory(a);
      console.log(category);
      console.log(setCategory);
}
    
  

  return (
    <div className='container pt-5'>
      <label for="custom-select">Select a series</label>
      <br/>
      <select className='custom-select' onChange={(e) => {
        const selectedSeries = e.target.value;
        setFoodState(selectedSeries)
      }}>
        <option selected>Select a Series</option>
        <option value="1">Breaking bad</option>
        <option value="2">Stranger things</option>
        <option value="3">Wednesday</option>
        <option value="4">Moneyheist</option>
        <option value="5">Squid Game</option>
        <option value="6">Vikings</option>
        <option value="7">13 reasons why</option>
        <option value="8">The Witcher</option>
      </select>
      <button onClick={recommendSection}>Submit</button>
      <div className='container d-flex justify-content-center'>
      <Cards img={category.img} title={category.title} desc={category.desc} price={category.price} id={category.id}  />
      </div>
    </div>
    
  )

}

export default Binge
