import React, { Component } from 'react'
import { Card, Col, ListGroup, Row, Tab } from 'react-bootstrap'
import subirtareas from './img/subirtareas.jpg'
import comprimido from './img/comprimido.jpg'
import password1 from './img/password.jpg'
import wa from '../../../../img/whatsapp.svg'
import email from './../../img/email.svg'

export default class Plataforma extends Component {
    render() {
        return (
            <div style={{ paddingTop: '15px', paddingLeft: '15px' }}>

                <Tab.Container id="list-group-tabs-example" defaultActiveKey='#subirtareas'>

                    <Row>

                        <Col sm={3} style={{ textAlign: 'left' }}>
                            <Card style={{ borderRadius: '3%', borderColor: '#08a5df', borderWidth: '2px', marginBottom: '5px' }}>
                                <Card.Header style={{ backgroundColor: 'white' }}>
                                    <h4 style={{ textAlign: 'center' }}>Preguntas Frecuentes sobre Plaforma Virtual</h4>
                                </Card.Header>
                            </Card>
                            <ListGroup>
                                <ListGroup.Item action href="#subirtareas">
                                    ¿Cómo subo mis tareas?
                                    </ListGroup.Item>
                                <ListGroup.Item action href="#archivo%comprimido">
                                    ¿Se puede subir archivos comprimidos a plataforma?
                                </ListGroup.Item>
                                <ListGroup.Item action href="#password">
                                    Quiero cambiar mi contraseña ¿Qué hago?
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
                                                            src={subirtareas}
                                                            alt="First slide"
                                                        />
                                                    </Col>
                                                    <Col sm={4}>
                                                        
                                                        <iframe style={{ marginTop: '35%' }}
                                                            src="https://drive.google.com/file/d/1ZHLAh4bwxa8Lk9T0KlxoWemBlfsjrDbX/preview"
                                                            allowFullScreen></iframe>
                                                            <p>video tutorial</p>
                                                    </Col>
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="#archivo%comprimido">
                                                <Row>
                                                    <Col sm={8}>
                                                        <img
                                                            className="d-block w-100"
                                                            src={comprimido}
                                                            alt="Third slide" />
                                                    </Col>
                                                    <Col sm={4}>

                                                        <a className='btn' style={{ color: 'white', backgroundColor: '#007bff', marginTop: '35%' }}
                                                            href='/Soporte/Estudiantil/Preguntas_Frecuentes/Plataforma/' >Haz click aqui</a>
                                                        <p> para ver video tutorial</p>
                                                    </Col>
                                                </Row>
                                            </Tab.Pane>

                                            <Tab.Pane eventKey="#password">
                                                <Row>
                                                    <Col sm={8}>
                                                        <img
                                                            className="d-block w-100"
                                                            src={password1}
                                                            alt="Third slide"
                                                        />
                                                    </Col>
                                                    <Col sm={4}>
                                                        <a className='btn' target="_blank"
                                                            rel="noreferrer" style={{ color: 'white', backgroundColor: '#007bff', marginTop: '35%' }}
                                                            href='https://wa.link/rx6ot4' >Escribenos al whatsapp  <img src={wa} alt='wa'
                                                                style={{ height: '30px', background: 'white', borderRadius: '100%' }} />
                                                        </a>

                                                        <a className='btn' target="_blank"
                                                            rel="noreferrer" style={{ color: 'white', backgroundColor: '#007bff', marginTop: '20%' }}
                                                            href='mailto:plataformavirtual@nur.edu'>
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
