import React, { Component } from 'react'
import { Card, Col, ListGroup, Nav, Row, Tab, Table } from 'react-bootstrap'
import link from './img/link.svg'

export default class SoporteEstudiantil extends Component {

    render() {
        return (
            <div style={{ paddingTop: '15px', paddingLeft: '15px' }}>
                <Tab.Container id="list-group-tabs-example" defaultActiveKey="#Preguntas%Frecuentes">
                    <Row>
                        <Col sm={3} style={{ textAlign: 'left' }}>
                            <ListGroup>
                                <ListGroup.Item action href="#Preguntas%Frecuentes">
                                    Preguntas Frecuentes
                                </ListGroup.Item>
                                <ListGroup.Item action href="#Documentos%Importantes">
                                    Documentos Importantes
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <a href='/'>{'<<< '}Volver</a>
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                        <Col style={{ marginRight: '15px' }}>
                            <Tab.Content>
                                <Tab.Pane eventKey="#Documentos%Importantes">
                                    <Card style={{ textAlign: 'left', borderRadius: '1%' }}>
                                        <ul style={{ paddingLeft: '35px' }}>
                                            <li style={{ listStyle: 'none', marginTop: '20px', marginBottom: '50px', textAlign: 'left' }}>
                                                <a href='http://cvsc.nur.edu/pluginfile.php/38896/mod_resource/content/0/REG-01-A-07.pdf'
                                                    target="_blank" rel="noreferrer">
                                                    <img style={{ height: '20px', marginRight: '10px' }} src={link} alt='link' />
                                                    Informacion General
                                                </a>
                                            </li>
                                            <li style={{ listStyle: 'none', marginTop: '15px', marginBottom: '50px', textAlign: 'left' }}>
                                                <a href='http://cvsc.nur.edu/mod/resource/view.php?id=29699'
                                                    target="_blank" rel="noreferrer">
                                                    <img style={{ height: '20px', marginRight: '10px' }} src={link} alt='link' />
                                                    Fecha de Retiros, adicione y cambios  de Materia 2-2020
                                                </a>
                                            </li>
                                            <li style={{ listStyle: 'none', marginTop: '15px', marginBottom: '50px', textAlign: 'left' }}>
                                                <a href='http://cvsc.nur.edu/pluginfile.php/46674/mod_resource/content/0/2020%20Manual%20Uso%20de%20Plataforma%20para%20Estudiantes%20de%20Pregrado.pdf'
                                                    target="_blank" rel="noreferrer">
                                                    <img style={{ height: '20px', marginRight: '10px' }} src={link} alt='link' />
                                                    Manual Uso de Plataforma para Estudiantes de Pregrado 2020
                                                </a>

                                            </li>
                                            <li style={{ listStyle: 'none', marginTop: '15px', marginBottom: '50px', textAlign: 'left' }}>
                                                <a href='http://cvsc.nur.edu/pluginfile.php/60919/mod_resource/content/0/EVALUACI%C3%93N%20DOCENTE%20II%20-%20CARTA%20ESTUDIANTE.pdf'
                                                    target="_blank" rel="noreferrer">
                                                    <img style={{ height: '20px', marginRight: '10px' }} src={link} alt='link' />
                                                    Evaluacion Docente II - Carta Estudiante
                                                </a>
                                            </li>
                                            <li style={{ listStyle: 'none', marginTop: '15px', marginBottom: '10px', textAlign: 'left' }}>
                                                <a href='https://drive.google.com/file/d/1Vmo-3ZGKGbPnxFnZg1dxhPaoCHsBQ_nE/view'
                                                    target="_blank" rel="noreferrer">
                                                    <img style={{ height: '20px', marginRight: '10px' }} src={link} alt='link' />
                                                    Seguro Medico
                                                </a>
                                            </li>
                                        </ul>
                                    </Card>
                                </Tab.Pane>
                                <Tab.Pane eventKey="#Preguntas%Frecuentes">
                                    <Card style={{ textAlign: 'left', borderRadius: '2%' }}>
                                        <Tab.Container id="left-tabs-example" defaultActiveKey="Clases_Virtuales">
                                            <Row>
                                                <Col sm={3} style={{ paddingLeft: '25px' }}>
                                                    <Nav variant="pills" className="flex-column">
                                                        <Nav.Item>
                                                            <Nav.Link style={{ paddingTop: '15px', paddingBottom: '15px' }}
                                                                eventKey="Clases_Virtuales">Clases Virturales</Nav.Link>
                                                        </Nav.Item>
                                                        <Nav.Item>
                                                            <Nav.Link style={{ paddingTop: '15px', paddingBottom: '15px' }}
                                                                eventKey="Faltas">Faltas</Nav.Link>
                                                        </Nav.Item>
                                                        <Nav.Item>
                                                            <Nav.Link style={{ paddingTop: '15px', paddingBottom: '15px' }}
                                                                eventKey="Materias">Materias</Nav.Link>
                                                        </Nav.Item>
                                                        <Nav.Item>
                                                            <Nav.Link style={{ paddingTop: '15px', paddingBottom: '15px' }}
                                                                eventKey="Notas">Notas</Nav.Link>
                                                        </Nav.Item>
                                                        <Nav.Item>
                                                            <Nav.Link style={{ paddingTop: '15px', paddingBottom: '15px' }}
                                                                eventKey="Pagos">Pagos o Deudas pendientes</Nav.Link>
                                                        </Nav.Item>
                                                        <Nav.Item>
                                                            <Nav.Link style={{ paddingTop: '15px', paddingBottom: '15px' }}
                                                                eventKey="Plataforma%virtual">Plataforma Virtual</Nav.Link>
                                                        </Nav.Item>
                                                        <Nav.Item >
                                                            <Nav.Link style={{ paddingTop: '15px', paddingBottom: '15px', textDecoration: 'none' }}
                                                                eventKey="Registro">Registro de Materias</Nav.Link>
                                                        </Nav.Item>

                                                    </Nav>
                                                </Col>
                                                <Col sm={9}>
                                                    <Tab.Content>
                                                        <Tab.Pane eventKey="Clases_Virtuales">
                                                            <Table>
                                                                <tbody>
                                                                    <tr>
                                                                        <td>
                                                                            <a href='/Soporte/Estudiantil/Preguntas_Frecuentes/Clases Virtuales/'>
                                                                                Tengo problemas con mi cuenta de office ¿Con quién me contacto?
                                                                                </a>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <a href='/Soporte/Estudiantil/Preguntas_Frecuentes/Clases Virtuales/'>
                                                                                No puedo acceder a mis clases virtuales¿Qué hago?
                                                                                </a>
                                                                        </td>
                                                                    </tr>

                                                                </tbody>

                                                            </Table>
                                                        </Tab.Pane>
                                                        <Tab.Pane eventKey="Registro">
                                                            <Table>
                                                                <tbody>
                                                                    <tr>
                                                                        <td>
                                                                            <a href='/Soporte/Estudiantil/Preguntas_Frecuentes/Registro/'>
                                                                                ¿Cómo puedo ver mi oferta de materias?
                                                                                </a>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <a href='/Soporte/Estudiantil/Preguntas_Frecuentes/Registro/#oferta2'>
                                                                                ¿Con quién puedo comunicarme para ver mi oferta de materias?
                                                                                </a>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <a href='/Soporte/Estudiantil/Preguntas_Frecuentes/Registro/#pensum'>
                                                                                ¿Dónde puedo solicitar el pénsum de mi carrera?
                                                                                </a>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>

                                                            </Table>
                                                        </Tab.Pane>
                                                        <Tab.Pane eventKey="Pagos">

                                                            <Table>
                                                                <tbody>
                                                                    <tr>
                                                                        <td>
                                                                            <a href='/Soporte/Estudiantil/Preguntas_Frecuentes/Pagos/'>
                                                                                ¿Cuál es el número de la persona encargada de los pagos?
                                                                                </a>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <a href='/Soporte/Estudiantil/Preguntas_Frecuentes/Registro/#oferta2'>
                                                                                Estoy bloqueado{'(a)'} por deudas ¿Qué hago?
                                                                                </a>
                                                                        </td>
                                                                    </tr>

                                                                </tbody>

                                                            </Table>
                                                        </Tab.Pane>
                                                        <Tab.Pane eventKey="Faltas">
                                                            <Table>
                                                                <tbody>
                                                                    <tr>
                                                                        <td>
                                                                            <a href='/Soporte/Estudiantil/Preguntas_Frecuentes/Faltas/'>
                                                                                ¿Cuántas faltas puedo tener en todo el semestre?
                                                                                </a>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <a href='/Soporte/Estudiantil/Preguntas_Frecuentes/Registro/#oferta2'>
                                                                                ¿Con quién me comunico si excedí el número de faltas?
                                                                                </a>
                                                                        </td>
                                                                    </tr>

                                                                </tbody>

                                                            </Table>
                                                        </Tab.Pane>
                                                        <Tab.Pane eventKey="Notas">
                                                            <Table>
                                                                <tbody>
                                                                    <tr>
                                                                        <td>
                                                                            <a href='/Soporte/Estudiantil/Preguntas_Frecuentes/Notas/'>
                                                                                ¿Con quién me comunico si no tengo problemas para acceder a mis notas?
                                                                                </a>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>

                                                            </Table>
                                                        </Tab.Pane>
                                                        <Tab.Pane eventKey="Plataforma%virtual">
                                                            <Table>
                                                                <tbody>
                                                                    <tr>
                                                                        <td>
                                                                            <a href='/Soporte/Estudiantil/Preguntas_Frecuentes/Plataforma/'>
                                                                                ¿Cómo subo mis tareas?
                                                                                </a>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <a href='/Soporte/Estudiantil/Preguntas_Frecuentes/Plataforma/#oferta2'>
                                                                                ¿Se puede subir archivos comprimidos a plataforma?
                                                                                </a>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <a href='/Soporte/Estudiantil/Preguntas_Frecuentes/Plataforma/#oferta2'>
                                                                                Quiero cambiar mi contraseña ¿Qué hago?
                                                                                </a>
                                                                        </td>
                                                                    </tr>

                                                                </tbody>

                                                            </Table>
                                                        </Tab.Pane>
                                                        <Tab.Pane eventKey="Materias">
                                                            <Table>
                                                                <tbody>
                                                                    <tr>
                                                                        <td>
                                                                            <a href='/Soporte/Estudiantil/Preguntas_Frecuentes/Materias/'>
                                                                                ¿Cómo puedo conseguir el número de mi docente?
                                                                                </a>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>

                                                            </Table>
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
