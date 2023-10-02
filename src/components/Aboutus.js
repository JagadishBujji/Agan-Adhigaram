import React from 'react'
import './Aboutus.css';
// import dragon from '../images/Dragon.png';
// import boy1 from '../images/boy1.png';
// import girl1 from '../images/girl1.png';
// import butterfly from '../images/Butterfly.png';







function Aboutus() {
  return (
    <div className='about'>
      <div className='us'>
      <h1 className='aboutus'>About Us</h1>
      <h1 className='we'> we're on a mission to create a positive<br></br> global impact.</h1>
      </div>




      <div className="container">
      <div className="row">
        <div className="col1 col-12 col-lg-2">
          {/* <img src={dragon} alt="heroimg1" className="img-fluid" /> */}
        </div>
        <div className="col2 col-12 col-lg-4">
          <p  className='sethu'  style={{marginTop:"40px"}}>Sethu Ram is a first employee and co-founder of Agan Adhigaram publications.</p>
          {/* <img src={boy1} alt="heroimg1" className="img-fluid" /> */}

        </div>
        <div className="col3 col-12 col-lg-4">
          {/* <img src={girl1} alt="heroimg1" className="img-fluid" /> */}
          <p  className='ramya'  style={{marginTop:"40px"}}>Ramya is the chief believer and co-founder of Agan Adhigaram publications.</p>


        </div>
        <div className="col4  col-12 col-lg-2">
        {/* <img src={butterfly} alt="heroimg1" className="img-fluid" /> */}
        </div>
      </div>
    </div>



    </div>
  )
}

export default Aboutus
