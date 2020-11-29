import React, { Component } from 'react'
import { Card, Col, ListGroup, Row, Tab } from 'react-bootstrap'
import deuda from './img/deudas.jpg'
import wa from '../../../../img/whatsapp.svg'
import email from './../../img/email.svg'

export default class Notass extends Component {
    render() {
        return (
            <div style={{ paddingTop: '15px', paddingLeft: '15px' }}>

                <Tab.Container id="list-group-tabs-example" defaultActiveKey='#planesdepago'>

                    <Row>

                        <Col sm={3} style={{ textAlign: 'left' }}>
                            <Card style={{ borderRadius: '3%', borderColor: '#08a5df', borderWidth: '2px', marginBottom: '5px' }}>
                                <Card.Header style={{ backgroundColor: 'white' }}>
                                    <h4 style={{ textAlign: 'center' }}>Preguntas Frecuentes sobre Pagos o Deudas</h4>
                                </Card.Header>
                            </Card>
                            <ListGroup>
                                <ListGroup.Item action href="#planesdepago">
                                    ¿Cuál es el número de la persona encargada de los pagos?
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
                                            <Tab.Pane eventKey="#planesdepago">
                                                <Row>
                                                    <Col sm={8}>
                                                        <img
                                                            className="d-block w-100"
                                                            src={deuda}
                                                            alt="Third slide" />
                                                    </Col>
                                                    <Col sm={4}>
                                                        <a className='btn' target="_blank"
                                                            rel="noreferrer" style={{ color: 'white', backgroundColor: '#007bff', marginTop: '15%' }}
                                                            href='https://wa.link/9ywc2z' >Planes de Pago whatsapp  <img src={wa} alt='wa'
                                                                style={{ height: '30px', background: 'white', borderRadius: '100%' }} />
                                                        </a>

                                                        <a className='btn' target="_blank"
                                                            rel="noreferrer" style={{ color: 'white', backgroundColor: '#007bff', marginTop: '10%' }}
                                                            href='mailto:nvirhuez@nur.edu'>
                                                            Plane de Pago correo electronico  <img src={email} alt='email'
                                                                style={{ height: '20px', background: 'white', borderRadius: '1%' }} /></a>

                                                        <a className='btn' target="_blank"
                                                            rel="noreferrer" style={{ color: 'white', backgroundColor: '#007bff', marginTop: '25%' }}
                                                            href='https://wa.link/rx6ot4' >Plataforma virtual whatsapp  <img src={wa} alt='wa'
                                                                style={{ height: '30px', background: 'white', borderRadius: '100%' }} />
                                                        </a>

                                                        <a className='btn' target="_blank"
                                                            rel="noreferrer" style={{ color: 'white', backgroundColor: '#007bff', marginTop: '10%' }}
                                                            href='mailto:plataformavirtual@nur.edu'>
                                                           Plataforma virutal correo electronico  <img src={email} alt='email'
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
