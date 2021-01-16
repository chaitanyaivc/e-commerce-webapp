import React from 'react';
import './Section.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Button, Row, ButtonGroup, Col, Container} from "reactstrap";
import CarouselComponent from "./CarouselComponent/CarouselComponent";

const Section = () => {
    return(
        <div className='buttonSection'>
            <CarouselComponent/>
            <ul className="portfolio-filter">
                <li className='active'><a className="" href="#" data-filter="*">All </a></li>
                <li><a href="#" data-filter=".brackets">Brackets</a></li>
                <li><a href="#" data-filter=".clevis">Clevis Hanger</a></li>
                <li><a href="#" data-filter=".nails">Nails</a></li>
                <li><a href="#" data-filter=".pipe">Pipe Clamps</a></li>
                <li><a href="#" data-filter=".bolts">U Bolts</a></li>
                <li><a href="#" data-filter=".rods">Threaded Rods</a></li>
                <li><a href="#" data-filter=".keb">KEB Line Material</a></li>
            </ul>
            {/*<ul>
                <li>1</li>
                <li>2</li>
            </ul>*/}
        </div>
    )
}

export default Section;
