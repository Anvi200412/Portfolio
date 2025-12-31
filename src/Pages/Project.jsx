import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaGithub } from "react-icons/fa";
import "./Project.css";


const Project = () => {
  return (
    <Container className="py-5" id="Project">
      <h2 className="text4">My Projects</h2>

      <Row className="g-4">
        <Col xs={12} md={6} className="d-flex">
          <Card className="project-card border-0 w-100">
            <div className="project-image1">
              <div className="project-overlay">
                <h4>Restro</h4>
                <p>Bootstrap Project</p>
                <a
                  href="https://restaurant-bootstrap-psi.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="github-icon" /></a>
              </div>
            </div>
          </Card>
        </Col>

        <Col xs={12} md={6} className="d-flex">
          <Card className="project-card border-0 w-100">
            <div
              className="project-image"
            >
              <div className="project-overlay">
                <h4>Coffee</h4>
                <p>React Bootstrap</p>
                <a
                  href="https://coffee-bootstrap-ten.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="github-icon" /></a>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
      <Row className="g-4">
        <Col xs={12} md={6} className="d-flex">
          <Card className="project-card border-0 w-100">
            <div className="project-image2">
              <div className="project-overlay">
                <h4>Printify</h4>
                <p>Mui-React Project</p>
                <a
                  href="https://mui-printify.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="github-icon" /></a>

              </div>
            </div>
          </Card>
        </Col>

        <Col xs={12} md={6} className="d-flex">
          <Card className="project-card border-0 w-100">
            <div
              className="project-image3"
            >
              <div className="project-overlay">
                <h4>WiserUniversity</h4>
                <p>React Router</p>
                <a
                  href="https://router-wiseruniversity.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="github-icon" /></a>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>

  );
};

export default Project;
