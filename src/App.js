import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container, Row, Col, DropdownButton, Dropdown } from "react-bootstrap";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Container fluid className="px-4">
        <Row className="justify-content-between">
          <Col className="d-flex align-items-center">
            <h2 className="mb-0">TV Shows</h2>
            <Dropdown>
              <Dropdown.Toggle
                variant="secondary"
                id="dropdown-basic"
                className="btn btn-sm dropdown-toggle rounded-0 ml-3"
                style={{ backgroundColor: "#221f1f" }}
              >
                Genres
              </Dropdown.Toggle>

              <Dropdown.Menu className="bg-dark">
                <Dropdown.Item href="#/action-1">Comedy</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Drama</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Thriller</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
