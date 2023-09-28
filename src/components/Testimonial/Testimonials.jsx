import React from "react";
import "./testimonial.css";
import { Container, Row, Col } from "reactstrap";
import Slider from "react-slick";

import img from "../../assests/images/testimonial01.png";

const Testimonials = () => {
  const settings = {
    infinite: true,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
  };
  return (
    <section>
      <Container>
        <Row>
          <Col lg="10" md="12" className="m-auto">
            <div className="testimonial__wrapper d-flex justify-content-between align-items-center ">
              <div className="testimonial__img w-50">
                <img src={img} alt="" className="w-100" />
              </div>

              <div className="testimonial__content w-50">
                <h2 className="mb-4">Our Students Voice</h2>

                <Slider {...settings}>
                  <div>
                    <div className="single__testimonial">
                      <h6 className="mb-3 fw-bold">
                      "Unlocking My Creative Potential"
                      </h6>
                      <p>
                      Sarah, a budding graphic designer, embarked on her learning journey with Quick Learning's Graphic Design course. Through comprehensive modules and hands-on projects, she not only refined her design skills but also gained the confidence to showcase her creativity. 
                      </p>

                      <div className="student__info mt-4">
                        <h6 className="fw-bold">Sarah Thompson</h6>
                        <p>California, United State</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="single__testimonial">
                      <h6 className="mb-3 fw-bold">
                      "Fast-Track to a New Career"
                      </h6>
                      <p>
                      Mark, a marketing professional seeking a career shift, chose Quick Learning's Digital Marketing Masterclass. The practical approach and industry-relevant content empowered Mark to swiftly grasp digital marketing strategies and tools
                      </p>

                      <div className="student__info mt-4">
                        <h6 className="fw-bold"> Mark Davis</h6>
                        <p>Mumbai, India</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="single__testimonial">
                      <h6 className="mb-3 fw-bold">
                      "Empowering Learning Anytime, Anywhere"
                      </h6>
                      <p>
                      Emily, a busy mother and entrepreneur, found solace in Quick Learning's flexible learning options. The ability to access courses at her convenience allowed her to balance her roles effectively.
                      </p>

                      <div className="student__info mt-4">
                        <h6 className="fw-bold">Emily Johnson</h6>
                        <p>Ontario, Canada</p>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
