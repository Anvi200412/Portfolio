import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaGithub, FaEnvelope } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="justify-content-center text-center">
          <Col md={8}>
            <h2 className="footer-title">Anvi gadhiya</h2>

            <p className="footer-text">
              Web developer passionate about building responsive and user-friendly website.
            </p>

            <div className="footer-icons">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>

              <a href="mailto:yourmail@gmail.com">
                <FaEnvelope />
              </a>
            </div>
          </Col>
        </Row>

        <hr className="footer-line" />

        <Row className="text-center">
          <Col>
            <p className="footer-copy">
             @ 2025 Copyright <strong>Anvi gadhiya</strong> All Rights Reserved
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

