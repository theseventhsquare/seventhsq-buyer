import { fontFamily } from "@mui/system";
import CommingSoonImg from "../../images/Buyer-Landing-page.png"

import axios from 'axios';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
function FirstLook() {

  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Submit the form data to backend API here


    try {
      const response = await axios.post('https://api.seventhsq.com/subscribe/', { email });
      console.log(response.data);
      // TODO: Handle successful submission
    } catch (error) {
      console.error(error);
      // TODO: Handle error
    }

    setIsSubmitted(true);
    setEmail('');
  };


  function handleButtonClick() {
    window.open('https://seller.seventhsq.com', '_blank');
  }
  return (
    <div className="container " style={{ backgroundColor: "#F8F8F8" }}>

      <Helmet>
        <title>Seventh Square | E-Commerce Marketplace for Building Materials & Home Improvement products in India</title>
        {/* The best website for buying Construction material */}
        <meta name="description" content="Shop for Building Material & Home Improvement Products online with us!" />
      </Helmet>
      <div className="row  col-lg-12 col-12"  >
        <div className="col-md-6 col-lg-6">
          <img className="mt-5 ml-5" style={{ width: "83%" }} src={CommingSoonImg} alt="A coming soon graphic" />
        </div>


        <div
          className="col-md-6 col-lg-6 pr-lg-0 mr-lg-0 "
          style={{ marginTop: "140px" }}
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
      <div className="row col-md-12" style={{ backgroundColor: "#F8F8F8" }}>
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
              Get Notified!
            </button>

          </div>
        </form>
        <div style={{

          marginTop: "10px",
          fontSize: "16px",
          fontFamily: "Arial",
          textTransform: "none"
        }}>
          {isSubmitted && (
            <p style={{
              color: "green",
              marginLeft: "500px",
            }}>Thank you for submitting the form!</p>
          )}
        </div>
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
          <span onClick={handleButtonClick} style={{ backgroundColor: "#F8F8F8", color: "black", marginTop: "-5px", border: "none", padding: "5px 10px", borderRadius: "5px", textDecoration: "none", cursor: "pointer" }}>
            seller.seventhsq.com
          </span>
        </h3>

      </div>
    </div>
  );
}

export default FirstLook;
