import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaUser, FaEnvelope, FaPen, FaCommentDots } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  
  return (
    <section className="contact-section" id="Contact">
      <Container>
        <h2 className="contact-title">Contact Me</h2>

        <Row className="justify-content-center">
          <Col lg={7} md={9}>
            <div className="contact-card">
              <Form>
                <div className="input-box">
                  <FaUser className="input-icon" />
                  <Form.Control type="text" placeholder="Your Name" />
                </div>

                <div className="input-box">
                  <FaEnvelope className="input-icon" />
                  <Form.Control type="email" placeholder="Your Email" />
                </div>

                <div className="input-box">
                  <FaPen className="input-icon" />
                  <Form.Control type="text" placeholder="Subject" />
                </div>

                <div className="input-box textarea">
                  <FaCommentDots className="input-icon" />
                  <Form.Control as="textarea" rows={4} placeholder="Your Message" />
                </div>

                <Button
                  className="send-btn"
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
