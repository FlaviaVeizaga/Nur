import React, { Component } from 'react'
import { Card, Col, ListGroup, Row, Tab } from 'react-bootstrap'
import planespagos from './img/cuentaofficce.jpg'
import wa from '../../../../img/whatsapp.svg'
import email from './../../img/email.svg'

export default class ClasesVirturales extends Component {
    render() {
        return (
            <div style={{ paddingTop: '15px', paddingLeft: '15px' }}>

                <Tab.Container id="list-group-tabs-example" defaultActiveKey='#cuenta_office'>

                    <Row>

                        <Col sm={3} style={{ textAlign: 'left' }}>
                            <Card style={{ borderRadius: '3%', borderColor: '#08a5df', borderWidth: '2px', marginBottom: '5px' }}>
                                <Card.Header style={{ backgroundColor: 'white' }}>
                                    <h4 style={{ textAlign: 'center' }}>Preguntas Frecuentes sobre Clases Virtuales</h4>
                                </Card.Header>
                            </Card>
                            <ListGroup>
                                <ListGroup.Item action href="#cuenta_office">
                                    Tengo problemas con mi cuenta de office ¿Con quién me contacto?
                                    </ListGroup.Item>
                                <ListGroup.Item action href="#archivo%comprimido">
                                    No puedo acceder a mis clases virtuales¿Qué hago?
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
                                            <Tab.Pane eventKey="#cuenta_office">
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
                                            <Tab.Pane eventKey="#archivo%comprimido">
                                                <Row>
                                                    <Col sm={8}>
                                                        <iframe src="https://drive.google.com/file/d/1kYSNF0_kuF7VRWdUiJJ9Mc3Dod_bhs8x/preview"
                                                            width="640" height="350" allow="fullscreen">

                                                        </iframe>
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
