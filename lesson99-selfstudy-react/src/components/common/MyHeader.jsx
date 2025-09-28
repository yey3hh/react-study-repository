import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/Navbar.css";

const MyHeader = () => {
    return (
        <Navbar className="bg-body-tertiary">
        <Container>
            <Navbar.Brand href="#home">
            <img
                src="/assets/react.svg"
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
            />
            </Navbar.Brand>
            {/* 네비게이션 메뉴 */}
            <Nav className="justify-content-center" activeKey="/home">
            <Nav.Item>
                <Nav.Link as={Link} to="/petStroy" eventKey="petStroy">
                펫스토리
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={Link} to="/walktogether" eventKey="walktogether">
                다함께산책
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={Link} to="/facilities" eventKey="facilities">
                동관시
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={Link} to="/event" eventKey="event">
                이벤트
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={Link} to="/cs" eventKey="cs">
                고객센터
                </Nav.Link>
            </Nav.Item>
            </Nav>

            {/* 로그인 / 회원가입 버튼 */}
            <div className="d-flex">
                <Button as={Link} to="/signup" variant="outline-dark" className="me-2 singup">
                    Sign Up
                </Button>
                <Button as={Link} to="/login" variant="warning" className="login">
                    login
                </Button>
            </div>
        </Container>
        </Navbar>
    );
};

export default MyHeader;
