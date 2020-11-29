import React, { Component } from 'react'
import { Card, Col, ListGroup, Row, Tab } from 'react-bootstrap'
import planespagos from './img/planes de pagos.jpg'
import deuda from './img/deudas.jpg'
//import password1 from './password.jpg'
import wa from '../../../../img/whatsapp.svg'
import email from './../../img/email.svg'

export default class Pagos extends Component {
    render() {
        return (
            <div style={{ paddingTop: '15px', paddingLeft: '15px' }}>

                <Tab.Container id="list-group-tabs-example" defaultActiveKey='#subirtareas'>

                    <Row>

                        <Col sm={3} style={{ textAlign: 'left' }}>
                            <Card style={{ borderRadius: '3%', borderColor: '#08a5df', borderWidth: '2px', marginBottom: '5px' }}>
                                <Card.Header style={{ backgroundColor: 'white' }}>
                                    <h4 style={{ textAlign: 'center' }}>Preguntas Frecuentes sobre Pagos o Deudas</h4>
                                </Card.Header>
                            </Card>
                            <ListGroup>
                                <ListGroup.Item action href="#subirtareas">
                                    ¿Cuál es el número de la persona encargada de los pagos?
                                    </ListGroup.Item>
                                <ListGroup.Item action href="#archivo%comprimido">
                                    Estoy bloqueado{'(a)'} por deudas ¿Qué hago?
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <a href='/Soporte/Estudiantil'>{'<<< '}Volver</a>
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                        <Col sm={9}  >
                            <Row style={{ paddingRight: '15px' }}>
                                <Col sm={12} >
                                    <Card style={{ background: 'none', border: 'none' }}>
                                        <Tab.Content  >
                                            <Tab.Pane eventKey="#subirtareas">
                                                <Row>
                                                    <Col sm={8}>
                                                        <img style={{ height: '100%' }}
                                                            className="d-block w-100"
                                                            src={planespagos}
                                                            alt="First slide"
                                                        />
                                                    </Col>
                                                    <Col sm={4}>

                                                        <a className='btn' target="_blank"
                                                            rel="noreferrer" style={{ color: 'white', backgroundColor: '#007bff', marginTop: '35%' }}
                                                            href='https://wa.link/9ywc2z' >Escribenos al whatsapp  <img src={wa} alt='wa'
                                                                style={{ height: '30px', background: 'white', borderRadius: '100%' }} />
                                                        </a>

                                                        <a className='btn' target="_blank"
                                                            rel="noreferrer" style={{ color: 'white', backgroundColor: '#007bff', marginTop: '20%' }}
                                                            href='mailto:nvirhuez@nur.edu'>
                                                            Escribenos al correo electronico  <img src={email} alt='email'
                                                                style={{ height: '20px', background: 'white', borderRadius: '1%' }} /></a>
                                                    </Col>
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="#archivo%comprimido">
                                                <Row>
                                                    <Col sm={8}>
                                                        <img
                                                            className="d-block w-100"
                                                            src={deuda}
                                                            alt="Third slide" />
                                                    </Col>
                                                    <Col sm={4}>
                                                        <a className='btn' target="_blank"
                                                            rel="noreferrer" style={{ color: 'white', backgroundColor: '#007bff', marginTop: '35%' }}
                                                            href='https://wa.link/9ywc2z' >Escribenos al whatsapp  <img src={wa} alt='wa'
                                                                style={{ height: '30px', background: 'white', borderRadius: '100%' }} />
                                                        </a>

                                                        <a className='btn' target="_blank"
                                                            rel="noreferrer" style={{ color: 'white', backgroundColor: '#007bff', marginTop: '20%' }}
                                                            href='mailto:nvirhuez@nur.edu'>
                                                            Escribenos al correo electronico  <img src={email} alt='email'
                                                                style={{ height: '20px', background: 'white', borderRadius: '1%' }} /></a>
                                                    </Col>
                                                </Row>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                </Tab.Container>
            </div>
        )
    }
}
