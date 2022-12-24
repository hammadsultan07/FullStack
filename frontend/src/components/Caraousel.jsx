import React from 'react'
import img from '../backend/images/background.png'
const Caraousel = () => {
  return (
      <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={img} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h2>PizzaTown-Series&Chill</h2>
        <p>Watching a series have some pizza's</p>
      </div>
    </div>
   
    
    </div>
  
</div>
  )
}

export default Caraousel
