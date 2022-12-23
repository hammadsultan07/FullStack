import React from 'react'
import Cards from '../components/Cards';
import data from '../backend/Data';
const Binge = () => {
  return (
    <div>
      <form>
  <div className="form-group">
    <label for="exampleFormControlSelect1">Select the series</label>
    <select className="form-control" id="FormControlSelect1">
      <option value="1">Breaking Bad</option>
      <option value="2">Breaking Bad</option>
      <option value="3">Breaking Bad</option>
      <option value="4">Breaking Bad</option>
      <option value="5">Breaking Bad</option>
      <option value="6">Breaking Bad</option>
      <option value="7">Breaking Bad</option>
      <option value="8">Breaking Bad</option>
    </select>
  </div>
  <button type="submit" className="btn btn-primary" onSubmit={()=>Recommend()}>Submit</button>
</form>
    </div>
  )
}

function Recommend()
{
    return(<div className='container-fluid'>
    <h3 className='text-center mt-5 text-uppercase'>Shop Page</h3>
    <div className="container py-4">
        <div className="row">
            {data.products.map((item, index) => {
                return (
                    <Cards img={item.img} title={item.title} desc={item.desc} price={item.price} item={item} key={index}/>
                )
            })}
            
        </div>
    </div>
</div>);
}

export default Binge
