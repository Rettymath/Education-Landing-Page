import React from "react";
import "./about.css";
import { Container, Row, Col } from "reactstrap";
import aboutImg from "../../assests/images/about-us.png";
import CountUp from "react-countup";
import "./about.css";

const AboutUs = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__content">
              <h2>About Us</h2>
              <p>
              EduTech is a learner-centric approach, blending engaging <br />
               content, interactive learning techniques, and cutting-edge <br />
                technology to provide an unparalleled educational experience.  <br />
                We believe in nurturing critical thinking, creativity, and lifelong <br /> learning skills.!
              </p>
              <h1>Our Achievements</h1> <br />

              <div className="about__counter">
                <div className=" d-flex gap-5 align-items-center">
                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={30} duration={1} suffix="K+" />
                    </span>

                    <p className="counter__title">Students Transformed</p>
                  </div>

                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={15} duration={1} suffix="K" />
                    </span>

                    <p className="counter__title">Completed Projects</p>
                  </div>
                </div>

                <div className=" d-flex gap-5 align-items-center">
                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={2} duration={1} suffix="M+" />
                    </span>

                    <p className="counter__title"> Hours of Learning Delivered</p>
                  </div>

                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={100} duration={1} suffix="+" />
                    </span>

                    <p className="counter__title">Collaborations Worldwided</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUs;
