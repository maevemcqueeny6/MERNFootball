import React, {Component} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';

class Header extends Component {
    render(){
    return (
                <Navbar color="dark" dark expand="sm" className="mb5" style={{marginBottom: '2rem'}}>
            <Container>
            <NavbarBrand>Sports</NavbarBrand>
            </Container>
        </Navbar>
       
    )
}
}



export default Header;