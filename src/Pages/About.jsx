import './About.css';
import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaCode, FaPaintBrush, FaBook } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    ; 
  }, []);
  return (
    <Container fluid className="about-section text-center" id="About">

      {/* Heading */}
      <Row className="justify-content-center mb-5">
        <Col xs={12}>
          <h2 className="text3" data-aos="fade-down"
            data-aos-duration="1200">About Me</h2>
          <h4 data-aos="fade-down"
            data-aos-duration="1300">
            Hi, I'm a Full-Stack Web Developer who loves turning ideas into clean, fast, and scalable web applications. <br />
            I specialize in building responsive front-ends and powerful back-ends that deliver real-world solutions. <br /><br />
            I enjoy solving real-world problems, learning new technologies,
            and continuously improving my development skills.
          </h4>
        </Col>
      </Row>

      {/* Skills Row */}
      <Row className="justify-content-center">
        <Col xs={12} md={4} className="d-flex justify-content-center mb-4">
          <div className="skill-box" data-aos="fade-up">
            <FaCode className="skill-icon" />
            <h5>Frontend Developer</h5>
            <p>HTML, CSS, JavaScript, React</p>
          </div>
        </Col>

        <Col xs={12} md={4} className="d-flex justify-content-center mb-4">
          <div className="skill-box" data-aos="fade-up" data-aos-delay="200">
            <FaPaintBrush className="skill-icon" />
            <h5>UI Design</h5>
            <p>MUI & Bootstrap Design</p>
          </div>
        </Col>

        <Col xs={12} md={4} className="d-flex justify-content-center mb-4">
          <div className="skill-box" data-aos="fade-up" data-aos-delay="400">
            <FaBook className="skill-icon" />
            <h5>Currently Learning</h5>
            <p>React, useState, Hooks</p>
          </div>
        </Col>
      </Row>

    </Container>
  );
};

export default About;


