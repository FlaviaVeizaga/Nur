import React, { Component } from 'react'
import { Card, Col, ListGroup, Row, Tab } from 'react-bootstrap'
import todo from './todo.jpg'
import ventanilla from './ventanilla.jpg'
import notas from './notas.jpg'

export default class Plataforma extends Component {
    render() {
        return (
            <div style={{ paddingTop: '15px', paddingLeft: '15px' }}>

                <Tab.Container id="list-group-tabs-example" defaultActiveKey='#oferta'>

                    <Row>

                        <Col sm={3} style={{ textAlign: 'left' }}>
                            <Card style={{ borderRadius: '3%', borderColor: '#08a5df', borderWidth: '2px', marginBottom: '5px' }}>
                                <Card.Header style={{ backgroundColor: 'white' }}>
                                    <h4 style={{ textAlign: 'center' }}>Preguntas Frecuentes sobre Plaforma Virtual</h4>
                                </Card.Header>
                            </Card>
                            <ListGroup>
                                <ListGroup.Item action href="#oferta">
                                    ¿Cómo subo mis tareas?
                                    </ListGroup.Item>
                                <ListGroup.Item action href="#oferta2">
                                    ¿Se puede subir archivos comprimidos a plataforma?
                                </ListGroup.Item>
                                <ListGroup.Item action href="#notas">
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
                                            <Tab.Pane eventKey="#oferta">
                                                <Row>
                                                    <Col sm={8}>
                                                        <img style={{ height: '100%' }}
                                                            className="d-block w-100"
                                                            src={todo}
                                                            alt="First slide"
                                                        />
                                                    </Col>
                                                    <Col sm={4}>

                                                        <a className='btn' target="_blank"
                                                            rel="noreferrer" style={{ color: 'white', backgroundColor: '#007bff', marginTop: '35%' }}
                                                            href='https://drive.google.com/file/d/1ZHLAh4bwxa8Lk9T0KlxoWemBlfsjrDbX/view' >Haz click aqui</a>
                                                        <p> para ver video tutorial</p>
                                                    </Col>
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="#oferta2">
                                                <Row>
                                                    <Col sm={8}>
                                                        <img
                                                            className="d-block w-100"
                                                            src={ventanilla}
                                                            alt="Third slide" />
                                                    </Col>
                                                    <Col sm={4}>

                                                        <a className='btn' style={{ color: 'white', backgroundColor: '#007bff', marginTop: '35%' }}
                                                            href='/Soporte/Estudiantil/Preguntas_Frecuentes/Registro' >ir al menu</a>
                                                    </Col>
                                                </Row>
                                            </Tab.Pane>

                                            <Tab.Pane eventKey="#notas">
                                                <Row>
                                                    <Col sm={8}>
                                                        <img
                                                            className="d-block w-100"
                                                            src={notas}
                                                            alt="Third slide"
                                                        />
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
