import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaUser, FaEnvelope, FaPen, FaCommentDots } from "react-icons/fa";
import "./Contact.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
        AOS.init({
          duration: 1100,
          once: true,
        });
      }, []);
  
  return (
    <section className="contact-section" id="Contact">
      <Container>
        <h2 className="contact-title" data-aos="fade-down"
            data-aos-duration="1200">Contact Me</h2>

        <Row className="justify-content-center">
          <Col lg={7} md={9}>
            <div className="contact-card" data-aos="fade-up"
            data-aos-delay="200">
              <Form>
                <div className="input-box" data-aos="fade-down" data-aos-delay="300">
                  <FaUser className="input-icon" />
                  <Form.Control type="text" placeholder="Your Name" />
                </div>

                <div className="input-box"data-aos="fade-down"   data-aos-delay="600">
                  <FaEnvelope className="input-icon" />
                  <Form.Control type="email" placeholder="Your Email" />
                </div>

                <div className="input-box" data-aos="fade-down"   data-aos-delay="900">
                  <FaPen className="input-icon" />
                  <Form.Control type="text" placeholder="Subject" />
                </div>

                <div className="input-box textarea" data-aos="fade-down"   data-aos-delay="1100">
                  <FaCommentDots className="input-icon" />
                  <Form.Control as="textarea" rows={4} placeholder="Your Message" />
                </div>

                <Button
                  className="send-btn"
                   data-aos="fade-down"  
                    data-aos-delay="1000"
                  onClick={(e) => {
                    e.preventDefault();
                    e.target.closest("form").reset();
                  }}
                >
                  Send Message
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
