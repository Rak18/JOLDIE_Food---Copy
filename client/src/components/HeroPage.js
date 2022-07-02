import React from "react";
import "./HeroPage.css";
import HeroImage from "./../Images/HeroImage.png";
import { Link } from "react-router-dom";

function HeroPage() {
  return (
    <>
      <section class="about" id="about">
        <div class="row">
          <div class="image">
            <img src={HeroImage} alt="" />
          </div>

          <div class="content">
            <h3 className="heading_text">
             <p className="heading_p">Enjoy Your</p> 
              Delicious Food{" "}
            </h3>
            <p className="sub_text">
              We Serve Hygiene Food at a affordable Price. Our Chef are Fully
              Professional and are best at thier work
            </p>
            <p className="cursive">Take a bite from our best Deal.</p>
            <Link to='/login' className="btn">
              Explore
            </Link>
            <div class="icons-container">
              <div class="icons">
                <i class="fas fa-hamburger"></i>
                <span>20 min Serve</span>
              </div>
              <div class="icons">
                <i class="fa fa-rupee-sign"></i>
                <span>Easy payments</span>
              </div>
            </div>
            {/* <a href="#" class="btn">learn more</a> */}
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroPage;
