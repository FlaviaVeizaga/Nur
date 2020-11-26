import React, { Component } from 'react'
import { Button, Card, Carousel, Col, Row } from 'react-bootstrap'
import firstImage from '../img/saludo.jpg'
import secondImage from '../img/seguro_medico.jpeg'
import thirdImage from '../img/img3.jpg'
import FourthImage from '../img/equipo.jpg'

export default class Body extends Component {
    render() {
        return (
            <div >
                <Row>
                    <Col sm={2} style={{border:'none', backgroundColor:'none'}}>
                        <Card style={{ margin: '10px', width: '100%', background: '#08A5DF', borderRadius: '100%', borderColor:'none'}}>
                            <Card.Header style={{ textAlign: 'center', color: '#fff', borderBottom:'none'  }}>
                                <h5 style={{ textShadow: '#219ae584 1px -2px 3px' }}>Te damos<br></br> la bievenida, a la Plataforma de Soporte Técnico de la Universidad NUR</h5>
                            </Card.Header>
                        </Card>
                        <div>
                        </div>
                    </Col>
                    <Col sm={8} style={{ padding: '0 5px' }}>
                        <Carousel>
                            <Carousel.Item interval={4500}>


                                <img style={{ height: '490px', width: '800', background: '#373940' }}
                                    className="d-block w-100"
                                    src={thirdImage}
                                    alt="First slide"
                                />

                            </Carousel.Item>
                            <Carousel.Item interval={4500}>
                                <img style={{ height: '490px', width: '800', background: '#373940' }}
                                    className="d-block w-100"
                                    src={secondImage}
                                    alt="First slide"
                                />
                                <Carousel.Caption >
                                    <a className ='btn btn-info' target="_blank" rel="noreferrer" href ='https://drive.google.com/file/d/1Vmo-3ZGKGbPnxFnZg1dxhPaoCHsBQ_nE/view' 
                                    style={{ marginLeft: '25px', marginBottom: '11px', padding: '1px 5px' }}>aquí</a>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item interval={4500}>

                                    <img onClick={() => { this.setState({ activa: true }) }} style={{ height: '490px', width: '800', background: '#373940' }}
                                        className="d-block w-100"
                                        src={firstImage}
                                        alt="First slide"
                                    />
                                    <Carousel.Caption>
                                    </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item interval={4500}>

                                    <img onClick={() => { this.setState({ activa: true }) }} style={{ height: '490px', width: '800', background: '#373940' }}
                                        className="d-block w-100"
                                        src={FourthImage}
                                        alt="First slide"
                                    />
                                    <Carousel.Caption>
                                    </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                    <Col sm={2}>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    </Col>
                </Row>

            </div>
        )
    }
}
