import React from 'react'
import img from '../backend/images/background.jpg'
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
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
   
    
    </div>
  
</div>
  )
}

export default Caraousel
