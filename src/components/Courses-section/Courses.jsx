import React from "react";
import { Container, Row, Col } from "reactstrap";
import courseImg1 from "../../assests/images/web-design.png";
import courseImg2 from "../../assests/images/graphics-design.png";
import courseImg3 from "../../assests/images/ui-ux.png";
import "./courses.css";
import CourseCard from "./CourseCard";

const coursesData = [
  {
    id: "01",
    title: "HTML and CSS Fundamentals courses for Beginners",
    lesson: 10,
    students: 18,
    rating: 8.2,
    imgUrl: courseImg1,
  },

  {
    id: "02",
    title: "Mastering Photoshop: Digital Art and Image Editing",
    lesson: 20,
    students: 11,
    rating: 6.5,
    imgUrl: courseImg2,
  },

  {
    id: "03",
    title: "Introduction to UI/UX Design Principles, Design Thinking and User Approach.",
    lesson: 15,
    students: 13,
    rating: 7.3,
    imgUrl: courseImg3,
  },
];

const Courses = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <div className="course__top d-flex justify-content-between align-items-center">
              <div className="course__top__left w-50">
                <h2>Our Popular Courses</h2>
                <p>
                Discover a world of knowledge and growth through our popular courses.These courses have been carefully designed to provide you with valuable insights, hands-on experiences, and the skills needed to succeed in your chosen field.
                </p>
              </div>

              <div className="w-50 text-end">
                <button className="btn">See All</button>
              </div>
            </div>
          </Col>
          {coursesData.map((item) => (
            <Col lg="4" md="6" sm="6">
              <CourseCard key={item.id} item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Courses;
