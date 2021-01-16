import React from 'react';
import {Col, Container, Row} from "reactstrap";
import './InfoComponent.css';

const InfoComponent = () => {
    return (
        <Container fluid={true} className='bg-secondary py-5'>
            <Row>
                <Col md='6'>
                    <h4 className='infoHeads'>COMPANY PROFILE</h4>
                    <ul className='companyProfile'>
                        <li>
                            SHREE METAL PRODUCTS with a saga of strength, dedication and achievement, has established itself in manufacturing and exporting comprehensive range of superior quality ALL THREADED RODS, CLEVIS HANGER, PIPE CLAMPS, U BOLTS, ROOFING NAILS, WALL BRACKETS, TRANSFORMER LINE MATERIAL. We deliver precisely engineered products using the high grade quality raw material and progressive technology in our automatize manufacturing unit.With a clear emphasis on supplying remarkable quality products to our international customers, We also have UL certified products.
                        </li>
                        <li>
                            SHREE METAL PRODUCTS, with a saga of strength and achievement, single mindedly working towards exceeding customer satisfaction in terms of quality of and services.
                        </li>
                    </ul>
                </Col>
                <Col md='3'>
                    <h4 className='infoHeads'>
                        QUICK LINKS
                    </h4>
                    <ul>
                        <li><a href='#'>Company Profile</a></li>
                        <li><a href='#'>Products</a></li>
                        <li><a href='#'>Infrastructure</a></li>
                        <li><a href='#'>Environment Management</a></li>
                        <li><a href='#'>Quality</a></li>
                        <li><a href='#'>Contact us</a></li>
                    </ul>
                </Col>
                <Col md='3'>
                    <h4 className='infoHeads'>
                        CONTACT INFO
                    </h4>
                    <ul>
                        <li>
                            # 201/C, Surekha Chambers, Near Lal Bunglow, Opp VIP Show Room, Ameerpet, Hyderabad 500 016, Telangana, India.
                        </li>
                        <li>
                            +91 040 - 6651 41 21
                        </li>
                        <li>
                            08482-223121
                        </li>
                        <li>
                            sales@shreemetals.com
                        </li>
                    </ul>
                </Col>
            </Row>
        </Container>
    )
}

export default InfoComponent;
