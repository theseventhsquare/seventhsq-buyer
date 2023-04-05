import { fontFamily } from "@mui/system";

import axios from 'axios';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet'; 
function FirstLook() {
  
  const [email, setEmail] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (window.confirm('Are you sure you want to submit this form?')) {
      // Submit the form data to backend API here
  
   
    try {
      const response = await axios.post('https://api.seventhsq.com/subscribe/', { email });
      console.log(response.data);
      // TODO: Handle successful submission
    } catch (error) {
      console.error(error);
      // TODO: Handle error
    }
  }
  setEmail('');
};


  function handleButtonClick() {
    window.open('https://seller.seventhsq.com', '_blank');
    }
  return (
    <div style={{ backgroundColor:"#F8F8F8"}}>
      
    <Helmet>
    <title>Seventh Square | E-Commerce Marketplace for Building Materials & Home Improvement products in India</title>
    {/* The best website for buying Construction material */}
    <meta name="description" content="Shop for Building Material & Home Improvement Products online with us!" />
  </Helmet>
      <div className="container row ml-5 "  >
        <div className="col-md-6">
          <img className="mt-5 ml-5"
            style={{ width: "83%" }}
            src="https://www.linkpicture.com/q/Buyer-Landing-page.png">
          </img>
        </div>

        <div
          className="col-md-6"
          style={{ justifyContent: "center", marginTop: "140px" }}
        >
          <h1
            style={{
              fontWeight: "700",
              fontSize: "56px",
              fontFamily: "crimson text ",
            }}
          >
            COMING SOON!
          </h1>
          <p
            style={{
              fontSize: "28px",
              fontWeight: "500",
              fontFamily: "Arial ",
            }}
          >
            {" "}
            Shop for Building Material & Home <br></br>Improvement Products
            online with us!
          </p>
        </div>
      </div>
      <div className="row col-md-12" style={{ backgroundColor:"#F8F8F8"}}>
        <h1
          style={{
            justifyContent: "center",
            display: "flex",
            textAlign: "justify",
            fontFamily: "Arial",
          }}
        >
          {" "}
          Get Alerted on Launch and access{" "}
        </h1>
        <h1
          style={{
            justifyContent: "center",
            display: "flex",
            textAlign: "justify",
            fontFamily: "Arial",
          }}
        >
          exciting launch offers!
        </h1>

     
      <form onSubmit={handleSubmit}>
      <div className="row">
        <input
          type="email"
          class="form-control"
          value={email}
          name={email}
          placeholder="Enter Email"
          aria-label="Search Your Product"
          aria-describedby="button-addon2"
          onChange={(e) => setEmail(e.target.value)}
          
          style={{
            width: "35%",
            justifyContent: "center",
            display: "flex",
            textAlign: "justify",
            marginLeft: "28%",
            marginTop: "11px",
            fontSize: "16px",
            fontFamily: "Arial",
          }}
        />
      <button
          className="btn btn-dark"
          type="submit"
          style={{
            width: "143px",
            height: "34px",
            marginTop: "10px",
            fontSize: "16px",
            fontFamily: "Arial",
            textTransform: "none" 
          }}
        >
          Get Notified.!
        </button>

      </div>
    </form>
    <h3
    style={{
      justifyContent: "center",
      display: "flex",
      textAlign: "justify",
      marginTop: "30px",
      fontFamily: "Arial",
    }}
  >
    Selling Building Materials ? Sell with us here :
    <span onClick={handleButtonClick} style={{ backgroundColor: "#F8F8F8", color: "black",marginTop:"-5px", border: "none", padding: "5px 10px", borderRadius: "5px", textDecoration: "none", cursor: "pointer" }}>
      seller.seventhsq.com
    </span>
  </h3>
  
      </div>
    </div>
  );
}

export default FirstLook;
