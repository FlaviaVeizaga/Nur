import React, { Component } from 'react'
import { Badge, Card, Col, Row } from 'react-bootstrap'
import rep from '../img/reglamentos/rep2018.jpg'
import risdcfd2018 from '../img/reglamentos/risdcfd2018.jpg'
import click from '../img/reglamentos/pinch-easy.svg'


export default class ReglamentoEstudiantil extends Component {
    render() {
        return (
            <div style={{ height: '495px', border: "solid", borderColor: '#08A5DF', borderRadius: '10px', 
            paddingTop:'25px' }}>
                <Row>
                    <Col sm={6}>
                        <Row>
                            <Col sm={5} style={{
                                display: 'flex',
                                width: '100%', paddingLeft: '30px', paddingRight: '1px',
                                marginRight: '5px', marginTop: '40px', border: 'none', backgroundColor: 'none'
                            }}>

                                <h5 style={{ color: 'white', backgroundColor: '#08A5DF', padding: '10px 2px',
                                 borderRadius: '5px', height: '15%' }}>Reglamento Pre-grado </h5>
                                <img src={click} alt='->' style={{ height: '50px', marginLeft:'10px' }} />
                            </Col>


                            <Col sm={4} style={{ height: '490px', marginLeft: '0px', paddingLeft: '0px' }}>
                                <a href='http://nzf.dgg.mybluehost.me/reglamentos/1reglamentoestudiantilpregrado/mobile/'
                                    target="_blank">
                                    <img style={{ height: '80%', width: '800' }}
                                        src={rep}
                                        alt="Reglamento estudiantil pregrado"
                                    />
                                </a>
                            </Col>

                        </Row>

                    </Col>
                    <Col sm={6} >

                        <Row>
                            <Col sm={6} style={{
                                display: 'flex',
                                width: '100%', paddingLeft: '40px', paddingRight: '1px',
                                marginRight: '5px', marginTop: '40px', border: 'none', backgroundColor: 'none'
                            }}>

                                <h5 style={{
                                    color: 'white', backgroundColor: '#08A5DF',
                                    padding: '10px 2px', borderRadius: '5px', height: '25%'
                                }}>
                                    Reglamento de Interacción Social, Difusión Cultural y Fomento al Deporte
                                    </h5>
                                <img src={click} alt='->' style={{ height: '50px', marginLeft:'10px' }} />
                            </Col>


                            <Col sm={4} style={{ height: '490px', marginLeft: '0px', paddingLeft: '0px' }}>
                                <a href='http://nzf.dgg.mybluehost.me/reglamentos/4REGLAMENTODEINTERACCIONSOCIAL2018/mobile/index.html'
                                    target="_blank">
                                    <img style={{ height: '80%', width: '800' }}
                                        src={risdcfd2018}
                                        alt="Reglamento estudiantil pregrado"
                                    />
                                </a>
                            </Col>

                        </Row>

                    </Col>
                </Row>
            </div>

        )
    }
}
