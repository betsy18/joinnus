import React from 'react'
import Item from './Item';

const Carrousel = () => (
  <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="6"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="7"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src="https://s3-us-west-2.amazonaws.com/joinnus.com/banner/14106/5aa6da61cb783.jpg" alt="First slide"/>
    </div>
    {/* <Item events={arrayEvents}/> */}
    <div className="carousel-item">
      <img className="d-block w-100" src="https://s3-us-west-2.amazonaws.com/joinnus.com/banner/14106/5ab026701c2bf.jpg" alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://s3-us-west-2.amazonaws.com/joinnus.com/banner/14106/5ab02ef876996.jpg" alt="Third slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://s3-us-west-2.amazonaws.com/joinnus.com/banner/14106/5ab1226d40299.jpg" alt="Four slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://s3-us-west-2.amazonaws.com/joinnus.com/banner/19132/5aaaa570bca23.jpg" alt="Five slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://s3-us-west-2.amazonaws.com/joinnus.com/banner/19132/5aaacd17e8bad.jpg" alt="Six slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://s3-us-west-2.amazonaws.com/joinnus.com/banner/19132/5aaaf9e88145a.jpg" alt="Seven slide"/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
);

export default Carrousel