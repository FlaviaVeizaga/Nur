import React, { Component } from 'react'
import { Button, Dropdown, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap'

export default class MenuBar extends Component {
    render() {
        return (
            <Navbar style={{
                backgroundColor: '#007bff', height: '50px', borderRadius: '10px',
                marginLeft: 'auto', marginRight: 'auto', textAlign: 'left', color: '#FFFFFF', marginBottom: '2px'
            }}>
                <Navbar.Brand style={{ color: 'white', marginRight: '30px' }} href="/" >Soporte Técnico NUR</Navbar.Brand>
                <Nav.Link style={{ color: 'white' }} href="#">
                    Guia de Uso</Nav.Link>
                <Dropdown>
                    <Dropdown.Toggle style={{ color: 'white' }} id="dropdown-basic">  Tipo Soporte  </Dropdown.Toggle>
                    <Dropdown.Menu style={{ backgroundColor: '#007bffa8' }}>
                        <Dropdown.Item href="/Soporte/Estudiantil" >Estudiantil</Dropdown.Item>
                        <NavDropdown.Divider></NavDropdown.Divider>
                        <Dropdown.Item href="http://cvsc.nur.edu/">Docente</Dropdown.Item>
                        <NavDropdown.Divider></NavDropdown.Divider>
                        <Dropdown.Item href="http://notas2.nur.edu/">Administrativo</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                    <Dropdown.Toggle style={{ color: 'white' }} id="dropdown-basic">  Contactos  </Dropdown.Toggle>
                    <Dropdown.Menu style={{ backgroundColor: '#007bffa8' }}>
                        <Dropdown.Item href="https://www.nur.edu/" >Informaciones</Dropdown.Item>
                        <NavDropdown.Divider></NavDropdown.Divider>
                        <Dropdown.Item href="http://cvsc.nur.edu/">Centro de Idiomas</Dropdown.Item>
                        <NavDropdown.Divider></NavDropdown.Divider>
                        <Dropdown.Item href="http://notas2.nur.edu/">Departamento Comercial-Pregrado</Dropdown.Item>
                        <NavDropdown.Divider></NavDropdown.Divider>
                        <Dropdown.Item href="http://notas2.nur.edu/">Departamento Comercial-Postgrado</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>



                <Dropdown>
                    <Dropdown.Toggle style={{ color: 'white' }} id="dropdown-basic"> Videos</Dropdown.Toggle>
                    <Dropdown.Menu style={{ backgroundColor: '#007bffa8' }}>
                        <Dropdown.Item href="https://www.nur.edu/" >Tutoriales</Dropdown.Item>
                        <NavDropdown.Divider></NavDropdown.Divider>
                        <Dropdown.Item href="http://cvsc.nur.edu/">Informativos</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <Dropdown>
                    <Dropdown.Toggle style={{ color: 'white' }} id="dropdown-basic">  Reglamentos </Dropdown.Toggle>
                    <Dropdown.Menu style={{ backgroundColor: '#007bffa8' }}>
                        <Dropdown.Item href="/Reglamento/Estudiantil" >Estudiantil</Dropdown.Item>
                        <NavDropdown.Divider></NavDropdown.Divider>
                        <Dropdown.Item href="http://cvsc.nur.edu/">Docente</Dropdown.Item>
                        <NavDropdown.Divider></NavDropdown.Divider>
                        <Dropdown.Item href="http://notas2.nur.edu/">Administrativo</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <Dropdown className='mr-auto'>
                    <Dropdown.Toggle style={{ color: 'white' }} id="dropdown-basic"> Paginas Principales </Dropdown.Toggle>
                    <Dropdown.Menu style={{ backgroundColor: '#007bffa8' }}>
                        <Dropdown.Item href="https://www.nur.edu/" target="_blank" rel="noreferrer">Universidad NUR</Dropdown.Item>
                        <NavDropdown.Divider></NavDropdown.Divider>
                        <Dropdown.Item href="http://cvsc.nur.edu/" target="_blank" rel="noreferrer">Plataforma Estudiantil</Dropdown.Item>
                        <NavDropdown.Divider></NavDropdown.Divider>
                        <Dropdown.Item href="http://notas2.nur.edu/" target="_blank" rel="noreferrer">Consulta de Notas</Dropdown.Item>
                        <NavDropdown.Divider></NavDropdown.Divider>
                        <Dropdown.Item href="http://unirse.nur.edu/" target="_blank" rel="noreferrer">Unirse</Dropdown.Item>
                        <NavDropdown.Divider></NavDropdown.Divider>
                        <Dropdown.Item href="http://biblio.nur.edu/" target="_blank" rel="noreferrer">Biblioteca Nur</Dropdown.Item>
                        <NavDropdown.Divider></NavDropdown.Divider>
                        <Dropdown.Item href="http://phpnur.nur.edu:8099/webcredenciales/" target="_blank" rel="noreferrer">Credenciales NUR</Dropdown.Item>
                        <NavDropdown.Divider></NavDropdown.Divider>
                        <Dropdown.Item href="http://nzf.dgg.mybluehost.me/calendario/maquetacion.php" target="_blank" rel="noreferrer">Calendario</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <Form inline>
                    <FormControl type="text" placeholder="Busqueda.." className="mr-sm-2" style={{ width: '165px' }} />
                    <Button style={{ color: 'white', borderColor: 'none' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 
                                0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73 0 5.366 4.365 9.73 9.73 9.73
                                2.034 0 3.923-.627 5.487-1.698l6.238 6.238 2.354-2.354zm-20.955-11.916c0-3.792 3.085-6.877 6.877-6.877s6.877 
                                3.085 6.877 6.877-3.085 6.877-6.877 6.877c-3.793 0-6.877-3.085-6.877-6.877z" /></svg>
                    </Button>
                </Form>
            </Navbar>
        )
    }
}
