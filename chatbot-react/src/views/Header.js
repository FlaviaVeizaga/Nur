import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Button, Navbar } from 'react-bootstrap';
import history from '../config/history';

export default class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            logo: ''
        }
    }

    componentDidMount() {

    }


    render() {
        return (
            <dvi>




                <Container style={{
                    backgroundColor: 'white', height: '115px', width: '90%',
                    marginTop: '24px', borderTop: 'solid', borderTopColor: '#08A5DF',
                    marginLeft: 'auto', marginRight: 'auto'
                }}>
                    <Col sm={3} style={{ textAlign: 'left' }}>
                        <img style={{ maxHeight: '115px' }} src={'http://localhost:3000/img/LOGONUR.png'}
                            alt='imagen de perfil' />
                    </Col>
                </Container>

                <Navbar style={{
                    backgroundColor: '#004E94', width: '90%', height: '50px',
                    marginLeft: 'auto', marginRight: 'auto', textAlign: 'left'
                }}>

                    <a  className="btn btn-primary" style={{height:'50px', backgroundColor:'white'}}> cvsc.nur.edu</a>

                </Navbar>
            </dvi>

        )
    }
}
