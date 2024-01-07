import React from 'react';

const Carousel = () => {
  return (
    <div>
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner" id='carousel'>
          <div className='carousel-caption' style={{zIndex:"10"}}>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button>
            </form>
          </div>
          <div className="carousel-item active">
            <img src="https://source.unsplash.com/random/900×700/?burger" className="d-block w-100" alt="First slide" style={{objectFit: "contain", filter: "brightness(30%)"}} />
          </div>
          <div className="carousel-item">
            <img src="https://source.unsplash.com/random/900×700/?momos" className="d-block w-100" alt="Second slide" style={{objectFit: "contain", filter: "brightness(30%)"}} />
          </div>
          <div className="carousel-item">
            <img src="https://source.unsplash.com/random/900×700/?sea" className="d-block w-100" alt="Third slide" style={{objectFit: "contain", filter: "brightness(30%)"}} />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Carousel;