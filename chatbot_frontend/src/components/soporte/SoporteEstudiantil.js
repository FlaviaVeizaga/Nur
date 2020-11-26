import React, { Component } from 'react'
import { Card, Col, ListGroup, Nav, Row, Tab } from 'react-bootstrap'
import link from './img/link.svg'

export default class SoporteEstudiantil extends Component {

    render() {
        return (
            <div style={{ paddingTop: '15px', paddingLeft: '15px', }}>
                <Tab.Container id="list-group-tabs-example" defaultActiveKey="#Documentos%Importantes">
                    <Row>
                        <Col sm={3} style={{ textAlign: 'left' }}>
                            <ListGroup>
                                <ListGroup.Item action href="#Documentos%Importantes">
                                    Documentos Importantes
                                </ListGroup.Item>
                                <ListGroup.Item action href="#Preguntas%Frecuentes">
                                    Preguntas Frecuentes
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                        <Col style={{ marginRight: '15px' }}>
                            <Tab.Content>
                                <Tab.Pane eventKey="#Documentos%Importantes">
                                    <Card style={{ textAlign: 'left', borderRadius: '2%' }}>
                                        <ul style={{ paddingLeft: '5px' }}>
                                            <li style={{ listStyle: 'none', marginTop: '10px', marginBottom: '50px', textAlign: 'left' }}>
                                                <a href='http://cvsc.nur.edu/pluginfile.php/38896/mod_resource/content/0/REG-01-A-07.pdf'
                                                    className='btn' target="_blank" rel="noreferrer">
                                                    <img style={{ height: '20px', marginRight: '10px' }} src={link} alt='link' />
                                                    Informacion General
                                                </a>
                                            </li>
                                            <li style={{ listStyle: 'none', marginTop: '15px', marginBottom: '50px', textAlign: 'left' }}>
                                                <a href='http://cvsc.nur.edu/mod/resource/view.php?id=29699'
                                                    className='btn' target="_blank" rel="noreferrer">
                                                    <img style={{ height: '20px', marginRight: '10px' }} src={link} alt='link' />
                                                    Fecha de Retiros, adicione y cambios  de Materia 2-2020
                                                </a>
                                            </li>
                                            <li style={{ listStyle: 'none', marginTop: '15px', marginBottom: '50px', textAlign: 'left' }}>
                                                <a href='http://cvsc.nur.edu/pluginfile.php/46674/mod_resource/content/0/2020%20Manual%20Uso%20de%20Plataforma%20para%20Estudiantes%20de%20Pregrado.pdf'
                                                    className='btn' target="_blank" rel="noreferrer">
                                                    <img style={{ height: '20px', marginRight: '10px' }} src={link} alt='link' />
                                                    Manual Uso de Plataforma para Estudiantes de Pregrado 2020
                                                </a>

                                            </li>
                                            <li style={{ listStyle: 'none', marginTop: '15px', marginBottom: '50px', textAlign: 'left' }}>
                                                <a href='http://cvsc.nur.edu/pluginfile.php/60919/mod_resource/content/0/EVALUACI%C3%93N%20DOCENTE%20II%20-%20CARTA%20ESTUDIANTE.pdf'
                                                    className='btn' target="_blank" rel="noreferrer">
                                                    <img style={{ height: '20px', marginRight: '10px' }} src={link} alt='link' />
                                                    Evaluacion Docente II - Carta Estudiante
                                                </a>
                                            </li>
                                            <li style={{ listStyle: 'none', marginTop: '15px', marginBottom: '10px', textAlign: 'left' }}>
                                                <a href='https://drive.google.com/file/d/1Vmo-3ZGKGbPnxFnZg1dxhPaoCHsBQ_nE/view'
                                                    className='btn' target="_blank" rel="noreferrer">
                                                    <img style={{ height: '20px', marginRight: '10px' }} src={link} alt='link' />
                                                    Seguro Medico
                                                </a>
                                            </li>
                                        </ul>
                                    </Card>
                                </Tab.Pane>
                                <Tab.Pane eventKey="#Preguntas%Frecuentes">
                                    <Card style={{ textAlign: 'left', borderRadius: '2%' }}>
                                        <Tab.Container id="left-tabs-example" defaultActiveKey="Registro">
                                            <Row>
                                                <Col sm={3} style={{ paddingLeft: '25px' }}>
                                                    <Nav variant="pills" className="flex-column">
                                                        <Nav.Item>
                                                            <Nav.Link eventKey="Registro">Registro</Nav.Link>
                                                        </Nav.Item>
                                                        <Nav.Item>
                                                            <Nav.Link eventKey="Pagos">Pagos</Nav.Link>
                                                        </Nav.Item>
                                                        <Nav.Item>
                                                            <Nav.Link eventKey="Faltas">Faltas</Nav.Link>
                                                        </Nav.Item>
                                                        <Nav.Item>
                                                            <Nav.Link eventKey="Notas">Notas</Nav.Link>
                                                        </Nav.Item>
                                                        <Nav.Item>
                                                            <Nav.Link eventKey="Plataforma%virtual">Plataforma Virtual</Nav.Link>
                                                        </Nav.Item>
                                                        <Nav.Item>
                                                            <Nav.Link eventKey="Clases%virtuales">Clases Virturales</Nav.Link>
                                                        </Nav.Item>
                                                        <Nav.Item>
                                                            <Nav.Link eventKey="Materias">Materias</Nav.Link>
                                                        </Nav.Item>

                                                    </Nav>
                                                </Col>
                                                <Col sm={9}>
                                                    <Tab.Content>
                                                        <Tab.Pane eventKey="Registro">
                                                            <ul>
                                                                <li >
                                                                    <h6>
                                                                        Como puedo ver mi oferta de materia?
                                                                    </h6>
                                                                </li>
                                                                <li>
                                                                    <h6>
                                                                        Con quien puedo comunicarme para ver mi oferta de materias?
                                                                </h6>
                                                                </li>
                                                                <li>
                                                                    <h6>
                                                                        Necesito ver el pensum de mi carrera, con quien puedo comunicarme?
                                                                    </h6>
                                                                </li>
                                                            </ul>
                                                        </Tab.Pane>
                                                        <Tab.Pane eventKey="Pagos">
                                                            <ul>
                                                                <li>
                                                                    Como puedo ver mi oferta de materia?
                                                                </li>
                                                                <li>
                                                                    Con quien puedo comunicarme para ver mi oferta de materias?
                                                                </li>
                                                                <li>
                                                                    Necesito ver el pensum de mi carrera, con quien puedo comunicarme?
                                                                </li>
                                                            </ul>
                                                        </Tab.Pane>
                                                        <Tab.Pane eventKey="Faltas">
                                                            <ul>
                                                                <li>
                                                                    Como puedo ver mi oferta de materia?
                                                                </li>
                                                                <li>
                                                                    Con quien puedo comunicarme para ver mi oferta de materias?
                                                                </li>
                                                                <li>
                                                                    Necesito ver el pensum de mi carrera, con quien puedo comunicarme?
                                                                </li>
                                                            </ul>
                                                        </Tab.Pane>
                                                        <Tab.Pane eventKey="Notas">
                                                            <ul>
                                                                <li>
                                                                    Como puedo ver mi oferta de materia?
                                                                </li>
                                                                <li>
                                                                    Con quien puedo comunicarme para ver mi oferta de materias?
                                                                </li>
                                                                <li>
                                                                    Necesito ver el pensum de mi carrera, con quien puedo comunicarme?
                                                                </li>
                                                            </ul>
                                                        </Tab.Pane>
                                                        <Tab.Pane eventKey="Plataforma%virtual">
                                                            <ul>
                                                                <li>
                                                                    Como puedo ver mi oferta de materia?
                                                                </li>
                                                                <li>
                                                                    Con quien puedo comunicarme para ver mi oferta de materias?
                                                                </li>
                                                                <li>
                                                                    Necesito ver el pensum de mi carrera, con quien puedo comunicarme?
                                                                </li>
                                                            </ul>
                                                        </Tab.Pane>
                                                        <Tab.Pane eventKey="Clases%virtuales">
                                                            <ul>
                                                                <li>
                                                                    Como puedo ver mi oferta de materia?
                                                                </li>
                                                                <li>
                                                                    Con quien puedo comunicarme para ver mi oferta de materias?
                                                                </li>
                                                                <li>
                                                                    Necesito ver el pensum de mi carrera, con quien puedo comunicarme?
                                                                </li>
                                                            </ul>
                                                        </Tab.Pane>
                                                        <Tab.Pane eventKey="Materias">
                                                            <ul>
                                                                <li>
                                                                    Como puedo ver mi oferta de materia?
                                                                </li>
                                                                <li>
                                                                    Con quien puedo comunicarme para ver mi oferta de materias?
                                                                </li>
                                                                <li>
                                                                    Necesito ver el pensum de mi carrera, con quien puedo comunicarme?
                                                                </li>
                                                            </ul>
                                                        </Tab.Pane>
                                                    </Tab.Content>
                                                </Col>
                                            </Row>
                                        </Tab.Container>
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
