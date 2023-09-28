import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";

import chooseImg from "../../assests/images/why-choose-us.png";
import "./choose-us.css";

import ReactPlayer from "react-player";

const ChooseUs = () => {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="choose__content">
              <h2>Why Choose Us</h2>
              <p>
              We believe that education is the key to unlocking your true potential and transforming your aspirations into reality. We are committed to empowering individuals like you with the knowledge, skills, and tools necessary to thrive in an ever-evolving world.Here's why choosing us is your pathway to success: 
              
              </p> <br />
              <ol>
              <li><h6>Comprehensive and Relevant Curriculum</h6></li>
              <li><h6>Experienced and Passionate Instructors</h6></li>
              <li><h6>Flexible Learning Options</h6></li>
              <li><h6>Collaborative Learning Environment</h6></li>
              <li><h6>Affordable and Accessible Education</h6></li>
              </ol>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="choose__img">
              {showVideo ? (
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=kNSwLWuTmvs"
                  controls
                  width="100%"
                  height="390px"
                />
              ) : (
                <img src={chooseImg} alt="" className="w-100" />
              )}

              {!showVideo && (
                <span className="play__icon">
                  <i
                    class="ri-play-circle-line"
                    onClick={() => setShowVideo(!showVideo)}
                  ></i>
                </span>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ChooseUs;
