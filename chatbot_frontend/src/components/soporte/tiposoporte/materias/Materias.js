import React, { Component } from 'react'
import { Card, Col, ListGroup, Row, Tab } from 'react-bootstrap'
import docentes from './img/docentes.jpg'


export default class Materias extends Component {
    render() {
        return (
            <div style={{ paddingTop: '15px', paddingLeft: '15px' }}>

                <Tab.Container id="list-group-tabs-example" defaultActiveKey='#docentes'>

                    <Row>

                        <Col sm={3} style={{ textAlign: 'left' }}>
                            <Card style={{ borderRadius: '3%', borderColor: '#08a5df', borderWidth: '2px', marginBottom: '5px' }}>
                                <Card.Header style={{ backgroundColor: 'white' }}>
                                    <h4 style={{ textAlign: 'center' }}>Preguntas Frecuentes sobre Materias</h4>
                                </Card.Header>
                            </Card>
                            <ListGroup>
                                <ListGroup.Item action href="#docentes">
                                    ¿Cómo puedo conseguir el número de mi docente?
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
                                            <Tab.Pane eventKey="#docentes">
                                                <Row>
                                                    <Col sm={8}>
                                                        <img style={{ height: '100%' }}
                                                            className="d-block w-100"
                                                            src={docentes}
                                                            alt="First slide"
                                                        />
                                                    </Col>
                                                    <Col sm={4}>

                                                        <a className='btn' target="_blank"
                                                            rel="noreferrer" style={{ color: 'white', backgroundColor: '#007bff', marginTop: '35%' }}
                                                            href='http://cvsc.nur.edu/my/' >
                                                            Ver Mis Materias
                                                        </a>
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
