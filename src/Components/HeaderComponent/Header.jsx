import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
    InputGroup,
    Input,
    InputGroupAddon,
    InputGroupText, Col
} from 'reactstrap';
import './Header.css';

const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">Company Name</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <Col xs='4'></Col>
                        <NavItem>
                            <NavLink href="/components/">Menu</NavLink>
                        </NavItem>
                        <NavItem>
                            <InputGroup>
                                <Input placeholder="search" className='searchName'/>
                                <InputGroupAddon addonType='append' className='optionsDropdown border'>
                                    <UncontrolledDropdown nav inNavbar>
                                        <DropdownToggle nav caret>
                                            Options
                                        </DropdownToggle>
                                        <DropdownMenu right>
                                            <DropdownItem>
                                                Option 1
                                            </DropdownItem>
                                            <DropdownItem>
                                                Option 2
                                            </DropdownItem>
                                            <DropdownItem divider />
                                            <DropdownItem>
                                                Reset
                                            </DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                </InputGroupAddon>
                                <InputGroupAddon addonType="append">
                                    <InputGroupText>
                                        <svg width="20" height="20" viewBox="0 0 17 18" className=""
                                             xmlns="http://www.w3.org/2000/svg">
                                            <g fill="black" fillRule="evenodd">
                                                <path className="_34RNph"
                                                      d="m11.618 9.897l4.225 4.212c.092.092.101.232.02.313l-1.465 1.46c-.081.081-.221.072-.314-.02l-4.216-4.203"/>
                                                <path className="_34RNph"
                                                      d="m6.486 10.901c-2.42 0-4.381-1.956-4.381-4.368 0-2.413 1.961-4.369 4.381-4.369 2.42 0 4.381 1.956 4.381 4.369 0 2.413-1.961 4.368-4.381 4.368m0-10.835c-3.582 0-6.486 2.895-6.486 6.467 0 3.572 2.904 6.467 6.486 6.467 3.582 0 6.486-2.895 6.486-6.467 0-3.572-2.904-6.467-6.486-6.467"/>
                                            </g>
                                        </svg>
                                    </InputGroupText>
                                </InputGroupAddon>
                            </InputGroup>
                        </NavItem>
                    </Nav>
                    <NavbarText>email@domain.com</NavbarText>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Header;
