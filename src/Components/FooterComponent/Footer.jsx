import React from 'react';
import {Col, Container, Row} from "reactstrap";
import './Footer.css';

const Footer = () => {
    return (
        <Container fluid={true} className='bg-dark'>
            <Row className='footerView text-center py-5'>
                <Col md='4'><p>© 2015 Shree Metal Products, All Right Reserved</p></Col>
                <Col md='4'><p>Boxes</p></Col>
                <Col md='4'><p>Info & Icon</p></Col>
            </Row>
        </Container>
    )
}

export default Footer;
