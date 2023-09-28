import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./features.css";

const FeatureData = [
  {
    title: "Quick Learning",
    desc: "We're on a mission to revolutionize education by delivering accelerated and effective learning experiences. Time is of the essence, and we understand the importance of acquiring knowledge swiftly and efficiently.",
    icon: "ri-draft-line",
  },

  {
    title: "All Time Support",
    desc: "At Quick Learning, we understand that learning doesn't adhere to a strict schedule.  With our unwavering commitment to providing all-time support, we ensure that your learning journey is smooth, seamless, and never bound by time constraints.",
    icon: "ri-discuss-line",
  },

  {
    title: "Certification",
    desc: "Certification is more than just a piece of paper; it's a testament to your dedication and expertise. Our certification programs are designed to not only equip you with knowledge but also to provide credible recognition of your achievements.",
    icon: "ri-contacts-book-line",
  },
];

const Features = () => {
  return (
    <section>
      <Container>
        <Row>
          {FeatureData.map((item, index) => (
            <Col lg="4" md="6" key={index}>
              <div className="single__feature text-center px-4">
                <h2 className="mb-3">
                  <i class={item.icon}></i>
                </h2>
                <h6>{item.title}</h6>
                <p>{item.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Features;
