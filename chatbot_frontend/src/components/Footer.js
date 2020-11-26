import React, { Component } from 'react'
import { Badge, Button, Col, Row } from 'react-bootstrap'
import Chatbot from 'react-chatbot-kit'
import config from '../chabot/config'
import ActionProvider from '../chabot/ActionProvider'
import MessageParser from '../chabot/MessageParser'
import inst from '../img/instagram.svg'
import fab from '../img/facebook.svg'
import tw from '../img/twitter.svg'
import yt from '../img/youtube.svg'
import wa from '../img/whatsapp.svg'
import history from '../router_config/History'


export default class Footer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            activar: true
        }
    }



    loadMessages() {
        const messages = JSON.parse(localStorage.getItem("chat_messages"));
        return messages;
    };


    render() {
        return (
            <div>
                <Row style={{ marginLeft: '0px', marginTop: '2px', marginRight: '1px' }}>

                    <div style={{ justifyContent: 'center', width: '100%', paddingTop: '10px', paddingBottom: '10px' }}  >
                        <a href='https://www.facebook.com/UniversidadNURoficial' target="_blank" rel="noreferrer" variant='none' style={{ padding: '6px 12px' }}>
                            <img width="25" height="25" style={{ marginLeft: '5px', borderRadius: '50%' }} src={fab} alt='facebook' />
                        </a>

                        <a href='https://www.instagram.com/universidadnur/' target="_blank" rel="noreferrer" variant='none' style={{ padding: '6px 12px' }}>
                            <img width="25" height="25" style={{ marginLeft: '5px', borderRadius: '25%' }} src={inst} alt='instagram' />
                        </a>

                        <a href='https://twitter.com/universidadnur' target="_blank" rel="noreferrer" variant='none' style={{ padding: '6px 12px' }}>
                            <img width="25" height="25" style={{ marginLeft: '5px', borderRadius: '100%' }} src={tw} alt='twitter' />
                        </a>

                        <a href='https://www.youtube.com/channel/UCg7_S3COOpvKoMxnf7qKmBw' target="_blank" rel="noreferrer" variant='none' style={{ padding: '6px 12px' }}>
                            <img width="25" height="25" style={{ marginLeft: '5px', borderRadius: '100%' }} src={yt} alt='youtube' />
                        </a>
                        <a href='https://api.whatsapp.com/send?phone=59162094586&text=Deseo%20Informaci%C3%B3n%20de...' target="_blank" rel="noreferrer" variant='none' style={{ padding: '6px 12px' }}>
                            <img width="25" height="25" style={{ marginLeft: '5px', borderRadius: '100%' }} src={wa} alt='whatsapp' />
                        </a>
                    </div>
                    <Col style={{ backgroundColor: '#007bff', marginLeft: '5px', marginTop: '2px', paddingBottom: '5px', borderRadius: '10px' }} sm={12}>

                        <Badge style={{ color: 'white' }}>
                            Campus Universitario: Av. Cristo Redentor 100 |
                        Tel.: +591 (3) 3363939 | soporte_tecnico@nur.edu  <br></br>
                        Santa Cruz de la Sierra - Bolivia Copyright © Nur 2020 Todos los derechos reservados.
                        </Badge>

                    </Col>
                </Row>

                <Row style={{
                    margin: '10px 0',
                    display: 'flex',
                    justifyContext: 'center',
                    position: 'fixed',
                    right: '65px',
                    bottom: '20px',
                    zIndex: '9999',
                    borderRadius: '5px', border: "solid", borderColor: '#08A5DF',

                }}>
                    <Row>
                        <Col >
                            {this.state.activar === true ||
                                <Chatbot config={config}
                                    actionProvider={ActionProvider}
                                    messageParser={MessageParser}
                                    messageHistory={this.loadMessages()
                                    }
                                />
                            }
                        </Col>
                    </Row>
                </Row>
                <Row style={{
                    margin: '10px 0',
                    display: 'flex',
                    justifyContext: 'center',
                    position: 'fixed',
                    right: '0px',
                    bottom: '20px',
                    zIndex: '9999',
                    borderRadius: '5px'
                }}>
                    <Col >
                        <Button onClick={() => {
                            this.setState({
                                activar: !this.state.activar
                            })
                        }} ><svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-chat" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 
                                .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z" />
                            </svg>
                        </Button>
                    </Col>
                </Row>

            </div>
        )
    }
}
