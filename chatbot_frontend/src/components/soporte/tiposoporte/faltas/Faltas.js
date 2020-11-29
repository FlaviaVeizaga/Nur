import React, { Component } from 'react'
import { Card, Col, ListGroup, Row, Tab } from 'react-bootstrap'
import falta from './img/faltas.jpg'
import excedi from './img/excedifaltas.jpg'

export default class Faltas extends Component {
    render() {
        return (
            <div style={{ paddingTop: '15px', paddingLeft: '15px' }}>

                <Tab.Container id="list-group-tabs-example" defaultActiveKey='#maximo%faltas'>

                    <Row>

                        <Col sm={3} style={{ textAlign: 'left' }}>
                            <Card style={{ borderRadius: '3%', borderColor: '#08a5df', borderWidth: '2px', marginBottom: '5px' }}>
                                <Card.Header style={{ backgroundColor: 'white' }}>
                                    <h4 style={{ textAlign: 'center' }}>Preguntas Frecuentes sobre Pagos o Deudas</h4>
                                </Card.Header>
                            </Card>
                            <ListGroup>
                                <ListGroup.Item action href="#maximo%faltas">
                                    ¿Cuántas faltas puedo tener en todo el semestre?
                                    </ListGroup.Item>
                                <ListGroup.Item action href="#excedi%mis%faltas">
                                    ¿Con quién me comunico si excedí el número de faltas?
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
                                            <Tab.Pane eventKey="#maximo%faltas">
                                                <Row>
                                                    <Col sm={8}>
                                                        <img style={{ height: '100%' }}
                                                            className="d-block w-100"
                                                            src={falta}
                                                            alt="First slide"
                                                        />
                                                    </Col>
                                                    <Col sm={4}>

                                                        <a className='btn' target="_blank"
                                                            rel="noreferrer" style={{ color: 'white', backgroundColor: '#007bff', marginTop: '35%' }}
                                                            href='http://cvsc.nur.edu/pluginfile.php/38896/mod_resource/content/0/REG-01-A-07.pdf' >
                                                            Leer Reglamento Estudiantil
                                                        </a>
                                                    </Col>
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="#excedi%mis%faltas">
                                                <Row>
                                                    <Col sm={8}>
                                                        <img
                                                            className="d-block w-100"
                                                            src={excedi}
                                                            alt="Third slide" />
                                                    </Col>
                                                    <Col sm={4}>
                                                        <a className='btn' target="_blank"
                                                            rel="noreferrer" style={{ color: 'white', backgroundColor: '#007bff', marginTop: '35%' }}
                                                            href='http://cvsc.nur.edu/pluginfile.php/38896/mod_resource/content/0/REG-01-A-07.pdf' >
                                                            Leer Reglamento Estudiantil
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
