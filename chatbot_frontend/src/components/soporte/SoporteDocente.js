import React, { Component } from 'react'
import { Badge, Card, Col, ListGroup, Nav, Row, Tab, Table } from 'react-bootstrap'
import link from './img/link.svg'
import apoyo from './img/docentes.jpg'

export default class SoporteDocente extends Component {
    render() {
        return (
            <div style={{ paddingTop: '15px', paddingLeft: '15px' }}>
                <Tab.Container id="list-group-tabs-example" defaultActiveKey="#apoyo%docentes">
                    <Row>
                        <Col sm={3} style={{ textAlign: 'left' }}>
                            <ListGroup>
                                <ListGroup.Item action href="#apoyo%docentes">
                                    Apoyo para Docentes
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <a href='/'>{'<<< '}Volver</a>
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                        <Col style={{ marginRight: '15px' }}>
                            <Tab.Content>
                                <Tab.Pane eventKey="#apoyo%docentes">
                                    <Card style={{ textAlign: 'left', borderRadius: '1%' }}>
                                        <ul style={{ paddingLeft: '35px' }}>
                                            <li style={{ listStyle: 'none', marginTop: '20px',  textAlign: 'left' }}>
                                                <a href='http://cvsc.nur.edu/enrol/index.php?id=829'
                                                    target="_blank" rel="noreferrer">
                                                    <img style={{ height: '20px', marginRight: '10px' }} src={link} alt='link' />
                                                    Link para tutoriales docentes
                                                </a>
                                            </li>
                                        </ul>

                                        <img src={apoyo} style={{ height: '42%',  width:'42%', marginLeft:'25%', marginTop:'0' }} alt='apoyo' />
                                        <p  style={{ width:'90%', marginLeft:'5%',marginTop:'10px', fontSize:'13px' }}>
                                           <strong> Nota:  </strong> 
                                            Requiere el inicio de session en la plataforma virtual para acceder a estos tutoriales.
                                        </p>


                                    </Card>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </div>
        )
    }
}
