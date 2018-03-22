import React from 'react'
import '../style/style.css'

const arraySection = ['https://s3-us-west-2.amazonaws.com/joinnus.com/user/119517/5a80151f9c9a4.jpg', 'https://s3-us-west-2.amazonaws.com/joinnus.com/user/145113/5aa6def422d37.jpg', 'https://s3-us-west-2.amazonaws.com/joinnus.com/user/14106/5aa703a7e50b3.jpg', 'https://s3-us-west-2.amazonaws.com/joinnus.com/user/13217/5a90b876563c0.jpg'];

const Section = () => (
  <div className="container-fluid">
    <div className="row">
    {arraySection.map(section => 
      <div className="col-xs-12 col-sm-6 col-md-6">
        <div className="card">
          <img className="card-img-top" src={section} key={section} alt={section}/>
          <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and
            make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
        </div>
        <br/>
      </div>)}
    </div>
  </div>
)

export default Section