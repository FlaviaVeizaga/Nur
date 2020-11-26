import React, { Component } from 'react'
import { Badge, Card, Carousel, Col, Row } from 'react-bootstrap'
import down from '../flechas/down.svg'
import todo from './todo.jpg'
import ventanilla from './ventanilla.jpg'

export default class Registro extends Component {
    render() {
        return (
            <Row  style={{ margin:'0px', paddingTop:'15px'}}>
                
                <Col  >
                    <Carousel style={{ width: '650px'}}>
                        <Carousel.Item interval={8000}>
                            <img
                                className="d-block w-100"
                                src={todo}
                                alt="First slide"
                            />
                            <Carousel.Caption>

                                <a className='btn' target="_blank" 
                                rel="noreferrer" style={{ color: 'white', backgroundColor: '#007bff' }}
                                    href='http://notas2.nur.edu/' >comenzar</a>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={8000}>
                            <img
                                className="d-block w-100"
                                src={ventanilla}
                                alt="Third slide"
                            />
                            <Carousel.Caption>
                                <p style ={{color:'#007bff'}}className ='btn'></p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={todo}
                                alt="Third slide"
                            />
                            <Carousel.Caption>
                                
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
        )
    }
}
