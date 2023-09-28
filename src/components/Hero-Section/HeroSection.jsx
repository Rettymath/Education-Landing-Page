import React from "react";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../../assests/images/hero-img1.png";
import "./hero-section.css";

const HeroSection = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
              <h2 className="mb-4 hero__title">
              Learn when you can, <br /> teach when you can, <br /> share all the time. <br />Learning knows no boundaries <br />or time constraints.
              </h2>
              <p className="mb-5">
              Learning is a continuous, lifelong process that transcends traditional  <br /> limitations of time, location, or circumstances.
              It encourages individuals <br /> to embrace a mindset of continuous curiosity, exploration, and intellectual <br /> growth throughout their lives.
              </p>
            </div>
            <div className="search">
              <input type="text" placeholder="Search" />
              <button className="btn" onClick={()=>window.open("https://www.google.com")}>Search</button>
            </div>
          </Col>

          <Col lg="6" md="6">
            <img src={heroImg} alt="" className="w-100 hero__img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
