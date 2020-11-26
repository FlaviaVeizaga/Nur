import React, { Component } from 'react'
import { Card, Col, ListGroup, Row, Tab } from 'react-bootstrap'
import rep from '../img/reglamentos/rep2018.jpg'
import risdcfd2018 from '../img/reglamentos/risdcfd2018.jpg'


export default class ReglamentoEstudiantil extends Component {
    render() {
        return (

            <div style={{ paddingTop: '15px', paddingLeft: '15px', }}>
                <Tab.Container id="list-group-tabs-example" defaultActiveKey="#Pre-grado">
                    <Row>
                        <Col sm={3} style ={{textAlign:'left'}}>
                            <ListGroup>
                                <ListGroup.Item action href="#Pre-grado">
                                    Reglamento Pre-grado
                                </ListGroup.Item>
                                <ListGroup.Item action href="#Socila%y%deporte">
                                    Reglamento de Interacción Social, Difusión Cultural y Fomento al Deporte
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                        <Col sm ={3} style={{ marginRight: '15px' }}>
                            <Tab.Content>
                                <Tab.Pane eventKey="#Pre-grado">
                                    <Card style={{ textAlign: 'left', borderRadius: '2%', width:'250px'  }}>
                                        <Col style={{ height: '390px', margin: '0px', padding: '0px'}}>
                                            <a href='http://nzf.dgg.mybluehost.me/reglamentos/1reglamentoestudiantilpregrado/mobile/'
                                                target="_blank" rel="noreferrer">
                                                <img style={{ height: '100%' }}
                                                    src={rep}
                                                    alt="Reglamento estudiantil pregrado"
                                                />
                                            </a>
                                        </Col>

                                    </Card>
                                </Tab.Pane>
                                <Tab.Pane eventKey="#Socila%y%deporte">
                                <Card style={{ textAlign: 'left', borderRadius: '2%', width:'250px'  }}>
                                        <Col style={{ height: '390px', margin: '0px', padding: '0px'}}>
                                            <a href='http://nzf.dgg.mybluehost.me/reglamentos/4REGLAMENTODEINTERACCIONSOCIAL2018/mobile/index.html'
                                                target="_blank" rel="noreferrer">
                                                <img style={{ height: '100%' }}
                                                    src={risdcfd2018}
                                                    alt="Reglamento estudiantil pregrado"
                                                />
                                            </a>
                                        </Col>
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
